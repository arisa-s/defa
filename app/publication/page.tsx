import PublicationCard from "@/components/publication/PublicationCard";
import { sanityFetch } from "@/sanity/lib/fetch";
import { publicationsQuery } from "@/sanity/lib/queries";

export default async function Page() {
  const [publications] = await Promise.all([
    sanityFetch({ query: publicationsQuery }),
  ]);

  return (
    <div className="container mx-auto px-5 flex flex-col space-y-6">
      {publications.map((p) => (
        <PublicationCard key={p._id} {...p} />
      ))}
    </div>
  );
}
