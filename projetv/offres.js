// ── offres.js ──────────────────────────────────────
let currentPage = 1;
const LIMIT = 10;
let currentFilters = {};

// Check URL parameters for company filtering
function getUrlFilters() {
  const urlParams = new URLSearchParams(window.location.search);
  const entrepriseId = urlParams.get('entreprise_id');
  if (entrepriseId) {
    return { entreprise_id: entrepriseId };
  }
  return {};
}

// Load company info for header
async function loadCompanyInfo(entrepriseId) {
  try {
    const data = await HH.api(`/entreprises/${entrepriseId}`);
    const header = document.getElementById('companyHeader');
    const logo = document.getElementById('companyLogo');
    const name = document.getElementById('companyName');
    const sector = document.getElementById('companySector');
    
    header.style.display = 'block';
    name.textContent = data.nom || 'Entreprise';
    sector.textContent = data.secteur || 'Secteur non précisé';
    
    if (data.logo_url) {
      logo.innerHTML = `<img src="${data.logo_url}" alt="Logo ${data.nom}" style="width:100%;height:100%;object-fit:cover">`;
    } else {
      logo.innerHTML = `<span style="font-size:16px;font-weight:700;color:var(--gray-700)">${(data.nom || '??').slice(0,2).toUpperCase()}</span>`;
    }
  } catch (err) {
    console.error('Erreur chargement entreprise:', err);
  }
}

async function loadOffres(page = 1, filters = {}) {
  const urlFilters = getUrlFilters();
  const allFilters = { ...filters, ...urlFilters };
  const params = new URLSearchParams({ page, limit: LIMIT, ...allFilters });
  const list   = document.getElementById('offresList');
  list.innerHTML = '<p class="empty-state">Chargement…</p>';

  try {
    const data = await HH.api(`/offres?${params}`);
    currentPage = page;

    const total = data.total;
    const urlParams = new URLSearchParams(window.location.search);
    const entrepriseId = urlParams.get('entreprise_id');
    
    let countText = total === 1 ? '1 offre trouvée' : `${total} offres trouvées`;
    if (entrepriseId) {
      countText += ' pour cette entreprise';
    }
    document.getElementById('countLabel').textContent = countText;

    if (!data.offres.length) {
      list.innerHTML = '<p class="empty-state">Aucune offre ne correspond à vos critères.</p>';
      renderPagination(0);
      return;
    }

    list.innerHTML = data.offres.map(o => `
      <div class="offre-card mb-3">
        <div class="offre-top">
          <div>
            <h3 class="offre-titre">${o.titre}</h3>
            <p class="offre-meta">
              ${o.entreprise_nom || (o.recruteur_prenom + ' ' + o.recruteur_nom) || '—'}
              ${o.localisation ? ' · ' + o.localisation : ''}
              · ${o.type_contrat}
            </p>
          </div>
          <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
            ${isNew(o.date_publication) ? '<span class="tag tag-blue">Nouveau</span>' : ''}
          </div>
        </div>
        <p class="offre-desc">${truncate(o.description, 140)}</p>
        <div class="offre-footer">
          <span class="salary">${o.salaire_min ? o.salaire_min + (o.salaire_max ? '–' + o.salaire_max : '+') + 'k€' : '—'}</span>
          <div style="display:flex;gap:8px;align-items:center">
            <span class="text-xs text-muted">${HH.formatDate(o.date_publication)}</span>
            ${HH.auth.isLogged()
              ? `<button class="btn btn-primary btn-sm" onclick="postuler('${o.id}', this)">Postuler</button>`
              : `<a href="login.html" class="btn btn-primary btn-sm">Postuler</a>`
            }
          </div>
        </div>
      </div>
    `).join('');

    renderPagination(data.total);
  } catch (err) {
    list.innerHTML = '<p class="empty-state">Impossible de charger les offres.</p>';
    HH.Toast.error('Erreur lors du chargement.');
  }
}

function renderPagination(total) {
  const pages = Math.ceil(total / LIMIT);
  const el    = document.getElementById('pagination');
  if (pages <= 1) { el.innerHTML = ''; return; }
  let html = `<button class="page-btn" onclick="loadOffres(${currentPage - 1}, currentFilters)" ${currentPage === 1 ? 'disabled' : ''}>←</button>`;
  for (let i = 1; i <= pages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="loadOffres(${i}, currentFilters)">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="loadOffres(${currentPage + 1}, currentFilters)" ${currentPage === pages ? 'disabled' : ''}>→</button>`;
  el.innerHTML = html;
}

async function postuler(offre_id, btn) {
  btn.disabled = true; btn.textContent = '…';
  try {
    await HH.api('/candidatures', { method: 'POST', body: JSON.stringify({ offre_id }) });
    HH.Toast.success('Candidature envoyée !');
    btn.textContent = 'Postulé ✓'; btn.classList.remove('btn-primary'); btn.classList.add('btn-outline');
  } catch (err) {
    HH.Toast.error(err.message);
    btn.disabled = false; btn.textContent = 'Postuler';
  }
}

function isNew(date) { return Date.now() - new Date(date).getTime() < 86400000 * 3; }
function truncate(str, n) { return str?.length > n ? str.slice(0, n) + '…' : (str || ''); }

// Filtres
function getFilters() {
  return {
    search:       document.getElementById('searchInput').value || undefined,
    localisation: document.getElementById('locInput').value    || undefined,
    type_contrat: document.getElementById('typeInput').value   || undefined,
    salaire_min:  document.getElementById('salInput').value    || undefined,
  };
}

document.getElementById('filterBtn').addEventListener('click', () => {
  const userFilters = getFilters();
  const urlFilters = getUrlFilters();
  currentFilters = { ...userFilters, ...urlFilters };
  loadOffres(1, currentFilters);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  ['searchInput','locInput','typeInput','salInput'].forEach(id => { const el = document.getElementById(id); el.value = ''; });
  document.querySelectorAll('.pill').forEach(p => p.classList.toggle('active', p.dataset.type === ''));
  const urlFilters = getUrlFilters();
  currentFilters = urlFilters;
  loadOffres(1, urlFilters);
});

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') { 
    const userFilters = getFilters();
    const urlFilters = getUrlFilters();
    currentFilters = { ...userFilters, ...urlFilters };
    loadOffres(1, currentFilters); 
  }
});

document.getElementById('typePills').addEventListener('click', (e) => {
  const pill = e.target.closest('.pill');
  if (!pill) return;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  document.getElementById('typeInput').value = pill.dataset.type;
  const userFilters = getFilters();
  const urlFilters = getUrlFilters();
  currentFilters = { ...userFilters, ...urlFilters };
  loadOffres(1, currentFilters);
});

// Init
const urlFilters = getUrlFilters();
currentFilters = urlFilters;
if (urlFilters.entreprise_id) {
  loadCompanyInfo(urlFilters.entreprise_id);
}
loadOffres(1, urlFilters);
