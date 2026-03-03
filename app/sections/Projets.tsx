"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";
import { projectsData } from "../projets/data";
import { WoodVisual, CircuitVisual, BeautyVisual, CarVisual } from "../components/ProjectCardVisual";

const cardVisuals = [WoodVisual, CircuitVisual, BeautyVisual, CarVisual];

export default function Projets() {
  return (
    <section className="py-16 bg-[#f5f5f5]" id="projets">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Badge + Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-12"
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
            className="text-gray-400 mt-4 text-sm"
          >
            Cliquez sur un projet pour en voir les détails.
          </motion.p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/projets/${project.slug}`}>
                <motion.div
                  className="relative rounded-3xl overflow-hidden cursor-pointer group h-[260px] sm:h-[340px] md:h-[420px]"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                  {/* Category tag */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Sector-specific visual */}
                  {(() => { const Visual = cardVisuals[i]; return Visual ? <Visual /> : null; })()}

                  {/* Bottom info */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                      <p className="text-white/40 text-xs mt-1">{project.client} · {project.date}</p>
                    </div>
                    <motion.div
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
