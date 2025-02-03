import { PortableText } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { aboutQuery, siteSettingsQuery } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  return await sanityFetch({
    query: aboutQuery,
  });
}

export async function generateMetadata(
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const site = await sanityFetch({
    query: siteSettingsQuery,
    stega: false,
  });

  return {
    description: `About ${site?.title}`,
  } satisfies Metadata;
}

export default async function Page() {
  const [about] = await Promise.all([sanityFetch({ query: aboutQuery })]);

  if (!about?._id) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-5">
      <article>
        {about.content?.length && (
          <PortableText value={about.content as PortableTextBlock[]} />
        )}
      </article>
      <aside></aside>
    </div>
  );
}
