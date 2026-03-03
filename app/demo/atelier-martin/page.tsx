"use client";

const services = [
  {
    icon: "🪵",
    title: "Cuisines sur-mesure",
    desc: "Conception et réalisation de cuisines entièrement personnalisées, adaptées à votre espace et vos habitudes de vie.",
  },
  {
    icon: "🚪",
    title: "Dressings & placards",
    desc: "Optimisez chaque centimètre avec des rangements fabriqués à la mesure exacte de votre pièce.",
  },
  {
    icon: "🪜",
    title: "Escaliers",
    desc: "Escaliers droits, quart tournant ou sur-mesure, en chêne, noyer ou hêtre. Chaque pièce est unique.",
  },
  {
    icon: "🛋️",
    title: "Mobilier sur-mesure",
    desc: "Bibliothèques, bureaux, meubles TV — conçus et assemblés dans notre atelier normand.",
  },
];

const realisations = [
  { label: "Cuisine chêne naturel", color: "from-amber-800 to-orange-900" },
  { label: "Dressing en noyer", color: "from-stone-700 to-stone-900" },
  { label: "Escalier quart tournant", color: "from-amber-700 to-amber-900" },
  { label: "Bureau bibliothèque", color: "from-yellow-800 to-amber-900" },
  { label: "Cuisine laquée blanc", color: "from-stone-600 to-stone-800" },
  { label: "Placard sous-pente", color: "from-orange-800 to-red-900" },
];

const avis = [
  {
    text: "Thomas a transformé notre cuisine en véritable pièce à vivre. Un travail soigné, livré dans les délais. On recommande les yeux fermés.",
    author: "Marie & Paul D.",
    ville: "Rouen",
  },
  {
    text: "Dressing sur-mesure parfaitement intégré dans une pièce aux formes irrégulières. Vraiment impressionnant. Service client au top.",
    author: "Sophie L.",
    ville: "Caen",
  },
  {
    text: "Escalier magnifique. Thomas a respecté chaque détail de notre vision. Le résultat est au-delà de nos espérances.",
    author: "Jacques M.",
    ville: "Le Havre",
  },
];

export default function AtelierMartinPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#FAF7F2", fontFamily: "var(--font-inter), sans-serif", color: "#2C1810" }}
    >
      {/* Navbar */}
      <nav
        style={{ background: "#FAF7F2", borderBottom: "1px solid #E8DDD0" }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold" style={{ color: "#2C1810" }}>Atelier</span>
            <span className="text-xl font-bold" style={{ color: "#B5783A" }}> Martin</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "#6B4C35" }}>
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#realisations" className="hover:opacity-70 transition-opacity">Réalisations</a>
            <a href="#avis" className="hover:opacity-70 transition-opacity">Avis</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80"
            style={{ background: "#B5783A" }}
          >
            Demander un devis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #FAF7F2 0%, #F0E8DC 100%)" }} className="pt-20 pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-7"
              style={{ background: "#F0E0C8", color: "#8B5E2A" }}
            >
              Menuisier artisan · Normandie · Depuis 2008
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold leading-[1.08] mb-6"
              style={{ color: "#2C1810" }}
            >
              Votre intérieur,
              <br />
              <span
                style={{
                  color: "#B5783A",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                façonné à la main.
              </span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: "#6B4C35" }}>
              Cuisines, dressings, escaliers et mobilier sur-mesure. Chaque pièce est
              conçue et fabriquée dans notre atelier normand avec les meilleurs bois massifs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#2C1810" }}
              >
                Demander un devis gratuit
              </a>
              <a
                href="#realisations"
                className="px-7 py-3.5 rounded-full font-semibold text-sm border transition-colors hover:bg-amber-50"
                style={{ color: "#2C1810", borderColor: "#C4A882" }}
              >
                Voir les réalisations
              </a>
            </div>
            <div className="flex gap-10 mt-14">
              {[
                ["15+", "ans d'expérience"],
                ["300+", "projets réalisés"],
                ["100%", "bois massif"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold" style={{ color: "#B5783A" }}>{v}</div>
                  <div className="text-sm" style={{ color: "#8B6548" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#B5783A" }}
            >
              Ce que je fabrique
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#2C1810" }}>
              Mes savoir-faire
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl border hover:shadow-md transition-shadow"
                style={{ borderColor: "#E8DDD0", background: "#FDFAF7" }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold mb-3" style={{ color: "#2C1810" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A5C45" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-20" style={{ background: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#B5783A" }}
            >
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#2C1810" }}>
              Dernières réalisations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {realisations.map((r) => (
              <div
                key={r.label}
                className={`relative h-52 rounded-2xl overflow-hidden bg-gradient-to-br ${r.color} group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-white/90 backdrop-blur-sm"
                    style={{ background: "rgba(0,0,0,0.35)" }}
                  >
                    {r.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#B5783A" }}
            >
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#2C1810" }}>
              Ce que disent mes clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a) => (
              <div
                key={a.author}
                className="p-6 rounded-2xl border"
                style={{ borderColor: "#E8DDD0", background: "#FDFAF7" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A3C28" }}>
                  &ldquo;{a.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#2C1810" }}>{a.author}</p>
                  <p className="text-xs" style={{ color: "#9B7A62" }}>{a.ville}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis */}
      <section id="contact" style={{ background: "#2C1810" }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mb-10" style={{ color: "#C4A882" }}>
            Décrivez-moi votre projet, je vous rappelle sous 24h avec une estimation gratuite.
          </p>
          <div className="flex flex-col gap-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="px-4 py-3.5 rounded-xl text-sm outline-none"
                style={{ background: "#3D2418", color: "white", border: "1px solid #5A3C28" }}
                placeholder="Votre prénom"
              />
              <input
                className="px-4 py-3.5 rounded-xl text-sm outline-none"
                style={{ background: "#3D2418", color: "white", border: "1px solid #5A3C28" }}
                placeholder="Votre téléphone"
              />
            </div>
            <input
              className="px-4 py-3.5 rounded-xl text-sm outline-none"
              style={{ background: "#3D2418", color: "white", border: "1px solid #5A3C28" }}
              placeholder="Type de projet (cuisine, dressing...)"
            />
            <textarea
              rows={4}
              className="px-4 py-3.5 rounded-xl text-sm outline-none resize-none"
              style={{ background: "#3D2418", color: "white", border: "1px solid #5A3C28" }}
              placeholder="Décrivez votre projet..."
            />
            <button
              className="w-full py-4 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-80"
              style={{ background: "#B5783A" }}
            >
              Envoyer ma demande de devis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1A0F08", borderTop: "1px solid #3D2418" }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <span className="font-bold text-white">Atelier</span>
            <span className="font-bold" style={{ color: "#B5783A" }}> Martin</span>
          </div>
          <p className="text-xs" style={{ color: "#6B4C35" }}>
            © 2025 Atelier Martin · Menuiserie sur-mesure · Normandie
          </p>
          <p className="text-xs" style={{ color: "#6B4C35" }}>06 XX XX XX XX</p>
        </div>
      </footer>
    </div>
  );
}
