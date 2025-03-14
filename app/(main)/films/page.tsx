import { FilmCard } from "@/components/film";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { filmsQuery } from "@/sanity/lib/queries";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Film {
  _id: string;
  slug: string;
  title: string;
  coverImage: SanityImageSource | null;
  label?: string;
  publishedAt: string;
}

export async function generateStaticParams() {
  return await sanityFetch({
    query: filmsQuery,
  });
}

export default async function Page() {
  const [films] = await Promise.all([sanityFetch({ query: filmsQuery })]);

  return (
    <div className="flex flex-col justify-center items-center  mb-24">
      <div
        className={`${films.length <= 3 ? `max-w-2xl grid-cols-2 sm:grid-cols-${films.length}` : "max-w-4xl sm:grid-cols-3 md:grid-cols-4"} w-full mx-auto grid gap-6 md:gap-24`}
      >
        {films.map((film: Film) => (
          <FilmCard
            slug={film.slug}
            title={film.title}
            key={film._id}
            imageUrl={
              film.coverImage
                ? urlForImage(film.coverImage).width(768).height(1024).url() ||
                  ""
                : ""
            }
            label={film.label}
          />
        ))}
      </div>
    </div>
  );
}
