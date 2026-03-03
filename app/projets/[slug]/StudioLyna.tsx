"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Gloock, Jost } from "next/font/google";
import type { Project } from "../data";

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloock",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
});

const C = {
  cream: "#FAF7F5",
  rose: "#E8C5B8",
  roseDark: "#C09585",
  roseBg: "#F3E8E3",
  taupe: "#8B7B6B",
  choco: "#2D2320",
  chocolateLight: "#3D3028",
};

export default function StudioLynaPage({ project }: { project: Project }) {
  return (
    <div
      className={`${gloock.variable} ${jost.variable}`}
      style={{ backgroundColor: C.cream, color: C.choco }}
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen pt-16 flex flex-col items-center justify-center overflow-hidden px-8"
        style={{ backgroundColor: C.cream }}
      >
        {/* Decorative rings */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "min(65vw, 560px)",
            height: "min(65vw, 560px)",
            border: `1px solid ${C.rose}`,
            opacity: 0.45,
          }}
        />
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "min(42vw, 360px)",
            height: "min(42vw, 360px)",
            border: `1px solid ${C.roseDark}`,
            opacity: 0.25,
          }}
        />
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "min(22vw, 180px)",
            height: "min(22vw, 180px)",
            backgroundColor: C.rose,
            opacity: 0.07,
          }}
        />

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-20 left-8 md:left-16"
        >
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 group"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: C.taupe,
              textTransform: "uppercase",
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 duration-300" />
            Retour
          </Link>
        </motion.div>

        {/* Category + date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute top-20 right-8 md:right-16 text-right"
        >
          <div
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: C.roseDark,
            }}
          >
            {project.category}
          </div>
          <div
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: C.taupe,
              marginTop: "2px",
            }}
          >
            {project.date}
          </div>
        </motion.div>

        {/* Central content */}
        <div className="relative text-center z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "10px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: C.roseDark,
              marginBottom: "2.5rem",
            }}
          >
            Studio · Beauté · Élégance
          </motion.p>

          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontFamily: "var(--font-gloock)",
                fontWeight: 400,
                fontSize: "clamp(50px, 10vw, 136px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                color: C.choco,
              }}
            >
              Studio Lyna
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontFamily: "var(--font-gloock)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 2.5vw, 24px)",
              lineHeight: 1.4,
              color: C.taupe,
              maxWidth: "480px",
              margin: "2rem auto 0",
            }}
          >
            {project.tagline}
          </motion.p>

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{
              margin: "3rem auto 0",
              width: "80px",
              height: "1px",
              backgroundColor: C.rose,
            }}
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-stretch justify-center gap-0 mt-10"
          >
            {project.stats.map((s, i) => (
              <div
                key={i}
                className="text-center px-8 md:px-10"
                style={{
                  borderRight: i < project.stats.length - 1 ? `1px solid ${C.rose}` : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-gloock)",
                    fontSize: "clamp(22px, 3vw, 30px)",
                    color: C.choco,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: C.taupe,
                    marginTop: "6px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LE PROJET ────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-28"
        style={{ backgroundColor: C.roseBg }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "10px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: C.roseDark,
              textAlign: "center",
              marginBottom: "5rem",
            }}
          >
            Le projet
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Pull quote + tools */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2"
            >
              <p
                style={{
                  fontFamily: "var(--font-gloock)",
                  fontStyle: "italic",
                  fontSize: "clamp(20px, 2.8vw, 28px)",
                  lineHeight: 1.4,
                  color: C.choco,
                }}
              >
                Un espace digital aussi délicat que ses soins.
              </p>

              <div
                className="pt-8 mt-10"
                style={{ borderTop: `1px solid ${C.rose}` }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: C.roseDark,
                    marginBottom: "1rem",
                  }}
                >
                  Outils
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "11px",
                        fontWeight: 400,
                        padding: "5px 14px",
                        borderRadius: "999px",
                        backgroundColor: C.rose,
                        color: C.choco,
                      }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Body text */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="md:col-span-3"
            >
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.95,
                  color: C.taupe,
                }}
              >
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LIVRABLES ────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-28"
        style={{ backgroundColor: C.cream }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "10px",
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: C.roseDark,
              textAlign: "center",
              marginBottom: "5rem",
            }}
          >
            Livrables
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-20">
            {project.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-5 py-5"
                style={{ borderBottom: `1px solid ${C.rose}` }}
              >
                {/* Dot marker */}
                <div
                  className="flex-shrink-0 mt-1.5"
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    border: `1px solid ${C.roseDark}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: C.roseDark,
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontWeight: 300,
                    fontSize: "15px",
                    lineHeight: 1.5,
                    color: C.choco,
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGE ───────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-28"
        style={{ backgroundColor: C.roseBg }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                fontFamily: "var(--font-gloock)",
                fontSize: "96px",
                lineHeight: 1,
                color: C.rose,
                marginBottom: "-8px",
                opacity: 0.8,
              }}
            >
              "
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-gloock)",
                fontStyle: "italic",
                fontSize: "clamp(18px, 2.5vw, 26px)",
                lineHeight: 1.6,
                color: C.choco,
                marginBottom: "3rem",
              }}
            >
              {project.testimonial.text}
            </motion.p>

            <div
              style={{
                width: "48px",
                height: "1px",
                backgroundColor: C.rose,
                margin: "0 auto 2rem",
              }}
            />

            <div
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 500,
                fontSize: "13px",
                color: C.choco,
              }}
            >
              {project.testimonial.author}
            </div>
            <div
              style={{
                fontFamily: "var(--font-jost)",
                fontWeight: 300,
                fontSize: "12px",
                color: C.taupe,
                marginTop: "4px",
                letterSpacing: "0.05em",
              }}
            >
              {project.testimonial.role}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-24"
        style={{ backgroundColor: C.cream }}
      >
        <div
          className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10 pt-10"
          style={{ borderTop: `1px solid ${C.rose}` }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.roseDark,
                marginBottom: "0.75rem",
              }}
            >
              Vous avez un projet similaire ?
            </div>
            <p
              style={{
                fontFamily: "var(--font-gloock)",
                fontSize: "clamp(26px, 3.5vw, 38px)",
                color: C.choco,
                lineHeight: 1.2,
              }}
            >
              Créons quelque chose d'unique.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 36px",
                fontFamily: "var(--font-jost)",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                backgroundColor: C.choco,
                color: C.cream,
              }}
            >
              Démarrer un projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
