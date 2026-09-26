# Traduction FR / ES du visuel « magic-orders-flow.png » (page Suppliers, classe s67-img)
import sys, glob
from locimg import Canvas, replace
NBSP, THIN = " ", " "

def P(x, y, w, h, p=4):
    return (x - p, y - p, x + w + p, y + h + p)

# (boîte, anglais, FR, ES, graisse, alignement, largeur max)
TEXT = [
    (P(150,72,52,21), "Email", "E-mail", "Correo", 600, "left", None),
    (P(1122,74,110,21), "Web portal", "Portail web", "Portal web", 600, "left", 150),
    (P(1442,73,133,18), "Other formats", "Autres formats", "Otros formatos", 600, "left", 148),
    (P(603,412,51,17), "Read", "Lire", "Leer", 600, "left", None),
    (P(774,411,99,18), "Structure", "Structurer", "Estructurar", 600, "left", 150),
    (P(991,411,85,18), "Validate", "Valider", "Validar", 600, "left", None),
    (P(478,576,184,20), "Purchase Order", "Bon de commande", "Pedido de compra", 600, "left", 290),
    (P(389,666,82,16), "Products", "Produits", "Productos", 400, "left", None),
    (P(389,712,80,21), "Quantity", "Quantité", "Cantidad", 400, "left", None),
    (P(663,759,83,21), "€ 1,248", f"1{NBSP}248{NBSP}€", f"1.248{NBSP}€", 400, "right", None),
]

def run(lang):
    cv = Canvas(glob.glob("src/*magic-orders-flow.png")[0])
    col = {"fr": 2, "es": 3}[lang]
    for it in TEXT:
        if it[col]:
            replace(cv, it[0], it[1], it[col], it[4], align=it[5], maxw=it[6])
    cv.save(f"out-magic-{lang}.png")
    for row in cv.log: print(row)

if __name__ == "__main__":
    run(sys.argv[1])
