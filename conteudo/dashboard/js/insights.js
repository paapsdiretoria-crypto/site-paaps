function generateInsights(processed) {
  const { byAccount, totals, viralEvents, weekdays } = processed;
  const insights = [];
  const DAYS_PT = ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
  const ACCT_LABELS = { amalluvasconcellos: '@amalluvasconcellos', 'paaps.brasil': '@paaps.brasil' };

  // ─── Viral event ──────────────────────────────────────────
  Object.entries(viralEvents).forEach(([acct, events]) => {
    if (events.length === 0) return;
    const peak = events.reduce((a, b) => a.total_interactions > b.total_interactions ? a : b);
    const allRows = byAccount[acct];
    const nonViral = allRows.filter(r => !events.find(e => e.date === r.date));
    const avgNormal = nonViral.length > 0
      ? nonViral.reduce((s,r) => s + r.total_interactions, 0) / nonViral.length
      : 1;
    const mult = Math.round(peak.total_interactions / avgNormal);
    const viralityScore = Math.round(peak.virality_score);

    insights.push({
      color: '#f7c31c',
      title: 'Evento viral detectado',
      text: `${ACCT_LABELS[acct]} gerou <strong>${fmtNum(peak.total_interactions)} interações</strong> em ${fmtDate(peak.date)} — ${mult}× a média habitual. ${viralityScore}% foram shares + saves, padrão típico de conteúdo de referência distribuído em rede.`,
    });
  });

  // ─── Save rate benchmark ───────────────────────────────────
  const BENCHMARK_SAVE = 4; // % — benchmark de contas educativas
  Object.entries(totals).forEach(([acct, t]) => {
    if (t.avg_save_rate > BENCHMARK_SAVE) {
      insights.push({
        color: '#aea349',
        title: 'Save rate acima do benchmark',
        text: `A taxa de saves do ${ACCT_LABELS[acct]} (<strong>${fmtPct(t.avg_save_rate)}</strong>) está acima do benchmark de contas educativas (3–5%). O público salva para consultar depois — sinal de autoridade técnica no tema.`,
      });
    }
  });

  // ─── Melhor dia para postar ────────────────────────────────
  Object.entries(weekdays).forEach(([acct, avgs]) => {
    const max = Math.max(...avgs);
    if (max === 0) return;
    const bestIdx = avgs.indexOf(max);
    const secondIdx = avgs.reduce((best, v, i) => (v > avgs[best] && i !== bestIdx) ? i : best, bestIdx === 0 ? 1 : 0);
    insights.push({
      color: '#cb4710',
      title: `Melhor dia · ${ACCT_LABELS[acct]}`,
      text: `<strong>${DAYS_PT[bestIdx]}-feira</strong> gera em média <strong>${fmtNum(max)} interações/dia</strong> — melhor resultado da semana. ${DAYS_PT[secondIdx]}-feira é o segundo melhor (${fmtNum(avgs[secondIdx])}). Concentrar posts de maior impacto nestes dias.`,
    });
  });

  // ─── Comparativo de perfis ─────────────────────────────────
  const t1 = totals['amalluvasconcellos'];
  const t2 = totals['paaps.brasil'];
  if (t1 && t2) {
    const amalluRows = byAccount['amalluvasconcellos'];
    const paapsRows  = byAccount['paaps.brasil'];
    const amalluAvgReach = amalluRows.length > 0 ? t1.reach / amalluRows.length : 0;
    const paapsAvgReach  = paapsRows.length > 0  ? t2.reach / paapsRows.length  : 0;
    const consistRatio   = paapsAvgReach > 0 ? Math.round(amalluAvgReach / paapsAvgReach) : 0;
    const shareRatio     = t1.avg_share_rate > 0 ? Math.round(t2.avg_share_rate / t1.avg_share_rate) : 0;

    insights.push({
      color: '#bbada2',
      title: 'Perfis com papéis complementares',
      text: `@amalluvasconcellos é ${consistRatio > 1 ? `<strong>${consistRatio}× mais consistente</strong>` : 'mais consistente'} em alcance diário. @paaps.brasil tem ${shareRatio > 1 ? `<strong>share rate ${shareRatio}× maior</strong>` : 'share rate mais alto'} quando publica. Estratégia ideal: @amallu alimenta a audiência; @paaps amplifica o território.`,
    });
  }

  // Garante ao menos 4 insights
  while (insights.length < 4) {
    insights.push({
      color: '#bbada2',
      title: 'Continue monitorando',
      text: 'Dados insuficientes no período selecionado para gerar este insight. Tente ampliar o período para 30 ou 90 dias.',
    });
  }

  return insights.slice(0, 6);
}

function renderInsights() {
  const el = document.getElementById('insightsPanel');
  if (!el || !dashState.processed) return;
  const list = generateInsights(dashState.processed);
  el.innerHTML = list.map(ins => `
    <div style="display:flex;gap:16px;align-items:flex-start;">
      <div style="width:4px;min-width:4px;background:${ins.color};border-radius:2px;align-self:stretch;"></div>
      <div>
        <div style="font-family:'League Spartan',sans-serif;font-size:0.78rem;font-weight:700;color:${ins.color};letter-spacing:0.04em;margin-bottom:5px;">${ins.title}</div>
        <div style="font-family:'Helvetica Neue',sans-serif;font-size:0.85rem;color:rgba(255,255,255,0.78);line-height:1.65;">${ins.text}</div>
      </div>
    </div>
  `).join('');
}
