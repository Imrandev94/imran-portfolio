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

export const projectsData: Project[] = [];
