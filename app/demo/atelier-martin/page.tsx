"use client";

// ─── AUTO-UPDATE INFO ─────────────────────────────────────────────────────────
// Ce fichier = miniature dans le portfolio. Modifie ce fichier → thumbnail se
// met à jour automatiquement (iframe live). Pas besoin de build / commande.
// Fichier page projet : app/projets/[slug]/AtelierMartin.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

const C = {
  bg: "#F4EFE8",
  dark: "#1C120A",
  amber: "#B8834A",
  walnut: "#7A5C3C",
  linen: "#E8DDD0",
  body: "#4A3528",
};

const services = [
  { icon: "🪵", title: "Cuisines sur-mesure", desc: "Conception et réalisation de cuisines entièrement personnalisées, adaptées à votre espace et vos habitudes de vie." },
  { icon: "🚪", title: "Dressings & placards", desc: "Optimisez chaque centimètre avec des rangements fabriqués à la mesure exacte de votre pièce." },
  { icon: "🪜", title: "Escaliers", desc: "Escaliers droits, quart tournant ou sur-mesure, en chêne, noyer ou hêtre. Chaque pièce est unique." },
  { icon: "🛋️", title: "Mobilier sur-mesure", desc: "Bibliothèques, bureaux, meubles TV — conçus et assemblés dans notre atelier normand." },
];

const realisations = [
  { label: "Cuisine chêne naturel", color: "from-amber-800 to-stone-900" },
  { label: "Dressing en noyer", color: "from-stone-700 to-stone-900" },
  { label: "Escalier quart tournant", color: "from-amber-700 to-amber-900" },
  { label: "Bureau bibliothèque", color: "from-yellow-800 to-amber-900" },
  { label: "Cuisine laquée blanc", color: "from-stone-600 to-stone-800" },
  { label: "Placard sous-pente", color: "from-orange-800 to-red-900" },
];

const avis = [
  { text: "Thomas a transformé notre cuisine en véritable pièce à vivre. Un travail soigné, livré dans les délais. On recommande les yeux fermés.", author: "Marie & Paul D.", ville: "Rouen" },
  { text: "Dressing sur-mesure parfaitement intégré dans une pièce aux formes irrégulières. Vraiment impressionnant. Service client au top.", author: "Sophie L.", ville: "Caen" },
  { text: "Escalier magnifique. Thomas a respecté chaque détail de notre vision. Le résultat est au-delà de nos espérances.", author: "Jacques M.", ville: "Le Havre" },
];

