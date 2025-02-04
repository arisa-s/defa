import type { Metadata } from "next";
import "../globals.css";
import { toPlainText } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/fetch";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch({
    query: siteSettingsQuery,
    stega: false,
  });
  const title = settings?.title;
  const description = settings?.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title!,
    },
    description: toPlainText(description!),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <section>
        <Header />
        <main className="min-h-screen px-4 md:px-6 pt-32 md:pt-32 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </section>
    </body>
  );
}
