# Traduction FR / ES du visuel « webshop-flow.png » (page Suppliers, classe s67-img)
import sys, glob
from locimg import Canvas, replace, replace_group, mask
NBSP, THIN = " ", " "   # espace insécable (avant €), espace fine (milliers)

def P(x, y, w, h, p=4):  # boîte OCR (x, y, w, h) + marge
    return (x - p, y - p, x + w + p, y + h + p)
def U(*b):               # union de boîtes OCR
    x0 = min(i[0] for i in b); y0 = min(i[1] for i in b)
    return (x0, y0, max(i[0] + i[2] for i in b) - x0, max(i[1] + i[3] for i in b) - y0)

# (boîte, anglais, FR, ES, graisse, alignement, largeur max)
TEXT = [
    # Panneau gauche : catalogue fournisseur
    (P(*U((153,70,104,27),(265,70,92,27))), "Supplier catalog", "Catalogue fournisseur", "Catálogo del proveedor", 600, "left", 309),
    (P(153,106,302,17), "Set client-specific prices and volumes", "Tarifs et volumes par client", "Precios y volúmenes por cliente", 400, "left", 309),
    (P(*U((258,199,74,24),(338,200,103,17))), "Cherry tomatoes", "Tomates cerises", "Tomates cherry", 600, "left", 204),
    (P(299,236,38,15), "Spain", "Espagne", "España", 400, "left", None),
    (P(63,375,41,13), "Client", None, "Cliente", 500, "left", None),
    (P(210,375,68,16), "Price / kg", "Prix / kg", "Precio / kg", 500, "left", None),
    (P(318,375,55,13), "Volume", None, "Volumen", 500, "left", None),
    (P(108,434,57,13), "Client A", None, "Cliente A", 500, "left", None),
    (P(108,500,57,14), "Client B", None, "Cliente B", 500, "left", None),
    (P(108,568,57,13), "Client C", None, "Cliente C", 500, "left", None),
    (P(108,637,58,14), "Client D", None, "Cliente D", 500, "left", None),
    (P(209,433,54,14), "€ 2.85", f"2,85{NBSP}€", f"2,85{NBSP}€", 600, "left", None),
    (P(209,500,54,14), "€ 2.95", f"2,95{NBSP}€", f"2,95{NBSP}€", 600, "left", None),
    (P(209,568,52,14), "€ 3.10", f"3,10{NBSP}€", f"3,10{NBSP}€", 600, "left", None),
    (P(209,637,54,14), "€ 2.70", f"2,70{NBSP}€", f"2,70{NBSP}€", 600, "left", None),
    (P(319,433,65,17), "1,000 kg", f"1{NBSP}000 kg", "1.000 kg", 400, "left", None),
    # Panneau central : webshop
    (P(*U((658,67,57,21),(721,66,114,27))), "Your webshop", "Votre webshop", "Tu webshop", 600, "left", 320),
    (P(659,104,322,17), "Fresh products, direct from our suppliers", "Produits frais en direct des fournisseurs", "Productos frescos, directos del proveedor", 400, "left", 331),
    (P(600,168,143,16), "Search products...", "Rechercher un produit…", "Buscar productos…", 400, "left", 245),
    (P(920,167,48,14), "Filters", "Filtres", "Filtros", 500, "left", None),
    (P(568,375,133,16), "Cherry tomatoes", "Tomates cerises", "Tomates cherry", 500, "left", 180),
    (P(601,399,36,14), "Spain", "Espagne", "España", 400, "left", None),
    (P(798,374,129,17), "Pineapple Queen", "Ananas Queen", "Piña Queen", 500, "left", 180),
    (P(568,669,112,13), "Avocado Hass", "Avocat Hass", "Aguacate Hass", 500, "left", 180),
    (P(601,693,36,13), "Spain", "Espagne", "España", 400, "left", None),
    (P(798,669,62,13), "Broccoli", "Brocoli", "Brócoli", 500, "left", 180),
    (P(831,693,44,11), "France", None, "Francia", 400, "left", None),
    (P(1372,175,94,14), "#SO-7842", None, None, 500, "right", None),
    # Panneau droit : commande reçue
    (P(*U((1167,70,69,22),(1244,69,104,22))), "Order received", "Commande reçue", "Pedido recibido", 600, "left", 191),
    (P(1168,109,194,16), "Directly in supplier system", "Dans le système fournisseur", "En el sistema del proveedor", 400, "left", 192, False),
    (P(1080,173,133,20), "Supplier order", "Commande fournisseur", "Pedido al proveedor", 600, "left", 255),
    (P(1081,227,73,14), "Products", "Produits", "Productos", 400, "left", None),
    (P(1080,273,113,18), "Total quantity", "Quantité totale", "Cantidad total", 400, "left", None),
    (P(1080,320,89,14), "Total value", "Valeur totale", "Valor total", 400, "left", None),
    (P(1400,320,66,15), "€ 14.45", f"14,45{NBSP}€", f"14,45{NBSP}€", 500, "right", None),
    (P(1081,367,162,18), "Requested delivery", "Livraison souhaitée", "Entrega solicitada", 400, "left", None),
    (P(1366,367,99,18), "Tue, Apr 23", "mar. 23 avr.", "mar. 23 abr.", 500, "right", None),
    (P(1163,430,115,14), "Order received", "Commande reçue", "Pedido recibido", 500, "left", None),
    (P(1163,455,86,14), "Today, 10:24", "Aujourd’hui, 10:24", "Hoy, 10:24", 400, "left", None),
    (P(1164,496,118,17), "Being prepared", "En préparation", "En preparación", 500, "left", None),
    (P(1163,568,123,17), "Out for delivery", "En cours de livraison", "En reparto", 500, "left", None),
    (P(1164,637,72,14), "Delivered", "Livrée", "Entregado", 500, "left", None),
    (P(1156,727,254,20), "Webshop orders go directly", "Les commandes webshop arrivent", "Los pedidos webshop llegan", 600, "left", 310),
    (P(1157,757,243,21), "into the supplier workflow", "directement chez le fournisseur", "directo al flujo del proveedor", 600, "left", 310),
    (P(275,283,52,14), "Active", "Actif", "Activo", 500, "center", None),
]
# Boutons et pastilles « icône + texte » : (boîte icône, boîte texte, anglais, FR, ES, graisse, centre x)
GROUPS = [
    (P(622,467,20,19,2), P(653,470,29,13), "Add", "Ajouter", "Añadir", 500, 652),
    (P(852,467,21,19,2), P(882,470,28,13), "Add", "Ajouter", "Añadir", 500, 881),
    (P(622,758,21,19,2), P(653,761,29,13), "Add", "Ajouter", "Añadir", 500, 652),
    (P(852,758,21,19,2), P(882,761,29,13), "Add", "Ajouter", "Añadir", 500, 881),
    (P(172,747,23,23,2), P(209,750,133,17), "Add client price", "Ajouter un prix client", "Añadir precio de cliente", 600, 257),
    (P(1384,84,17,17,2), P(1414,86,63,13), "Received", "Reçue", "Recibido", 500, 1431),
]
# Prix des fiches produits : (boîte €, boîte nombre, boîte /kg, nombre EN, prix FR/ES)
PRICES = [
    ((569,425,19,16), (594,427,37,14), (637,429,21,15), "2.85", "2,85"),
    ((798,425,16,16), (820,427,36,14), (862,429,21,14), "1.95", "1,95"),
    ((569,717,19,16), (594,719,37,14), (637,721,21,14), "3.20", "3,20"),
    ((798,717,16,16), (821,719,35,14), (863,722,21,14), "1.30", "1,30"),
]

