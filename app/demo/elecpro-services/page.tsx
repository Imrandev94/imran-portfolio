"use client";

// ─── AUTO-UPDATE INFO ─────────────────────────────────────────────────────────
// Ce fichier = miniature dans le portfolio. Modifie ce fichier → thumbnail se
// met à jour automatiquement (iframe live). Pas besoin de build / commande.
// Fichier page projet : app/projets/[slug]/ElecPro.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
});

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm",
});

const C = {
  bg: "#080C18",
  bgCard: "#0F1424",
  blue: "#0047FF",
  yellow: "#F5C400",
  text: "#E8EDF5",
  muted: "#5A6A8A",
  border: "#1A2238",
  borderLight: "#243050",
};

const services = [
  { icon: "⚡", title: "Installation électrique", desc: "Tableau électrique, prises, éclairage — installations neuves ou rénovation complète aux normes NF C 15-100." },
  { icon: "🔧", title: "Dépannage rapide", desc: "Panne de courant, disjoncteur qui saute, court-circuit — intervention sous 2h en Île-de-France." },
  { icon: "📋", title: "Mise aux normes", desc: "Mise en conformité NF C 15-100 pour vente, location ou simple sécurisation de votre logement." },
  { icon: "💡", title: "Éclairage & domotique", desc: "Spots LED, éclairage connecté, volets roulants motorisés, prises USB et interrupteurs tactiles." },
  { icon: "🔌", title: "Borne de recharge IRVE", desc: "Installation de borne pour voiture électrique avec aide ADVENIR. Certifié IRVE." },
  { icon: "🛡️", title: "Alarme & sécurité", desc: "Alarme intrusion, détecteurs fumée interconnectés, caméras — maisons et locaux professionnels." },
];

const avis = [
  { text: "Intervention en urgence un samedi soir, dépannage en 45 minutes. Tarif honnête, travail propre. Je recommande sans hésiter.", author: "Franck D.", type: "Dépannage urgence" },
  { text: "Mise aux normes complète avant vente de l'appartement. Rapport CONSUEL obtenu au premier essai. Très professionnel.", author: "Isabelle M.", type: "Mise aux normes" },
  { text: "Installation borne recharge + tableau rénové. Kevin est ponctuel, sérieux, explique tout clairement. Vraiment satisfait.", author: "Laurent P.", type: "Borne recharge" },
];

