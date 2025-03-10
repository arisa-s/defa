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
    <div>
      <article className="pb-36">
        <div className="flex flex-col md:flex-row md:justify-between space-y-12 md:space-y-0">
          <div className="flex flex-row md:space-x-4  md:gap-6 lg:gap-36 max-w-2xl w-full">
            <h1 className="hidden md:flex">ABOUT</h1>
            <div className="relative w-full h-full">
              <Image
                src="/about.jpg"
                fill
                alt="placeholder image fot About page"
                // className="max-w-2xl w-full"
              />
            </div>
          </div>

          <div className="w-full md:max-w-xs lg:max-w-sm">
            {about.content?.length && (
              <PortableText
                components={SanityComponents}
                value={about.content as PortableTextBlock[]}
              />
            )}
          </div>
        </div>
      </article>
      {/* <aside>
        <YokoMenu />
      </aside> */}
    </div>
  );
}
