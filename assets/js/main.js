// Tukar nombor ini kepada nombor WhatsApp sebenar (format antarabangsa, tanpa + atau sengkang).
const WA_NUMBER = '60123456789';

const CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_3K8zUlKKY3qDgJqZXH9MLvrTga3/hf_20261004_';
const img = (id) => `${CDN}${id}.png`;

const LISTINGS = [
  {
    id: 'semi-d-setia-alam',
    title: 'Semi-D 2 Tingkat Moden',
    location: 'Setia Alam, Shah Alam',
    price: 'RM 1,280,000', priceValue: 1280000,
    type: 'rumah', status: 'jual', hot: true,
    beds: 5, baths: 4, size: '3,200 kps',
    img: img('105608_f772c8e6-684d-4a7a-89d3-8d8a7c85d271'),
    gallery: [
      img('111820_c57c4064-1a4f-42e0-90b3-080067d8c284'),
      img('111902_afd94695-f8fc-4f42-bde0-1bddc940adcb'),
      img('111902_4d1beb02-90a1-41b2-bfd0-90ad48d3d14a'),
      img('111902_e4ad185a-b29b-4b03-a01b-0556c7489b64')
    ],
    desc: 'Semi-D sudut dengan tanah tambahan di kawasan matang Setia Alam. Ruang tamu siling tinggi, dapur basah & kering, dan laman belakang luas untuk BBQ keluarga. 5 minit ke Setia City Mall dan akses terus ke Lebuhraya GCE & KESAS.',
    details: { Pegangan: 'Freehold', 'Keluasan tanah': '40 x 90 kaki', Perabot: 'Separa berperabot', 'Tahun siap': '2018', Parkir: '3 kereta', Status: 'Bebas halangan' },
    features: ['Lot tepi (corner)', 'Gated & guarded 24 jam', 'Dapur basah & kering', 'Bilik tidur di tingkat bawah', 'Laman belakang', 'Dekat sekolah & masjid']
  },
  {
    id: 'kondo-klcc',
    title: 'Kondo Mewah Pemandangan KLCC',
    location: 'Jalan Ampang, Kuala Lumpur',
    price: 'RM 4,800', per: '/bulan',
    type: 'kondo', status: 'sewa',
    beds: 3, baths: 2, size: '1,450 kps',
    img: img('105608_3068e5ab-e254-410f-bfe1-45595ee80314'),
    gallery: [
      img('111902_0f1f428f-b344-409c-a54c-559b5bf88c6c'),
      img('111902_581d2aca-544a-496a-838f-54f901acb68e'),
      img('111902_29f3f4fc-de40-494f-850a-483f279b879d'),
      img('111938_4c1ac3f8-4bb7-46c1-80fb-196eb74e0e26')
    ],
    desc: 'Unit tingkat tinggi dengan pemandangan terus ke Menara Berkembar Petronas. Berperabot penuh, sedia masuk. Kolam infiniti di bumbung, gim dan lounge. Berjalan kaki ke stesen LRT Ampang Park dan Suria KLCC.',
    details: { Pegangan: 'Freehold', Tingkat: '38', Perabot: 'Berperabot penuh', Deposit: '2 + 1 bulan', Parkir: '2 petak', 'Tempoh minimum': '12 bulan' },
    features: ['Pemandangan KLCC', 'Kolam infiniti bumbung', 'Gim & sauna', 'Sekuriti 3 lapis', 'Dekat LRT', 'Sedia masuk']
  },
  {
    id: 'banglo-kota-damansara',
    title: 'Banglo Tropika dengan Kolam',
    location: 'Kota Damansara, Petaling Jaya',
    price: 'RM 3,650,000', priceValue: 3650000,
    type: 'banglo', status: 'jual', hot: true,
    beds: 6, baths: 6, size: '6,800 kps',
    img: img('105608_ad120661-ae8b-4cf0-ab62-4a90bf8408ec'),
    gallery: [
      img('111902_6a444ecc-572e-4b76-9389-55e2d82e85f4'),
      img('111902_e95f9ec7-47b0-4777-8510-2519106e6168'),
      img('111902_8a3ba2d9-d16a-436d-b15a-c96ec416da69'),
      img('111902_625eb6e8-b21d-4543-8a25-38a5625e3e58')
    ],
    desc: 'Banglo rekaan arkitek bertema tropika moden dengan kolam renang peribadi dan dewan dua tingkat. Siling kayu, pintu kaca gelangsar ke taman, dan suite utama dengan balkoni menghadap kolam. Kawasan eksklusif berpengawal.',
    details: { Pegangan: 'Freehold', 'Keluasan tanah': '8,500 kps', Perabot: 'Separa berperabot', 'Tahun siap': '2021', Parkir: '4 kereta', Tingkat: '2.5' },
    features: ['Kolam renang peribadi', 'Lif dalam rumah', 'Bilik pembantu', 'Sistem solar', 'Smart home', 'Taman tropika']
  },
  {
    id: 'teres-rimbayu',
    title: 'Teres 2 Tingkat Gated & Guarded',
    location: 'Bandar Rimbayu, Kota Kemuning',
    price: 'RM 698,000', priceValue: 698000,
    type: 'rumah', status: 'jual',
    beds: 4, baths: 3, size: '2,000 kps',
    img: img('105608_f1db2df6-d17e-42bf-9d0f-2b27f4a3c462'),
    gallery: [
      img('111938_93dfdf75-83ee-4250-8dde-739e3f801eb1'),
      img('111938_6ee8e856-71ff-4a1c-a30a-ff17f659b313'),
      img('111938_08800094-a79f-4e84-a0aa-1435b93f7e6c'),
      img('111938_f9b9b736-3b19-4d53-9ff0-7465abd86e3b')
    ],
    desc: 'Teres dua tingkat dalam komuniti berpagar di Bandar Rimbayu. Sesuai untuk keluarga muda — taman tema, trek berbasikal dan sekolah dalam kawasan. Unit telah diubah suai dengan kabinet dapur baharu.',
    details: { Pegangan: 'Freehold', 'Keluasan tanah': '22 x 75 kaki', Perabot: 'Kosong', 'Tahun siap': '2019', Parkir: '2 kereta', Status: 'Bebas halangan' },
    features: ['Gated & guarded', 'Dapur diubah suai', 'Taman permainan', 'Trek basikal', 'Akses Lebuhraya SKVE', 'Layak skim rumah pertama']
  },
  {
    id: 'tanah-bangi',
    title: 'Tanah Lot Banglo Freehold',
    location: 'Bangi Avenue, Kajang',
    price: 'RM 520,000', priceValue: 520000,
    type: 'tanah', status: 'jual',
    size: '6,000 kps', landTitle: 'Freehold',
    img: img('105608_b406bb49-897e-49eb-9c98-e7f26091f7bc'),
    gallery: [
      img('111938_595f6c51-87d1-4618-9db5-774919c95f00'),
      img('112003_8f26890d-6083-4f00-b70e-a3304f1308c2'),
      img('112003_bf334231-ac7c-43ce-b5e7-69f9780827d2'),
      img('112003_efd9b51a-b0f7-4e08-97e3-17444c0c495c')
    ],
    desc: 'Lot banglo rata dalam township terancang Bangi Avenue — infrastruktur jalan, lampu dan saliran sudah siap. Bebas pilih kontraktor sendiri. Berdekatan taman tasik, sekolah dan akses Lebuhraya LEKAS.',
    details: { Pegangan: 'Freehold', 'Jenis hakmilik': 'Hakmilik individu', 'Kategori tanah': 'Kediaman', Keluasan: '6,000 kps', Muka: 'Rata, siap tambak', Status: 'Bebas halangan' },
    features: ['Hakmilik individu', 'Bebas kontraktor', 'Infrastruktur siap', 'Dekat taman tasik', 'Akses LEKAS', 'Kawasan berkembang pesat']
  },
  {
    id: 'kondo-mont-kiara',
    title: 'Kondo Fully Furnished Mont Kiara',
    location: 'Mont Kiara, Kuala Lumpur',
    price: 'RM 3,200', per: '/bulan',
    type: 'kondo', status: 'sewa',
    beds: 2, baths: 2, size: '1,100 kps',
    img: img('105608_32c9bc9e-4ae4-489f-8ebb-2f112e923d3b'),
    gallery: [
      img('112004_fe75d053-6788-42eb-8e45-9aa2f848e3c8'),
      img('112003_04c098c1-f525-4431-931a-3c237fcf8159'),
      img('112003_0902171b-5762-46f9-9694-9fc89d517b8c'),
      img('112026_c8dd0fa1-d020-4f57-9861-40d0c2cd6440')
    ],
    desc: 'Unit dua bilik berperabot penuh di tengah Mont Kiara — bawa beg je. Lengkap dengan peti sejuk, mesin basuh, ketuhar dan internet. Kolam gaya resort, dekat sekolah antarabangsa dan Publika.',
    details: { Pegangan: 'Freehold', Tingkat: '21', Perabot: 'Berperabot penuh', Deposit: '2 + 1 bulan', Parkir: '1 petak', 'Tempoh minimum': '12 bulan' },
    features: ['Bawa beg je', 'Internet disediakan', 'Kolam gaya resort', 'Dekat sekolah antarabangsa', 'Publika 5 minit', 'Mesra haiwan peliharaan']
  }
];

