function chips(arr) {
  if (!arr || !arr.length) return '';
  return '<div class="chips">' + arr.map(c => '<span class="chip">' + c + '</span>').join('') + '</div>';
}

function linkArrow(link, note) {
  // No public link (private repo etc.) → show a quiet note instead of nothing.
  if (!link) return note ? '<span class="link-note">' + note + '</span>' : '';
  const external = !link.href.startsWith('#');
  return '<a class="link-arrow" href="' + link.href + '"' +
    (external ? ' target="_blank" rel="noopener"' : '') + '>' + link.label + '</a>';
}

function eyebrow(label) {
  return '<p class="eyebrow">' + label + '</p>';
}

// Real tool logos: files written by the taste kit's icons.mjs into assets/icons/.
const LOGO_NAMES = {
  go: 'Go', python: 'Python', pytorch: 'PyTorch', java: 'Java', kotlin: 'Kotlin', kubernetes: 'Kubernetes',
  helm: 'Helm', 'terraform-icon': 'Terraform', docker: 'Docker', nginx: 'nginx', aws: 'AWS',
  'github-actions': 'GitHub Actions', 'argo-icon': 'Argo CD', influxdb: 'InfluxDB', 'mongodb-icon': 'MongoDB',
  postgres: 'PostgreSQL', redis: 'Redis', ieee: 'IEEE', prometheus: 'Prometheus', grafana: 'Grafana', kafka: 'Kafka',
};
const WIDE_LOGOS = ['go', 'ieee'];
function logo(id, asButton) {
  const name = LOGO_NAMES[id] || id;
  const cls = 'logo-tile' + (WIDE_LOGOS.includes(id) ? ' wide' : '');
  const img = '<img src="assets/icons/' + id + '.svg" alt="' + (asButton ? '' : name) + '" loading="lazy">';
  // In the strip a logo is a button that jumps to its skill card; elsewhere it only names itself.
  return asButton
    ? '<button type="button" class="' + cls + '" data-logo="' + id + '" data-name="' + name + '" aria-label="' + name + ': show in skills">' + img + '</button>'
    : '<span class="' + cls + '" data-name="' + name + '">' + img + '</span>';
}

// Line glyphs (Lucide) for cards with no brand behind them; inline so they take the text colour.
const GLYPHS = {
  'gauge': '<path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0"/>',
  'plug-zap': '<path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6l-2.3 2.3a2.4 2.4 0 0 0 0 3.4ZM2 22l3-3m2.5-5.5L10 11m.5 5.5L13 14m5-11l-4 4h6l-4 4"/>',
  'battery-charging': '<path d="m11 7l-3 5h4l-3 5m5.856-11H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935M22 14v-4M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/>',
  'lock-keyhole': '<circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>',
  'cpu': '<path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"/><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="8" height="8" x="8" y="8" rx="1"/>',
  'folder-open': '<path d="m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/>',
  'scan-search': '<path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16l-1.9-1.9"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12l2 2l4-4"/>',
};
function glyph(id) {
  return '<span class="glyph-tile" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    (GLYPHS[id] || '') + '</svg></span>';
}

// ---- Section builders ---------------------------------------

function buildNav() {
  const { nav } = CONTENT;
  // Section id → nav label (ids alone read oddly: "feats", "hobbies")
  const sections = {
    about: 'About', skills: 'Skills', experience: 'Experience', university: 'University',
    projects: 'Projects', feats: 'Papers', hobbies: 'Photography', contact: 'Contact',
  };
  const navItems = Object.entries(sections).map(([id, label]) =>
    '<li><a href="#' + id + '">' + label + '</a></li>'
  ).join('');
  return `
<header class="nav" id="nav">
  <div class="nav-inner">
    <a class="brand" href="#top">${nav.brand}</a>
    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">&#9776;</button>
    <ul class="nav-links" id="navLinks">
      ${navItems}
      <li><a class="pill-sm" href="mailto:${CONTENT.contact.email}">Say hello</a></li>
    </ul>
  </div>
</header>`;
}

