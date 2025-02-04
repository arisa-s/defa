import { ProjectCard } from "@/components/project";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const [projects] = await Promise.all([sanityFetch({ query: projectsQuery })]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {projects.map((p) => {
        return (
          <ProjectCard
            key={p._id}
            imageUrl={
              urlForImage(p.coverImage)?.height(600).width(600).url() as string
            }
            {...p}
          />
        );
      })}
    </div>
  );
}
