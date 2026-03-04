"use client";

// ─── AUTO-UPDATE INFO ─────────────────────────────────────────────────────────
// Ce fichier = miniature dans le portfolio. Modifie ce fichier → thumbnail se
// met à jour automatiquement (iframe live). Pas besoin de build / commande.
// Fichier page projet : app/projets/[slug]/StudioLyna.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { Gloock, Jost } from "next/font/google";

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloock",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
});

const C = {
  cream: "#FAF7F5",
  rose: "#E8C5B8",
  roseDark: "#C09585",
  roseBg: "#F3E8E3",
  taupe: "#8B7B6B",
  choco: "#2D2320",
  chocolateLight: "#3D3028",
};

const prestations = [
  { cat: "Soins visage", items: ["Soin hydratant éclat", "Soin anti-âge lifting", "Peeling douceur", "Massage crânien"], price: "À partir de 45€", emoji: "✨" },
  { cat: "Épilation", items: ["Maillot intégral", "Jambes complètes", "Demi-jambes", "Aisselles"], price: "À partir de 12€", emoji: "🌸" },
  { cat: "Ongles", items: ["Manucure simple", "Pose gel couleur", "Nail art", "Pédicure spa"], price: "À partir de 25€", emoji: "💅" },
  { cat: "Sourcils & cils", items: ["Design & épilation sourcils", "Rehaussement cils", "Teinture cils", "Lamination sourcils"], price: "À partir de 20€", emoji: "👁️" },
  { cat: "Maquillage", items: ["Maquillage naturel", "Maquillage de soirée", "Maquillage mariée", "Cours particuliers"], price: "À partir de 40€", emoji: "💄" },
  { cat: "Corps", items: ["Gommage corps", "Enveloppement argile", "Massage relaxant 1h", "Jambes légères"], price: "À partir de 55€", emoji: "🤍" },
];

const avis = [
  { text: "Lyna est une vraie professionnelle. Mon soin visage était incroyable et l'ambiance du studio est tellement apaisante. Je reviens chaque mois.", author: "Camille B." },
  { text: "Pose gel parfaite, dure 3 semaines sans aucun problème. Le studio est beau, propre, et Lyna est vraiment à l'écoute. Une perle.", author: "Nadia O." },
  { text: "Maquillage mariage 10/10. J'ai pleuré, ri, dansé et mon maquillage a tenu toute la nuit. Merci Lyna pour cette journée parfaite.", author: "Sarah M." },
];

