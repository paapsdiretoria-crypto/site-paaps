#!/usr/bin/env python3
"""
Modelo A + destaque local na agente de saude.

A grade A roda duas vezes com parametros diferentes: uma para a foto toda
(sobre-tom marrom cheio) e outra so para ela (marrom quase suspenso, cor
devolvida, sem vinheta). As duas sao costuradas por uma mascara suave.

A mascara nao e recorte: recorte local em grade de cor sempre denuncia a
mao. Ela e o produto de duas coisas:
  - uma elipse generosa em volta do corpo dela
  - a supressao da agua dentro dessa elipse (agua = clara e sem croma)
depois desfocada em 34px, para a passagem ser insensivel.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter

SRC, OUTDIR = sys.argv[1], sys.argv[2]


def srgb_to_linear(x):
    return np.where(x <= 0.04045, x / 12.92, ((x + 0.055) / 1.055) ** 2.4)


def linear_to_srgb(x):
    x = np.clip(x, 0.0, 1.0)
    return np.where(x <= 0.0031308, x * 12.92, 1.055 * (x ** (1 / 2.4)) - 0.055)


def hexlin(h):
    h = h.lstrip("#")
    return srgb_to_linear(np.array([int(h[i:i + 2], 16) for i in (0, 2, 4)]) / 255.0)


def luma(img):
    return img[..., 0] * 0.2126 + img[..., 1] * 0.7152 + img[..., 2] * 0.0722


def ss(x, a, b):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


STOPS = [(0.00, "#221104"), (0.26, "#4a2a0d"), (0.58, "#a8834f"), (1.00, "#f6f1e2")]


def ramp(t):
    pos = np.array([s[0] for s in STOPS])
    cols = np.stack([hexlin(s[1]) for s in STOPS])
    out = np.zeros(t.shape + (3,))
    for i in range(len(STOPS) - 1):
        a, b = pos[i], pos[i + 1]
        m = (t >= a) & (t <= b) if i == len(STOPS) - 2 else (t >= a) & (t < b)
        if not m.any():
            continue
        f = ((t[m] - a) / (b - a))[:, None]
        f = f * f * (3 - 2 * f)
        out[m] = cols[i] * (1 - f) + cols[i + 1] * f
    out[t < pos[0]] = cols[0]
    out[t > pos[-1]] = cols[-1]
    return out


def rolloff(x, joelho=0.70):
    alto = x > joelho
    faixa = 1.0 - joelho
    y = x.copy()
    y[alto] = joelho + faixa * np.tanh((x[alto] - joelho) / faixa * 1.35) / np.tanh(1.35)
    return y


def grade(lin0, forca_sombra, forca_luz, temp, sat, contraste, lift,
          vinheta, azul_guarda, expo=1.0):
    lin = lin0 * expo
    lin = np.clip(lin * np.array([1 + temp * 1.30, 1 + temp * 0.16, 1 - temp * 1.45]), 0, 1)

    y0 = luma(lin)[..., None]
    croma_frio = np.clip(lin[..., 2:3] - y0, 0, 1)

    y = luma(lin)[..., None]
    lin = y + (lin - y) * sat

    t = np.clip(linear_to_srgb(luma(lin)), 0, 1)
    duo = ramp(t) * 0.87 + lin * 0.13
    peso = forca_luz + (forca_sombra - forca_luz) * (1 - t) ** 1.5
    lin = lin * (1 - peso[..., None]) + duo * peso[..., None]

    lin[..., 2:3] += croma_frio * azul_guarda
    lin[..., 1:2] += croma_frio * azul_guarda * 0.30
    lin = np.clip(lin, 0, 1)

    g = linear_to_srgb(lin)
    piv = 0.47
    g = np.clip(piv + (g - piv) * contraste, 0, 1)
    g = g * (1 - lift) + lift * np.array([0.40, 0.24, 0.12])

    h, w = g.shape[:2]
    if vinheta > 0:
        yy, xx = np.mgrid[0:h, 0:w].astype(np.float64)
        r = np.sqrt(((xx / (w - 1) - 0.54) / 0.72) ** 2 + ((yy / (h - 1) - 0.50) / 0.74) ** 2)
        g *= (1.0 - vinheta * np.clip((r - 0.52) / 0.88, 0, 1) ** 1.7)[..., None]
    return np.clip(g, 0, 1)


# ---------------------------------------------------------------- mascara ---
im = Image.open(SRC).convert("RGB")
base = np.asarray(im, np.float64) / 255.0
H, W = base.shape[:2]
print(f"origem {W}x{H}")

lin0 = rolloff(srgb_to_linear(base), 0.70)

# elipse em volta da agente (coordenadas medidas na imagem 2390x1792)
CX, CY, RX, RY = 1880, 800, 500, 610
yy, xx = np.mgrid[0:H, 0:W].astype(np.float64)
d = np.sqrt(((xx - CX) / RX) ** 2 + ((yy - CY) / RY) ** 2)
elipse = 1.0 - ss(d, 0.72, 1.06)

# supressao da agua: clara e sem croma
L = luma(lin0)
mx, mn = base.max(axis=2), base.min(axis=2)
sat_px = np.where(mx > 1e-6, (mx - mn) / np.maximum(mx, 1e-6), 0.0)
agua = ss(L, 0.40, 0.60) * (1.0 - ss(sat_px, 0.05, 0.18))

m = np.clip(elipse * (1.0 - agua), 0, 1)
m = np.asarray(Image.fromarray((m * 255).astype(np.uint8))
               .filter(ImageFilter.GaussianBlur(34)), np.float64) / 255.0
m = np.clip(m * 1.30, 0, 1)
Image.fromarray((m * 255).astype(np.uint8)).save(f"{OUTDIR}/mascara.jpg", quality=88)

# ---------------------------------------------------------------- grades ----
A_FUNDO = dict(forca_sombra=0.50, forca_luz=0.18, temp=0.055, sat=0.70,
               contraste=1.11, lift=0.020, vinheta=0.19, azul_guarda=0.40)
A_AGENTE = dict(forca_sombra=0.20, forca_luz=0.05, temp=0.030, sat=1.06,
                contraste=1.15, lift=0.010, vinheta=0.0, azul_guarda=0.90, expo=1.09)

fundo = grade(lin0, **A_FUNDO)
agente = grade(lin0, **A_AGENTE)
out = fundo * (1 - m[..., None]) + agente * m[..., None]

img = Image.fromarray((np.clip(out, 0, 1) * 255 + 0.5).astype(np.uint8))
img = img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=44, threshold=3))
img.save(f"{OUTDIR}/A-destaque-agente.jpg", "JPEG", quality=94, subsampling=0, optimize=True)
print("gerado: A-destaque-agente.jpg")
