"use client";

import { useParams, notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import { projectsData } from "../data";

const PAGE_MAP: Record<string, React.ComponentType<{ project: (typeof projectsData)[0] }>> = {};

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  const PageComponent = PAGE_MAP[slug];
  if (!PageComponent) return notFound();

  return (
    <>
      <Navbar />
      <PageComponent project={project} />
      <Footer />
    </>
  );
}