export default function ElecProDemo() {
  return (
    <div
      className={`${barlow.variable} ${ibm.variable} min-h-screen`}
      style={{ background: C.bg, fontFamily: "var(--font-ibm), sans-serif", color: C.text }}
    >
      {/* Topbar */}
      <div style={{ background: C.blue }} className="py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xs text-white/70">📍 Paris & Île-de-France · Disponible 7j/7</span>
          <span className="text-xs font-bold text-white flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Urgence 24h/24 · 06 XX XX XX XX
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: C.blue, fontFamily: "var(--font-barlow)" }}
            >
              É
            </div>
            <span
              className="font-bold text-lg tracking-wide"
              style={{ fontFamily: "var(--font-barlow), sans-serif", color: C.text }}
            >
              ÉLECPRO <span style={{ color: C.muted, fontWeight: 400 }}>SERVICES</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: C.muted, fontFamily: "var(--font-ibm)" }}>
            <a href="#services">Services</a>
            <a href="#urgence">Urgence</a>
            <a href="#avis">Avis clients</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            href="tel:0600000000"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
            style={{ background: C.yellow, color: C.bg, fontFamily: "var(--font-barlow)" }}
          >
            📞 Appeler maintenant
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: C.bg }} className="pt-20 pb-28 relative overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            opacity: 0.5,
          }}
        />
        {/* Blue glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-200px", left: "-200px",
            width: "700px", height: "700px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.blue}22 0%, transparent 70%)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ background: C.yellow }} />
              <span className="text-sm font-medium" style={{ color: C.yellow, fontFamily: "var(--font-ibm)" }}>
                Disponible aujourd&apos;hui — Intervention rapide
              </span>
            </div>
            <h1
              className="text-6xl md:text-7xl font-extrabold leading-[1] mb-6 uppercase tracking-tight"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              Électricien
              <br />
              <span style={{ color: C.blue }}>certifié</span> à Paris
              <br />
              et banlieue.
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: C.muted, fontFamily: "var(--font-ibm)" }}>
              Dépannage, installation, mise aux normes. Qualibat RGE.
              Devis gratuit sous 24h, intervention sous 2h en urgence.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ background: C.blue, color: "white", fontFamily: "var(--font-barlow)" }}
              >
                Devis gratuit
              </a>
              <a
                href="tel:0600000000"
                className="px-7 py-3.5 rounded-full text-sm font-medium border"
                style={{ borderColor: C.borderLight, color: C.text, fontFamily: "var(--font-ibm)" }}
              >
                06 XX XX XX XX
              </a>
            </div>
            <div className="flex gap-10">
              {[["2h", "délai d'intervention"], ["Qualibat", "RGE certifié"], ["200+", "clients satisfaits"]].map(([v, l]) => (
                <div key={l}>
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-barlow), sans-serif", color: C.yellow }}
                  >
                    {v}
                  </div>
                  <div className="text-sm" style={{ color: C.muted }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20" style={{ background: C.bgCard }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: C.blue, fontFamily: "var(--font-barlow)" }}
            >
              Prestations
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold mt-3 uppercase"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              Tous types d&apos;interventions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border" style={{ borderColor: C.border, background: C.bg }}>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3
                  className="font-bold mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgence banner */}
      <section id="urgence" style={{ background: C.yellow }} className="py-14">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl md:text-3xl font-extrabold uppercase"
              style={{ fontFamily: "var(--font-barlow), sans-serif", color: C.bg }}
            >
              Panne électrique ? Intervention en urgence.
            </h2>
            <p className="text-sm mt-2" style={{ color: "#4A3A00" }}>
              Disponible 7 jours sur 7, y compris les jours fériés. Déplacement sous 2h en Île-de-France.
            </p>
          </div>
          <a
            href="tel:0600000000"
            className="flex-shrink-0 px-8 py-4 rounded-full font-bold text-sm"
            style={{ background: C.bg, color: C.yellow, fontFamily: "var(--font-barlow)" }}
          >
            📞 06 XX XX XX XX
          </a>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="py-20" style={{ background: C.bgCard }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: C.blue, fontFamily: "var(--font-barlow)" }}
            >
              Google Reviews
            </span>
            <h2
              className="text-3xl font-extrabold mt-3 uppercase"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              4,9 / 5 · 87 avis vérifiés
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a) => (
              <div key={a.author} className="p-6 rounded-2xl border" style={{ background: C.bg, borderColor: C.border }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <span key={i} style={{ color: C.yellow }}>★</span>)}
                  </div>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ background: C.bgCard, color: C.muted, border: `1px solid ${C.border}` }}
                  >
                    {a.type}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>&ldquo;{a.text}&rdquo;</p>
                <p className="font-semibold text-sm" style={{ color: C.text }}>{a.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20" style={{ background: C.bg }}>
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-extrabold mb-2 uppercase"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              Demandez un devis gratuit
            </h2>
            <p className="text-sm" style={{ color: C.muted }}>Réponse sous 24h, intervention possible dès le lendemain.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="px-4 py-3.5 rounded-xl text-sm outline-none" style={{ background: C.bgCard, color: C.text, border: `1px solid ${C.border}` }} placeholder="Prénom *" />
              <input className="px-4 py-3.5 rounded-xl text-sm outline-none" style={{ background: C.bgCard, color: C.text, border: `1px solid ${C.border}` }} placeholder="Téléphone *" />
            </div>
            <input className="px-4 py-3.5 rounded-xl text-sm outline-none" style={{ background: C.bgCard, color: C.text, border: `1px solid ${C.border}` }} placeholder="Type d'intervention" />
            <input className="px-4 py-3.5 rounded-xl text-sm outline-none" style={{ background: C.bgCard, color: C.text, border: `1px solid ${C.border}` }} placeholder="Ville / Code postal" />
            <textarea rows={3} className="px-4 py-3.5 rounded-xl text-sm outline-none resize-none" style={{ background: C.bgCard, color: C.text, border: `1px solid ${C.border}` }} placeholder="Décrivez votre problème..." />
            <button
              className="w-full py-4 rounded-full font-bold text-sm uppercase tracking-wide"
              style={{ background: C.blue, color: "white", fontFamily: "var(--font-barlow)" }}
            >
              Envoyer ma demande
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#04060E", borderTop: `1px solid ${C.border}` }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span
            className="font-bold text-sm uppercase tracking-widest"
            style={{ fontFamily: "var(--font-barlow), sans-serif", color: C.text }}
          >
            ÉlecPro Services
          </span>
          <p className="text-xs" style={{ color: C.muted }}>© 2025 ÉlecPro Services · Paris & Île-de-France · Qualibat RGE</p>
          <p className="text-xs" style={{ color: C.muted }}>Urgence : 06 XX XX XX XX</p>
        </div>
      </footer>
    </div>
  );
}
