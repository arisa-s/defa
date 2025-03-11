import { homeQuery } from "@/sanity/lib/queries/home";
import { sanityFetch } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";
import { SanityComponents } from "@/sanity/components";
import Link from "next/link";
import WelcomeModal from "@/components/home/WelcomeModal";
import YokoMenu from "@/components/shared/YokoMenu";
import PageloadOverlay from "@/components/home/PageloadOverlay";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const home = await sanityFetch({ query: homeQuery });
  return home ? [{}] : [];
}

export default async function Page() {
  const data = await sanityFetch({ query: homeQuery });

  if (!data) {
    return notFound();
  }

  return (
    <main className="p-6 md:p-12 text-right">
      {data.featuredVideo ? (
        <WelcomeModal featuredVideo={data.featuredVideo} />
      ) : null}
      <div className="grid md:grid-cols-5 max-w-4xl gap-12 w-full ml-auto">
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-2">
          <h2>Current</h2>
          {data.current && (
            <div className="text-secondary italic">
              <PortableText
                value={data.current}
                components={SanityComponents}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-2">
          <h2>Events</h2>
          {data.events && (
            <div className="text-secondary italic">
              <PortableText value={data.events} components={SanityComponents} />
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-1">
          <h1 className="">Studio DEFA</h1>
          <ul className="space-y4 text-secondary italic">
            <li>
              <Link href="mailto:noor@studiodefa.com">noor@studiodefa.com</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/studio.defa">
                @studio.defa
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <YokoMenu />
      <PageloadOverlay />
    </main>
  );
}