export default function AtelierMartinDemo() {
  return (
    <div
      className={`${cormorant.variable} ${dm.variable} min-h-screen`}
      style={{ background: C.bg, fontFamily: "var(--font-dm), sans-serif", color: C.dark }}
    >
      {/* Navbar */}
      <nav style={{ background: C.bg, borderBottom: `1px solid ${C.linen}` }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span
            className="text-xl"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic", color: C.dark }}
          >
            Atelier <span style={{ color: C.amber }}>Martin</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: C.walnut }}>
            <a href="#services">Services</a>
            <a href="#realisations">Réalisations</a>
            <a href="#avis">Avis</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white"
            style={{ background: C.amber }}
          >
            Demander un devis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: C.bg }} className="pt-20 pb-28 relative overflow-hidden">
        {/* Paper grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-2xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-7"
              style={{ background: C.linen, color: C.walnut }}
            >
              Menuisier artisan · Normandie · Depuis 2008
            </span>
            <h1
              className="text-5xl md:text-6xl leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
            >
              Votre intérieur,
              <br />
              <span style={{ color: C.amber, fontStyle: "italic", fontWeight: 400 }}>
                façonné à la main.
              </span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: C.body }}>
              Cuisines, dressings, escaliers et mobilier sur-mesure. Chaque pièce est
              conçue et fabriquée dans notre atelier normand avec les meilleurs bois massifs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-white text-sm font-medium"
                style={{ background: C.dark }}
              >
                Demander un devis gratuit
              </a>
              <a
                href="#realisations"
                className="px-7 py-3.5 rounded-full text-sm font-medium border"
                style={{ color: C.dark, borderColor: C.linen }}
              >
                Voir les réalisations
              </a>
            </div>
            <div className="flex gap-10 mt-14">
              {[["15+", "ans d'expérience"], ["300+", "projets réalisés"], ["100%", "bois massif"]].map(([v, l]) => (
                <div key={l}>
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: C.amber }}
                  >
                    {v}
                  </div>
                  <div className="text-sm" style={{ color: C.walnut }}>{l}</div>
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: C.amber }}>
              Ce que je fabrique
            </span>
            <h2
              className="text-3xl md:text-4xl mt-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600, color: C.dark }}
            >
              Mes savoir-faire
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border" style={{ borderColor: C.linen, background: C.bg }}>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3
                  className="text-lg mb-3"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600, color: C.dark }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.body }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-20" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: C.amber }}>Portfolio</span>
            <h2
              className="text-3xl md:text-4xl mt-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600, color: C.dark }}
            >
              Dernières réalisations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {realisations.map((r) => (
              <div key={r.label} className={`relative h-52 rounded-2xl overflow-hidden bg-gradient-to-br ${r.color}`}>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium text-white/90" style={{ background: "rgba(0,0,0,0.35)" }}>
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: C.amber }}>Témoignages</span>
            <h2
              className="text-3xl md:text-4xl mt-3"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600, color: C.dark }}
            >
              Ce que disent mes clients
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a) => (
              <div key={a.author} className="p-6 rounded-2xl border" style={{ borderColor: C.linen, background: C.bg }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: C.amber }}>★</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.body }}>&ldquo;{a.text}&rdquo;</p>
                <div>
                  <p className="font-medium text-sm" style={{ color: C.dark }}>{a.author}</p>
                  <p className="text-xs" style={{ color: C.walnut }}>{a.ville}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis */}
      <section id="contact" style={{ background: C.dark }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Prêt à démarrer votre projet&nbsp;?
          </h2>
          <p className="mb-10 text-sm" style={{ color: C.linen }}>
            Décrivez votre projet, je vous rappelle sous 24h avec une estimation gratuite.
          </p>
          <div className="flex flex-col gap-4 text-left">
            <div className="grid grid-cols-2 gap-4">
              <input className="px-4 py-3.5 rounded-xl text-sm outline-none" style={{ background: "#2C1A0E", color: "white", border: `1px solid ${C.walnut}` }} placeholder="Votre prénom" />
              <input className="px-4 py-3.5 rounded-xl text-sm outline-none" style={{ background: "#2C1A0E", color: "white", border: `1px solid ${C.walnut}` }} placeholder="Votre téléphone" />
            </div>
            <input className="px-4 py-3.5 rounded-xl text-sm outline-none" style={{ background: "#2C1A0E", color: "white", border: `1px solid ${C.walnut}` }} placeholder="Type de projet (cuisine, dressing...)" />
            <textarea rows={4} className="px-4 py-3.5 rounded-xl text-sm outline-none resize-none" style={{ background: "#2C1A0E", color: "white", border: `1px solid ${C.walnut}` }} placeholder="Décrivez votre projet..." />
            <button className="w-full py-4 rounded-full text-sm font-medium text-white" style={{ background: C.amber }}>
              Envoyer ma demande de devis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#100A04", borderTop: `1px solid ${C.walnut}` }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic", color: C.amber }}>
            Atelier Martin
          </span>
          <p className="text-xs" style={{ color: C.walnut }}>© 2025 Atelier Martin · Menuiserie sur-mesure · Normandie</p>
          <p className="text-xs" style={{ color: C.walnut }}>06 XX XX XX XX</p>
        </div>
      </footer>
    </div>
  );
}
