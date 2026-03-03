"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Alex Morrison",
    role: "Fondateur, Pulse Studio",
    initials: "AM",
    color: "from-violet-400 to-indigo-500",
    quote:
      "Imrandev a créé notre site vitrine en moins de deux semaines. Résultat impeccable, rapide et entièrement responsive. On a eu nos premières prises de contact clients dès la mise en ligne.",
  },
  {
    name: "Sarah Chen",
    role: "Directrice Marketing, Orbit",
    initials: "SC",
    color: "from-rose-400 to-orange-400",
    quote:
      "Notre site vitrine était urgent avant le lancement. Imrandev a livré un site complet, rapide et bien référencé, dans les délais. Les demandes ont décollé dès le premier jour.",
  },
  {
    name: "James Park",
    role: "CEO, Nexus Labs",
    initials: "JP",
    color: "from-teal-400 to-cyan-500",
    quote:
      "J'ai testé des agences et des freelances. Imrandev est la meilleure décision que j'aie prise pour mon site pro. Sérieux, à l'écoute, et le résultat dépasse mes attentes.",
  },
  {
    name: "Maya Patel",
    role: "Chef de Produit, Vertex",
    initials: "MP",
    color: "from-amber-400 to-yellow-500",
    quote:
      "Le site livré en 10 jours, exactement ce que je voulais. Design soigné, parfaitement responsive, et un référencement qui a immédiatement amélioré ma visibilité Google. Je recommande.",
  },
  {
    name: "Tom Richter",
    role: "Fondateur, Amsterdam Studio",
    initials: "TR",
    color: "from-blue-400 to-indigo-500",
    quote:
      "La plus grande surprise, c'est à quel point Imrandev comprend vraiment l'identité de marque. Il ne se contente pas d'exécuter — il pense à ce qui convertit le mieux pour votre audience.",
  },
  {
    name: "Léa Fontaine",
    role: "Photographe Indépendante",
    initials: "LF",
    color: "from-fuchsia-400 to-pink-500",
    quote:
      "J'avais besoin d'un portfolio élégant pour présenter mon travail. Imrandev a livré un site épuré, rapide et vraiment à mon image. Mes clients me complimentent constamment sur le design.",
  },
  {
    name: "Karim Benali",
    role: "Directeur, Agence Momentum",
    initials: "KB",
    color: "from-emerald-400 to-teal-500",
    quote:
      "Imrandev a refait notre site vitrine avec un soin remarquable. Le résultat est professionnel, bien référencé, et nos demandes de devis ont augmenté de 40% en un mois.",
  },
  {
    name: "Sophie Durand",
    role: "Coach & Formatrice",
    initials: "SD",
    color: "from-sky-400 to-cyan-500",
    quote:
      "Je n'y connaissais rien en web et Imrandev m'a accompagnée de A à Z. Mon site est maintenant ma meilleure carte de visite. Simple, beau, et qui me ressemble vraiment.",
  },
  {
    name: "Lucas Martin",
    role: "Fondateur, LMFIT Studio",
    initials: "LM",
    color: "from-orange-400 to-red-500",
    quote:
      "Délai tenu, budget respecté, et un résultat qui dépasse ce que j'espérais. Le site est fluide, les animations sont soignées, et mes clients adorent l'expérience utilisateur.",
  },
];

const GAP = 20;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(testimonials.length - 1);
  const [cardWidth, setCardWidth] = useState(340);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute the last reachable dot/arrow index based on actual container width
  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const vw = window.innerWidth;
      const cw = vw < 480 ? Math.min(340, vw - 48) : 340;
      setCardWidth(cw);
      const cardStep = cw + GAP;
      const containerWidth = containerRef.current.offsetWidth;
      const totalWidth = testimonials.length * cardStep - GAP;
      const maxScrollPx = Math.max(0, totalWidth - containerWidth);
      setMaxIndex(Math.min(testimonials.length - 1, Math.floor(maxScrollPx / cardStep)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const cardStep = cardWidth + GAP;
      const clamped = Math.max(0, Math.min(i, maxIndex));
      setActive(clamped);
      animate(x, -(clamped * cardStep), { type: "spring", stiffness: 280, damping: 34 });
    },
    [x, maxIndex, cardWidth]
  );

  return (
    <section className="py-14 bg-[#f5f5f5]" id="testimonials">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge + Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-10 px-6"
        >
          <motion.span
            variants={scrollVariants}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6 border border-gray-200"
          >
            Témoignages
          </motion.span>
          <motion.h2
            variants={scrollVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Des résultats concrets,{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              des clients satisfaits.
            </span>
          </motion.h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div
            ref={containerRef}
            className="relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <motion.div
              className="flex gap-5 pb-6 px-10 cursor-grab active:cursor-grabbing"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -(maxIndex * (cardWidth + GAP)), right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 280, bounceDamping: 32 }}
              onDragEnd={(_, info) => {
                const delta = info.offset.x + info.velocity.x * 0.25;
                const steps = Math.round(-delta / (cardWidth + GAP));
                goTo(active + steps);
              }}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-3xl p-8 flex-shrink-0 select-none"
                  style={{ width: cardWidth, minWidth: cardWidth }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#000">
                        <path d="M7 1l1.545 3.13 3.455.502-2.5 2.436.59 3.44L7 8.886 3.91 10.508l.59-3.44L2 4.632l3.455-.502L7 1z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Dots + Arrows */}
        <div className="flex justify-center items-center gap-4 mt-6 px-6">
          {/* Prev arrow */}
          <motion.button
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center disabled:opacity-25 transition-opacity"
            whileTap={{ scale: 0.88 }}
            whileHover={{ scale: 1.08 }}
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>

          {/* Dots — only as many as there are reachable scroll positions */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-black w-6" : "bg-gray-300 w-2"
                }`}
                aria-label={`Aller au témoignage ${i + 1}`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <motion.button
            onClick={() => goTo(active + 1)}
            disabled={active === maxIndex}
            className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center disabled:opacity-25 transition-opacity"
            whileTap={{ scale: 0.88 }}
            whileHover={{ scale: 1.08 }}
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
