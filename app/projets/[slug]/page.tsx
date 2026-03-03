"use client";

import { useParams, notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { projectsData } from "../data";
import AtelierMartinPage from "./AtelierMartin";
import ElecProPage from "./ElecPro";
import StudioLynaPage from "./StudioLyna";
import CleanAutoPage from "./CleanAuto";

const PAGE_MAP = {
  "atelier-martin": AtelierMartinPage,
  "elecpro-services": ElecProPage,
  "studio-lyna-beaute": StudioLynaPage,
  "cleanauto-express": CleanAutoPage,
} as const;

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  const PageComponent = PAGE_MAP[slug as keyof typeof PAGE_MAP];
  if (!PageComponent) return notFound();

  return (
    <>
      <Navbar />
      <PageComponent project={project} />
      <Footer />
    </>
  );
}
