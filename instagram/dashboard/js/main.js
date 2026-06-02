// ─── Render KPIs ──────────────────────────────────────────
function renderKPIs() {
  const { followers, totals, wow } = dashState.processed;
  const ACCTS = ['amalluvasconcellos','paaps.brasil'];

  ACCTS.forEach(acct => {
    const short = acct === 'amalluvasconcellos' ? 'amallu' : 'paaps';
    const t = totals[acct] || {};
    const w = wow[acct] || {};

    // Seguidores
    const folEl = document.getElementById(`followers-${short}`);
    if (folEl) folEl.textContent = fmtNum(followers[acct] || 0);

    // Alcance total
    const reachEl = document.getElementById(`reach-${short}`);
    if (reachEl) reachEl.textContent = fmtNum(t.reach || 0);
  });

  // KPI combinado: alcance total (ambas as contas)
  const totalReach = ACCTS.reduce((s,a) => s + (totals[a]?.reach || 0), 0);
  const elTR = document.getElementById('total-reach');
  if (elTR) elTR.textContent = fmtNum(totalReach);

  // Engajamento médio (ambas, últimos 7 dias aproximados da série)
  let engSum = 0, engCount = 0;
  ACCTS.forEach(a => {
    const rows = dashState.processed.byAccount[a] || [];
    const last7 = rows.slice(-7);
    last7.forEach(r => { if (r.reach > 0) { engSum += r.engagement_rate; engCount++; } });
  });
  const avgEng = engCount > 0 ? engSum / engCount : 0;
  const elEng = document.getElementById('avg-engagement');
  if (elEng) elEng.textContent = fmtPct(avgEng);

  // WoW badges
  const wowFields = { reach: 'wow-reach', total_interactions: 'wow-interactions' };
  ACCTS.forEach(acct => {
    const short = acct === 'amalluvasconcellos' ? 'amallu' : 'paaps';
    const w = wow[acct] || {};
    Object.entries(wowFields).forEach(([field, prefix]) => {
      const el = document.getElementById(`${prefix}-${short}`);
      if (el && w[field]) el.innerHTML = badgeHtml(w[field].pct);
    });
  });
}

// ─── Render Quality Tiles ─────────────────────────────────
function renderQualityTiles() {
  const { totals, byAccount } = dashState.processed;
  const metrics = [
    { id: 'save',    label: 'Save Rate',    field: 'avg_save_rate',    color: COLORS.oliva     },
    { id: 'share',   label: 'Share Rate',   field: 'avg_share_rate',   color: COLORS.terracota },
    { id: 'comment', label: 'Comment Rate', field: 'avg_comment_rate', color: COLORS.bege      },
    { id: 'like',    label: 'Like Rate',    field: 'avg_like_rate',    color: COLORS.amarelo   },
  ];

  metrics.forEach(({ id, field, color }) => {
    const aVal = totals['amalluvasconcellos']?.[field] || 0;
    const pVal = totals['paaps.brasil']?.[field] || 0;
    const combined = (aVal + pVal) / 2;

    const elNum = document.getElementById(`${id}-rate-num`);
    if (elNum) elNum.textContent = fmtPct(combined);

    const elA = document.getElementById(`${id}-rate-amallu`);
    if (elA) elA.textContent = fmtPct(aVal);
    const elP = document.getElementById(`${id}-rate-paaps`);
    if (elP) elP.textContent = fmtPct(pVal);

    // Sparkline: evolução diária da taxa (ambas as contas combinadas)
    const sparkEl = document.getElementById(`${id}-rate-spark`);
    if (sparkEl) {
      const aRows = byAccount['amalluvasconcellos'] || [];
      const pRows = byAccount['paaps.brasil'] || [];
      const dates = allDates(byAccount);
      const rowField = field.replace('avg_', ''); // avg_save_rate → save_rate
      const vals = dates.map(d => {
        let s = 0, c = 0;
        const av = valueOn(aRows, d, rowField);
        const pv = valueOn(pRows, d, rowField);
        if (av !== null) { s += av; c++; }
        if (pv !== null) { s += pv; c++; }
        return c > 0 ? s / c : 0;
      });
      sparkEl.innerHTML = sparklineSVG(vals, color);
    }

    // Barras de comparação
    const max = Math.max(aVal, pVal, 0.01);
    const barA = document.getElementById(`${id}-bar-amallu`);
    const barP = document.getElementById(`${id}-bar-paaps`);
    if (barA) barA.style.width = `${aVal/max*100}%`;
    if (barP) barP.style.width = `${pVal/max*100}%`;
  });
}

