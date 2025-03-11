import { FC } from "react";
import { Image } from "next-sanity/image";
import Link from "next/link";

export interface FilmsCardProps {
  slug: string;
  title: string;
  label?: string;
  imageUrl: string;
}

export const FilmCard: FC<FilmsCardProps> = ({
  slug,
  title,
  label,
  imageUrl,
}) => {
  return (
    <Link href={`/film/${slug}`}>
      <div className="group max-w-[250px] w-full aspect-[2/3] [perspective:1000px]">
        <div className="relative col-span-1 w-full h-full border bg-secondary border-primary self-center items-center justify-center flex flex-col transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* front */}
          <div className="absolute inset-0 h-full w-full text-center [-webkit-backface-visibility:hidden] [backface-visibility:hidden] flex flex-col items-center justify-center">
            <Image
              src={imageUrl}
              alt={title}
              width={150}
              height={200}
              className="opacity-30 absolute w-[160px]"
            />
            <label className="text-sm z-10 max-w-[160px]">{label}</label>
            <span className="z-10 font-medium max-w-[160px]">{title}</span>
          </div>

          {/* back */}
          <div className="absolute z-50 inset-0 h-full w-full px-4 text-center [transform:rotateY(180deg)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <Image src={imageUrl} alt={title} width={200} height={300} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#cfe2f3]/80 p-3 rounded-full shadow-lg">
                  <svg
                    className="w-12 h-12 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