function buildHero() {
  const { hero, meta } = CONTENT;
  return `
<section class="hero" id="top">
  <div class="hero-fx" data-fx="painterly-landscape" data-fx-seed="4821" data-fx-params='{"calmX":0.3,"calmY":0.5}' aria-hidden="true"></div>
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="hello enter" style="--d:0">${hero.greeting}</p>
      <h1 class="enter" style="--d:1">${hero.nameLine1}<br>${hero.nameLine2}</h1>
      <p class="lede enter" style="--d:2">${hero.tagline}</p>
      <p class="sub enter" style="--d:3">${hero.sub}</p>
      ${hero.availability ? '<p class="avail enter" style="--d:4">' + hero.availability + '</p>' : ''}
      <div class="btn-row enter" style="--d:4">
        <a class="btn btn-fill" href="#thesis">Read about my thesis</a>
        <a class="btn btn-line" href="#contact">Get in touch</a>
      </div>
    </div>
    <div class="portrait enter" style="--d:2">
      <picture>
        ${meta.photoAvif ? '<source srcset="' + meta.photoAvif + '" type="image/avif">' : ''}
        <img src="${meta.photoPath}" alt="${meta.photoAlt}" width="636" height="1180"
          onerror="(this.closest('picture')||this).replaceWith(Object.assign(document.createElement('div'),{className:'portrait-fallback',textContent:'AS'}))">
      </picture>
    </div>
  </div>
</section>`;
}

function buildStats() {
  const items = CONTENT.stats.map(s =>
    `<div class="stat">
      <div class="num" data-count="${s.count}"${s.suffix ? ' data-suffix="' + s.suffix + '"' : ''}>0</div>
      <div class="lbl">${s.label}</div>
    </div>`
  ).join('');
  const stack = (CONTENT.skills.stack || []).map(id => logo(id, true)).join('');
  return `
<div class="stats">
  <div class="wrap stats-grid">${items}</div>
  ${stack ? '<div class="wrap stack"><p class="stack-label">What I ship with</p><div class="stack-row">' + stack + '</div></div>' : ''}
</div>`;
}

function buildAbout() {
  const { about } = CONTENT;
  const paras  = about.paragraphs.map(p => '<p>' + p + '</p>').join('');
  const facts  = about.facts.map(f =>
    '<li><span class="k">' + f.key + '</span><span class="v">' + f.value + '</span></li>'
  ).join('');
  return `
<section id="about">
  <div class="wrap">
    <div class="sec-head">
      ${eyebrow('About')}
      <h2 class="statement" data-moment="word-highlight">${about.statement}</h2>
    </div>
    <div class="about-grid">
      <div>${paras}</div>
      <ul class="facts">${facts}</ul>
    </div>
  </div>
</section>`;
}

function buildSkills() {
  const { skills } = CONTENT;
  const tabBtns = skills.tabs.map((t, i) =>
    '<button role="tab" id="tab-' + t.id + '" aria-controls="' + t.id + '" aria-selected="' + (i === 0) +
    '" tabindex="' + (i === 0 ? 0 : -1) + '" data-panel="' + t.id + '">' + t.label + '</button>'
  ).join('');
  const panels = skills.tabs.map((tab, i) => {
    const cards = tab.cards.map(c =>
      `<div class="skill-card spot">
        <div class="card-marks">${(c.logos || []).map(id => logo(id)).join('')}${c.glyph ? glyph(c.glyph) : ''}</div>
        <p class="tag">${c.tag}</p>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        ${chips(c.chips)}
      </div>`
    ).join('');
    return '<div class="panel' + (i === 0 ? ' active' : '') + '" id="' + tab.id + '" role="tabpanel" aria-labelledby="tab-' + tab.id + '"><div class="skill-grid">' + cards + '</div></div>';
  }).join('');
  return `
<section id="skills" class="alt">
  <div class="wrap">
    <div class="sec-head center">
      ${eyebrow('Skills')}
      <h2>${skills.heading}</h2>
      <p class="sub">${skills.sub}</p>
    </div>
    <div class="seg-wrap">
      <div class="seg" role="tablist" aria-label="Skill categories">
        <span class="seg-ind" aria-hidden="true"></span>
        ${tabBtns}
      </div>
    </div>
    ${panels}
  </div>
</section>`;
}

