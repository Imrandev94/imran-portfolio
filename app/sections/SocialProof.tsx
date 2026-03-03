"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={ref} className="py-14 bg-[#f5f5f5] overflow-hidden">
      <motion.div style={{ y }} className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.span
            variants={scrollVariants}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6 border border-gray-200"
          >
            Projets
          </motion.span>
          <motion.h2
            variants={scrollVariants}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Des sites qui parlent{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              d'eux-mêmes.
            </span>
          </motion.h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