const ICONS = {
  bed: '<svg viewBox="0 0 24 24"><path d="M3 7v12h2v-3h14v3h2v-7a3 3 0 0 0-3-3h-7v5H5V7zm4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
  bath: '<svg viewBox="0 0 24 24"><path d="M7 4a2 2 0 0 1 2 2h-2v2h4V6a4 4 0 0 0-8 0v6H2v2h1v2a4 4 0 0 0 3 3.9V21h2v-1h8v1h2v-1.1a4 4 0 0 0 3-3.9v-2h1v-2H5V6a2 2 0 0 1 2-2z"/></svg>',
  size: '<svg viewBox="0 0 24 24"><path d="M3 3h8v2H6.4l5.3 5.3-1.4 1.4L5 6.4V11H3zm18 18h-8v-2h4.6l-5.3-5.3 1.4-1.4 5.3 5.3V13h2z"/></svg>',
  camera: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 3 7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>'
};

const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const dealMsg = (p) => `Hai TanahNetizen, saya berminat dengan "${p.title}" di ${p.location} (${p.price}${p.per || ''}). Masih available?`;
const viewingMsg = (p) => `Hai TanahNetizen, saya nak book viewing untuk "${p.title}" di ${p.location}. Tarikh & masa yang sesuai: ___`;

