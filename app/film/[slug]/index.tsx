import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { filmQuery } from "@/sanity/lib/queries/film";

type Props = {
  params: Promise<{ slug: string }>;
};

const filmSlugs = defineQuery(
  `*[_type == "film" && defined(slug.current)]{"slug": slug.current}`
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: filmSlugs,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const film = await sanityFetch({
    query: filmQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(film?.coverImage);

  return {
    title: film?.title,
    description: film?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function Page({ params }: Props) {
  const [film] = await Promise.all([sanityFetch({ query: filmQuery, params })]);

  if (!film?._id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
          {film.title}
        </h1>
        {film.description?.length && (
          <PortableText value={film.description as PortableTextBlock[]} />
        )}
      </article>
      <aside></aside>
    </div>
  );
}
