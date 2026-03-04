"use client";

import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";
import { Search, Smartphone, Zap, Shield, BarChart2, Headphones } from "lucide-react";

const features = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "SEO optimisé dès le départ",
    description: "Structure technique, balises, vitesse de chargement et maillage interne pensés pour être bien référencés sur Google.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "100% responsive",
    description: "Votre site s'adapte parfaitement à tous les écrans : mobile, tablette et desktop, sans compromis sur le design.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performances élevées",
    description: "Sites rapides, légers et optimisés. Un bon score Core Web Vitals améliore votre référencement et l'expérience utilisateur.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Hébergement sécurisé inclus",
    description: "Certificat SSL, hébergement fiable et nom de domaine inclus la première année. Votre site est en ligne, protégé et disponible.",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Suivi analytique",
    description: "Intégration Google Analytics pour suivre vos visiteurs, comprendre leur comportement et prendre de meilleures décisions.",
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "Accompagnement personnalisé",
    description: "Je reste disponible durant tout le projet et vous forme à la gestion de votre site. Vous n'êtes jamais livré à vous-même.",
  },
];


export default function Features() {
  return (
    <section className="section bg-[#f5f5f5]" id="features">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Badge + Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-6 md:mb-10"
        >
          <motion.span
            variants={scrollVariants}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-3 md:mb-6 border border-gray-200"
          >
            Fonctionnalités
          </motion.span>
          <motion.h2
            variants={scrollVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            Tout ce dont vous avez besoin,{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              rien
            </span>
            <br />
            de superflu.
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={scrollVariants}
              className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