// ─── Render Heatmap ───────────────────────────────────────
const DAYS_SHORT = ['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];

function renderHeatmap() {
  const { weekdays } = dashState.processed;
  ['amalluvasconcellos','paaps.brasil'].forEach(acct => {
    const avgs = weekdays[acct] || Array(7).fill(0);
    const max  = Math.max(...avgs, 0.001);
    const short = acct === 'amalluvasconcellos' ? 'amallu' : 'paaps';
    const color = acct === 'amalluvasconcellos' ? '203,71,16' : '174,163,73';

    DAYS_SHORT.forEach((day, i) => {
      const cell = document.getElementById(`hm-${short}-${i}`);
      if (!cell) return;
      const intensity = avgs[i] / max;
      const isDark = intensity > 0.55;
      cell.style.background = `rgba(${color},${intensity.toFixed(2)})`;
      cell.querySelector('.hm-val').textContent = fmtNum(avgs[i]);
      cell.querySelector('.hm-val').style.color = isDark ? (acct === 'amalluvasconcellos' ? '#fff' : '#442309') : 'rgba(68,35,9,0.7)';
      cell.title = `${day}: média ${fmtNum(avgs[i])} interações/dia`;
    });
  });
}

// ─── Render Viral Section ─────────────────────────────────
function renderViralSection() {
  const { byAccount, viralEvents, totals } = dashState.processed;
  const pRows  = byAccount['paaps.brasil'] || [];
  const events = viralEvents['paaps.brasil'] || [];

  if (events.length === 0) {
    document.getElementById('viralSection').style.opacity = '0.4';
    document.getElementById('viralBadge').style.display  = 'none';
    document.getElementById('viralBadgeHm').style.display = 'none';
    document.getElementById('viralNote').textContent = 'Nenhum evento viral detectado no período.';
    return;
  }

  document.getElementById('viralSection').style.opacity = '1';
  document.getElementById('viralBadge').style.display   = '';
  document.getElementById('viralBadgeHm').style.display = '';
  const peak = events.reduce((a,b) => a.total_interactions > b.total_interactions ? a : b);

  // Peak metrics
  const setEl = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  setEl('viral-peak-ti', fmtNum(peak.total_interactions));
  setEl('viral-peak-vs', fmtPct(peak.virality_score));
  setEl('viral-peak-date', fmtDate(peak.date));

  // Decay: rows from viral day onwards
  const peakIdx = pRows.findIndex(r => r.date === peak.date);
  const decayRows = peakIdx >= 0 ? pRows.slice(peakIdx) : [];

  // Half-life: first day where interactions <= peak/2
  const halfTarget = peak.total_interactions / 2;
  const halfDay = decayRows.findIndex((r, i) => i > 0 && r.total_interactions <= halfTarget);
  setEl('viral-halflife', halfDay > 0 ? `${halfDay}d` : `${decayRows.length}d+`);
  setEl('viral-tail', `${decayRows.length}d`);

  if (decayRows.length >= 2) renderViralDecay(decayRows);
}

// ─── Render WoW Table ────────────────────────────────────
function renderWoW() {
  const { wow } = dashState.processed;
  const rows = [
    { id: 'reach',               label: 'Alcance'      },
    { id: 'total_interactions',  label: 'Interações'   },
    { id: 'saves',               label: 'Saves'        },
    { id: 'shares',              label: 'Shares'       },
    { id: 'comments',            label: 'Comentários'  },
  ];
  const tbody = document.getElementById('wowTbody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(({ id, label }) => {
    const wa = wow['amalluvasconcellos']?.[id] || { current:0, previous:0, pct:0 };
    const wp = wow['paaps.brasil']?.[id] || { current:0, previous:0, pct:0 };
    return `<tr>
      <td>${label}</td>
      <td style="font-weight:600;">${fmtNum(wa.current)}</td>
      <td>${badgeHtml(wa.pct)}</td>
      <td style="font-weight:600;">${fmtNum(wp.current)}</td>
      <td>${badgeHtml(wp.pct)}</td>
    </tr>`;
  }).join('');
}

// ─── Init ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  wireFilters();

  document.getElementById('drillPeek').addEventListener('click', () => {
    if (dashState.drillDate) closeDrill(); else {
      // Abre com o pico viral se disponível
      const pRows = dashState.processed?.viralEvents?.['paaps.brasil'];
      if (pRows && pRows.length > 0) {
        const peak = pRows.reduce((a,b) => a.total_interactions > b.total_interactions ? a : b);
        openDrill(peak.date);
      }
    }
  });

  document.getElementById('drillClose').addEventListener('click', closeDrill);

  loadData();
});
