"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import type { Project } from "../data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

const C = {
  bg: "#F4EFE8",
  dark: "#1C120A",
  amber: "#B8834A",
  walnut: "#7A5C3C",
  linen: "#E8DDD0",
  body: "#4A3528",
};

export default function AtelierMartinPage({ project }: { project: Project }) {
  return (
    <div
      className={`${cormorant.variable} ${dm.variable}`}
      style={{ backgroundColor: C.bg, color: C.dark }}
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen pt-16 pb-16 px-8 md:px-16 flex flex-col justify-between overflow-hidden"
        style={{ backgroundColor: C.bg }}
      >
        {/* Paper grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Top row */}
        <div className="relative flex justify-between items-center pt-6">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 group"
              style={{ fontFamily: "var(--font-dm)", fontSize: "13px", color: C.walnut }}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-300" />
              Projets
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ fontFamily: "var(--font-dm)", fontSize: "11px", letterSpacing: "0.25em", color: C.amber }}
          >
            {project.category.toUpperCase()} — {project.date.toUpperCase()}
          </motion.span>
        </div>

        {/* Central hero */}
        <div className="relative flex-1 flex flex-col justify-center mt-8 md:mt-0">
          <div className="grid md:grid-cols-12 gap-6 md:gap-0 items-end">

            {/* Vertical label */}
            <div className="hidden md:flex md:col-span-1 items-end pb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "9px",
                  letterSpacing: "0.4em",
                  color: C.amber,
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  textTransform: "uppercase",
                }}
              >
                Menuisier · Artisan
              </motion.div>
            </div>

            {/* Title */}
            <div className="md:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "10px",
                  letterSpacing: "0.35em",
                  color: C.amber,
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}
              >
                001 / Portfolio
              </motion.p>

              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                    color: C.dark,
                    lineHeight: 0.88,
                    fontSize: "clamp(68px, 11vw, 155px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Atelier
                  <br />
                  <span style={{ color: C.amber }}>Martin</span>
                </motion.h1>
              </div>
            </div>

            {/* Right: tagline + stats */}
            <div className="md:col-span-4 flex flex-col justify-end gap-8 md:pl-8 pb-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 2vw, 24px)",
                  lineHeight: 1.35,
                  color: C.walnut,
                }}
              >
                {project.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="space-y-2"
              >
                {project.stats.map((s, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 600,
                        fontSize: "20px",
                        color: C.dark,
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: "11px",
                        color: C.walnut,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom reveal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "1px",
            backgroundColor: C.amber,
            transformOrigin: "left",
            marginTop: "3rem",
          }}
        />
      </section>

      {/* ── LE PROJET ────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-28"
        style={{ backgroundColor: C.bg }}
      >
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Chapter label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "9px",
                letterSpacing: "0.35em",
                color: C.amber,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Le projet
            </div>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "80px",
                lineHeight: 1,
                color: C.linen,
                userSelect: "none",
              }}
            >
              01
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: 1.35,
                color: C.dark,
              }}
            >
              Quinze ans de savoir-faire artisanal, enfin mis en lumière.
            </p>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="md:col-span-6"
          >
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.9,
                color: C.body,
              }}
            >
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-24"
        style={{ backgroundColor: C.dark }}
      >
        <div className="grid grid-cols-3 max-w-2xl">
          {project.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={i < 2 ? "border-r pr-8 md:pr-14" : "pl-8 md:pl-14"}
              style={{ borderColor: "#2E1F14" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 600,
                  fontSize: "clamp(40px, 5vw, 64px)",
                  lineHeight: 1,
                  color: C.amber,
                  marginBottom: "0.75rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: C.walnut,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LIVRABLES ────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-28"
        style={{ backgroundColor: C.bg }}
      >
        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "9px",
                letterSpacing: "0.35em",
                color: C.amber,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Livrables
            </div>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "80px",
                lineHeight: 1,
                color: C.linen,
                userSelect: "none",
              }}
            >
              02
            </div>
          </motion.div>

          <div className="md:col-span-10">
            {project.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-baseline gap-8 py-5 border-b"
                style={{ borderColor: C.linen }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: "11px",
                    color: C.amber,
                    width: "2rem",
                    flexShrink: 0,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                    fontSize: "clamp(18px, 2.2vw, 24px)",
                    color: C.dark,
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
        style={{ backgroundColor: C.dark }}
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "140px",
              lineHeight: 1,
              color: C.amber,
              opacity: 0.3,
              marginBottom: "-28px",
            }}
          >
            "
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(22px, 3vw, 38px)",
              lineHeight: 1.45,
              color: C.bg,
              marginBottom: "3.5rem",
            }}
          >
            {project.testimonial.text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-5"
          >
            <div style={{ width: "48px", height: "1px", backgroundColor: C.amber }} />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: C.bg,
                }}
              >
                {project.testimonial.author}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "11px",
                  color: C.walnut,
                  marginTop: "2px",
                }}
              >
                {project.testimonial.role}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OUTILS + CTA ─────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-20 flex flex-col md:flex-row md:items-end justify-between gap-12"
        style={{ backgroundColor: C.bg }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "9px",
              letterSpacing: "0.35em",
              color: C.amber,
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Outils utilisés
          </div>
          <div className="flex flex-wrap items-center gap-x-0">
            {project.tools.map((tool, i) => (
              <span key={i}>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                    fontSize: "20px",
                    color: C.walnut,
                  }}
                >
                  {tool}
                </span>
                {i < project.tools.length - 1 && (
                  <span
                    style={{
                      fontFamily: "var(--font-dm)",
                      color: C.amber,
                      margin: "0 1rem",
                      fontSize: "14px",
                    }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4"
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
                fontSize: "clamp(18px, 2.2vw, 26px)",
                color: C.dark,
              }}
            >
              Vous avez un projet similaire ?
            </span>
            <motion.span
              whileHover={{ x: 8 }}
              transition={{ duration: 0.25 }}
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.amber,
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
