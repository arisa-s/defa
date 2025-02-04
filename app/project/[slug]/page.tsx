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

  return (
    <div className="container mx-auto px-5">
      <article className="space-y-6 md:space-y-12 flex flex-col">
        <DefaPhotoGallery images={project.featured?.images} />
        <DefaHeader>{project.title}</DefaHeader>
        {project.description?.length && (
          <PortableText
            components={SanityComponents}
            value={project.description as PortableTextBlock[]}
          />
        )}
        {project.galleries?.map((gallery, index) => (
          <DefaPhotoGallery key={index} images={gallery.images} />
        ))}
      </article>
      <aside></aside>
    </div>
  );
}
