#!/usr/bin/env python3
"""
Retoque na imagem ORIGINAL, antes da grade de cor.

Duas remocoes, com metodos diferentes porque os fundos sao diferentes:

  COLETE (logo, "AgSUS", a linha ilegivel e as marcas de baixo)
    O tecido e liso, com um degrade de sombra da esquerda para a direita.
    Entao o buraco e preenchido resolvendo Laplace: cada pixel de dentro vira
    a media dos vizinhos, com a borda do buraco fixa. Isso continua o degrade
    do tecido em vez de chapar uma cor. Depois devolvo o grao do proprio
    tecido, colhido de uma area limpa do colete, senao a mancha fica de
    plastico no meio de um tecido com textura.

  ESTRELA DO GEMINI
    Fundo de agua com onda, que Laplace borraria. Aqui e clone: puxo um
    retalho de agua 118px a direita, na MESMA altura para o degrade vertical
    bater, e caso a media do retalho com a da borda do buraco.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage, sparse
from scipy.sparse.linalg import spsolve

SRC, OUT = sys.argv[1], sys.argv[2]

im = Image.open(SRC).convert("RGB")
img = np.asarray(im, np.float64) / 255.0
H, W = img.shape[:2]

# ------------------------------------------------------------------ colete --
# retangulos medidos na imagem 2390x1792, todos dentro do azul-marinho
CAIXAS = [
    (1948, 622, 2140, 800),     # cruz
    (1920, 772, 2176, 925),     # "AgSUS" + a linha ilegivel abaixo
    (1944, 1142, 2196, 1240),   # as marcas pequenas da barra
]
mask = np.zeros((H, W), bool)
for x0, y0, x1, y1 in CAIXAS:
    mask[y0:y1, x0:x1] = True

# folga de 2px para a borda do sistema cair em tecido limpo de verdade
mask = ndimage.binary_dilation(mask, iterations=2)

# A pedra e nitidamente quente, o tecido e frio. Ela sai da area preenchida e
# tambem sai da lista de vizinhos que podem servir de contorno: e o que impede
# o marrom dela de subir pelo colete.
# Só vale abaixo de y=1100, onde a pedra está. Sem esse limite o teste também
# pegaria a cruz vermelha do logo, que é quente, e ela sobreviveria à limpeza.
quente = (img[..., 0] - img[..., 2]) > 0.04
quente[:1100] = False
pedra = ndimage.binary_dilation(quente, iterations=2)
mask &= ~pedra
borda_ok = ~pedra


def laplace_fill(canal, m, borda_ok):
    """Resolve Laplace dentro de m.

    borda_ok diz quais vizinhos de fora podem servir de contorno. Onde ele e
    falso (a pedra), o vizinho e simplesmente ignorado e a diagonal encolhe:
    isso e contorno de Neumann, gradiente zero. Na pratica o tecido escorre
    liso ate a pedra sem copiar a cor dela. Foi o que resolveu o borrao: com
    Dirichlet, o marrom da pedra entrava como valor fixo e subia pelo colete.
    """
    ys, xs = np.nonzero(m)
    y0, y1, x0, x1 = ys.min() - 1, ys.max() + 2, xs.min() - 1, xs.max() + 2
    sub, msub = canal[y0:y1, x0:x1].copy(), m[y0:y1, x0:x1]
    bsub = borda_ok[y0:y1, x0:x1]
    h, w = sub.shape
    idx = -np.ones((h, w), int)
    idx[msub] = np.arange(msub.sum())
    n = msub.sum()

    linhas, colunas, vals, b = [], [], [], np.zeros(n)
    yy, xx = np.nonzero(msub)
    for k, (y, x) in enumerate(zip(yy, xx)):
        diag = 0.0
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if msub[ny, nx]:
                linhas.append(k); colunas.append(idx[ny, nx]); vals.append(-1.0)
                diag += 1.0
            elif bsub[ny, nx]:
                b[k] += sub[ny, nx]
                diag += 1.0
        if diag == 0.0:                      # ilhado: mantem o que ja tinha
            diag, b[k] = 1.0, sub[y, x]
        linhas.append(k); colunas.append(k); vals.append(diag)
    A = sparse.csr_matrix((vals, (linhas, colunas)), shape=(n, n))
    sub[msub] = spsolve(A, b)
    canal = canal.copy()
    canal[y0:y1, x0:x1] = sub
    return canal


limpo = img.copy()
for c in range(3):
    limpo[..., c] = laplace_fill(limpo[..., c], mask, borda_ok)

# grao do proprio tecido: faixa limpa do colete logo abaixo da fita refletiva.
# Tem que ser azul-marinho puro: se entrar agua ou a fita, a estrutura do
# retalho fica estampada no lugar do texto, que foi o que aconteceu na 1a volta.
GY0, GY1, GX0, GX1 = 1055, 1135, 1800, 2110
patch = img[GY0:GY1, GX0:GX1]
alto = patch - np.asarray(
    Image.fromarray((patch * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(3)),
    np.float64) / 255.0
ph, pw = alto.shape[:2]
grao = np.tile(alto, (H // ph + 1, W // pw + 1, 1))[:H, :W]
suave = np.asarray(Image.fromarray((mask * 255).astype(np.uint8))
                   .filter(ImageFilter.GaussianBlur(2)), np.float64) / 255.0
limpo += grao * suave[..., None]

# ----------------------------------------------------------------- estrela --
# A caixa é bem maior que a estrela de propósito: a borda do clone precisa de
# espaço para desaparecer em degradê. Com folga curta, o retângulo aparece.
EX0, EY0, EX1, EY1 = 2072, 1468, 2236, 1622
DX = 152                                     # so horizontal: mantem a altura
alvo = limpo[EY0:EY1, EX0:EX1]
fonte = limpo[EY0:EY1, EX0 + DX:EX1 + DX].copy()

# casa a media do retalho com a do anel de 8px em volta do buraco, nos quatro
# lados, para nao restar degrau de tom na emenda
anel = np.concatenate([
    limpo[EY0 - 8:EY0, EX0:EX1].reshape(-1, 3),
    limpo[EY1:EY1 + 8, EX0:EX1].reshape(-1, 3),
    limpo[EY0:EY1, EX0 - 8:EX0].reshape(-1, 3),
    limpo[EY0:EY1, EX1:EX1 + 8].reshape(-1, 3),
])
fonte += anel.mean(0) - fonte.reshape(-1, 3).mean(0)

h, w = alvo.shape[:2]
fy = np.minimum(np.arange(h), h - 1 - np.arange(h)) / (h * 0.42)
fx = np.minimum(np.arange(w), w - 1 - np.arange(w)) / (w * 0.42)
f = np.clip(np.minimum.outer(fy, fx), 0, 1)
f = f * f * (3 - 2 * f)
limpo[EY0:EY1, EX0:EX1] = alvo * (1 - f[..., None]) + fonte * f[..., None]

Image.fromarray((np.clip(limpo, 0, 1) * 255 + 0.5).astype(np.uint8)).save(OUT)
print("gerado:", OUT)
