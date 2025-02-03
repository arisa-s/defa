import { urlForImage } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image } from "next-sanity/image";

interface CoverImageProps {
  image: SanityImageSource;
  priority?: boolean;
  alt: string;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, alt } = props;

  return (
    <Image
      className="h-auto w-full max-w-96"
      width={1400}
      height={2000}
      alt={alt}
      src={urlForImage(source)?.height(2000).width(1400).url() as string}
      sizes="100vw"
      priority={priority}
    />
  );
}
