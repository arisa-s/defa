import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { projectQuery } from "@/sanity/lib/queries/project";
import { SanityComponents } from "@/sanity/components";
import MultiGallery from "@/components/project/MultiGallery";
import { Gallery } from "@/sanity.types";
import { Image } from "next-sanity/image";
import DefaInlineCarousel from "@/components/shared/gallery/DefaInlineCarousel";

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
    <div className="mx-auto mb-12 md:mb-24">
      <article className="space-y-6 md:space-y-12 flex flex-col">
        <div className="flex flex-row justify-between gap-8 md:gap-24">
          <div className="relative flex-shrink-0">
            <div className="sticky top-24 flex flex-col">
              <div className="relative w-20 h-20 md:w-32 md:h-32">
                <Image
                  src={urlForImage(project.coverImage).url()}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="">{project.title}</h1>
            </div>
          </div>
          <div className="flex flex-col w-full gap-6 md:mx-36">
            {project.context ? (
              <div className="">
                <label className="text-sm font-normal">CONTEXT</label>
                <div className="-mx-4 md:-mx-36 text-2xl md:text-4xl font-medium text-secondary leading-5 md:leading-6">
                  <PortableText
                    components={SanityComponents}
                    value={project.context as PortableTextBlock[]}
                  />
                </div>
              </div>
            ) : null}
            {project.contributors ? (
              <div className="ml-auto">
                <label className="text-sm font-normal">CONTRIBUTORS</label>
                <div className="ml-auto text-secondary leading-3">
                  <PortableText
                    components={SanityComponents}
                    value={project.contributors as PortableTextBlock[]}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="-mx-6 md:-mx-24">
          {project.featured?.images && (
            <DefaInlineCarousel
              images={project.featured?.images}
              type={"inline"}
            />
          )}
        </div>

        <div className="max-w-7xl ml-auto leading-9">
          <div className="text-secondary leading-3">
            <PortableText
              components={SanityComponents}
              value={project.description as PortableTextBlock[]}
            />
          </div>
        </div>

        <div>
          <div className="pt-12">
            {(project.galleries?.length || 0) >= 1 && (
              <div className="flex flex-col">
                <label className="font-normal mb-4 upper border-b">
                  GALLERIES
                </label>
                <MultiGallery galleries={project.galleries as Gallery[]} />
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
