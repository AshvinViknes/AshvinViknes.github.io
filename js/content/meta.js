// ============================================================
//  CONTENT BOOTSTRAP  ·  identity, nav, hero, stats
//  Loaded FIRST — creates the global CONTENT object that every
//  other js/content/*.js file attaches its section to.
// ============================================================

window.CONTENT = {};

CONTENT.meta = {
  name:        "Ashvinviknes Saravanaperumal",
  title:       "Ashvinviknes Saravanaperumal · Software Engineer",
  description: "Portfolio of Ashvinviknes Saravanaperumal, a backend engineer in Dresden. I work with Go, Kubernetes, Python ML and distributed systems, and I've built software for telco, EV charging and battery diagnostics. Right now I'm writing my MSc Nanoelectronic Systems thesis at TU Dresden on reproducible, verifiable CI in confidential execution environments.",
  // Hero portrait: a cutout with a transparent background, so it sits on the hero's own ground.
  // photoAvif is the small modern file; photoPath is the PNG older browsers fall back to.
  photoAvif:   "images/user.avif",
  photoPath:   "images/user.png",
  photoAlt:    "Portrait of Ashvinviknes Saravanaperumal",
};

CONTENT.nav = {
  brand: "Ashvin S.",
};

CONTENT.hero = {
  greeting:    "Hi, I'm Ashvin",
  nameLine1:   "Ashvinviknes",
  nameLine2:   "Saravanaperumal",
  tagline:     "Go services, Kubernetes operators, and CI builds anyone can verify.",
  sub:         "I'm a backend engineer. I write <strong>Go, Python, Java, and Kotlin</strong>, and I've worked on telco and EV-charging platforms, battery diagnostics, and confidential computing. These days I'm deep in my <strong>master thesis at TU Dresden</strong>. It's about making CI for GitHub Actions reproducible and independently verifiable inside confidential execution environments.",
  availability: "Open to full-time backend &amp; platform roles from 2027 · Dresden",
};

CONTENT.stats = [
  { count: 4,  suffix: "+",   label: "Years building software" },
  { count: 4,  suffix: "",    label: "Languages in production" },
  { count: 30, suffix: " ms", label: "To generate a PDF invoice" },
  { count: 90, suffix: "%",   label: "Faster document APIs shipped" },
];
