# Moteur de traduction d'image : efface un texte anglais et redessine sa traduction
# avec la même police (Inter), hauteur, graisse, approche (tracking), couleur et alignement.
import numpy as np, cv2
from PIL import Image, ImageDraw, ImageFont

FONTS = __import__("os").environ.get("INTER_DIR", "fonts") + "/inter-{}.ttf"  # TTF Inter (via @fontsource/inter)
_cache = {}
def font(weight, size):
    k = (weight, round(size, 3))
    if k not in _cache:
        _cache[k] = ImageFont.truetype(FONTS.format(weight), size)
    return _cache[k]

def mask(text, weight, size, track=0.0):
    """Rend le texte en niveaux de gris. Retourne (masque, ox, oy, bbox d'encre relative
    au point gauche-ligne de base) ; bbox = (l, t, r, b)."""
    f = font(weight, size)
    n = len(text)
    xs = [f.getlength(text[:i + 1]) - f.getlength(text[i]) + i * track for i in range(n)]
    width = int(xs[-1] + f.getlength(text[-1]) + 4 * size) if n else 1
    H = int(size * 2.2) + 8
    ox, oy = int(size), int(size * 1.4) + 4          # position de l'origine dans le masque
    im = Image.new("L", (width + 2 * int(size), H), 0)
    d = ImageDraw.Draw(im)
    for ch, x in zip(text, xs):
        d.text((ox + x, oy), ch, font=f, fill=255, anchor="ls")
    a = np.array(im)
    ys, xs_ = np.where(a > 12)
    bb = (xs_.min() - ox, ys.min() - oy, xs_.max() + 1 - ox, ys.max() + 1 - oy)
    return a, ox, oy, bb

class Canvas:
    def __init__(self, path):
        self.orig = np.array(Image.open(path).convert("RGBA"))
        self.work = self.orig.copy()
        self.log = []

    def stats(self, box, thr=45):
        x0, y0, x1, y1 = box
        reg = self.orig[y0:y1, x0:x1, :3].astype(int)
        ring = np.concatenate([reg[0], reg[-1], reg[:, 0], reg[:, -1]])
        bg = np.median(ring, axis=0)
        diff = np.abs(reg - bg).max(axis=2)
        ink = diff > thr
        ys, xs = np.where(ink)
        if len(xs) == 0:
            raise ValueError(f"pas d'encre dans {box}")
        bb = (x0 + xs.min(), y0 + ys.min(), x0 + xs.max() + 1, y0 + ys.max() + 1)
        strong = diff >= np.percentile(diff[ink], 75)
        fg = np.median(reg[strong], axis=0)
        return dict(bg=bg, fg=fg, bb=bb)

    def calibrate(self, en, bb, weight):
        """Taille qui redonne la largeur d'encre d'origine (approche naturelle de la police)."""
        L, T, R, B = bb
        lo, hi = 5.0, 90.0
        for _ in range(28):
            mid = (lo + hi) / 2
            l, t, r, b = mask(en, weight, mid)[3]
            if (r - l) > (R - L): hi = mid
            else: lo = mid
        return lo, 0.0

    def erase(self, box, thr=10, grow=2):
        x0, y0, x1, y1 = box
        reg = self.orig[y0:y1, x0:x1, :3].astype(int)
        ring = np.concatenate([reg[0], reg[-1], reg[:, 0], reg[:, -1]])
        bg = np.median(ring, axis=0)
        diff = np.abs(reg - bg).max(axis=2)
        m = (diff > thr).astype(np.uint8) * 255
        m = cv2.dilate(m, np.ones((2 * grow + 1, 2 * grow + 1), np.uint8))
        full = np.zeros(self.work.shape[:2], np.uint8)
        full[y0:y1, x0:x1] = m
        rgb = np.ascontiguousarray(self.work[:, :, :3])
        out = cv2.inpaint(rgb, full, 4, cv2.INPAINT_TELEA)
        self.work[y0:y1, x0:x1, :3] = out[y0:y1, x0:x1]

    def draw(self, text, x, y, weight, size, track, color):
        a, ox, oy, bb = mask(text, weight, size, track)
        # sous-pixel : on décale via la partie décimale en re-rendant avec origine fractionnaire
        fx, fy = x - np.floor(x), y - np.floor(y)
        if fx or fy:
            M = np.float32([[1, 0, fx], [0, 1, fy]])
            a = cv2.warpAffine(a, M, (a.shape[1], a.shape[0]), flags=cv2.INTER_LINEAR)
        X, Y = int(np.floor(x)) - ox, int(np.floor(y)) - oy
        H, W = self.work.shape[:2]
        xa, ya, xb, yb = max(0, X), max(0, Y), min(W, X + a.shape[1]), min(H, Y + a.shape[0])
        al = (a[ya - Y:yb - Y, xa - X:xb - X].astype(float) / 255.0)[..., None]
        dst = self.work[ya:yb, xa:xb, :3].astype(float)
        self.work[ya:yb, xa:xb, :3] = (dst * (1 - al) + np.array(color) * al).round().astype(np.uint8)

    def move(self, src_box, dx, dy=0):
        """Déplace un morceau de l'image d'origine (icône) de dx, dy (la zone d'arrivée doit être effacée avant)."""
        x0, y0, x1, y1 = src_box
        piece = self.orig[y0:y1, x0:x1].copy()
        self.work[y0 + dy:y1 + dy, x0 + dx:x1 + dx] = piece

    def save(self, path):
        Image.fromarray(self.work).save(path, optimize=True)

