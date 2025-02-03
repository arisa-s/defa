import FilmCard from "@/components/film/FilmCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { filmsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const [films] = await Promise.all([sanityFetch({ query: filmsQuery })]);

  return (
    <div className="container mx-auto px-5">
      {films.map((f) => (
        <FilmCard key={f._id} {...f} />
      ))}
    </div>
  );
}
