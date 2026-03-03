"use client";

import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

export default function ContactPage() {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      setErrorMsg("Fichier trop lourd (max 5 Mo).");
      return;
    }
    setErrorMsg("");
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData();
    formData.append("prenom", prenom);
    formData.append("email", email);
    formData.append("sujet", sujet);
    formData.append("message", message);
    if (file) formData.append("file", file);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    }
  };

  const inputClass =
    "px-5 py-4 bg-white rounded-2xl border border-gray-200 text-sm outline-none focus:border-gray-400 transition-colors w-full";

  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f5] min-h-screen flex items-center justify-center pt-20">
        <div className="w-full max-w-xl mx-auto px-6 py-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span
              variants={scrollVariants}
              className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6 border border-gray-200"
            >
              Contact
            </motion.span>

            <motion.h1
              variants={scrollVariants}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            >
              Discutons de votre{" "}
              <span
                className="font-normal"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
              >
                projet.
              </span>
            </motion.h1>

            <motion.p variants={scrollVariants} className="text-gray-500 mb-10 leading-relaxed">
              Décrivez-moi votre projet et je vous répondrai sous 24h.
            </motion.p>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl p-10 text-center border border-gray-100"
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h2 className="text-xl font-semibold mb-2">Message envoyé !</h2>
                  <p className="text-gray-500 text-sm">Je vous répondrai sous 24h à <strong>{email}</strong>.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  variants={scrollVariants}
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Votre prénom *"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      required
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Votre email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={inputClass}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Sujet"
                    value={sujet}
                    onChange={(e) => setSujet(e.target.value)}
                    className={inputClass}
                  />

                  <textarea
                    rows={5}
                    placeholder="Décrivez votre projet... *"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={`${inputClass} resize-none`}
                  />

                  {/* File upload */}
                  <div
                    onClick={() => fileRef.current?.click()}
                    className="flex items-center gap-3 px-5 py-4 bg-white rounded-2xl border border-gray-200 border-dashed cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 shrink-0">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-gray-400 truncate">
                      {file ? file.name : "Joindre un fichier (image, screenshot — max 5 Mo)"}
                    </span>
                    {file && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setFile(null); if (fileRef.current) fileRef.current.value = ""; }}
                        className="ml-auto text-gray-400 hover:text-gray-600 shrink-0 text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleFile}
                  />

                  {errorMsg && (
                    <p className="text-red-500 text-sm">{errorMsg}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    className="self-start px-8 py-4 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
