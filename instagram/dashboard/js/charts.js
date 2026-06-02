// ─── Tema global Chart.js ─────────────────────────────────
Chart.defaults.font.family  = "'League Spartan', Arial, sans-serif";
Chart.defaults.font.size    = 11;
Chart.defaults.color        = '#bbada2';
Chart.defaults.plugins.tooltip.backgroundColor = '#442309';
Chart.defaults.plugins.tooltip.titleColor      = '#f7c31c';
Chart.defaults.plugins.tooltip.bodyColor       = 'rgba(255,255,255,0.85)';
Chart.defaults.plugins.tooltip.padding         = 12;
Chart.defaults.plugins.tooltip.cornerRadius    = 4;
Chart.defaults.plugins.tooltip.displayColors   = false;
Chart.defaults.plugins.legend.display          = false;

const COLORS = { terracota:'#cb4710', oliva:'#aea349', amarelo:'#f7c31c', bege:'#bbada2', marrom:'#442309', fundo:'#f5f1e1' };

// Instâncias reutilizáveis
const chartInstances = {};

function destroyChart(id) {
  if (chartInstances[id]) { chartInstances[id].destroy(); delete chartInstances[id]; }
}

// ─── MODULE 3: Alcance diário (linha dupla) ───────────────
function renderReachChart() {
  const { byAccount, viralEvents } = dashState.processed;
  const dates   = allDates(byAccount);
  const labels  = dates.map(fmtDate);
  const aRows   = byAccount['amalluvasconcellos'] || [];
  const pRows   = byAccount['paaps.brasil'] || [];
  const datasets = [];

  if (dashState.accounts.includes('amalluvasconcellos')) {
    datasets.push({
      label: '@amalluvasconcellos',
      data: dates.map(d => valueOn(aRows, d, 'reach')),
      borderColor: COLORS.terracota,
      backgroundColor: 'rgba(203,71,16,0.06)',
      borderWidth: 2.5, pointRadius: 0, pointHoverRadius: 6,
      pointHoverBackgroundColor: COLORS.terracota,
      fill: true, tension: 0.3, spanGaps: true,
    });
  }
  if (dashState.accounts.includes('paaps.brasil')) {
    datasets.push({
      label: '@paaps.brasil',
      data: dates.map(d => valueOn(pRows, d, 'reach')),
      borderColor: COLORS.oliva,
      backgroundColor: 'rgba(174,163,73,0.06)',
      borderWidth: 2.5, pointRadius: 0, pointHoverRadius: 6,
      pointHoverBackgroundColor: COLORS.oliva,
      fill: true, tension: 0.3, spanGaps: true,
    });
  }

  // Anotações dos picos virais
  const annotations = {};
  ['amalluvasconcellos','paaps.brasil'].forEach(acct => {
    (viralEvents[acct] || []).forEach((ev, i) => {
      const idx = dates.indexOf(ev.date);
      if (idx < 0) return;
      annotations[`peak_${acct}_${i}`] = {
        type: 'point',
        xValue: idx,
        yValue: ev.reach,
        backgroundColor: acct === 'amalluvasconcellos' ? COLORS.terracota : COLORS.oliva,
        radius: 6, borderWidth: 0,
      };
      annotations[`label_${acct}_${i}`] = {
        type: 'label',
        xValue: idx, yValue: ev.reach,
        backgroundColor: COLORS.marrom,
        color: COLORS.amarelo,
        content: [`▲ ${fmtNum(ev.reach)} alcance`],
        font: { family:"'League Spartan',sans-serif", size:9, weight:'700' },
        padding: { x:7, y:4 }, borderRadius: 3,
        yAdjust: -20,
      };
    });
  });

  destroyChart('reach');
  const ctx = document.getElementById('reachChart');
  if (!ctx) return;
  chartInstances['reach'] = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      onClick(event, elements) {
        if (elements.length > 0) {
          const idx = elements[0].index;
          openDrill(dates[idx]);
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(187,173,162,0.15)', drawTicks: false },
          ticks: { maxTicksLimit: 8, maxRotation: 0 },
          border: { display: false },
        },
        y: {
          grid: { color: 'rgba(187,173,162,0.15)', drawTicks: false },
          ticks: { callback: v => fmtNum(v) },
          border: { display: false },
          beginAtZero: true,
        },
      },
      plugins: {
        annotation: { annotations },
        tooltip: {
          callbacks: {
            title: items => items[0].label,
            label: item => ` ${item.dataset.label}: ${fmtNum(item.raw)} alcance`,
          },
        },
      },
    },
  });
}

// ─── MODULE 4: Anatomia do engajamento (stacked bar) ──────
function renderEngagementChart() {
  const { byAccount } = dashState.processed;
  const acct  = dashState.engagementAccount;
  const rows  = byAccount[acct] || [];
  const dates = rows.map(r => r.date);
  const labels = dates.map(fmtDate);

  const stacks = [
    { key: 'likes',    label: 'Likes',    color: COLORS.amarelo   },
    { key: 'shares',   label: 'Shares',   color: COLORS.terracota },
    { key: 'saves',    label: 'Saves',    color: COLORS.oliva     },
    { key: 'comments', label: 'Comments', color: COLORS.bege      },
  ];

  const datasets = stacks.map(s => ({
    label: s.label,
    data: rows.map(r => r[s.key] || 0),
    backgroundColor: s.color,
    stack: 'stack',
    borderWidth: 0,
    borderRadius: { topLeft: 2, topRight: 2 },
  }));

  // Dar radius só ao último dataset (topo)
  datasets[datasets.length - 1].borderRadius = { topLeft: 3, topRight: 3 };

  destroyChart('engagement');
  const ctx = document.getElementById('engagementChart');
  if (!ctx) return;
  chartInstances['engagement'] = new Chart(ctx, {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      onClick(event, elements) {
        if (elements.length > 0) { openDrill(dates[elements[0].index]); }
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false }, ticks: { maxTicksLimit: 8, maxRotation: 0 },
          border: { display: false },
        },
        y: {
          stacked: true,
          grid: { color: 'rgba(187,173,162,0.15)', drawTicks: false },
          ticks: { callback: v => fmtNum(v) },
          border: { display: false },
          beginAtZero: true,
        },
      },
      plugins: {
        legend: { display: true, position: 'top',
          labels: { boxWidth: 10, boxHeight: 10, borderRadius: 2, padding: 16,
                    font: { family:"'League Spartan',sans-serif", size:10 }, color:'#bbada2' } },
        tooltip: {
          callbacks: {
            title: items => items[0].label,
            label: item => ` ${item.dataset.label}: ${fmtNum(item.raw)}`,
            footer: items => {
              const total = items.reduce((s, i) => s + i.raw, 0);
              return `Total: ${fmtNum(total)}`;
            },
          },
        },
      },
    },
  });
}

