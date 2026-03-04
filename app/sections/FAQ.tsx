"use client";

import { motion } from "framer-motion";
import { scrollVariants, staggerContainer } from "../hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "Le délai dépend de la formule choisie. Un site vitrine simple (offre Simple) est livré en 7 à 10 jours ouvrés. Un site Pro plus complet avec animations est livré en 14 à 21 jours. Pour les projets sur devis, un calendrier personnalisé est défini ensemble lors du premier appel.",
  },
  {
    question: "Est-ce que je suis propriétaire de mon site ?",
    answer:
      "Oui, à 100%. Le site que je crée vous appartient entièrement. Vous recevez tous les accès (hébergement, nom de domaine, CMS si applicable) et vous êtes libre d'en faire ce que vous souhaitez.",
  },
  {
    question: "Mon site sera-t-il visible sur mobile ?",
    answer:
      "Absolument. Chaque site est conçu en responsive design dès le départ et s'adapte parfaitement à tous les écrans : mobile, tablette et desktop. C'est un standard non négociable.",
  },
  {
    question: "Le référencement (SEO) est-il inclus ?",
    answer:
      "Oui. L'offre Simple inclut une optimisation SEO de base (balises, structure, vitesse). L'offre Pro inclut un SEO technique avancé (sitemap, schema markup, Core Web Vitals). Pour un accompagnement SEO long terme, on peut en discuter sur devis.",
  },
  {
    question: "Combien de révisions puis-je demander ?",
    answer:
      "Je travaille jusqu'à ce que vous soyez satisfait. Des allers-retours sont prévus dans le process : une première version, vos retours, puis les ajustements nécessaires. L'objectif est que vous soyez pleinement satisfait du résultat.",
  },
  {
    question: "Que se passe-t-il après la livraison du site ?",
    answer:
      "Une fois le site livré, vous êtes autonome. Si vous souhaitez un accompagnement ou une maintenance régulière (mises à jour, ajout de pages, support technique), c'est possible via un contrat sur devis adapté à vos besoins.",
  },
  {
    question: "L'hébergement et le nom de domaine sont-ils inclus ?",
    answer:
      "L'offre Simple inclut l'hébergement et le nom de domaine pour la première année. À partir de la deuxième année, le renouvellement est à votre charge (coût annuel variable selon le registrar, généralement 10 à 30€). L'offre Pro et Sur Devis peuvent inclure des configurations spécifiques selon vos besoins.",
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer:
      "Je travaille avec un acompte de 50% au démarrage et le solde à la livraison. Les paiements se font par virement bancaire ou carte via lien sécurisé. Pour les projets Sur Devis, un échelonnement peut être envisagé.",
  },
];

export default function FAQ() {
  return (
    <section className="section bg-[#f5f5f5]" id="faq">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span
            variants={scrollVariants}
            className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-4 md:mb-6 border border-gray-200"
          >
            FAQs
          </motion.span>

          <motion.h2
            variants={scrollVariants}
            className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight"
          >
            Questions{" "}
            <span
              className="font-normal"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontStyle: "italic" }}
            >
              Fréquentes
            </span>
          </motion.h2>

          <motion.div
            variants={scrollVariants}
            className="flex items-center justify-between mb-7 md:mb-12"
          >
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a
                href="mailto:hello@imrandev.com"
                className="font-medium text-black hover:underline"
              >
                hello@imrandev.com
              </a>
            </div>
            <motion.a
              href="mailto:hello@imrandev.com"
              className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Nous contacter
            </motion.a>
          </motion.div>

          <motion.div variants={scrollVariants}>
            <Accordion type="single" collapsible className="space-y-1">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-gray-200 last:border-0"
                >
                  <AccordionTrigger className="text-left text-sm font-medium py-5 hover:no-underline [&[data-state=open]]:font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
