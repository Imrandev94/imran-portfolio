"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import type { Project } from "../data";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
});

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm",
});

const C = {
  bg: "#080C18",
  bgCard: "#0F1424",
  blue: "#0047FF",
  yellow: "#F5C400",
  text: "#E8EDF5",
  muted: "#5A6A8A",
  border: "#1A2238",
  borderLight: "#243050",
};

export default function ElecProPage({ project }: { project: Project }) {
  return (
    <div
      className={`${barlow.variable} ${ibm.variable}`}
      style={{ backgroundColor: C.bg, color: C.text }}
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen pt-16 px-8 md:px-16 flex flex-col overflow-hidden"
        style={{ backgroundColor: C.bg }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            opacity: 0.5,
          }}
        />

        {/* Yellow top bar (reveal) */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 h-[3px]"
          style={{
            width: "45%",
            backgroundColor: C.yellow,
            transformOrigin: "right",
          }}
        />

        {/* Blue left accent */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-8 md:left-16 top-16 bottom-0 w-px"
          style={{ backgroundColor: C.blue, transformOrigin: "top", opacity: 0.25 }}
        />

        {/* Nav */}
        <div className="relative flex justify-between items-center pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 group"
              style={{ fontFamily: "var(--font-ibm)", fontSize: "13px", color: C.muted }}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-200" />
              Retour
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: C.yellow,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ibm)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.yellow,
              }}
            >
              {project.category}
            </span>
          </motion.div>
        </div>

        {/* Main title */}
        <div className="relative flex-1 flex flex-col justify-center mt-4 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            style={{
              fontFamily: "var(--font-ibm)",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: C.blue,
              marginBottom: "1.5rem",
            }}
          >
            — {project.date}
          </motion.div>

          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 800,
                fontSize: "clamp(56px, 10vw, 144px)",
                lineHeight: 0.87,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: C.text,
              }}
            >
              Élec<span style={{ color: C.yellow }}>Pro</span>
              <br />
              <span style={{ color: C.blue }}>Services</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            style={{
              fontFamily: "var(--font-ibm)",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: 1.65,
              color: C.muted,
              maxWidth: "480px",
              marginTop: "2rem",
            }}
          >
            {project.tagline}
          </motion.p>
        </div>

        {/* Stats row at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="relative flex flex-wrap gap-8 md:gap-16 py-8 border-t mt-8"
          style={{ borderColor: C.border }}
        >
          {project.stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: C.yellow,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ibm)",
                  fontSize: "11px",
                  color: C.muted,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── LE PROJET (bordered grid) ─────────────────────────── */}
      <section
        className="px-8 md:px-16 py-4"
        style={{ backgroundColor: C.bgCard }}
      >
        <div
          className="grid md:grid-cols-5 border"
          style={{ borderColor: C.border }}
        >
          {/* Description */}
          <div
            className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-r"
            style={{ borderColor: C.border }}
          >
            <div
              className="flex items-center gap-3 mb-8"
              style={{
                fontFamily: "var(--font-ibm)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.blue,
              }}
            >
              <div style={{ width: "24px", height: "1px", backgroundColor: C.blue }} />
              Le projet
            </div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-ibm)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.85,
                color: C.muted,
              }}
            >
              {project.description}
            </motion.p>
          </div>

          {/* Outils + métriques */}
          <div className="md:col-span-2 p-8 md:p-10">
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                fontFamily: "var(--font-ibm)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.blue,
              }}
            >
              <div style={{ width: "24px", height: "1px", backgroundColor: C.blue }} />
              Stack
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tools.map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  style={{
                    fontFamily: "var(--font-ibm)",
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "4px 12px",
                    border: `1px solid ${C.blue}`,
                    color: C.blue,
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div
              className="flex items-center gap-3 mb-4"
              style={{
                fontFamily: "var(--font-ibm)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.yellow,
              }}
            >
              <div style={{ width: "24px", height: "1px", backgroundColor: C.yellow }} />
              Métriques
            </div>

            {project.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center justify-between py-3 border-b"
                style={{ borderColor: C.border }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm)",
                    fontSize: "12px",
                    color: C.muted,
                  }}
                >
                  {s.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: C.yellow,
                  }}
                >
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVRABLES ────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-20"
        style={{ backgroundColor: C.bg }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
          style={{
            fontFamily: "var(--font-ibm)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: C.blue,
          }}
        >
          <div style={{ width: "24px", height: "1px", backgroundColor: C.blue }} />
          Livrables
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0">
          {project.deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex items-center gap-5 py-5 border-b"
              style={{ borderColor: C.border }}
            >
              <span
                style={{
                  fontFamily: "var(--font-barlow)",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: C.blue,
                  width: "3rem",
                  flexShrink: 0,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ibm)",
                  fontSize: "14px",
                  color: C.muted,
                }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TÉMOIGNAGE ───────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-24"
        style={{ backgroundColor: C.blue }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
            style={{
              fontFamily: "var(--font-ibm)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <div style={{ width: "24px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
            Témoignage
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontFamily: "var(--font-barlow)",
              fontWeight: 700,
              fontSize: "clamp(22px, 3.5vw, 42px)",
              lineHeight: 1.15,
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "2.5rem",
            }}
          >
            "{project.testimonial.text}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: C.yellow,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-barlow)",
                fontWeight: 700,
                fontSize: "16px",
                color: C.bg,
                flexShrink: 0,
              }}
            >
              {project.testimonial.author[0]}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-ibm)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                {project.testimonial.author}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: "2px",
                }}
              >
                {project.testimonial.role}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-20"
        style={{ backgroundColor: C.bgCard }}
      >
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-14 border-t"
          style={{ borderColor: C.border }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-ibm)",
                fontSize: "13px",
                color: C.muted,
                marginBottom: "0.5rem",
              }}
            >
              Vous avez un projet similaire ?
            </p>
            <p
              style={{
                fontFamily: "var(--font-barlow)",
                fontWeight: 700,
                fontSize: "clamp(32px, 5vw, 52px)",
                textTransform: "uppercase",
                color: C.text,
                lineHeight: 1,
              }}
            >
              Démarrons.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                fontFamily: "var(--font-barlow)",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                backgroundColor: C.yellow,
                color: C.bg,
              }}
            >
              Démarrer un projet →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