// ─── MODULE 7: Decaimento viral ───────────────────────────
function renderViralDecay(rows) {
  const labels = rows.map(r => fmtDate(r.date));
  destroyChart('viral');
  const ctx = document.getElementById('viralChart');
  if (!ctx) return;
  chartInstances['viral'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: rows.map(r => r.total_interactions),
        borderColor: COLORS.amarelo,
        backgroundColor: 'rgba(247,195,28,0.07)',
        borderWidth: 2.5, fill: true, tension: 0.35,
        pointRadius: 0, pointHoverRadius: 5,
        pointHoverBackgroundColor: COLORS.amarelo,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { maxRotation: 0, maxTicksLimit: 6 }, border: { display: false } },
        y: { grid: { color: 'rgba(187,173,162,0.15)', drawTicks: false },
             ticks: { callback: v => fmtNum(v) }, border: { display: false }, beginAtZero: true },
      },
      plugins: {
        tooltip: { callbacks: { label: item => ` ${fmtNum(item.raw)} interações` } },
      },
    },
  });
}

// ─── Sparklines (inline SVG — sem Chart.js) ───────────────
function sparklineSVG(values, color) {
  if (!values || values.length < 2) return '';
  const max = Math.max(...values, 0.001);
  const min = Math.min(...values, 0);
  const range = max - min || 1;
  const W = 100, H = 28, pad = 2;
  const pts = values.map((v, i) => {
    const x = pad + i * (W - 2*pad) / (values.length - 1);
    const y = H - pad - (v - min) / range * (H - 2*pad);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const last = pts.split(' ').pop().split(',');
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:28px;">
    <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${last[0]}" cy="${last[1]}" r="3" fill="${color}"/>
  </svg>`;
}

// ─── Drill-down panel render ──────────────────────────────
function renderDrillPanel(date, dayData) {
  const el = document.getElementById('drillContent');
  if (!el) return;

  const d = new Date(date + 'T12:00:00Z');
  const DAYS = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
  const dayLabel = DAYS[d.getUTCDay()];
  document.getElementById('drillTitle').textContent = `${fmtDate(date)} · ${dayLabel}`;

  let html = '';
  Object.entries(dayData).forEach(([acct, row]) => {
    const label = acct === 'amalluvasconcellos' ? '@amalluvasconcellos' : '@paaps.brasil';
    const color = acct === 'amalluvasconcellos' ? COLORS.terracota : COLORS.oliva;
    const metrics = [
      { k: 'likes',    label: 'Likes',    color: COLORS.amarelo   },
      { k: 'shares',   label: 'Shares',   color: COLORS.terracota },
      { k: 'saves',    label: 'Saves',    color: COLORS.oliva     },
      { k: 'comments', label: 'Comments', color: COLORS.bege      },
    ];
    const total = row.total_interactions;
    html += `
      <div style="margin-bottom:20px;">
        <div style="font-family:'League Spartan',sans-serif;font-size:0.72rem;font-weight:700;color:${color};letter-spacing:0.08em;margin-bottom:10px;">${label}</div>
        ${metrics.map(m => {
          const pct = total > 0 ? row[m.k] / total * 100 : 0;
          return `<div style="margin-bottom:8px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <span style="font-family:'League Spartan',sans-serif;font-size:0.68rem;color:#bbada2;">${m.label}</span>
              <span style="font-family:'League Spartan',sans-serif;font-size:0.68rem;font-weight:700;color:#442309;">${fmtNum(row[m.k])}</span>
            </div>
            <div style="height:6px;background:rgba(68,35,9,0.08);border-radius:3px;">
              <div style="height:100%;width:${Math.min(pct,100)}%;background:${m.color};border-radius:3px;"></div>
            </div>
          </div>`;
        }).join('')}
        <div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid rgba(187,173,162,0.3);margin-top:8px;">
          <span style="font-family:'League Spartan',sans-serif;font-size:0.68rem;color:#bbada2;">Alcance</span>
          <span style="font-family:'League Spartan',sans-serif;font-size:0.68rem;font-weight:700;color:#442309;">${fmtNum(row.reach)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:4px;">
          <span style="font-family:'League Spartan',sans-serif;font-size:0.68rem;color:#bbada2;">Virality score</span>
          <span style="font-family:'League Spartan',sans-serif;font-size:0.68rem;font-weight:700;color:${COLORS.terracota};">${fmtPct(row.virality_score)}</span>
        </div>
      </div>`;
  });
  el.innerHTML = html || '<p style="color:#bbada2;font-size:0.82rem;">Sem dados para este dia.</p>';
}
