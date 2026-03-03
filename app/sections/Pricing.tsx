"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

const offers = [
  {
    name: "Simple",
    price: "499",
    currency: "€",
    badge: null,
    description: "Idéal pour les particuliers et petites structures qui souhaitent se lancer en ligne rapidement.",
    features: [
      "Site vitrine 3 à 5 pages",
      "Design responsive (mobile & desktop)",
      "Formulaire de contact intégré",
      "Optimisation SEO de base",
      "Hébergement & domaine (1 an inclus)",
      "Livraison en 7 à 10 jours",
    ],
    cta: "Commencer",
    ctaHref: "/contact",
    dark: false,
  },
  {
    name: "Pro",
    price: "1 299",
    currency: "€",
    badge: "Populaire",
    description: "Pour les professionnels qui veulent un site performant, animé et optimisé pour convertir.",
    features: [
      "Jusqu'à 10 pages sur mesure",
      "Animations & interactions premium",
      "SEO technique avancé inclus",
      "Blog ou portfolio intégré",
      "Formulaire avancé + intégrations",
      "Suivi analytique (Google Analytics)",
      "Livraison en 14 à 21 jours",
    ],
    cta: "Commencer",
    ctaHref: "/contact",
    dark: true,
  },
];

const devisFeatures = [
  "Site vitrine sur mesure",
  "Refonte complète d'un site existant",
  "Intégrations API & outils tiers",
  "Fonctionnalités spécifiques métier",
  "Accompagnement & maintenance longue durée",
];

export default function Pricing() {
  return (
    <section className="py-14 bg-[#f5f5f5]" id="pricing">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Badge + Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.span
            variants={scrollVariants}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6 border border-gray-200"
          >
            Tarifs
          </motion.span>
          <motion.h2
            variants={scrollVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Des offres{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              claires
            </span>
            ,<br />
            sans mauvaises surprises.
          </motion.h2>
        </motion.div>

        {/* 2 Main Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              variants={scrollVariants}
              className={`rounded-3xl p-8 md:p-10 flex flex-col ${
                offer.dark ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
                >
                  {offer.name}
                </span>
                {offer.badge && (
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      offer.dark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {offer.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl sm:text-5xl font-bold">
                  {offer.currency}{offer.price}
                </span>
                <span className={`text-base ml-2 ${offer.dark ? "text-gray-400" : "text-gray-400"}`}>
                  TTC
                </span>
              </div>

              <p
                className={`text-sm mb-8 leading-relaxed ${
                  offer.dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {offer.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {offer.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        offer.dark ? "text-white" : "text-black"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        offer.dark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href={offer.ctaHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-medium text-sm text-center transition-colors ${
                  offer.dark
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {offer.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Sur Devis Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <span
                className="text-xl block mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
              >
                Sur Devis
              </span>
              <h3 className="text-2xl font-bold mb-3">
                Un projet plus complexe&nbsp;?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Vous avez une vision précise, des besoins spécifiques ou un
                projet d&apos;envergure ? On en discute en amont et je vous
                propose un devis personnalisé adapté à votre budget et vos
                objectifs.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Discutons de votre projet
              </motion.a>
            </div>

            {/* Right */}
            <ul className="grid grid-cols-1 gap-3">
              {devisFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
