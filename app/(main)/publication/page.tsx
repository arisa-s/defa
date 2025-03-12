import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { publicationsQuery } from "@/sanity/lib/queries";
import { Image } from "next-sanity/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Publication {
  _id: string;
  slug: string;
  title: string;
  coverImage: SanityImageSource;
  subtitle?: string;
}

export default async function Page() {
  const [publications] = await Promise.all([
    sanityFetch({ query: publicationsQuery }),
  ]);
  const width = 1249;
  const height = 1740;

  return (
    <div className="min-h-full flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-16 items-center">
        <h1>DEFA PUBLICATIONS</h1>
        <div
          className={`${publications.length <= 3 ? `grid-cols-2 sm:grid-cols-${publications.length}` : "sm:grid-cols-3 md:grid-cols-4"} grid gap-12 md:gap-52`}
        >
          {publications.map((p: Publication) => {
            return (
              <Link href={`/publication/${p.slug}`} key={p._id}>
                <article
                  key={p._id}
                  className="flex flex-col gap-6 md:gap-12 text-center"
                >
                  <Image
                    src={urlForImage(p.coverImage)
                      .width(width)
                      .height(height)
                      .url()}
                    alt={p.title}
                    width={width}
                    height={height}
                    className="max-w-36 self-center"
                  />
                  <div className="items-center">
                    <p>{p.title}</p>
                    {p.subtitle ? (
                      <span className="italic text-tertiary">{p.subtitle}</span>
                    ) : null}
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
