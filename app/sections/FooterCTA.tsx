"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"];

function getWeekdays(year: number, month: number): number[] {
  const count = new Date(year, month + 1, 0).getDate();
  const days: number[] = [];
  for (let d = 1; d <= count; d++) {
    const dow = new Date(year, month, d).getDay();
    if (dow !== 0 && dow !== 6) days.push(d);
  }
  return days;
}

function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selected, setSelected] = useState<number | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("fr-FR", { month: "long" });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  const availableDays = getWeekdays(year, month);

  const cells = Array.from({ length: firstDay + daysInMonth }, (_, i) => {
    if (i < firstDay) return null;
    return i - firstDay + 1;
  });

  return (
    <div className="bg-gray-900 rounded-3xl p-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">Réserver un créneau</h3>
        <div className="flex gap-1">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="w-7 h-7 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="w-7 h-7 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-gray-400 text-xs mb-4">
        {monthName} {year}
      </p>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-xs text-gray-500 py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const isAvailable = availableDays.includes(day);
          const isSelected = selected === day;
          const isPast = isCurrentMonth && day < today.getDate();

          return (
            <button
              key={day}
              onClick={() => isAvailable && !isPast && setSelected(day)}
              disabled={!isAvailable || isPast}
              className={`
                aspect-square rounded-lg text-xs flex items-center justify-center transition-colors
                ${isSelected ? "bg-white text-black font-semibold" : ""}
                ${isAvailable && !isPast && !isSelected ? "bg-gray-800 hover:bg-gray-700 text-white cursor-pointer" : ""}
                ${!isAvailable || isPast ? "text-gray-700 cursor-not-allowed" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-gray-800"
        >
          <p className="text-xs text-gray-400 mb-3">
            {monthName} {selected} — Choisissez un horaire :
          </p>
          <div className="grid grid-cols-2 gap-2">
            {["10:00", "11:00", "14:00", "15:00"].map((time) => (
              <button
                key={time}
                className="py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs transition-colors"
              >
                {time}
              </button>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-3 py-2.5 bg-white text-black rounded-full text-xs font-medium hover:bg-gray-100 transition-colors"
          >
            Confirmer la réservation
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default function FooterCTA() {
  return (
    <section className="bg-black text-white py-24" id="footer-cta">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span
              variants={scrollVariants}
              className="block text-xl mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              imrandev<sup className="text-sm not-italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>®</sup>
            </motion.span>

            <motion.h2
              variants={scrollVariants}
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Votre site web,{" "}
              <span
                className="font-normal"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
              >
                livré
              </span>
              <br />
              en quelques
              <br />
              jours.
            </motion.h2>

            <motion.p
              variants={scrollVariants}
              className="text-gray-400 mb-8 max-w-md leading-relaxed"
            >
              Réservez un appel gratuit de 15 minutes pour discuter de votre projet.
              On définit ensemble vos besoins, le délai et le budget — sans pression,
              sans engagement.
            </motion.p>

            <motion.a
              variants={scrollVariants}
              href="#pricing"
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir les tarifs
            </motion.a>
          </motion.div>

          {/* Right - Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CalendarWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
