// CSS-only float animation — keyframes defined in globals.css

const avatars = [
  { initials: "AM", color: "from-violet-400 to-indigo-500",  left: "2%",  top: "15%", durY: 11, durX: 14, delay: 0    },
  { initials: "SC", color: "from-rose-400 to-orange-400",    left: "11%", top: "62%", durY: 9,  durX: 12, delay: 1.2  },
  { initials: "JP", color: "from-teal-400 to-cyan-500",      left: "20%", top: "20%", durY: 13, durX: 10, delay: 0.5  },
  { initials: "RK", color: "from-green-400 to-emerald-500",  left: "29%", top: "68%", durY: 10, durX: 15, delay: 2.1  },
  { initials: "MP", color: "from-amber-400 to-yellow-500",   left: "38%", top: "10%", durY: 12, durX: 9,  delay: 0.8  },
  { initials: "TR", color: "from-blue-400 to-indigo-500",    left: "47%", top: "58%", durY: 8,  durX: 13, delay: 1.7  },
  { initials: "LF", color: "from-fuchsia-400 to-pink-500",   left: "57%", top: "18%", durY: 14, durX: 11, delay: 0.3  },
  { initials: "KB", color: "from-emerald-400 to-teal-500",   left: "66%", top: "64%", durY: 9,  durX: 14, delay: 2.5  },
  { initials: "SD", color: "from-sky-400 to-cyan-500",       left: "75%", top: "22%", durY: 11, durX: 8,  delay: 1.0  },
  { initials: "NB", color: "from-pink-400 to-rose-500",      left: "84%", top: "60%", durY: 13, durX: 12, delay: 0.6  },
  { initials: "LM", color: "from-orange-400 to-red-500",     left: "91%", top: "16%", durY: 10, durX: 15, delay: 1.9  },
  { initials: "AV", color: "from-purple-400 to-violet-500",  left: "43%", top: "80%", durY: 8,  durX: 10, delay: 2.8  },
];

export default function FloatingAvatars() {
  return (
    <div
      className="absolute inset-x-0 top-10 h-44 pointer-events-none"
      aria-hidden="true"
    >
      {avatars.map((a, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: a.left,
            top: a.top,
            animation: `floatY ${a.durY}s ease-in-out infinite ${a.delay}s`,
          }}
        >
          {/* Inner div handles horizontal drift independently */}
          <div
            style={{
              animation: `driftX ${a.durX}s ease-in-out infinite ${a.delay + 1.5}s`,
            }}
          >
            <div
              className={`
                w-11 h-11 rounded-full bg-gradient-to-br ${a.color}
                flex items-center justify-center
                text-white font-semibold text-sm
                border border-black/[0.06]
                shadow-[0_8px_18px_rgba(0,0,0,0.08)]
              `}
            >
              {a.initials}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