function buildExperience() {
  const { experience } = CONTENT;
  const timeline = experience.jobs.map(job => {
    const bullets = job.bullets.map(b => '<li>' + b + '</li>').join('');
    return `<div class="t-item">
      <p class="t-date">${job.date}</p>
      <h3>${job.title}</h3>
      <p class="org">${job.org}</p>
      <ul>${bullets}</ul>
      ${chips(job.chips)}
    </div>`;
  }).join('');
  const eduCards = experience.education.map(edu =>
    `<div class="edu-card spot">
      <h3>${edu.degree}</h3>
      <p class="org">${edu.org}</p>
      <p>${edu.desc}</p>
      ${edu.badge ? '<span class="badge">' + edu.badge + '</span>' : ''}
    </div>`
  ).join('');
  return `
<section id="experience">
  <div class="wrap">
    <div class="sec-head">
      ${eyebrow('Track record')}
      <h2>${experience.heading}</h2>
    </div>
    <div class="xp-grid">
      <div>
        <p class="col-title">Experience</p>
        <div class="timeline">${timeline}</div>
      </div>
      <div>
        <p class="col-title">Education</p>
        ${eduCards}
      </div>
    </div>
  </div>
</section>`;
}

function buildUniversity() {
  const { university } = CONTENT;
  const cards = university.projects.map(proj => {
    return `<article class="uni-card spot${proj.link ? ' card-link' : ''}">
      ${proj.image ? '<img class="uni-art" src="' + proj.image + '" alt="" loading="lazy">' : ''}
      <p class="sem">${proj.sem}</p>
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
      ${chips(proj.chips)}
      ${linkArrow(proj.link)}
    </article>`;
  }).join('');
  return `
<section id="university" class="alt">
  <div class="wrap-wide">
    <div class="car-head">
      <div class="sec-head" style="margin-bottom:0">
        ${eyebrow('University projects')}
        <h2>${university.heading}</h2>
        <p class="sub">${university.sub}</p>
      </div>
      <div class="car-btns">
        <button class="car-btn" id="carPrev" aria-label="Previous projects">&#8592;</button>
        <button class="car-btn" id="carNext" aria-label="Next projects">&#8594;</button>
      </div>
    </div>
    <div class="carousel" id="carousel" tabindex="0" role="region" aria-label="University projects">${cards}</div>
  </div>
</section>`;
}

function buildProjects() {
  const { projects } = CONTENT;
  const { featured, grid } = projects;

  // Thesis diagram: drawn and animated by assets/diagrams (mounted from index.html).
  // JSON goes in a script tag so apostrophes in labels can't break an attribute.
  const featuredViz = featured.diagram
    ? '<div class="dg" data-diagram><script type="application/json">' +
      JSON.stringify(featured.diagram).replace(/</g, '\\u003c') + '</script></div>'
    : '';

  const gridCards = grid.map(proj => {
    // Cards either bring their own image, or get a generated gradient
    // thumb from icon + thumbLabel (see js/content/projects.js).
    const media = proj.image
      ? `<img src="${proj.image}" alt="${proj.imageAlt}" loading="lazy">`
      : `<div class="proj-thumb" aria-hidden="true"><span>${proj.icon || '⚙️'}</span><p>${proj.thumbLabel || ''}</p></div>`;
    return `<article class="proj-card spot${proj.link ? ' card-link' : ''}">
      ${media}
      <div class="pad">
        <p class="tag">${proj.tag}</p>
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        ${linkArrow(proj.link, proj.note)}
      </div>
    </article>`;
  }).join('');

  return `
<section id="projects">
  <div class="wrap">
    <div class="sec-head center">
      ${eyebrow('Projects')}
      <h2>${projects.heading}</h2>
    </div>
    <article class="featured spot" id="thesis">
      <div class="viz panel">${featuredViz}</div>
      <div class="body">
        <p class="tag">${featured.tag}</p>
        <h3>${featured.title}</h3>
        <p>${featured.desc}</p>
        ${linkArrow(featured.link, featured.note)}
      </div>
    </article>
    <div class="proj-grid">${gridCards}</div>
  </div>
</section>`;
}

function buildFeats() {
  const { feats } = CONTENT;
  const items = feats.items.map(f =>
    `<div class="feat spot${f.link ? ' card-link' : ''}">
      <div class="card-marks">${(f.logos || []).map(id => logo(id)).join('')}${f.glyph ? glyph(f.glyph) : ''}</div>
      <p class="src">${f.src}</p>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
      ${linkArrow(f.link)}
    </div>`
  ).join('');
  return `
<section id="feats" class="alt">
  <div class="wrap">
    <div class="sec-head center">
      ${eyebrow('Feats')}
      <h2>${feats.heading}</h2>
    </div>
    <div class="feats-grid">${items}</div>
  </div>
</section>`;
}

