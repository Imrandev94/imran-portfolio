"use client";

const formules = [
  {
    name: "Essentiel",
    price: "29€",
    duration: "45 min",
    features: [
      "Lavage extérieur complet",
      "Rinçage et essuyage carrosserie",
      "Jantes nettoyées",
      "Vitres extérieur",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "59€",
    duration: "1h30",
    features: [
      "Lavage extérieur premium",
      "Aspiration habitacle complet",
      "Nettoyage tableau de bord",
      "Vitres intérieur + extérieur",
      "Jantes + arches de roues",
    ],
    popular: true,
  },
  {
    name: "Prestige",
    price: "99€",
    duration: "3h",
    features: [
      "Lavage extérieur premium",
      "Décontamination carrosserie",
      "Intérieur complet (plastiques, cuirs)",
      "Shampoing moquettes",
      "Cire protection carrosserie",
      "Senteur habitacle offerte",
    ],
    popular: false,
  },
];

const steps = [
  {
    n: "01",
    title: "Vous choisissez",
    desc: "Sélectionnez votre formule et indiquez votre adresse. On s'adapte à votre emploi du temps.",
  },
  {
    n: "02",
    title: "On se déplace",
    desc: "Notre technicien arrive à l'heure convenue avec tout le matériel nécessaire.",
  },
  {
    n: "03",
    title: "Votre voiture brille",
    desc: "Un résultat showroom garanti, sans que vous bougez. Paiement sur place par carte ou virement.",
  },
];

const avis = [
  {
    text: "Service impeccable. Arrivé à l'heure, voiture rendue nickel. La formule Prestige vaut vraiment son prix.",
    author: "Julien R.",
    ville: "Lyon 6ème",
  },
  {
    text: "Pratique, rapide, propre. J'ai commandé pendant que je bossais et ma voiture était prête à la pause déj. Top.",
    author: "Marine T.",
    ville: "Villeurbanne",
  },
  {
    text: "Je n'avais jamais fait appel à un service à domicile. Plus jamais je n'irai en station. Vraiment bluffant.",
    author: "Karim B.",
    ville: "Lyon 3ème",
  },
];

export default function CleanAutoPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* Topbar */}
      <div style={{ background: "#0EA5E9" }} className="py-2 text-center text-white text-xs font-medium">
        📍 Lyon & agglomération · Intervention 7j/7 de 8h à 20h ·{" "}
        <a href="tel:0600000000" className="underline">06 XX XX XX XX</a>
      </div>

      {/* Navbar */}
      <nav
        style={{ background: "#0C1729", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "#0EA5E9" }}
            >
              C
            </div>
            <span className="font-bold text-white">
              CleanAuto <span className="font-normal text-white/40">Express</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
            <a href="#formules" className="hover:text-white transition-colors">Formules</a>
            <a href="#comment" className="hover:text-white transition-colors">Comment ça marche</a>
            <a href="#avis" className="hover:text-white transition-colors">Avis</a>
            <a href="#contact" className="hover:text-white transition-colors">Réserver</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#0EA5E9" }}
          >
            Réserver maintenant
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{ background: "linear-gradient(160deg, #0C1729 0%, #0A2540 100%)" }}
        className="pt-20 pb-28 text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-7"
              style={{
                background: "rgba(14,165,233,0.12)",
                color: "#38BDF8",
                border: "1px solid rgba(14,165,233,0.25)",
              }}
            >
              ✨ Lavage automobile à domicile · Lyon
            </span>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] mb-6">
              Votre voiture,{" "}
              <span style={{ color: "#38BDF8" }}>propre</span>
              <br />
              à votre porte.
            </h1>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              On se déplace chez vous ou sur votre lieu de travail.
              Résultat showroom garanti, sans que vous bougez.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#0EA5E9" }}
              >
                Réserver maintenant
              </a>
              <a
                href="#formules"
                className="px-7 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:bg-white/5 transition-colors"
              >
                Voir les formules
              </a>
            </div>
            <div className="flex gap-10">
              {[
                ["3 min", "pour réserver"],
                ["500+", "voitures lavées"],
                ["4,9 ★", "note moyenne"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold" style={{ color: "#38BDF8" }}>{v}</div>
                  <div className="text-sm text-white/40">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section id="formules" style={{ background: "#0F1E35" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#38BDF8" }}
            >
              Tarifs transparents
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
              Choisissez votre formule
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {formules.map((f) => (
              <div
                key={f.name}
                className="p-7 rounded-2xl border relative"
                style={{
                  background: f.popular ? "rgba(14,165,233,0.07)" : "rgba(255,255,255,0.03)",
                  borderColor: f.popular ? "#0EA5E9" : "rgba(255,255,255,0.08)",
                }}
              >
                {f.popular && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: "#0EA5E9" }}
                  >
                    Le plus choisi
                  </span>
                )}
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-white mb-1">{f.name}</h3>
                  <p className="text-white/40 text-xs">{f.duration}</p>
                </div>
                <div className="text-3xl font-bold text-white mb-6">{f.price}</div>
                <ul className="space-y-2.5 mb-8">
                  {f.features.map((feat) => (
                    <li key={feat} className="text-sm text-white/60 flex items-start gap-2">
                      <span style={{ color: "#38BDF8" }} className="mt-0.5">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full py-3 rounded-full text-sm font-semibold text-center transition-opacity hover:opacity-80"
                  style={
                    f.popular
                      ? { background: "#0EA5E9", color: "white" }
                      : { border: "1px solid rgba(255,255,255,0.2)", color: "white" }
                  }
                >
                  Choisir cette formule
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment" style={{ background: "#0C1729" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white">Comment ça marche ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div
                  className="text-6xl font-bold mb-4"
                  style={{
                    color: "rgba(56,189,248,0.15)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                  }}
                >
                  {s.n}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" style={{ background: "#0F1E35" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Ce que disent nos clients</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a) => (
              <div
                key={a.author}
                className="p-6 rounded-2xl border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  &ldquo;{a.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white text-sm">{a.author}</p>
                  <p className="text-white/30 text-xs">{a.ville}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "#0EA5E9" }} className="py-20">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">Réservez votre lavage</h2>
            <p className="text-sky-100 text-sm">
              Intervention sous 24h. Paiement sur place.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/50"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                placeholder="Prénom *"
              />
              <input
                className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/50"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                placeholder="Téléphone *"
              />
            </div>
            <input
              className="px-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder-white/50"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
              placeholder="Adresse d'intervention"
            />
            <select
              className="px-4 py-3.5 rounded-xl text-sm outline-none text-white"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <option value="" style={{ background: "#0284C7" }}>Choisir une formule</option>
              <option value="essentiel" style={{ background: "#0284C7" }}>Essentiel — 29€</option>
              <option value="premium" style={{ background: "#0284C7" }}>Premium — 59€</option>
              <option value="prestige" style={{ background: "#0284C7" }}>Prestige — 99€</option>
            </select>
            <button
              className="w-full py-4 rounded-full font-bold text-sm transition-opacity hover:opacity-80"
              style={{ background: "white", color: "#0EA5E9" }}
            >
              Confirmer ma réservation →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ background: "#070F1E", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        className="py-8"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <span className="font-bold text-white/50">CleanAuto Express</span>
          <p>© 2025 CleanAuto Express · Lyon & agglomération</p>
          <p>06 XX XX XX XX</p>
        </div>
      </footer>
    </div>
  );
}
