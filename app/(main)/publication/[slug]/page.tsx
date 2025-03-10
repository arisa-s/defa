import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { publicationQuery } from "@/sanity/lib/queries/publication";
import { SanityComponents } from "@/sanity/components";
import { DefaHeader } from "@/components/shared";
import DefaCarouselGallery from "@/components/shared/gallery/DefaCarouselGallery";

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
        <DefaHeader type="h2">{publication.title}</DefaHeader>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="flex flex-col md:order-last md:space-y-6 max-w-xs md:max-w-lg w-full mx-auto">
            <DefaCarouselGallery
              images={[
                { ...publication.coverImage, _key: publication._id },
                ...publication.previews!,
              ]}
            />
          </div>
          <div className="md:order-first">
            {publication.description?.length && (
              <PortableText
                components={SanityComponents}
                value={publication.description as PortableTextBlock[]}
              />
            )}
          </div>
        </div>
        <hr className="my-6 md:mt-12 mb:mb-6" />
        <p className="text-xs text-right">{publication.credit}</p>
      </article>
      <aside></aside>
    </div>
  );
}
