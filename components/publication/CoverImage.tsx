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
    <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
      <Image
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt={alt}
        src={urlForImage(source)?.height(1000).width(2000).url() as string}
        sizes="100vw"
        priority={priority}
      />
    </div>
  );
}
