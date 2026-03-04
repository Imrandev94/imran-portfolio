"use client";

import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";
import { MessageCircle, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    step: "01",
    title: "On discute de votre projet",
    description:
      "Un appel de 15 min pour cerner vos besoins et vos objectifs. Je vous propose ensuite une offre adaptée à votre activité.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    step: "02",
    title: "Je crée votre site",
    description:
      "Design, développement et optimisation SEO. Vous suivez l'avancement et validez les étapes clés ensemble.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    step: "03",
    title: "Vous recevez votre site",
    description:
      "Mise en ligne et transfert complet des accès. Votre site est prêt à générer des résultats dès le premier jour.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section bg-[#f5f5f5]" id="how-it-works">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Badge + Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-5 md:mb-7"
        >
          <motion.span
            variants={scrollVariants}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-3 md:mb-5 border border-gray-200"
          >
            Comment ça marche
          </motion.span>
          <motion.h2
            variants={scrollVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            Simple,{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              rapide
            </span>{" "}
            et sans
            <br />
            mauvaise surprise.
          </motion.h2>
        </motion.div>

        {/* 3 Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={scrollVariants}
              className="bg-white rounded-3xl p-8 shadow-sm flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-gray-100">{step.step}</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