function buildHobbies() {
  const { hobbies } = CONTENT;

  const story = hobbies.photoStory.map(p => '<p>' + p + '</p>').join('');

  const photos = (hobbies.photos || []).map(p =>
    `<div class="photo-item">
      <img src="${p.src}" alt="${p.caption}, ${p.location}" loading="lazy"
        onerror="var i=this.closest('.photo-item');if(i)i.remove()">
    </div>`
  ).join('');

  const countries = hobbies.countries.map(c =>
    '<span class="country-tag">' + c + '</span>'
  ).join('');

  return `
<section id="hobbies">
  <div class="wrap">
    <div class="sec-head center">
      ${eyebrow(hobbies.eyebrow)}
      <h2>${hobbies.heading}</h2>
      <p class="sub">${hobbies.sub}</p>
    </div>
    <div class="hobby-story">
      <div class="hobby-text">${story}</div>
      <div class="gear-card spot">
        <p class="gear-label">Gear</p>
        <p class="gear-value">${hobbies.gear}</p>
      </div>
    </div>
    ${photos ? '<div class="photo-mosaic">' + photos + '</div>' : ''}
    <div class="country-tags">${countries}</div>
  </div>
</section>`;
}

function buildContact() {
  const { contact, meta } = CONTENT;
  const socLinks = contact.social.map(s =>
    '<a href="' + s.href + '" target="_blank" rel="noopener"><span>' + s.label + '</span><span>' + s.handle + ' &#8599;</span></a>'
  ).join('');
  return `
<section class="contact" id="contact">
  <div class="wrap">
    <div style="text-align:center">
      ${eyebrow('Contact')}
      <h2>${contact.heading}</h2>
      <p class="sub" style="margin-left:auto;margin-right:auto">${contact.sub}</p>
      <a class="btn btn-fill" href="mailto:${contact.email}">Say hello</a>
    </div>
    <div class="contact-grid">
      <div>
        <div class="c-row"><span class="k">Email</span><a href="mailto:${contact.email}">${contact.email}</a><button type="button" class="copy-btn" data-copy="${contact.email}">Copy</button></div>
        <div class="c-row"><span class="k">Phone</span><a href="tel:${contact.phone.replace(/\s/g,'')}">${contact.phone}</a></div>
        <div class="c-row"><span class="k">Base</span><span>${contact.base}</span></div>
      </div>
      <div class="soc">${socLinks}</div>
    </div>
  </div>
  <div class="fineprint">
    <div class="wrap">
      <span>&#169; <span id="year"></span> ${meta.name}. All rights reserved.</span>
      <span>${contact.footer}</span>
    </div>
  </div>
</section>`;
}

// ---- Render all sections ------------------------------------

document.title = CONTENT.meta.title;

// One failing section builder logs instead of blanking the whole page.
const safe = f => { try { return f(); } catch (e) { console.error(f.name, e); return ''; } };

document.body.innerHTML =
  '<a class="skip-link" href="#about">Skip to content</a>' +
  safe(buildNav) +
  '<main>' + [
    buildHero,
    buildStats,
    buildAbout,
    buildSkills,
    buildExperience,
    buildUniversity,
    buildProjects,
    buildFeats,
    buildHobbies,
    buildContact,
  ].map(safe).join('\n') + '</main>';

// ---- Wire up behaviors --------------------------------------
// Every block guards its elements: a removed section must not kill the rest.

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Nav: frosted border on scroll + mobile toggle
const nav = document.getElementById('nav');
if (nav) addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('navLinks');
function setMenu(open) {
  navLinks.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.innerHTML = open ? '&#10005;' : '&#9776;';
}
if (toggle && navLinks) {
  toggle.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) { setMenu(false); toggle.focus(); }
  });
}

// Count-up stats
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const cio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    const target = +e.target.dataset.count;
    const suffix = e.target.dataset.suffix || '';
    if (reduced) { e.target.textContent = target + suffix; return; }
    const t0 = performance.now(), dur = 1200;
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      e.target.textContent = Math.round(eased * target) + (p === 1 ? suffix : '');
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.num[data-count]').forEach(c => cio.observe(c));

