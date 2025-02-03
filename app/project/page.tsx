import { ProjectsCard } from "@/components/project";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const [projects] = await Promise.all([sanityFetch({ query: projectsQuery })]);

  return (
    <div className="container mx-auto px-5">
      {projects.map((p) => (
        <ProjectsCard key={p._id} {...p} />
      ))}
    </div>
  );
}
