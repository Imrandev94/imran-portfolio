"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";
import { projectsData } from "../projets/data";

export default function Portfolio() {
  return (
    <section className="section bg-[#f5f5f5]" id="work">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Heading */}
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Link href={`/projets/${project.slug}`}>
                <motion.div
                  className="relative rounded-3xl overflow-hidden cursor-pointer group h-[260px] sm:h-[340px] md:h-[420px]"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                  {/* Overlay — bottom gradient for text legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />

                  {/* Category tag */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-20">
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