export default function StudioLynaDemo() {
  return (
    <div
      className={`${gloock.variable} ${jost.variable} min-h-screen`}
      style={{ background: C.cream, fontFamily: "var(--font-jost), sans-serif", color: C.choco }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "rgba(250,247,245,0.95)",
          borderBottom: `1px solid ${C.rose}`,
          backdropFilter: "blur(12px)",
        }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <span
              className="text-xl"
              style={{ fontFamily: "var(--font-gloock), Georgia, serif", color: C.choco }}
            >
              Studio Lyna
            </span>
            <span className="text-sm ml-1.5 font-light" style={{ color: C.roseDark, fontFamily: "var(--font-jost)" }}>
              Beauté
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-light" style={{ color: C.taupe }}>
            <a href="#prestations">Prestations</a>
            <a href="#avis">Avis</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-medium"
            style={{ background: C.roseDark, fontFamily: "var(--font-jost)" }}
          >
            Réserver
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: C.cream }} className="pt-24 pb-28 relative overflow-hidden">
        {/* Decorative rings */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "min(65vw, 560px)",
            height: "min(65vw, 560px)",
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            border: `1px solid ${C.rose}`,
            opacity: 0.4,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "min(45vw, 380px)",
            height: "min(45vw, 380px)",
            top: "50%",
            right: "0%",
            transform: "translateY(-50%)",
            border: `1px solid ${C.roseDark}`,
            opacity: 0.25,
          }}
        />
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-7"
            style={{ background: C.roseBg, color: C.roseDark, fontFamily: "var(--font-jost)" }}
          >
            Institut de beauté · Paris 11ème · Sur rendez-vous
          </span>
          <h1
            className="text-5xl md:text-6xl leading-[1.12] mb-6"
            style={{ fontFamily: "var(--font-gloock), Georgia, serif", fontWeight: 400 }}
          >
            Prenez soin de vous,
            <br />
            <span style={{ color: C.roseDark, fontStyle: "italic" }}>vous le méritez.</span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light"
            style={{ color: C.taupe, fontFamily: "var(--font-jost)" }}
          >
            Soins visage, épilation, ongles, maquillage. Un moment rien que pour vous
            dans un cadre doux et élégant.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full text-white text-sm font-medium"
              style={{ background: C.roseDark, fontFamily: "var(--font-jost)" }}
            >
              Prendre rendez-vous
            </a>
            <a
              href="#prestations"
              className="px-8 py-3.5 rounded-full text-sm font-medium border"
              style={{ color: C.choco, borderColor: C.rose, fontFamily: "var(--font-jost)" }}
            >
              Voir les prestations
            </a>
          </div>

          {/* Mood blocks */}
          <div className="flex justify-center gap-4">
            {[
              { bg: `linear-gradient(135deg, ${C.rose}, ${C.roseDark})`, label: "Soins & beauté" },
              { bg: `linear-gradient(135deg, #D4B0C5, #A87890)`, label: "Détente & bien-être" },
              { bg: `linear-gradient(135deg, ${C.roseBg}, ${C.rose})`, label: "Votre moment" },
            ].map((b) => (
              <div
                key={b.label}
                className="w-28 h-40 rounded-2xl flex items-end p-3"
                style={{ background: b.bg }}
              >
                <span className="text-xs font-medium text-white/90" style={{ fontFamily: "var(--font-jost)" }}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section id="prestations" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: C.roseDark, fontFamily: "var(--font-jost)" }}
            >
              Menu beauté
            </span>
            <h2
              className="text-3xl md:text-4xl mt-3"
              style={{ fontFamily: "var(--font-gloock), Georgia, serif", fontWeight: 400, color: C.choco }}
            >
              Mes prestations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {prestations.map((p) => (
              <div key={p.cat} className="p-6 rounded-2xl border" style={{ borderColor: C.rose, background: C.cream }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{p.emoji}</span>
                    <h3
                      className="font-medium"
                      style={{ fontFamily: "var(--font-gloock), Georgia, serif", color: C.choco }}
                    >
                      {p.cat}
                    </h3>
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: C.roseBg, color: C.roseDark }}
                  >
                    {p.price}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2 font-light" style={{ color: C.taupe }}>
                      <span style={{ color: C.roseDark }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section style={{ background: C.choco }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-2xl md:text-3xl font-normal leading-relaxed"
            style={{ fontFamily: "var(--font-gloock), Georgia, serif", color: C.rose, fontStyle: "italic" }}
          >
            &ldquo;La beauté commence au moment où vous décidez d&apos;être vous-même.&rdquo;
          </p>
          <p className="mt-4 text-sm font-light" style={{ color: C.roseDark, fontFamily: "var(--font-jost)" }}>— Coco Chanel</p>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" style={{ background: C.cream }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: C.roseDark, fontFamily: "var(--font-jost)" }}
            >
              Témoignages
            </span>
            <h2
              className="text-3xl mt-3"
              style={{ fontFamily: "var(--font-gloock), Georgia, serif", fontWeight: 400, color: C.choco }}
            >
              Elles parlent du studio
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a) => (
              <div key={a.author} className="p-6 rounded-2xl bg-white border" style={{ borderColor: C.rose }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: C.roseDark }}>★</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-5 font-light" style={{ color: C.taupe }}>&ldquo;{a.text}&rdquo;</p>
                <p className="font-medium text-sm" style={{ color: C.choco, fontFamily: "var(--font-jost)" }}>{a.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section id="contact" style={{ background: C.roseDark }} className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-normal text-white mb-3"
            style={{ fontFamily: "var(--font-gloock), Georgia, serif" }}
          >
            Réserver un soin
          </h2>
          <p className="mb-10 text-sm font-light" style={{ color: C.rose, fontFamily: "var(--font-jost)" }}>
            Réservation par formulaire ou téléphone. Confirmation sous 2h.
          </p>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/60" style={{ background: "rgba(255,255,255,0.15)", border: `1px solid rgba(255,255,255,0.3)` }} placeholder="Votre prénom" />
              <input className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/60" style={{ background: "rgba(255,255,255,0.15)", border: `1px solid rgba(255,255,255,0.3)` }} placeholder="Téléphone" />
            </div>
            <select className="px-4 py-3.5 rounded-xl text-sm outline-none text-white" style={{ background: "rgba(255,255,255,0.15)", border: `1px solid rgba(255,255,255,0.3)` }}>
              <option value="" style={{ background: C.choco }}>Choisir une prestation</option>
              <option value="soin" style={{ background: C.choco }}>Soin visage</option>
              <option value="epil" style={{ background: C.choco }}>Épilation</option>
              <option value="ongles" style={{ background: C.choco }}>Ongles</option>
            </select>
            <input className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/60" style={{ background: "rgba(255,255,255,0.15)", border: `1px solid rgba(255,255,255,0.3)` }} placeholder="Date souhaitée" />
            <button className="w-full py-4 rounded-full font-medium text-sm" style={{ background: "white", color: C.roseDark, fontFamily: "var(--font-jost)" }}>
              Confirmer ma réservation
            </button>
          </div>
          <p className="mt-6 text-xs font-light" style={{ color: C.rose, fontFamily: "var(--font-jost)" }}>Ou appelez directement : 01 XX XX XX XX</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: C.choco, borderTop: `1px solid ${C.chocolateLight}` }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span
            style={{ fontFamily: "var(--font-gloock), Georgia, serif", fontStyle: "italic", color: C.rose }}
          >
            Studio Lyna Beauté
          </span>
          <p className="text-xs font-light" style={{ color: C.taupe, fontFamily: "var(--font-jost)" }}>© 2025 Studio Lyna · Paris 11ème · Sur rendez-vous</p>
          <p className="text-xs font-light" style={{ color: C.taupe, fontFamily: "var(--font-jost)" }}>01 XX XX XX XX</p>
        </div>
      </footer>
    </div>
  );
}
