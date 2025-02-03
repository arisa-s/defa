import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { filmQuery } from "@/sanity/lib/queries/film";
import { VideoPlayer } from "@/components/film";

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
      <article className="space-y-12">
        <h1 className="text-balance mb-12 text-4xl md:text-6xl font-bold leading-tight tracking-tighter md:leading-none ">
          {film.title}
        </h1>
        {film.description?.length && (
          <PortableText value={film.description as PortableTextBlock[]} />
        )}
        <div className="flex flex-col space-t-6 md: space-y-12">
          {film.videos?.map((video) => (
            <div key={video.title} className="flex flex-col space-y-6">
              <VideoPlayer
                thumbnail={video.thumbnail!}
                video={video.videoFile!}
                className="max-w-2xl"
              />
              <div className="space-y-4">
                <h2 className="text-lg md:text-2xl fontmedium">
                  {video.title}
                </h2>
                {video.caption?.length && (
                  <PortableText value={video.caption as PortableTextBlock[]} />
                )}
              </div>
            </div>
          ))}
        </div>
      </article>
      <aside></aside>
    </div>
  );
}