// Segmented control (skills tabs) — click, arrow keys, roving tabindex
const seg = document.querySelector('.seg');
let selectSkillTab = null;
if (seg) {
  const segBtns = [...seg.querySelectorAll('button')];
  const ind = seg.querySelector('.seg-ind');
  const moveInd = btn => {
    ind.style.width = btn.offsetWidth + 'px';
    ind.style.transform = 'translateX(' + (btn.offsetLeft - 4) + 'px)';
  };
  const selectTab = (btn, focus) => {
    segBtns.forEach(b => {
      b.setAttribute('aria-selected', b === btn);
      b.tabIndex = b === btn ? 0 : -1;
    });
    document.querySelectorAll('.panel[role="tabpanel"]').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById(btn.dataset.panel);
    if (panel) panel.classList.add('active');
    moveInd(btn);
    if (focus) btn.focus();
  };
  selectSkillTab = panelId => { const b = segBtns.find(x => x.dataset.panel === panelId); if (b) selectTab(b); };
  segBtns.forEach(b => b.addEventListener('click', () => selectTab(b)));
  seg.addEventListener('keydown', e => {
    const i = segBtns.indexOf(document.activeElement);
    if (i < 0) return;
    let next = null;
    if (e.key === 'ArrowRight') next = segBtns[(i + 1) % segBtns.length];
    else if (e.key === 'ArrowLeft') next = segBtns[(i - 1 + segBtns.length) % segBtns.length];
    else if (e.key === 'Home') next = segBtns[0];
    else if (e.key === 'End') next = segBtns[segBtns.length - 1];
    if (next) { e.preventDefault(); selectTab(next, true); }
  });
  addEventListener('resize', () => moveInd(seg.querySelector('[aria-selected="true"]')));
  moveInd(segBtns[0]);
}

// University carousel
const car = document.getElementById('carousel');
const carPrev = document.getElementById('carPrev');
const carNext = document.getElementById('carNext');
if (car && carPrev && carNext) {
  const carStep = () => {
    const card = car.querySelector('.uni-card');
    return card ? card.offsetWidth + 22 : 380;
  };
  carPrev.addEventListener('click', () => car.scrollBy({ left: -carStep(), behavior: reduced ? 'auto' : 'smooth' }));
  carNext.addEventListener('click', () => car.scrollBy({ left:  carStep(), behavior: reduced ? 'auto' : 'smooth' }));
  const updateCarBtns = () => {
    carPrev.disabled = car.scrollLeft <= 4;
    carNext.disabled = car.scrollLeft >= car.scrollWidth - car.clientWidth - 4;
  };
  car.addEventListener('scroll', updateCarBtns, { passive: true });
  addEventListener('resize', updateCarBtns);
  updateCarBtns();
}

// ---- Interaction layer ---------------------------------------

const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

// Card spotlight: a soft light follows the pointer across any .spot card (the page's one pointer effect).
if (finePointer) {
  document.addEventListener('pointermove', e => {
    const card = e.target.closest && e.target.closest('.spot');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
}

// Logo strip: a logo jumps to the skill card that uses it, switching tabs if needed.
document.querySelectorAll('.stack-row [data-logo]').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = document.querySelector('.skill-card img[src$="/' + btn.dataset.logo + '.svg"]');
    const card = img && img.closest('.skill-card');
    if (!card) return;
    const panel = card.closest('.panel[role="tabpanel"]');
    if (panel && selectSkillTab) selectSkillTab(panel.id);
    card.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
    card.classList.remove('flash');
    void card.offsetWidth;  // restart the highlight if the same card is picked twice
    card.classList.add('flash');
    setTimeout(() => card.classList.remove('flash'), 1800);
  });
});

// Nav marks the section on screen.
const navMap = new Map([...document.querySelectorAll('.nav-links a[href^="#"]')].map(a => [a.getAttribute('href').slice(1), a]));
if (navMap.size) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navMap.forEach(a => { a.classList.remove('active'); a.removeAttribute('aria-current'); });
      const a = navMap.get(en.target.id);
      if (a) { a.classList.add('active'); a.setAttribute('aria-current', 'location'); }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navMap.forEach((a, id) => { const sec = document.getElementById(id); if (sec) spy.observe(sec); });
}

// Copy-to-clipboard buttons.
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (_) {
      // No clipboard access (old browser, blocked permission): select the address so ⌘C works.
      const a = btn.parentElement.querySelector('a');
      if (a) { const range = document.createRange(); range.selectNodeContents(a); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range); }
    }
    btn.textContent = ok ? 'Copied' : 'Press ⌘C';
    btn.classList.toggle('done', ok);
    clearTimeout(btn._t);
    btn._t = setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 1800);
  });
});
