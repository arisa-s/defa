import type { Metadata } from "next";
import "./globals.css";
import { agrandir, montserrat, youngSerif } from "@/lib/font";
import { toPlainText } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/fetch";
import { siteSettingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import AppWithCursor from "@/components/shared/AppWithCursor";

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
    <html
      lang="en"
      className={`${montserrat.variable} ${youngSerif.variable} ${agrandir.variable} antialiased`}
    >
      <body>
        <AppWithCursor>{children}</AppWithCursor>
      </body>
    </html>
  );
}
