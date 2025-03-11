import { PortableText } from "next-sanity";
import type { Metadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { aboutQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { SanityComponents } from "@/sanity/components";
import Image from "next/image";

export async function generateStaticParams() {
  const about = await sanityFetch({ query: aboutQuery });
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
    <div>
      <article className="pb-36">
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-12 sm:space-y-0">
          <div className="flex flex-row md:space-x-4 md:gap-6 lg:gap-24 xl:gap-36 max-w-2xl w-full">
            <h1 className="hidden lg:flex">ABOUT</h1>
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/about.jpg"
                fill
                alt="placeholder image for About page"
                className="object-cover sm:max-w-xs md:max-w-sm xl:max-w-xl"
              />
            </div>
          </div>

          <div className="w-full md:max-w-[300px] lg:max-w-sm">
            {about.content?.length && (
              <PortableText
                components={SanityComponents}
                value={about.content as PortableTextBlock[]}
              />
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
