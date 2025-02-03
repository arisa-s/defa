import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import CoverImage from "@/components/publication/CoverImage";
import { sanityFetch } from "@/sanity/lib/fetch";
import { publicationQuery } from "@/sanity/lib/queries/publication";

type Props = {
  params: Promise<{ slug: string }>;
};

const publicationSlugs = defineQuery(
  `*[_type == "publication" && defined(slug.current)]{"slug": slug.current}`
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: publicationSlugs,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const publication = await sanityFetch({
    query: publicationQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(publication?.coverImage);

  return {
    title: publication?.title,
    description: publication?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  const [publication] = await Promise.all([
    sanityFetch({ query: publicationQuery, params }),
  ]);

  if (!publication?._id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {publication.title}
        </h1>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage
            image={publication.coverImage}
            priority
            alt={publication.title}
          />
        </div>
        {publication.description?.length && (
          <PortableText
            value={publication.description as PortableTextBlock[]}
          />
        )}
      </article>
      <aside></aside>
    </div>
  );
}