def run(lang):
    cv = Canvas(glob.glob("src/*webshop-flow.png")[0])
    col = {"fr": 2, "es": 3}[lang]
    for it in TEXT:
        if it[col]:
            replace(cv, it[0], it[1], it[col], it[4], align=it[5], maxw=it[6], grow_erase=(it[7] if len(it) > 7 else True))
    for ib, tb, en, fr, es, w, cx in GROUPS:
        replace_group(cv, ib, tb, en, fr if lang == "fr" else es, w, cx)
    for eb, nb, ub, en_num, num in PRICES:
        # nombre en gras + « €» collé, puis « /kg » en gris : même taille que l'original
        box = (eb[0] - 3, min(eb[1], nb[1]) - 4, ub[0] + ub[2] + 4, max(eb[1] + eb[3], ub[1] + ub[3]) + 4)
        st_n = cv.stats(P(*nb)); st_u = cv.stats(P(*ub))
        s_n, tr_n = cv.calibrate(en_num, st_n["bb"], 700)
        s_u, tr_u = cv.calibrate("/kg", st_u["bb"], 400)
        gap = st_u["bb"][0] - st_n["bb"][2]
        cv.erase(box)
        L, T, R, B = st_n["bb"]; l, t, r, b = mask(en_num, 700, s_n, tr_n)[3]
        y = ((T - t) + (B - b)) / 2
        txt = f"{num}{NBSP}€"
        nl, nt, nr, nb2 = mask(txt, 700, s_n, tr_n)[3]
        x = eb[0] - nl
        cv.draw(txt, x, y, 700, s_n, tr_n, st_n["fg"])
        ul = mask("/kg", 400, s_u, tr_u)[3][0]
        cv.draw("/kg", x + nr + gap - ul, y, 400, s_u, tr_u, st_u["fg"])
    cv.save(f"out-webshop-{lang}.png")
    for row in cv.log: print(row)

if __name__ == "__main__":
    run(sys.argv[1])
