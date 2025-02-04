import { PortableText } from "next-sanity";
import type { Metadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { aboutQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { SanityComponents } from "@/sanity/components";
import YokoMenu from "@/components/shared/YokoMenu";

export async function generateStaticParams() {
  const about = await sanityFetch({ query: aboutQuery });

  // Ensure the return type is an array
  return about ? [{}] : [];
}

export async function generateMetadata(): Promise<Metadata> {
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
    <div className=" mx-auto px-5">
      <article>
        {about.content?.length && (
          <PortableText
            components={SanityComponents}
            value={about.content as PortableTextBlock[]}
          />
        )}
      </article>
      <aside>
        <YokoMenu />
      </aside>
    </div>
  );
}
