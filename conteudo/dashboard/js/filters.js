// ─── Estado global ────────────────────────────────────────
const dashState = {
  datePreset: 'last_30d',
  accounts: ['amalluvasconcellos', 'paaps.brasil'],
  engagementAccount: 'paaps.brasil',
  rawData: null,
  processed: null,
  linkedInProcessed: null,
  drillDate: null,
};

// ─── Orquestrador de re-render ─────────────────────────────
function applyFilters() {
  if (!dashState.rawData) return;
  const filtered = dashState.rawData.filter(r => dashState.accounts.includes(r.account_name));
  dashState.processed = processData(filtered);
  renderKPIs();
  renderReachChart();
  renderEngagementChart();
  renderQualityTiles();
  renderHeatmap();
  renderViralSection();
  renderWoW();
  renderInsights();
}

// ─── Carrega dados da API (com loading state) ─────────────
async function loadData() {
  showLoading(true);
  try {
    const [igData, liData] = await Promise.all([
      fetchInsights(dashState.datePreset),
      fetchLinkedIn(dashState.datePreset),
    ]);
    dashState.rawData = igData;
    dashState.linkedInProcessed = processLinkedIn(liData);
    applyFilters();
    renderLinkedIn();
    setLastUpdated();
  } catch (e) {
    console.error('Erro Windsor API:', e);
    showApiError(e.message);
  } finally {
    showLoading(false);
  }
}

// ─── Wiring dos botões de filtro ─────────────────────────
function wireFilters() {
  // Período
  document.querySelectorAll('[data-period]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-period]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      dashState.datePreset = btn.dataset.period;
      loadData();
    });
  });

  // Conta
  document.querySelectorAll('[data-account]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.account;
      document.querySelectorAll('[data-account]').forEach(b => b.classList.remove('active-both','active-amallu','active-paaps'));
      if (val === 'both') {
        btn.classList.add('active-both');
        dashState.accounts = ['amalluvasconcellos','paaps.brasil'];
      } else if (val === 'amallu') {
        btn.classList.add('active-amallu');
        dashState.accounts = ['amalluvasconcellos'];
      } else {
        btn.classList.add('active-paaps');
        dashState.accounts = ['paaps.brasil'];
      }
      applyFilters();
    });
  });

  // Toggle do gráfico de engajamento
  document.querySelectorAll('[data-eng-account]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-eng-account]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      dashState.engagementAccount = btn.dataset.engAccount;
      renderEngagementChart();
    });
  });
}

// ─── Drill-down ──────────────────────────────────────────
function openDrill(date) {
  dashState.drillDate = date;
  const { byAccount } = dashState.processed;
  const rows = [...(byAccount['amalluvasconcellos']||[]), ...(byAccount['paaps.brasil']||[])];
  const dayData = {};
  Object.entries(byAccount).forEach(([acct, arr]) => {
    const r = arr.find(x => x.date === date);
    if (r) dayData[acct] = r;
  });
  renderDrillPanel(date, dayData);
  document.getElementById('drillPanel').classList.add('visible');
  document.getElementById('drillPeek').textContent = '← Fechar';
  document.getElementById('drillPeek').style.right = '340px';
}

function closeDrill() {
  document.getElementById('drillPanel').classList.remove('visible');
  document.getElementById('drillPeek').textContent = 'Detalhe do dia →';
  document.getElementById('drillPeek').style.right = '0';
  dashState.drillDate = null;
}

// ─── UI helpers ──────────────────────────────────────────
function showLoading(on) {
  document.querySelectorAll('.skeleton').forEach(el => {
    el.style.display = on ? 'block' : 'none';
  });
  document.querySelectorAll('.data-content').forEach(el => {
    el.style.opacity = on ? '0' : '1';
  });
}

function showApiError(msg) {
  const el = document.getElementById('apiError');
  if (el) { el.textContent = `Erro ao carregar dados: ${msg}`; el.style.display = 'block'; }
}

function setLastUpdated() {
  const el = document.getElementById('lastUpdated');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleString('pt-BR', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' });
  }
}

function badgeHtml(pct) {
  const v = Math.round(pct);
  if (v > 2)  return `<span class="badge-up">▲ +${v}%</span>`;
  if (v < -2) return `<span class="badge-down">▼ ${v}%</span>`;
  return `<span class="badge-flat">→ estável</span>`;
}
