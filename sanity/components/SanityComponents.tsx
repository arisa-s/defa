import { PortableTextReactComponents } from "next-sanity";
import Link from "next/link";
import { urlForImage } from "../lib/image";
import { DefaHeader, DefaParahraph } from "@/components/shared";

export const SanityComponents: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ children, value }) => (
      <Link href={value.href} className="underline">
        {children}
      </Link>
    ),
    strong: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <strong className="font-semibold">{children}</strong>
      ),
  },
  block: {
    normal: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <DefaParahraph className="mb-1 md:mb-2">{children}</DefaParahraph>
      ),
    h1: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <DefaHeader type="h1" className="mb-4 md:mb-5">
          {children}
        </DefaHeader>
      ),
    h2: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <DefaHeader type="h2" className="mb-3 md:mb-4">
          {children}
        </DefaHeader>
      ),
    h3: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <DefaHeader type="h3" className="mb-2 md:mb-3">
          {children}
        </DefaHeader>
      ),
    h4: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <DefaHeader type="h4" className="mb-2">
          {children}
        </DefaHeader>
      ),
    h5: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <DefaHeader type="h5" className="mb-2">
          {children}
        </DefaHeader>
      ),
    h6: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <DefaHeader type="h6" className="mb-2">
          {children}
        </DefaHeader>
      ),
    blockquote: ({ children }) =>
      children == "" ? (
        <br />
      ) : (
        <blockquote className="italic">{children}</blockquote>
      ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="md:text-lg list-inside list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="md:text-lg list-outside list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list leading-8 md:text-lg md:leading-9 mb-1 md:mb-2">
        - {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="list pl-2 leading-8 md:text-lg md:leading-9">
        {children}
      </li>
    ),
  },
  // Add the 'types' property to handle custom object types like 'instagram'
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value)?.url();
      return <img src={imageUrl} />;
    },
  },
};
