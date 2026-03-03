"use client";

import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

export default function Projets() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="projets">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Badge + Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={scrollVariants}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6 border border-gray-200"
          >
            Projets
          </motion.span>
          <motion.h2
            variants={scrollVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Des sites qui parlent{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              d&apos;eux-mêmes.
            </span>
          </motion.h2>
          <motion.p
            variants={scrollVariants}
            className="text-gray-400 mt-6 text-sm"
          >
            Les projets arrivent bientôt.
          </motion.p>
        </motion.div>

        {/* Placeholder grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-5"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              variants={scrollVariants}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <div className="h-52 bg-gray-100 animate-pulse" />
              <div className="p-6">
                <div className="h-3 bg-gray-100 rounded-full w-1/3 mb-3 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded-full w-3/4 mb-2 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded-full w-1/2 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
