"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Syne, Outfit } from "next/font/google";
import type { Project } from "../data";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-outfit",
});

const C = {
  bg: "#0D0D0D",
  card: "#141414",
  blue: "#0066FF",
  blueHover: "#0052CC",
  text: "#FFFFFF",
  muted: "#888888",
  border: "#222222",
};

export default function CleanAutoPage({ project }: { project: Project }) {
  return (
    <div
      className={`${syne.variable} ${outfit.variable}`}
      style={{ backgroundColor: C.bg, color: C.text }}
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen pt-16 px-8 md:px-16 flex flex-col overflow-hidden"
        style={{ backgroundColor: C.bg }}
      >
        {/* Blue radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,102,255,0.14) 0%, transparent 65%)",
          }}
        />

        {/* Subtle horizontal lines */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              top: `${25 + i * 25}%`,
              height: "1px",
              backgroundColor: C.border,
              transformOrigin: "left",
              opacity: 0.6,
            }}
          />
        ))}

        {/* Nav */}
        <div className="relative flex justify-between items-center pt-8 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 group"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "13px",
                color: C.muted,
              }}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-200" />
              Retour
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            style={{
              padding: "6px 14px",
              fontFamily: "var(--font-outfit)",
              fontWeight: 600,
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              backgroundColor: C.blue,
              color: "#fff",
            }}
          >
            {project.category}
          </motion.div>
        </div>

        {/* Title */}
        <div className="relative flex-1 flex flex-col justify-center z-10 mt-4 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            style={{
              fontFamily: "var(--font-outfit)",
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
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(52px, 9.5vw, 136px)",
                lineHeight: 0.88,
                letterSpacing: "-0.025em",
                textTransform: "uppercase",
                color: C.text,
              }}
            >
              Clean<span style={{ color: C.blue }}>Auto</span>
              <br />
              Express
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.55 }}
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 300,
              fontSize: "17px",
              lineHeight: 1.6,
              color: C.muted,
              maxWidth: "460px",
              marginTop: "2rem",
            }}
          >
            {project.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.45 }}
            style={{ marginTop: "2.5rem" }}
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              style={{ display: "inline-block" }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 32px",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  backgroundColor: C.blue,
                  color: "#fff",
                }}
              >
                Démarrer un projet
                <span style={{ fontSize: "16px" }}>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom micro info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="relative z-10 py-7 border-t"
          style={{ borderColor: C.border }}
        >
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.muted,
            }}
          >
            Livraison rapide · Orienté conversion · SEO local Lyon
          </p>
        </motion.div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <section style={{ backgroundColor: C.blue }}>
        <div className="px-8 md:px-16 py-16 grid grid-cols-3">
          {project.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              className="py-4"
              style={{
                paddingLeft: i > 0 ? "2.5rem" : 0,
                paddingRight: i < 2 ? "2.5rem" : 0,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 6vw, 72px)",
                  lineHeight: 1,
                  color: "#fff",
                  marginBottom: "0.4rem",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SPLIT: PROJET + LIVRABLES ─────────────────────────── */}
      <section className="grid md:grid-cols-2">
        {/* Le projet */}
        <div
          className="px-8 md:px-12 py-20"
          style={{ backgroundColor: C.card }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="flex items-center gap-3 mb-8"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.blue,
              }}
            >
              <div style={{ width: "20px", height: "1px", backgroundColor: C.blue }} />
              Le projet
            </div>

            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.85,
                color: C.muted,
              }}
            >
              {project.description}
            </p>

            <div className="mt-10 pt-8" style={{ borderTop: `1px solid ${C.border}` }}>
              <div
                className="flex items-center gap-3 mb-4"
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                <div style={{ width: "20px", height: "1px", backgroundColor: C.muted }} />
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: "11px",
                      padding: "5px 12px",
                      border: `1px solid ${C.border}`,
                      color: C.muted,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Livrables */}
        <div
          className="px-8 md:px-12 py-20"
          style={{ backgroundColor: C.bg }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: C.blue,
            }}
          >
            <div style={{ width: "20px", height: "1px", backgroundColor: C.blue }} />
            Livrables
          </motion.div>

          <div>
            {project.deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-center gap-4 py-4"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: C.blue,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check style={{ width: "11px", height: "11px", color: "#fff" }} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 300,
                    fontSize: "14px",
                    color: C.muted,
                    lineHeight: 1.4,
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
        className="px-8 md:px-16 py-24"
        style={{ backgroundColor: C.card }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl pl-8 py-2"
          style={{ borderLeft: `3px solid ${C.blue}` }}
        >
          <div
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: C.muted,
              marginBottom: "1.5rem",
            }}
          >
            Témoignage client
          </div>

          <p
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: 1.5,
              color: C.text,
              marginBottom: "2rem",
            }}
          >
            "{project.testimonial.text}"
          </p>

          <div className="flex items-center gap-3">
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: C.blue,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "13px",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {project.testimonial.author[0]}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 500,
                  fontSize: "13px",
                  color: C.text,
                }}
              >
                {project.testimonial.author}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 300,
                  fontSize: "11px",
                  color: C.muted,
                  marginTop: "2px",
                }}
              >
                {project.testimonial.role}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="px-8 md:px-16 py-20"
        style={{ backgroundColor: C.bg }}
      >
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-14"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "13px",
                color: C.muted,
                marginBottom: "0.4rem",
              }}
            >
              Vous avez un projet similaire ?
            </p>
            <p
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(30px, 5vw, 56px)",
                textTransform: "uppercase",
                color: C.text,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Démarrons.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                padding: "20px 40px",
                fontFamily: "var(--font-outfit)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                backgroundColor: C.blue,
                color: "#fff",
              }}
            >
              Démarrer un projet
              <span style={{ fontSize: "18px" }}>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
