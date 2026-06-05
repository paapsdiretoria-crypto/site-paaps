# Mapa de Fontes de Fotografia — ESPAÇO RESERVADO

Este arquivo será preenchido por uma **pesquisa de fontes de fotografia documental pública** (etapa futura — ver seção 6 do plano de reestruturação). Por ora, registra apenas as fontes já conhecidas e a regra de hierarquia correta.

---

## REGRA DE HIERARQUIA — LEIA ANTES DE TUDO

**A hierarquia correta, corrigida pela Mallu em jun/2026, é:**

> **Base documental pública + foto local PAAPS de forma pontual e estratégica**

**NÃO é o contrário.** A foto do acervo local não vem em primeiro lugar. Ela entra de forma estratégica — em geral, a foto que mostra "a cara da PAAPS" (~1 por carrossel). A base de imagens do dia a dia é a fotografia documental pública.

**Por quê:** o acervo local tem volume limitado e contextos específicos (Bela Vista de Minas, eventos do PAAPS). Usar foto própria em todo carrossel estreita o alcance visual da marca. A fotografia documental pública é abundante, rigorosa, de autoria declarada e cobre todo o território nacional.

---

## Fontes Já Mapeadas

### Fonte principal: Flickr do Ministério da Saúde
- **Acervo:** https://www.flickr.com/photos/ministeriodasaude/
- **Volume:** ~200.000 fotos, desde 2009
- **Conta de acesso PAAPS:** paapsdiretoria@gmail.com
- **Fotógrafo de referência:** Radilson Carlos Gomes (acervo do Hospital Colônia de Barbacena e outros)
- **Álbuns:** https://www.flickr.com/photos/ministeriodasaude/albums (107+ páginas)
- **Padrão de URL:** `https://live.staticflickr.com/65535/[photo_id]_[hash]_b.jpg`
  - Sufixos: `_b` = 1024px (bom para Canva); `_k` = 2048px (máxima qualidade)

**Critérios de seleção nesta fonte:**
- Pessoas reais em ambientes de saúde pública (UBS, CAPS, CRAS, corredor, reunião)
- Escala humana: rostos, mãos, momentos do cotidiano do cuidado
- Preferir fotos que funcionam bem em P&B
- Evitar: foto posada, evento ministerial formal, autoridades em palanque

**Workflow de inserção no Canva:**
1. `upload-asset-from-url` com a URL direta da imagem
2. `start-editing-transaction`
3. `perform-editing-operations (insert_fill)` com posicionamento da tabela em `identidade-aplicada.md` seção 7.4
4. `commit-editing-transaction`

---

### Fonte pontual: Acervo local PAAPS
- **Caminho:** `insumos-compartilhados/fotos/`
- **Subpastas disponíveis:**
  - `case-bela-vista-de-minas/` — caso municipal (~87 arquivos, JPG/HEIC/MOV)
  - `fotos-bvmg-isaac/` — fotógrafo profissional Isaac, caso BVMG (~208 JPGs)
  - `craftsapiens-mundo-digital/` — evento (~22 arquivos)
  - `ecoa-fotos/` — 4 capturas de tela PNG (exclusivo para Interlocutor ECOA)
  - `maes-atipicas-rj/` — projeto Mães Atípicas RJ (~35 arquivos)
  - `outras-fotos/` — miscelânea (~17 arquivos)
- **Uso:** pontual e estratégico — em geral a foto que mostra "a cara da PAAPS" no carrossel, não a base
- **Atenção:** arquivos HEIC e MOV não são usáveis diretamente no Canva — converter para JPG antes

---

## O Que Falta Mapear (Pesquisa Futura)

A pesquisa de fontes de fotografia documental pública deve cobrir, com o mesmo rigor:

1. **Outros perfis no Flickr:**
   - Outros fotógrafos documentais que fotografaram saúde pública, SUAS, SUS
   - Secretarias estaduais e municipais de saúde e assistência social com acervos públicos
   - FUNAI, IBGE, outros órgãos com fotografia documental do território

2. **Fontes fora do Flickr:**
   - Banco de imagens de agências de notícia com licença livre (Agência Brasil / EBC)
   - Repositórios de universidades públicas com fotografias de campo
   - Acervos de ONGs com licença aberta

3. **Critérios de curadoria a documentar para cada fonte:**
   - Licença de uso (CC BY, CC BY-NC, domínio público)
   - Processo de crédito obrigatório
   - Qualidade técnica mínima para Canva (resolução, enquadramento)

**Quando executar:** antes de construir o Agente Buscador de Fotos (etapa futura do projeto).
