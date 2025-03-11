import { defineQuery, PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { publicationQuery } from "@/sanity/lib/queries/publication";
import { SanityComponents } from "@/sanity/components";
import { DefaHeader } from "@/components/shared";
import DefaInlineCarousel from "@/components/shared/gallery/DefaInlineCarousel";
import Link from "next/link";
import { Image } from "next-sanity/image";

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
    <div className="flex flex-col px-5 space-y-12">
      <article className="flex flex-col md:flex-row gap-6">
        <div className="flex md:flex-col space-y-4 justify-between">
          <div className="space-y-2">
            <Link href="/publications" className="text-4xl">
              ⟵
            </Link>
            <DefaHeader type="h1">{publication.title}</DefaHeader>
          </div>

          <Image
            src={urlForImage(publication.coverImage)?.url() as string}
            alt={publication.title}
            width={200}
            height={280}
            className="md:hidden ml-auto w-full max-w-[200px] h-full object-cover"
          />
        </div>
        {publication.description ? (
          <div className="md:max-w-lg lg:max-w-2xl ml-auto">
            <span>OVERVIEW</span>
            <div className="-mx-6 md:-mx-12 text-3xl md:text-4xl font-medium text-slate-800 leading-6 md:leading-8">
              {publication.description?.length && (
                <p>{publication.description}</p>
              )}
            </div>
          </div>
        ) : null}
      </article>

      <div className="relative flex md:space-x-24 w-full justify-between">
        {publication.contributors?.length || 0 > 0 ? (
          <div className="flex flex-col lg:flex-row max-w-md justify-between w-full">
            <span>CONTRIBUTORS</span>
            <div className="text-sm">
              {publication.contributors && (
                <PortableText
                  components={SanityComponents}
                  value={publication.contributors as PortableTextBlock[]}
                />
              )}
            </div>
          </div>
        ) : null}
        {publication.credits && publication.credits.length > 0 && (
          <div className="flex max-w-xs justify-between w-full">
            <div className="text-sm">
              <ul className="space-y-4">
                {publication.credits.map((credit) => (
                  <li key={credit._key} className="flex flex-col">
                    <label className="uppercase">{credit.creditType}</label>
                    <span>{credit.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Image
          src={urlForImage(publication.coverImage)?.url() as string}
          alt={publication.title}
          width={200}
          height={280}
          className="hidden md:block w-full max-w-[200px] h-full object-cover"
        />
      </div>
      {publication.previews && (
        <div className="">
          <span>PREVIEW</span>
          <div className="-mx-10 md:-mx-24">
            <DefaInlineCarousel images={publication.previews} />
          </div>
        </div>
      )}
    </div>
  );
}
