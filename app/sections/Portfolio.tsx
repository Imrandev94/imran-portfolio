"use client";

import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Brand Identity",
    category: "Projets",
    gradient: "from-slate-800 via-purple-900 to-slate-900",
    accent: "from-violet-500/30 to-indigo-500/20",
    shapes: [
      { w: 120, h: 120, bg: "bg-violet-500/40", r: "rounded-full", x: "left-1/4", y: "top-1/4" },
      { w: 80, h: 80, bg: "bg-indigo-400/30", r: "rounded-2xl rotate-12", x: "right-1/4", y: "bottom-1/3" },
      { w: 200, h: 4, bg: "bg-white/10", r: "rounded", x: "left-0 right-0", y: "top-1/2" },
    ],
  },
  {
    title: "Landing Page",
    category: "Projets",
    gradient: "from-amber-900 via-orange-900 to-red-900",
    accent: "from-orange-500/30 to-red-500/20",
    shapes: [
      { w: 160, h: 40, bg: "bg-orange-400/40", r: "rounded-full", x: "left-1/4", y: "top-1/3" },
      { w: 100, h: 100, bg: "bg-red-400/20", r: "rounded-3xl", x: "right-1/5", y: "bottom-1/4" },
    ],
  },
  {
    title: "Mobile App UI",
    category: "Projets",
    gradient: "from-emerald-900 via-teal-900 to-cyan-900",
    accent: "from-teal-500/30 to-cyan-500/20",
    shapes: [
      { w: 80, h: 160, bg: "bg-teal-400/30", r: "rounded-3xl", x: "left-1/3", y: "top-1/5" },
      { w: 60, h: 120, bg: "bg-cyan-400/20", r: "rounded-3xl", x: "left-1/2", y: "top-1/4" },
    ],
  },
  {
    title: "Pitch Deck",
    category: "Projets",
    gradient: "from-blue-900 via-indigo-900 to-violet-900",
    accent: "from-blue-500/30 to-indigo-500/20",
    shapes: [
      { w: 240, h: 140, bg: "bg-blue-400/20", r: "rounded-2xl", x: "left-1/2 -translate-x-1/2", y: "top-1/3" },
      { w: 60, h: 60, bg: "bg-indigo-400/40", r: "rounded-full", x: "right-1/4", y: "bottom-1/4" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-[#f5f5f5]" id="work">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Heading */}
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
              d'eux-mêmes.
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative rounded-3xl overflow-hidden cursor-pointer group h-[260px] sm:h-[340px] md:h-[420px]"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

              {/* Accent overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${project.accent}`}
                style={{ filter: "blur(40px)" }}
              />

              {/* Grid lines */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Category tag */}
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Decorative shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {i === 0 && (
                    <>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full border border-white/10" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full border border-white/10" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-violet-400/30 rounded-full" />
                      <div className="absolute right-1/4 bottom-1/3 w-16 h-16 bg-white/10 rounded-2xl rotate-12" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-10 bg-orange-400/30 rounded-full" />
                      <div className="absolute left-1/4 top-1/3 w-40 h-8 bg-white/10 rounded-full" />
                      <div className="absolute right-1/4 bottom-1/3 w-24 h-24 bg-red-400/20 rounded-3xl rotate-6" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <div className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-1/2 w-20 h-36 bg-teal-400/30 rounded-3xl" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-[20%] -translate-y-1/2 w-20 h-36 bg-cyan-400/20 rounded-3xl" />
                      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-xl" />
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-36 bg-blue-400/20 rounded-2xl border border-white/10" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-40 h-1 bg-white/20 rounded mb-3" />
                        <div className="w-28 h-1 bg-white/15 rounded mb-3" />
                        <div className="w-32 h-1 bg-white/10 rounded" />
                      </div>
                      <div className="absolute right-1/4 bottom-1/3 w-12 h-12 bg-indigo-400/40 rounded-full" />
                    </>
                  )}
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <p className="text-white/40 text-xs mt-1">
                    Example content for demo purposes only.
                  </p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
