"use client";

const prestations = [
  {
    cat: "Soins visage",
    items: ["Soin hydratant éclat", "Soin anti-âge lifting", "Peeling douceur", "Massage crânien"],
    price: "À partir de 45€",
    emoji: "✨",
  },
  {
    cat: "Épilation",
    items: ["Maillot intégral", "Jambes complètes", "Demi-jambes", "Aisselles"],
    price: "À partir de 12€",
    emoji: "🌸",
  },
  {
    cat: "Ongles",
    items: ["Manucure simple", "Pose gel couleur", "Nail art", "Pédicure spa"],
    price: "À partir de 25€",
    emoji: "💅",
  },
  {
    cat: "Sourcils & cils",
    items: ["Design & épilation sourcils", "Rehaussement cils", "Teinture cils", "Lamination sourcils"],
    price: "À partir de 20€",
    emoji: "👁️",
  },
  {
    cat: "Maquillage",
    items: ["Maquillage naturel", "Maquillage de soirée", "Maquillage mariée", "Cours particuliers"],
    price: "À partir de 40€",
    emoji: "💄",
  },
  {
    cat: "Corps",
    items: ["Gommage corps", "Enveloppement argile", "Massage relaxant 1h", "Jambes légères"],
    price: "À partir de 55€",
    emoji: "🤍",
  },
];

const avis = [
  {
    text: "Lyna est une vraie professionnelle. Mon soin visage était incroyable et l'ambiance du studio est tellement apaisante. Je reviens chaque mois.",
    author: "Camille B.",
  },
  {
    text: "Pose gel parfaite, dure 3 semaines sans aucun problème. Le studio est beau, propre, et Lyna est vraiment à l'écoute. Une perle.",
    author: "Nadia O.",
  },
  {
    text: "Maquillage mariage 10/10. J'ai pleuré, ri, dansé et mon maquillage a tenu toute la nuit. Merci Lyna pour cette journée parfaite.",
    author: "Sarah M.",
  },
];

export default function StudioLynaPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#FDF7F4", fontFamily: "var(--font-inter), sans-serif", color: "#2D1B25" }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "rgba(253,247,244,0.95)",
          borderBottom: "1px solid #F0DDD7",
          backdropFilter: "blur(12px)",
        }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <span
              className="font-bold text-lg"
              style={{
                color: "#4A1628",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Studio Lyna
            </span>
            <span className="text-sm ml-1.5" style={{ color: "#C2698F" }}>
              Beauté
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#8B4E67" }}>
            <a href="#prestations" className="hover:opacity-60 transition-opacity">Prestations</a>
            <a href="#avis" className="hover:opacity-60 transition-opacity">Avis</a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#C2698F" }}
          >
            Réserver
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #FDF7F4 0%, #FAE8EF 60%, #FDF0F5 100%)" }}
        className="pt-24 pb-28"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-7"
            style={{ background: "#F7D5E2", color: "#9B3060" }}
          >
            Institut de beauté · Paris 11ème · Sur rendez-vous
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6"
            style={{ color: "#2D1B25" }}
          >
            Prenez soin de vous,
            <br />
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontStyle: "italic",
                color: "#C2698F",
              }}
            >
              vous le méritez.
            </span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#7A4460" }}
          >
            Soins visage, épilation, ongles, maquillage. Un moment rien que pour vous
            dans un cadre doux et élégant.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#C2698F" }}
            >
              Prendre rendez-vous
            </a>
            <a
              href="#prestations"
              className="px-8 py-3.5 rounded-full font-semibold text-sm border transition-colors hover:bg-pink-50"
              style={{ color: "#4A1628", borderColor: "#DDB0C2" }}
            >
              Voir les prestations
            </a>
          </div>

          {/* Mood blocks */}
          <div className="flex justify-center gap-4">
            {[
              { bg: "from-rose-200 to-pink-300", label: "Soins & beauté" },
              { bg: "from-fuchsia-200 to-purple-300", label: "Détente & bien-être" },
              { bg: "from-pink-200 to-rose-300", label: "Votre moment" },
            ].map((b) => (
              <div
                key={b.label}
                className={`w-28 h-40 rounded-2xl bg-gradient-to-br ${b.bg} flex items-end p-3`}
              >
                <span className="text-xs font-medium text-white/90">{b.label}</span>
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
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#C2698F" }}
            >
              Menu beauté
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#2D1B25" }}>
              Mes prestations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {prestations.map((p) => (
              <div
                key={p.cat}
                className="p-6 rounded-2xl border hover:shadow-sm transition-all"
                style={{ borderColor: "#F0DDD7", background: "#FDFAF9" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{p.emoji}</span>
                    <h3 className="font-bold" style={{ color: "#2D1B25" }}>{p.cat}</h3>
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: "#F7D5E2", color: "#9B3060" }}
                  >
                    {p.price}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2" style={{ color: "#7A4460" }}>
                      <span style={{ color: "#C2698F" }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section style={{ background: "#4A1628" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-2xl md:text-3xl font-normal text-white/90 leading-relaxed"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            &ldquo;La beauté commence au moment où vous décidez d&apos;être vous-même.&rdquo;
          </p>
          <p className="mt-4 text-sm" style={{ color: "#DDB0C2" }}>— Coco Chanel</p>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" style={{ background: "#FDF7F4" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#C2698F" }}
            >
              Témoignages
            </span>
            <h2 className="text-3xl font-bold mt-3" style={{ color: "#2D1B25" }}>
              Elles parlent du studio
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a) => (
              <div
                key={a.author}
                className="p-6 rounded-2xl bg-white border"
                style={{ borderColor: "#F0DDD7" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A3040" }}>
                  &ldquo;{a.text}&rdquo;
                </p>
                <p className="font-semibold text-sm" style={{ color: "#2D1B25" }}>{a.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation */}
      <section
        id="contact"
        style={{ background: "linear-gradient(135deg, #C2698F, #9B3060)" }}
        className="py-20"
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Réserver un soin</h2>
          <p className="text-pink-100 mb-10 text-sm">
            Réservation par formulaire ou téléphone. Confirmation sous 2h.
          </p>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/60"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                placeholder="Votre prénom"
              />
              <input
                className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/60"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                placeholder="Téléphone"
              />
            </div>
            <select
              className="px-4 py-3.5 rounded-xl text-sm outline-none text-white"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <option value="" style={{ background: "#9B3060" }}>Choisir une prestation</option>
              <option value="soin" style={{ background: "#9B3060" }}>Soin visage</option>
              <option value="epil" style={{ background: "#9B3060" }}>Épilation</option>
              <option value="ongles" style={{ background: "#9B3060" }}>Ongles</option>
              <option value="maquillage" style={{ background: "#9B3060" }}>Maquillage</option>
            </select>
            <input
              className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/60"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
              placeholder="Date souhaitée"
            />
            <button
              className="w-full py-4 rounded-full font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ background: "white", color: "#9B3060" }}
            >
              Confirmer ma réservation
            </button>
          </div>
          <p className="mt-6 text-xs text-pink-200">Ou appelez directement : 01 XX XX XX XX</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ background: "#2D1B25", borderTop: "1px solid #4A1628" }}
        className="py-8"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span
            className="font-bold italic text-white text-sm"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Studio Lyna Beauté
          </span>
          <p className="text-xs text-white/30">© 2025 Studio Lyna · Paris 11ème · Sur rendez-vous</p>
          <p className="text-xs text-white/30">01 XX XX XX XX</p>
        </div>
      </footer>
    </div>
  );
}
