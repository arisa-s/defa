import { VideoPlayer } from "@/components/film";
import { DefaHeader } from "@/components/shared";
import { SanityComponents } from "@/sanity/components";
import { sanityFetch } from "@/sanity/lib/fetch";
import { filmsQuery } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { PortableTextBlock } from "sanity";

export async function generateStaticParams() {
  return await sanityFetch({
    query: filmsQuery,
  });
}

export default async function Page() {
  const [films] = await Promise.all([sanityFetch({ query: filmsQuery })]);

  return (
    <div className="mx-auto mb-24">
      {films.map((film) => (
        <div className="mx-auto" key={film._id}>
          <article className="space-y-12">
            <div>
              <DefaHeader type="h2">{film.title}</DefaHeader>
              {film.description?.length && (
                <PortableText
                  components={SanityComponents}
                  value={film.description as PortableTextBlock[]}
                />
              )}
            </div>
            <div className="flex flex-col space-y-12">
              {film.videos?.map((video) => (
                <div
                  key={video.title}
                  className="flex flex-col md:flex-row gap-6 md:gap-24"
                >
                  <VideoPlayer
                    thumbnail={video.thumbnail!}
                    video={video.videoFile!}
                    className="max-w-xl"
                  />
                  <div className="space-y-4 text-right">
                    <h2 className="text-4xl md:text-5xl font-alternative">
                      {video.title}
                    </h2>
                    {video.caption?.length && (
                      <PortableText
                        components={SanityComponents}
                        value={video.caption as PortableTextBlock[]}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </article>
          <aside></aside>
        </div>
      ))}
    </div>
  );
}
