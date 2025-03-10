import ProjectsGrid from "@/components/project/ProjectsGrid";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const projects = await sanityFetch({ query: projectsQuery });

  return <ProjectsGrid projects={projects} />;
}
