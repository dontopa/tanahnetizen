// Tukar nombor ini kepada nombor WhatsApp sebenar (format antarabangsa, tanpa + atau sengkang).
const WA_NUMBER = '60123456789';

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3K8zUlKKY3qDgJqZXH9MLvrTga3/hf_20261004_105608_';

const LISTINGS = [
  {
    title: 'Semi-D 2 Tingkat Moden',
    location: 'Setia Alam, Shah Alam',
    price: 'RM 1,280,000',
    type: 'rumah', status: 'jual', hot: true,
    beds: 5, baths: 4, size: '3,200 kps',
    img: CDN + 'f772c8e6-684d-4a7a-89d3-8d8a7c85d271.png'
  },
  {
    title: 'Kondo Mewah Pemandangan KLCC',
    location: 'Jalan Ampang, Kuala Lumpur',
    price: 'RM 4,800', per: '/bulan',
    type: 'kondo', status: 'sewa',
    beds: 3, baths: 2, size: '1,450 kps',
    img: CDN + '3068e5ab-e254-410f-bfe1-45595ee80314.png'
  },
  {
    title: 'Banglo Tropika dengan Kolam',
    location: 'Kota Damansara, Petaling Jaya',
    price: 'RM 3,650,000',
    type: 'banglo', status: 'jual', hot: true,
    beds: 6, baths: 6, size: '6,800 kps',
    img: CDN + 'ad120661-ae8b-4cf0-ab62-4a90bf8408ec.png'
  },
  {
    title: 'Teres 2 Tingkat Gated & Guarded',
    location: 'Bandar Rimbayu, Kota Kemuning',
    price: 'RM 698,000',
    type: 'rumah', status: 'jual',
    beds: 4, baths: 3, size: '2,000 kps',
    img: CDN + 'f1db2df6-d17e-42bf-9d0f-2b27f4a3c462.png'
  },
  {
    title: 'Tanah Lot Banglo Freehold',
    location: 'Bangi Avenue, Kajang',
    price: 'RM 520,000',
    type: 'tanah', status: 'jual',
    size: '6,000 kps', landTitle: 'Freehold',
    img: CDN + 'b406bb49-897e-49eb-9c98-e7f26091f7bc.png'
  },
  {
    title: 'Kondo Fully Furnished Mont Kiara',
    location: 'Mont Kiara, Kuala Lumpur',
    price: 'RM 3,200', per: '/bulan',
    type: 'kondo', status: 'sewa',
    beds: 2, baths: 2, size: '1,100 kps',
    img: CDN + '32c9bc9e-4ae4-489f-8ebb-2f112e923d3b.png'
  }
];

const ICONS = {
  bed: '<svg viewBox="0 0 24 24"><path d="M3 7v12h2v-3h14v3h2v-7a3 3 0 0 0-3-3h-7v5H5V7zm4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
  bath: '<svg viewBox="0 0 24 24"><path d="M7 4a2 2 0 0 1 2 2h-2v2h4V6a4 4 0 0 0-8 0v6H2v2h1v2a4 4 0 0 0 3 3.9V21h2v-1h8v1h2v-1.1a4 4 0 0 0 3-3.9v-2h1v-2H5V6a2 2 0 0 1 2-2z"/></svg>',
  size: '<svg viewBox="0 0 24 24"><path d="M3 3h8v2H6.4l5.3 5.3-1.4 1.4L5 6.4V11H3zm18 18h-8v-2h4.6l-5.3-5.3 1.4-1.4 5.3 5.3V13h2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>'
};

const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function renderListings() {
  const grid = document.getElementById('listingGrid');
  grid.innerHTML = LISTINGS.map((p) => {
    const specs = p.type === 'tanah'
      ? `<span>${ICONS.size}${p.size}</span><span>${p.landTitle}</span>`
      : `<span>${ICONS.bed}${p.beds} bilik</span><span>${ICONS.bath}${p.baths} bilik air</span><span>${ICONS.size}${p.size}</span>`;
    const msg = `Hai TanahNetizen, saya berminat dengan "${p.title}" di ${p.location} (${p.price}${p.per || ''}). Masih available?`;
    return `
      <article class="card reveal" data-type="${p.type}" data-status="${p.status}">
        <div class="card__media">
          <img src="${p.img}" alt="${p.title}, ${p.location}" loading="lazy" width="640" height="480">
          <span class="card__tag ${p.status === 'sewa' ? 'card__tag--sewa' : ''}">${p.status === 'sewa' ? 'Untuk Disewa' : 'Untuk Dijual'}</span>
          ${p.hot ? '<span class="card__hot">🔥 Hot</span>' : ''}
        </div>
        <div class="card__body">
          <div class="card__price">${p.price}${p.per ? `<small> ${p.per}</small>` : ''}</div>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__loc">${ICONS.pin}${p.location}</p>
          <div class="card__specs">${specs}</div>
          <a class="btn btn--wa" href="${waLink(msg)}" target="_blank" rel="noopener">
            <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg> Deal via WhatsApp
          </a>
        </div>
      </article>`;
  }).join('');
}

function applyFilter(type, status = 'all') {
  let shown = 0;
  document.querySelectorAll('.card').forEach((card) => {
    const ok = (type === 'all' || card.dataset.type === type) && (status === 'all' || card.dataset.status === status);
    card.classList.toggle('is-hidden', !ok);
    if (ok) { shown++; card.classList.add('is-visible'); }
  });
  document.getElementById('emptyState').hidden = shown > 0;
  document.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-active', c.dataset.filter === type));
}

function initWhatsApp() {
  document.querySelectorAll('[data-wa]').forEach((el) => { el.href = waLink(el.dataset.wa); });
  const float = document.querySelector('.wa-float');
  setTimeout(() => float.classList.add('show-tip'), 2500);
  setTimeout(() => float.classList.remove('show-tip'), 7000);
}

function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav__links a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '+';
      const start = performance.now();
      const tick = (t) => {
        const k = Math.min((t - start) / 1600, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))).toLocaleString('en-MY') + (k === 1 ? suffix : '');
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach((el) => io.observe(el));
}

function initReveal() {
  document.querySelectorAll('.service, .quote, .about__media, .about__body, .cta').forEach((el) => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderListings();
  initWhatsApp();
  initNav();
  initCounters();
  initReveal();

  document.querySelectorAll('.chip').forEach((chip) => chip.addEventListener('click', () => applyFilter(chip.dataset.filter)));
  document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    applyFilter(document.getElementById('fType').value, document.getElementById('fStatus').value);
    document.getElementById('hartanah').scrollIntoView();
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  const video = document.getElementById('heroVideo');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
});
