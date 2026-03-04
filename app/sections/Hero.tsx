"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {

  return (
    <section className="relative bg-[#f5f5f5]">
      {/* Decorative image */}
      <div className="pointer-events-none select-none absolute z-0 top-1/2 -translate-y-1/2 right-[27%] w-[260px] md:w-[360px] lg:w-[440px] max-w-none hidden sm:block">
        <Image
          src="/hero-visual.png"
          alt=""
          width={900}
          height={1200}
          priority
          className="w-full h-auto"
          style={{
            maskImage: [
              "linear-gradient(to right,  transparent 0%, black 15%, black 85%, transparent 100%)",
              "linear-gradient(to bottom, transparent 0%, black 30%, black 65%, transparent 100%)",
            ].join(", "),
            WebkitMaskImage: [
              "linear-gradient(to right,  transparent 0%, black 15%, black 85%, transparent 100%)",
              "linear-gradient(to bottom, transparent 0%, black 30%, black 65%, transparent 100%)",
            ].join(", "),
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1520px] px-6 md:px-16 pt-12 md:pt-24 pb-12 md:pb-24 grid grid-cols-12 items-start">

        {/* Left — text content */}
        <div className="relative z-10 col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["Social Graphics", "UX Design", "Web Design", "SEO"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-gray-300 text-xs text-gray-500 bg-white/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
          >
            <span className="block sm:whitespace-nowrap">
              Une présence{" "}
              <span
                className="font-normal"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
              >
                digitale
              </span>
            </span>
            <span className="block sm:whitespace-nowrap">à la hauteur de vos</span>
            <span className="block">ambitions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed"
          >
            Je conçois des sites modernes, rapides et optimisés pour générer
            des résultats concrets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 items-center"
          >
            <motion.a
              href="#pricing"
              className="px-7 py-3.5 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir les offres
            </motion.a>

            <motion.a
              href="/contact"
              className="flex items-center gap-3 pl-2 pr-5 py-2 bg-white rounded-full border border-gray-200 hover:border-gray-300 transition-colors shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                  I
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-black">Discutons de votre projet</p>
                <p className="text-xs text-green-600 font-medium">Disponible maintenant</p>
              </div>
            </motion.a>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
