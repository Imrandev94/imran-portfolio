"use client";

import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";

const featuredPost = {
  category: "Stratégie Web",
  title: "Pourquoi votre site web est votre meilleur commercial",
  excerpt:
    "Un site bien conçu travaille pour vous 24h/24. Cet article explique comment transformer votre présence en ligne en véritable machine à générer des contacts et des ventes.",
  readTime: "5 min de lecture",
  gradient: "from-slate-700 via-gray-800 to-slate-900",
};

const articles = [
  {
    category: "SEO",
    title: "5 erreurs SEO qui coûtent des clients à votre site",
    excerpt: "Des balises mal configurées aux pages trop lentes, voici les pièges les plus courants et comment les éviter.",
    readTime: "4 min de lecture",
    gradient: "from-blue-900 to-indigo-900",
  },
  {
    category: "Design",
    title: "Ce que vos visiteurs décident en moins de 3 secondes",
    excerpt: "La première impression est tout. Voici comment le design de votre page d'accueil influence directement votre taux de conversion.",
    readTime: "6 min de lecture",
    gradient: "from-teal-900 to-emerald-900",
  },
  {
    category: "Conseils",
    title: "Site vitrine ou landing page : lequel choisir selon votre activité ?",
    excerpt: "Deux approches, deux objectifs différents. On vous aide à choisir le bon format pour votre projet.",
    readTime: "3 min de lecture",
    gradient: "from-violet-900 to-purple-900",
  },
];

function GradientImage({ gradient, category }: { gradient: string; category: string }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <span className="text-white/30 text-6xl font-bold">{category[0]}</span>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="blog">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Badge + Title */}
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
            Blog
          </motion.span>
          <motion.h2
            variants={scrollVariants}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Des lectures pratiques pour aller
            <br />
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              plus vite.
            </span>
          </motion.h2>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden mb-6"
        >
          <div className="grid md:grid-cols-2">
            <div className="h-56 md:h-auto min-h-[250px]">
              <GradientImage gradient={featuredPost.gradient} category={featuredPost.category} />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium mb-4 w-fit">
                {featuredPost.category}
              </span>
              <h3 className="text-2xl font-bold mb-4 leading-snug">
                {featuredPost.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{featuredPost.readTime}</span>
                <span
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
                >
                  par Imrandev<sup className="text-xs not-italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>®</sup>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Articles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-5"
        >
          {articles.map((article, i) => (
            <motion.div
              key={i}
              variants={scrollVariants}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="h-44 relative overflow-hidden">
                <GradientImage gradient={article.gradient} category={article.category} />
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-400 font-medium">{article.category}</span>
                <h4 className="font-semibold mt-2 mb-2 leading-snug text-sm">{article.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                  <span className="text-xs text-gray-400 group-hover:text-black transition-colors">
                    Lire →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