function renderListings() {
  const grid = document.getElementById('listingGrid');
  grid.innerHTML = LISTINGS.map((p) => {
    const specs = p.type === 'tanah'
      ? `<span>${ICONS.size}${p.size}</span><span>${p.landTitle}</span>`
      : `<span>${ICONS.bed}${p.beds} bilik</span><span>${ICONS.bath}${p.baths} bilik air</span><span>${ICONS.size}${p.size}</span>`;
    return `
      <article class="card reveal" data-type="${p.type}" data-status="${p.status}">
        <a class="card__media" href="#hartanah/${p.id}" aria-label="Lihat details ${p.title}">
          <img src="${p.img}" alt="${p.title}, ${p.location}" loading="lazy" width="640" height="480">
          <span class="card__tag ${p.status === 'sewa' ? 'card__tag--sewa' : ''}">${p.status === 'sewa' ? 'Untuk Disewa' : 'Untuk Dijual'}</span>
          ${p.hot ? '<span class="card__hot">🔥 Hot</span>' : ''}
          <span class="card__count">${ICONS.camera}${p.gallery.length + 1}</span>
          <span class="card__view">Lihat Details</span>
        </a>
        <div class="card__body">
          <div class="card__price">${p.price}${p.per ? `<small> ${p.per}</small>` : ''}</div>
          <h3 class="card__title"><a href="#hartanah/${p.id}">${p.title}</a></h3>
          <p class="card__loc">${ICONS.pin}${p.location}</p>
          <div class="card__specs">${specs}</div>
          <div class="card__actions">
            <a class="btn btn--outline" href="#hartanah/${p.id}">Details</a>
            <a class="btn btn--wa" href="${waLink(dealMsg(p))}" target="_blank" rel="noopener">
              <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg> Deal
            </a>
          </div>
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


/* ---------- Property detail modal ---------- */
const modal = {
  el: null, prop: null, images: [], index: 0, lastFocus: null,

  init() {
    this.el = document.getElementById('propertyModal');
    this.el.addEventListener('click', (e) => {
      if (e.target === this.el || e.target.closest('[data-close]')) this.close();
      if (e.target.closest('[data-prev]')) this.go(this.index - 1);
      if (e.target.closest('[data-next]')) this.go(this.index + 1);
      const thumb = e.target.closest('[data-thumb]');
      if (thumb) this.go(+thumb.dataset.thumb);
    });
    this.el.addEventListener('cancel', (e) => { e.preventDefault(); this.close(); });
    document.addEventListener('keydown', (e) => {
      if (!this.el.open) return;
      if (e.key === 'ArrowLeft') this.go(this.index - 1);
      if (e.key === 'ArrowRight') this.go(this.index + 1);
    });
    let startX = null;
    this.el.addEventListener('touchstart', (e) => {
      startX = e.target.closest('.pm__stage') ? e.touches[0].clientX : null;
    }, { passive: true });
    this.el.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) this.go(this.index + (dx < 0 ? 1 : -1));
      startX = null;
    });
    this.el.addEventListener('input', (e) => { if (e.target.closest('.loan')) this.updateLoan(); });
    window.addEventListener('hashchange', () => this.fromHash());
    this.fromHash();
  },

  fromHash() {
    const m = location.hash.match(/^#hartanah\/([\w-]+)$/);
    const p = m && LISTINGS.find((x) => x.id === m[1]);
    if (p) this.open(p);
    else if (this.el.open) this.close(true);
  },

  open(p) {
    if (!this.el.open) this.lastFocus = document.activeElement;
    this.prop = p;
    this.images = [p.img, ...p.gallery];
    this.render();
    this.go(0);
    if (!this.el.open) this.el.showModal();
    document.body.classList.add('modal-open');
    this.el.querySelector('.pm__scroll').scrollTop = 0;
  },

  close(fromHash = false) {
    this.el.close();
    document.body.classList.remove('modal-open');
    if (!fromHash && location.hash.startsWith('#hartanah/')) {
      history.pushState('', document.title, location.pathname + location.search + '#hartanah');
    }
    if (this.lastFocus) this.lastFocus.focus({ preventScroll: true });
  },

  go(i) {
    const n = this.images.length;
    this.index = (i + n) % n;
    const main = this.el.querySelector('.pm__main');
    main.classList.remove('is-in');
    main.src = this.images[this.index];
    main.alt = `${this.prop.title} — gambar ${this.index + 1}`;
    requestAnimationFrame(() => main.classList.add('is-in'));
    this.el.querySelector('.pm__counter').textContent = `${this.index + 1} / ${n}`;
    const strip = this.el.querySelector('.pm__thumbs');
    this.el.querySelectorAll('[data-thumb]').forEach((t, k) => {
      t.classList.toggle('is-active', k === this.index);
      if (k === this.index) strip.scrollTo({ left: t.offsetLeft - (strip.clientWidth - t.offsetWidth) / 2, behavior: 'smooth' });
    });
  },

  updateLoan() {
    const box = this.el.querySelector('.loan');
    if (!box) return;
    const price = this.prop.priceValue;
    const dp = +box.querySelector('[name=dp]').value;
    const rate = +box.querySelector('[name=rate]').value / 100 / 12;
    const years = +box.querySelector('[name=years]').value;
    const principal = price * (1 - dp / 100);
    const n = years * 12;
    const monthly = rate ? principal * rate / (1 - Math.pow(1 + rate, -n)) : principal / n;
    const rm = (v) => 'RM ' + Math.round(v).toLocaleString('en-MY');
    box.querySelector('[data-out=dp]').textContent = `${dp}% (${rm(price * dp / 100)})`;
    box.querySelector('[data-out=rate]').textContent = `${(+box.querySelector('[name=rate]').value).toFixed(2)}%`;
    box.querySelector('[data-out=years]').textContent = `${years} tahun`;
    box.querySelector('[data-out=monthly]').textContent = rm(monthly);
  },

  render() {
    const p = this.prop;
    const isSale = p.status === 'jual';
    const specs = p.type === 'tanah'
      ? `<div><strong>${p.size}</strong><span>Keluasan</span></div><div><strong>${p.landTitle}</strong><span>Pegangan</span></div>`
      : `<div><strong>${p.beds}</strong><span>Bilik tidur</span></div><div><strong>${p.baths}</strong><span>Bilik air</span></div><div><strong>${p.size}</strong><span>Keluasan binaan</span></div>`;
    const loan = isSale ? `
      <div class="loan">
        <h4>Kalkulator Pinjaman</h4>
        <label>Deposit <output data-out="dp"></output><input type="range" name="dp" min="10" max="50" step="5" value="10"></label>
        <label>Kadar faedah <output data-out="rate"></output><input type="range" name="rate" min="3" max="6" step="0.05" value="4.2"></label>
        <label>Tempoh <output data-out="years"></output><input type="range" name="years" min="10" max="35" step="5" value="35"></label>
        <div class="loan__result"><span>Anggaran bulanan</span><strong data-out="monthly"></strong></div>
        <small>Anggaran sahaja. Kadar sebenar bergantung pada bank.</small>
      </div>` : '';

    this.el.querySelector('.pm__scroll').innerHTML = `
      <div class="pm__gallery">
        <div class="pm__stage">
          <img class="pm__main" src="" alt="">
          <button class="pm__nav pm__nav--prev" data-prev aria-label="Gambar sebelum"><svg viewBox="0 0 24 24"><path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z"/></svg></button>
          <button class="pm__nav pm__nav--next" data-next aria-label="Gambar seterusnya"><svg viewBox="0 0 24 24"><path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z"/></svg></button>
          <span class="pm__counter"></span>
        </div>
        <div class="pm__thumbs">
          ${this.images.map((src, k) => `<button data-thumb="${k}" aria-label="Gambar ${k + 1}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}
        </div>
      </div>
      <div class="pm__content">
        <div class="pm__info">
          <div class="pm__tags">
            <span class="card__tag ${isSale ? '' : 'card__tag--sewa'}">${isSale ? 'Untuk Dijual' : 'Untuk Disewa'}</span>
            ${p.hot ? '<span class="card__hot">🔥 Hot</span>' : ''}
          </div>
          <h2 id="pmTitle">${p.title}</h2>
          <p class="card__loc">${ICONS.pin}${p.location}</p>
          <div class="pm__specs">${specs}</div>
          <h4>Tentang hartanah ini</h4>
          <p class="pm__desc">${p.desc}</p>
          <h4>Maklumat</h4>
          <dl class="pm__details">${Object.entries(p.details).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
          <h4>Kemudahan & kelebihan</h4>
          <ul class="checks checks--grid">${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>
        </div>
        <aside class="pm__side">
          <div class="pm__pricebox">
            <span>${isSale ? 'Harga jualan' : 'Sewa bulanan'}</span>
            <strong>${p.price}${p.per ? `<small> ${p.per}</small>` : ''}</strong>
            <a class="btn btn--wa" href="${waLink(dealMsg(p))}" target="_blank" rel="noopener">
              <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg> Deal via WhatsApp
            </a>
            <a class="btn btn--outline" href="${waLink(viewingMsg(p))}" target="_blank" rel="noopener">Book Viewing</a>
          </div>
          ${loan}
          <div class="pm__agent">
            <img src="${img('105608_48d853f4-1126-413c-aada-e3e0b3bdcb25')}" alt="" loading="lazy">
            <div><strong>Ejen TanahNetizen</strong><span>REN 12345 · Respon &lt; 15 minit</span></div>
          </div>
        </aside>
      </div>`;
    this.updateLoan();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderListings();
  initWhatsApp();
  initNav();
  initCounters();
  initReveal();
  modal.init();

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
