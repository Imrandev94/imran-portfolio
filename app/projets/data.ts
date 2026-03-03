export type Project = {
  slug: string;
  title: string;
  client: string;
  date: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stats: { label: string; value: string }[];
  tools: string[];
  testimonial: { text: string; author: string; role: string };
  gradient: string;
  shapes: number;
};

export const projectsData: Project[] = [
  {
    slug: "atelier-martin",
    title: "Atelier Martin",
    client: "Atelier Martin",
    date: "Février 2025",
    category: "Site Vitrine",
    tagline: "Un artisan exceptionnel méritait un site à sa hauteur.",
    description:
      "Thomas Martin, menuisier artisan depuis 15 ans, n'avait aucune présence en ligne. Son activité reposait uniquement sur le bouche-à-oreille et les Pages Jaunes. Nous avons créé un site vitrine chaleureux et professionnel qui reflète son savoir-faire : galerie de réalisations, présentation des services, formulaire de devis. En 3 semaines, il reçoit en moyenne 5 demandes de devis par semaine directement via le site.",
    deliverables: [
      "Page d'accueil avec hero visuel",
      "Présentation des 4 services (cuisines, dressings, escaliers, sur-mesure)",
      "Galerie de réalisations (12 photos)",
      "Formulaire de demande de devis",
      "Page de contact avec carte",
      "Optimisation mobile et SEO local",
    ],
    stats: [
      { label: "Devis reçus / semaine", value: "5+" },
      { label: "Livraison", value: "11 jours" },
      { label: "Score Lighthouse", value: "96/100" },
    ],
    tools: ["Next.js", "Tailwind CSS", "Figma", "Vercel"],
    testimonial: {
      text: "Avant, mes clients ne savaient pas vraiment ce que je faisais. Maintenant, ils arrivent déjà convaincus. Le site a complètement changé mon rapport aux clients.",
      author: "Thomas M.",
      role: "Artisan menuisier, Atelier Martin",
    },
    gradient: "from-stone-950 via-amber-950 to-stone-900",
    shapes: 0,
  },
  {
    slug: "elecpro-services",
    title: "ÉlecPro Services",
    client: "ÉlecPro Services",
    date: "Janvier 2025",
    category: "Site Vitrine",
    tagline: "Visible sur Google, crédible dès le premier clic.",
    description:
      "ÉlecPro Services, électricien indépendant en région parisienne, cherchait à améliorer sa visibilité locale et à rassurer les clients avant même le premier appel. Le site a été conçu pour être clair, ultra-rapide, et optimisé pour les recherches locales sur Google. Le bouton d'appel direct sur mobile a multiplié les prises de contact par 3 en deux mois.",
    deliverables: [
      "Page d'accueil avec services principaux",
      "Section interventions d'urgence mise en avant",
      "Bloc avis clients (intégration Google)",
      "Bouton d'appel direct (mobile)",
      "Formulaire de devis rapide",
      "Optimisation SEO local (Paris + banlieue)",
    ],
    stats: [
      { label: "Appels entrants", value: "×3" },
      { label: "Livraison", value: "8 jours" },
      { label: "Score Lighthouse", value: "99/100" },
    ],
    tools: ["Next.js", "Tailwind CSS", "Figma", "Vercel"],
    testimonial: {
      text: "En deux mois, j'ai eu plus d'appels qu'en toute l'année précédente. Le site est simple, efficace — exactement ce qu'il me fallait.",
      author: "Kevin B.",
      role: "Gérant, ÉlecPro Services",
    },
    gradient: "from-slate-950 via-blue-950 to-slate-900",
    shapes: 1,
  },
  {
    slug: "studio-lyna-beaute",
    title: "Studio Lyna Beauté",
    client: "Studio Lyna",
    date: "Décembre 2024",
    category: "Site Vitrine",
    tagline: "Un écrin digital aussi soigné que ses prestations.",
    description:
      "Lyna, esthéticienne indépendante depuis 6 ans, souhaitait moderniser son image et faciliter la prise de rendez-vous pour ses clientes. Nous avons conçu un site élégant, avec un design féminin soigné, une présentation claire des prestations et l'intégration d'un système de réservation en ligne. Les clientes réservent désormais directement sans passer par l'appel téléphonique.",
    deliverables: [
      "Design UI élégant et féminin",
      "Présentation des prestations (6 catégories)",
      "Intégration réservation en ligne",
      "Section avis clients",
      "Galerie avant/après",
      "Optimisation mobile",
    ],
    stats: [
      { label: "Réservations en ligne", value: "+68%" },
      { label: "Livraison", value: "14 jours" },
      { label: "Appels manuels", value: "−40%" },
    ],
    tools: ["Next.js", "Tailwind CSS", "Figma", "Vercel"],
    testimonial: {
      text: "Mes clientes adorent pouvoir réserver depuis leur téléphone à n'importe quelle heure. Le site reflète exactement l'ambiance de mon studio. Je suis ravie.",
      author: "Lyna K.",
      role: "Fondatrice, Studio Lyna Beauté",
    },
    gradient: "from-neutral-950 via-rose-950 to-stone-950",
    shapes: 2,
  },
  {
    slug: "cleanauto-express",
    title: "CleanAuto Express",
    client: "CleanAuto Express",
    date: "Mars 2025",
    category: "Landing Page",
    tagline: "Convertir les visiteurs en clients, sans friction.",
    description:
      "CleanAuto Express propose un service de lavage automobile à domicile dans la région lyonnaise. L'objectif était simple : une landing page orientée conversion, mobile-first, qui explique clairement les formules et incite à la prise de contact immédiate. En un mois, 80% des demandes entrantes proviennent désormais du formulaire en ligne.",
    deliverables: [
      "Landing page one-page orientée conversion",
      "Présentation des 3 formules avec tarifs",
      "Section bénéfices clés",
      "Formulaire de contact optimisé",
      "Bouton d'appel direct mobile",
      "Optimisation SEO local (Lyon)",
    ],
    stats: [
      { label: "Demandes via formulaire", value: "80%" },
      { label: "Livraison", value: "6 jours" },
      { label: "Taux de conversion", value: "12%" },
    ],
    tools: ["Next.js", "Tailwind CSS", "Figma", "Vercel"],
    testimonial: {
      text: "En une semaine, j'avais déjà 15 demandes via le formulaire. Avant, les clients ne savaient même pas que j'existais en ligne. Imran a fait un travail rapide et vraiment efficace.",
      author: "Samir T.",
      role: "Gérant, CleanAuto Express",
    },
    gradient: "from-neutral-950 via-slate-900 to-blue-950",
    shapes: 3,
  },
];
