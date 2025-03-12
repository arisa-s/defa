"use client";
import { ProjectCard } from "@/components/project";
import { ProjectsQueryResult } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { SanityImage } from "@/sanity/lib/type";
import { Image } from "next-sanity/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  _id: string;
  title: string;
  slug: string;
  date: string;
  coverImage: SanityImage;
}

interface ProjectsByYear {
  [key: string]: Project[];
}

export default function ProjectsGrid({
  projects,
}: {
  projects: ProjectsQueryResult;
}) {
  // Sort all projects by date for consistent numbering
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Create a map of project IDs to their numbers (1-based index)
  const projectDates = new Map(
    sortedProjects.map((project, index) => [
      project._id,
      (index + 1).toString().padStart(2, "0"),
    ])
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Group projects by year
  const projectsByYear = projects.reduce<ProjectsByYear>((acc, project) => {
    const year = new Date(project.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const totalProjects = projects.length.toString().padStart(2, "0");

  return (
    <div>
      <p className="mb-2">PROJECTS</p>
      <div className="flex border-t space-x-4 md:space-x-20 lg:space-x-36 justify-between">
        <div className="lg:max-w-5xl w-full">
          {Object.keys(projectsByYear)
            .sort((a, b) => parseInt(b) - parseInt(a)) // Sort years in descending order
            .map((year) => (
              <div key={year} className="">
                <div className="grid grid-col-1 md:grid-cols-3 xl:grid-cols-4 [clip-path:inset(1px_0_0)] *:border-b ">
                  {projectsByYear[year].map((project) => (
                    <div
                      key={project._id}
                      onClick={() => setSelectedProject(project)}
                    >
                      <ProjectCard
                        key={project._id}
                        imageUrl={
                          urlForImage(project.coverImage)?.url() as string
                        }
                        title={project.title}
                        slug={project.slug}
                        projectDate={formatDate(project.date)}
                        selected={selectedProject._id === project._id}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <Link
          href={`/project/${selectedProject.slug}`}
          className="group w-full max-w-sm lg:max-w-md ml-auto mt-4 flex flex-col space-y-2"
        >
          <p className="">
            {projectDates.get(selectedProject._id) || "00"}/{totalProjects}
          </p>

          <div className="w-full flex flex-col items-center">
            <div className="w-full aspect-[15/16] relative">
              <Image
                src={urlForImage(selectedProject.coverImage)?.url() as string}
                fill
                alt={`${selectedProject.title} cover image`}
                style={{ objectFit: "contain", objectPosition: "top" }}
                sizes="(max-width: 768px) 100vw, 640px"
                priority
              />
            </div>
          </div>
          <p className="group-hover:animate-bounce -my-2 z-20 ml-auto">
            {selectedProject.title}
            <span className="ml-2 text-3xl">⟶</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
