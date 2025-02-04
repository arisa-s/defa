import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import CoverImage from "@/components/publication/CoverImage";
import { sanityFetch } from "@/sanity/lib/fetch";
import { publicationQuery } from "@/sanity/lib/queries/publication";
import { SanityComponents } from "@/sanity/components";
import { DefaHeader } from "@/components/shared";

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
    <div className=" mx-auto px-5">
      <article className="grid md:grid-cols-2 space-x-6 md:space-x-24">
        <div>
          <DefaHeader>{publication.title}</DefaHeader>
          {publication.description?.length && (
            <PortableText
              components={SanityComponents}
              value={publication.description as PortableTextBlock[]}
            />
          )}
        </div>
        <div className="content-center">
          <CoverImage
            image={publication.coverImage}
            priority
            alt={publication.title}
          />
        </div>
      </article>
      <aside></aside>
    </div>
  );
}
