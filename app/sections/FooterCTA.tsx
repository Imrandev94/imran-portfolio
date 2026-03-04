"use client";

import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

export default function FooterCTA() {
  return (
    <section className="section bg-black text-white" id="footer-cta">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.span
            variants={scrollVariants}
            className="block text-xl mb-8 md:mb-10"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
          >
            imrandev<sup className="text-sm not-italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>®</sup>
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={scrollVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5 md:mb-6 tracking-tight"
          >
            Prêt à lancer{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              votre projet&nbsp;?
            </span>
          </motion.h2>

          {/* Subline */}
          <motion.p
            variants={scrollVariants}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10"
          >
            Envoyez-moi un message via le formulaire de contact. On définit
            ensemble vos besoins, le délai et le budget. Sans pression, sans engagement.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={scrollVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              Nous contacter
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-colors"
            >
              Voir les tarifs
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
