"""Smoke tests para os guardrails de saida do WhatsApp.

Rodar (com as dependencias instaladas):
    pytest -q
"""

from agents.guardrails.security import split_for_whatsapp


def test_short_message_is_untouched():
    text = "Oi! A PAAPS cuida da saude mental das equipes do servico publico."
    assert split_for_whatsapp(text) == text


def test_long_message_is_chunked_with_delimiter():
    text = (
        "A PAAPS constroi sistemas de cuidado dentro de prefeituras e programas sociais. "
        "A gente foi a campo em Bela Vista de Minas e acompanhou os servidores por cinco meses. "
        "O trabalho parte sempre do sistema que cerca a equipe, nunca da culpa individual de cada pessoa. "
        "Se voce quer levar isso para o seu municipio, a gente conversa e desenha o proximo passo junto."
    )
    result = split_for_whatsapp(text)
    assert "\n---\n" in result
    for chunk in result.split("\n---\n"):
        assert len(chunk) <= 190


def test_chunks_do_not_lose_content_words():
    text = "palavra " * 60
    result = split_for_whatsapp(text.strip())
    joined = result.replace("\n---\n", " ")
    assert joined.count("palavra") == 60
