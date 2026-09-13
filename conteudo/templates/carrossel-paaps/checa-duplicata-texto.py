#!/usr/bin/env python3
# Acha sequências de 5+ palavras repetidas, verbatim, entre blocos de slide de um copy-*.md do
# copywriter-paaps, E (opcionalmente) entre o copy e o arquivo de mediações da Tecelã que o
# originou — pra pegar frase de insumo copiada sem transformação, não só duplicata interna.
#
#   ./checa-duplicata-texto.py <copy-arquivo.md> [tecela-arquivo.md]
#
# Usado pelo critico-conteudo antes de pontuar os itens 8 e 15 do checklist (ver
# .claude/agents/critico-conteudo.md). Não julga se a repetição é proposital: só encontra.

import re
import sys


def ngramas_por_bloco(texto, split_regex, rotulo_fn):
    blocos = re.split(split_regex, texto, flags=re.MULTILINE)[1:]
    resultado = {}
    for bloco in blocos:
        titulo, _, corpo = bloco.partition("\n")
        rotulo = rotulo_fn(titulo)
        limpo = re.sub(r"[*_>#`]", " ", corpo)
        limpo = re.sub(r"[^\wà-úÀ-Ú%.,]", " ", limpo.lower())
        palavras = limpo.split()
        for i in range(len(palavras) - 4):
            ngrama = " ".join(palavras[i:i + 5])
            resultado.setdefault(ngrama, set()).add(rotulo)
    return resultado


def main():
    if len(sys.argv) not in (2, 3):
        sys.exit("uso: checa-duplicata-texto.py <copy-arquivo.md> [tecela-arquivo.md]")

    copy_texto = open(sys.argv[1], encoding="utf-8").read()
    copy_ngramas = ngramas_por_bloco(
        copy_texto, r"^### Slide", lambda t: t.strip().split(":")[0].strip()
    )

    achados_internos = {n: s for n, s in copy_ngramas.items() if len(s) > 1}
    if achados_internos:
        print(f"{len(achados_internos)} sequência(s) de 5+ palavras repetida(s) ENTRE SLIDES:\n")
        for ngrama, slides in sorted(achados_internos.items()):
            print(f'- "{ngrama}"  (slides {", ".join(sorted(slides))})')
    else:
        print("Nenhuma sequência de 5+ palavras repetida entre slides diferentes.")

    if len(sys.argv) == 3:
        tecela_texto = open(sys.argv[2], encoding="utf-8").read()
        tecela_ngramas = ngramas_por_bloco(
            tecela_texto, r"^## ", lambda t: t.strip()
        )
        copiados = set(copy_ngramas) & set(tecela_ngramas)
        print()
        if copiados:
            print(f"{len(copiados)} sequência(s) de 5+ palavras copiada(s) quase literal da Tecelã:\n")
            for ngrama in sorted(copiados):
                print(f'- "{ngrama}"  (Tecelã: {", ".join(sorted(tecela_ngramas[ngrama]))})')
        else:
            print("Nenhuma sequência de 5+ palavras do copy bate literalmente com a Tecelã.")


if __name__ == "__main__":
    main()
