import { PortableText } from "next-sanity";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { aboutQuery } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  return await sanityFetch({
    query: aboutQuery,
  });
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
