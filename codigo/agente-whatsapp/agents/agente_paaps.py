"""
Agente PAAPS (WhatsApp)
-----------------------

Assistente de primeiro contato da PAAPS no WhatsApp. Personalize a persona em
`agents/prompts.py` e os guardrails em `agents/guardrails/security.py`.

Rodar standalone:
    python -m agents.agente_paaps
"""

from os import getenv

from agno.agent import Agent
from agno.models.openai import OpenAIResponses

from agents.guardrails import ContentSafetyGuardrail, enforce_safe_whatsapp_output
from agents.hooks import prepare_multimodal_input
from agents.prompts import instructions
from db import get_postgres_db

# ---------------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------------
agent_db = get_postgres_db()
model_id = getenv("OPENAI_MODEL", "gpt-5-mini")

# ---------------------------------------------------------------------------
# Agent
# ---------------------------------------------------------------------------
agente_paaps = Agent(
    id="paaps-atendimento",
    name="Assistente PAAPS",
    model=OpenAIResponses(id=model_id),
    db=agent_db,
    instructions=instructions,
    enable_agentic_memory=True,
    add_datetime_to_context=True,
    add_history_to_context=True,
    read_chat_history=True,
    num_history_runs=5,
    tool_call_limit=5,
    markdown=True,
    pre_hooks=[prepare_multimodal_input, ContentSafetyGuardrail()],
    post_hooks=[enforce_safe_whatsapp_output],
)

# Compat: Agno 2.6.x nao aceita `max_iterations` no construtor, mas o atributo
# e mantido para alinhamento com configuracoes antigas do projeto.
setattr(agente_paaps, "max_iterations", 5)


if __name__ == "__main__":
    agente_paaps.print_response("Oi! O que e a PAAPS?", stream=True)
