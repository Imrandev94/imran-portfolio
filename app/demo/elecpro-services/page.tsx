"use client";

const services = [
  {
    icon: "⚡",
    title: "Installation électrique",
    desc: "Tableau électrique, prises, éclairage — installations neuves ou rénovation complète aux normes NF C 15-100.",
  },
  {
    icon: "🔧",
    title: "Dépannage rapide",
    desc: "Panne de courant, disjoncteur qui saute, court-circuit — intervention sous 2h en Île-de-France.",
  },
  {
    icon: "📋",
    title: "Mise aux normes",
    desc: "Mise en conformité NF C 15-100 pour vente, location ou simple sécurisation de votre logement.",
  },
  {
    icon: "💡",
    title: "Éclairage & domotique",
    desc: "Spots LED, éclairage connecté, volets roulants motorisés, prises USB et interrupteurs tactiles.",
  },
  {
    icon: "🔌",
    title: "Borne de recharge IRVE",
    desc: "Installation de borne pour voiture électrique avec aide ADVENIR. Certifié IRVE.",
  },
  {
    icon: "🛡️",
    title: "Alarme & sécurité",
    desc: "Alarme intrusion, détecteurs fumée interconnectés, caméras — maisons et locaux professionnels.",
  },
];

const avis = [
  {
    text: "Intervention en urgence un samedi soir, dépannage en 45 minutes. Tarif honnête, travail propre. Je recommande sans hésiter.",
    author: "Franck D.",
    type: "Dépannage urgence",
  },
  {
    text: "Mise aux normes complète avant vente de l'appartement. Rapport CONSUEL obtenu au premier essai. Très professionnel.",
    author: "Isabelle M.",
    type: "Mise aux normes",
  },
  {
    text: "Installation borne recharge + tableau rénové. Kevin est ponctuel, sérieux, explique tout clairement. Vraiment satisfait.",
    author: "Laurent P.",
    type: "Borne recharge",
  },
];

export default function ElecProPage() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "var(--font-inter), sans-serif", color: "#111827" }}
    >
      {/* Topbar */}
      <div style={{ background: "#1E3A8A" }} className="py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xs text-white/70">📍 Paris & Île-de-France · Disponible 7j/7</span>
          <span className="text-xs font-bold text-white flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Urgence 24h/24 · 06 XX XX XX XX
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav
        style={{ background: "white", borderBottom: "1px solid #E5E7EB" }}
        className="sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "#1E3A8A" }}
            >
              É
            </div>
            <span className="font-bold text-lg" style={{ color: "#0F172A" }}>
              ÉlecPro{" "}
              <span className="font-normal text-gray-400">Services</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#services" className="hover:text-blue-700 transition-colors">Services</a>
            <a href="#urgence" className="hover:text-blue-700 transition-colors">Urgence</a>
            <a href="#avis" className="hover:text-blue-700 transition-colors">Avis clients</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </div>
          <a
            href="tel:0600000000"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#EA580C" }}
          >
            📞 Appeler maintenant
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)" }}
        className="pt-20 pb-28 text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-green-400 font-medium">
                Disponible aujourd&apos;hui — Intervention rapide
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] mb-6">
              Électricien certifié
              <br />
              <span style={{ color: "#60A5FA" }}>à Paris</span> et banlieue.
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Dépannage, installation, mise aux normes. Qualibat RGE.
              Devis gratuit sous 24h, intervention sous 2h en urgence.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#EA580C" }}
              >
                Devis gratuit
              </a>
              <a
                href="tel:0600000000"
                className="px-7 py-3.5 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors"
              >
                06 XX XX XX XX
              </a>
            </div>
            <div className="flex gap-10">
              {[
                ["2h", "délai d'intervention"],
                ["Qualibat", "RGE certifié"],
                ["200+", "clients satisfaits"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-2xl font-bold">{v}</div>
                  <div className="text-sm text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#1E3A8A" }}
            >
              Prestations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Tous types d&apos;interventions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl border hover:shadow-md hover:border-blue-100 transition-all"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-bold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgence */}
      <section id="urgence" style={{ background: "#EA580C" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Panne électrique ? Intervention en urgence.
            </h2>
            <p className="text-orange-100 text-sm">
              Disponible 7 jours sur 7, y compris les jours fériés. Déplacement sous 2h en Île-de-France.
            </p>
          </div>
          <a
            href="tel:0600000000"
            className="flex-shrink-0 px-8 py-4 rounded-full bg-white font-bold text-orange-600 text-sm hover:bg-orange-50 transition-colors"
          >
            📞 06 XX XX XX XX
          </a>
        </div>
      </section>

      {/* Avis */}
      <section id="avis" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "#1E3A8A" }}
            >
              Google Reviews
            </span>
            <h2 className="text-3xl font-bold mt-3">4,9 / 5 · 87 avis vérifiés</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a) => (
              <div
                key={a.author}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{a.type}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 mb-4">&ldquo;{a.text}&rdquo;</p>
                <p className="font-semibold text-sm">{a.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Demandez un devis gratuit</h2>
            <p className="text-gray-500 text-sm">Réponse sous 24h, intervention possible dès le lendemain.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="px-4 py-3.5 rounded-xl text-sm border border-gray-200 outline-none focus:border-blue-400 transition-colors"
                placeholder="Prénom *"
              />
              <input
                className="px-4 py-3.5 rounded-xl text-sm border border-gray-200 outline-none focus:border-blue-400 transition-colors"
                placeholder="Téléphone *"
              />
            </div>
            <input
              className="px-4 py-3.5 rounded-xl text-sm border border-gray-200 outline-none focus:border-blue-400 transition-colors"
              placeholder="Type d'intervention"
            />
            <input
              className="px-4 py-3.5 rounded-xl text-sm border border-gray-200 outline-none focus:border-blue-400 transition-colors"
              placeholder="Ville / Code postal"
            />
            <textarea
              rows={3}
              className="px-4 py-3.5 rounded-xl text-sm border border-gray-200 outline-none resize-none focus:border-blue-400 transition-colors"
              placeholder="Décrivez votre problème..."
            />
            <button
              className="w-full py-4 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-80"
              style={{ background: "#1E3A8A" }}
            >
              Envoyer ma demande
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0F172A" }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-bold text-white text-sm">ÉlecPro Services</span>
          <p className="text-xs text-white/40">© 2025 ÉlecPro Services · Paris & Île-de-France · Qualibat RGE</p>
          <p className="text-xs text-white/40">Urgence : 06 XX XX XX XX</p>
        </div>
      </footer>
    </div>
  );
}