def replace(cv, box, en, new, weight, align="left", maxw=None, color=None, anchor=None,
            erase=True, size=None, track=None, thr=45, grow_erase=True):
    """Remplace `en` (dans `box`) par `new` avec le même style. Retourne la géométrie utilisée."""
    st = cv.stats(box, thr)
    s, tr = cv.calibrate(en, st["bb"], weight)
    if size: s = size
    if track is not None: tr = track
    L, T, R, B = st["bb"]
    l, t, r, b = mask(en, weight, s, tr)[3]
    y = ((T - t) + (B - b)) / 2                       # ligne de base alignée sur l'original
    nl, nt, nr, nb = mask(new, weight, s, tr)[3]
    if maxw and (nr - nl) > maxw:                      # trop long : on réduit légèrement
        k = maxw / (nr - nl); s *= k; tr *= k
        y0 = y; nl, nt, nr, nb = mask(new, weight, s, tr)[3]
    ax = anchor if anchor is not None else {"left": L, "right": R, "center": (L + R) / 2}[align]
    x = {"left": ax - nl, "right": ax - nr, "center": ax - (nl + nr) / 2}[align]
    if erase:
        # on déborde un peu du côté où le texte anglais pouvait être plus long (traces résiduelles)
        ext = {"left": (1, 0, 5, 0), "right": (5, 0, 1, 0), "center": (3, 0, 3, 0)}[align] if grow_erase else (0, 0, 0, 0)
        cv.erase((box[0] - ext[0], box[1] - ext[1], box[2] + ext[2], box[3] + ext[3]))
    col = color if color is not None else st["fg"]
    cv.draw(new, x, y, weight, s, tr, col)
    cv.log.append((en, new, weight, round(s, 2), round(tr, 2), [int(c) for c in col]))
    return dict(x0=x + nl, x1=x + nr, y=y, size=s, track=tr, color=col, bg=st["bg"], bb=st["bb"])

def replace_group(cv, icon_box, text_box, en, new, weight, center_x, color=None):
    """Bouton/pastille « icône + texte » centré : efface les deux, recentre l'ensemble."""
    st = cv.stats(text_box)
    s, tr = cv.calibrate(en, st["bb"], weight)
    L, T, R, B = st["bb"]
    ist = cv.stats(icon_box, 30)
    IL, IT, IR, IB = ist["bb"]
    gap = L - IR
    l, t, r, b = mask(en, weight, s, tr)[3]
    y = ((T - t) + (B - b)) / 2
    nl, nt, nr, nb = mask(new, weight, s, tr)[3]
    total = (IR - IL) + gap + (nr - nl)
    start = center_x - total / 2
    dx = int(round(start - IL))
    cv.erase(text_box); cv.erase(icon_box, thr=18, grow=2)
    pad = 2
    cv.move((IL - pad, IT - pad, IR + pad, IB + pad), dx, 0)
    x = start + (IR - IL) + gap - nl
    col = color if color is not None else st["fg"]
    cv.draw(new, x, y, weight, s, tr, col)
    cv.log.append((en, new, weight, round(s, 2), round(tr, 2), "group", dx))
