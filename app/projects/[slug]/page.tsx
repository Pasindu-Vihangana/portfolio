import { notFound } from "next/navigation";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { PROJECTS } from "@/context/projects";
import ProjectDetailPage from "@/components/ProjectDetailPage/ProjectDetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Pasindu Vihangana`,
    description: project.description,
    keywords: project.tags.join(", "),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  let readmeContent = "";
  try {
    const filePath = path.join(process.cwd(), "context", "projects", `${slug}.md`);
    if (fs.existsSync(filePath)) {
      readmeContent = fs.readFileSync(filePath, "utf-8");
    }
  } catch (error) {
    console.error(`Failed to read README for slug ${slug}:`, error);
  }

  return <ProjectDetailPage project={project} readmeContent={readmeContent} />;
}
