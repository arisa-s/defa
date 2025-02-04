import { DefaHeader } from "@/components/shared";
import DefaCarouselGallery from "@/components/shared/gallery/DefaCarouselGallery";
import { SanityComponents } from "@/sanity/components";
import { sanityFetch } from "@/sanity/lib/fetch";
import { publicationsQuery } from "@/sanity/lib/queries";
import { PortableText, PortableTextBlock } from "next-sanity";

export default async function Page() {
  const [publications] = await Promise.all([
    sanityFetch({ query: publicationsQuery }),
  ]);

  return (
    <div className="mx-auto flex flex-col  space-y-12 md:space-y-24 mb-12">
      {publications.map((p) => {
        return (
          <article key={p._id}>
            <DefaHeader type="h2">{p.title}</DefaHeader>
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <div className="flex flex-col md:order-last md:space-y-6 max-w-xs md:max-w-lg w-full mx-auto">
                <DefaCarouselGallery
                  images={[{ ...p.coverImage, _key: p._id }, ...p.previews!]}
                />
              </div>
              <div className="md:order-first">
                {p.description?.length && (
                  <PortableText
                    components={SanityComponents}
                    value={p.description as PortableTextBlock[]}
                  />
                )}
              </div>
            </div>
            <hr className="my-6 md:mt-12 mb:mb-6" />
            <p className="text-xs text-right">{p.credit}</p>
          </article>
        );
      })}
    </div>
  );
}
