import { FilmCard } from "@/components/film";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { filmsQuery } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  return await sanityFetch({
    query: filmsQuery,
  });
}

export default async function Page() {
  const [films] = await Promise.all([sanityFetch({ query: filmsQuery })]);

  return (
    <div className="mx-auto mb-24 grid grid-cols-2 2xl:grid-cols-3 gap-24 max-w-3xl 2xl:max-w-7xl">
      {films.map((film) => (
        <FilmCard
          slug={film.slug}
          title={film.title}
          key={film._id}
          imageUrl={
            film.coverImage
              ? urlForImage(film.coverImage).width(768).height(1024).url() || ""
              : ""
          }
        />
      ))}
    </div>
  );
}
