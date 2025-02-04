import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectQuery } from "@/sanity/lib/queries/project";
import DefaHeader from "@/components/shared/DefaHeader";
import { SanityComponents } from "@/sanity/components";
import DefaPhotoGallery from "@/components/shared/DefaPhotoGallery";
import MultiGallery from "@/components/project/MultiGallery";
import { Gallery } from "@/sanity.types";

type Props = {
  params: Promise<{ slug: string }>;
};

const projectSlugs = defineQuery(
  `*[_type == "project" && defined(slug.current)]{"slug": slug.current}`
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: projectSlugs,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await sanityFetch({
    query: projectQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(project?.coverImage);

  return {
    title: project?.title,
    description: project?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  const [project] = await Promise.all([
    sanityFetch({ query: projectQuery, params }),
  ]);

  if (!project?._id) {
    return notFound();
  }

  console.log(project.galleries);
  return (
    <div className="mx-auto mb-12 md:mb-24">
      <article className="space-y-6 md:space-y-12 flex flex-col">
        {project.featured?.images && (
          <DefaPhotoGallery images={project.featured?.images} type={"inline"} />
        )}
        <DefaHeader>{project.title}</DefaHeader>
        <div>
          {project.description?.length && (
            <PortableText
              components={SanityComponents}
              value={project.description as PortableTextBlock[]}
            />
          )}
        </div>
        <div>
          <div className="pt-12">
            {(project.galleries?.length || 0) >= 1 && (
              <MultiGallery galleries={project.galleries as Gallery[]} />
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
