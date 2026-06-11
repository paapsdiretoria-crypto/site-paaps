// Chave carregada de config.js (arquivo local, não commitado — ver config.example.js)
// Fallback embutido para deploy estático (GitHub Pages) — chave read-only de analytics
const WINDSOR_KEY    = window.WINDSOR_KEY || '9eb053a4f777b26fa206935de045bbccd5ca';
const WINDSOR_FIELDS = 'date,account_name,followers_count,reach,likes,comments,shares,saves,total_interactions';
const WINDSOR_BASE   = 'https://connectors.windsor.ai/all';

async function fetchInsights(datePreset = 'last_30d') {
  const url = `${WINDSOR_BASE}?api_key=${WINDSOR_KEY}&date_preset=${datePreset}&fields=${WINDSOR_FIELDS}&datasource=instagram_insights`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Windsor API erro ${res.status}`);
  const json = await res.json();
  return json.data || [];
}

function processData(rawData) {
  const ACCOUNTS = ['amalluvasconcellos', 'paaps.brasil'];
  const byAccount = { amalluvasconcellos: [], 'paaps.brasil': [] };
  const followers  = {};

  rawData.forEach(row => {
    const a = row.account_name;
    if (!ACCOUNTS.includes(a)) return;
    if (row.followers_count !== null && row.followers_count > 0) followers[a] = row.followers_count;
    if (row.reach === null && row.total_interactions === null) return;

    const reach = row.reach || 0;
    const li    = row.likes  || 0;
    const co    = row.comments || 0;
    const sh    = row.shares || 0;
    const sa    = row.saves  || 0;
    const ti    = row.total_interactions || 0;

    byAccount[a].push({
      date: row.date, reach, likes: li, comments: co, shares: sh, saves: sa,
      total_interactions: ti,
      save_rate:    reach > 0 ? sa / reach * 100 : 0,
      share_rate:   reach > 0 ? sh / reach * 100 : 0,
      comment_rate: reach > 0 ? co / reach * 100 : 0,
      like_rate:    reach > 0 ? li / reach * 100 : 0,
      engagement_rate: reach > 0 ? ti / reach * 100 : 0,
      virality_score:  ti > 0 ? (sh + sa) / ti * 100 : 0,
    });
  });

  ACCOUNTS.forEach(a => byAccount[a].sort((x, y) => x.date.localeCompare(y.date)));

  // Totals per account
  const totals = {};
  ACCOUNTS.forEach(a => {
    const rows = byAccount[a];
    const t = { reach: _sum(rows,'reach'), likes: _sum(rows,'likes'), comments: _sum(rows,'comments'),
                shares: _sum(rows,'shares'), saves: _sum(rows,'saves'), total_interactions: _sum(rows,'total_interactions') };
    const tr = t.reach;
    t.avg_save_rate       = tr > 0 ? t.saves    / tr * 100 : 0;
    t.avg_share_rate      = tr > 0 ? t.shares   / tr * 100 : 0;
    t.avg_comment_rate    = tr > 0 ? t.comments / tr * 100 : 0;
    t.avg_like_rate       = tr > 0 ? t.likes    / tr * 100 : 0;
    t.avg_engagement_rate = tr > 0 ? t.total_interactions / tr * 100 : 0;
    totals[a] = t;
  });

  // Viral event detection: days where total_interactions > mean + 2σ
  const viralEvents = {};
  ACCOUNTS.forEach(a => {
    const vals = byAccount[a].map(r => r.total_interactions);
    const mean = vals.reduce((s,v) => s+v, 0) / (vals.length || 1);
    const σ    = Math.sqrt(vals.reduce((s,v) => s + Math.pow(v-mean,2), 0) / (vals.length || 1));
    const thr  = mean + 2*σ;
    viralEvents[a] = thr > 0 ? byAccount[a].filter(r => r.total_interactions > thr) : [];
  });

  // Weekday averages: Mon=0 … Sun=6 (Brazilian week start)
  const weekdays = {};
  ACCOUNTS.forEach(a => {
    const buckets = Array.from({length:7}, () => ({ sum:0, count:0 }));
    byAccount[a].forEach(row => {
      const d = new Date(row.date + 'T12:00:00Z');
      const js = d.getUTCDay();            // 0=Sun
      const br = js === 0 ? 6 : js - 1;   // Mon=0…Sun=6
      buckets[br].sum   += row.total_interactions;
      buckets[br].count += 1;
    });
    weekdays[a] = buckets.map(b => b.count > 0 ? b.sum / b.count : 0);
  });

  // Week-over-week: split period in two halves
  const wow = {};
  ACCOUNTS.forEach(a => {
    const rows = byAccount[a];
    const half = Math.floor(rows.length / 2);
    const cur  = rows.slice(half);
    const prv  = rows.slice(0, half);
    wow[a] = {};
    ['reach','total_interactions','saves','shares','comments'].forEach(m => {
      const c = _sum(cur, m), p = _sum(prv, m);
      wow[a][m] = { current: c, previous: p, pct: p > 0 ? (c-p)/p*100 : 0 };
    });
  });

  return { byAccount, followers, totals, viralEvents, weekdays, wow };
}

// ─── helpers ───────────────────────────────────────────
function _sum(rows, field) { return rows.reduce((s,r) => s + (r[field]||0), 0); }

function allDates(byAccount) {
  const set = new Set();
  Object.values(byAccount).forEach(rows => rows.forEach(r => set.add(r.date)));
  return Array.from(set).sort();
}

function valueOn(rows, date, field) {
  const row = rows.find(r => r.date === date);
  return row !== undefined ? (row[field] ?? null) : null;
}

function fmtDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00Z');
  return d.toLocaleDateString('pt-BR', { day:'2-digit', month:'short', timeZone:'UTC' });
}

function fmtNum(n) {
  if (n >= 1000) return (n/1000).toFixed(n >= 10000 ? 0 : 1) + 'k';
  return Math.round(n).toLocaleString('pt-BR');
}

function fmtPct(n) { return (Math.round(n * 10) / 10).toFixed(1) + '%'; }
