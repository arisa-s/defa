import { FC } from "react";
import { Image } from "next-sanity/image";
import Link from "next/link";

export interface FilmsCardProps {
  slug: string;
  title: string;
  imageUrl: string;
}

export const FilmCard: FC<FilmsCardProps> = ({ slug, title, imageUrl }) => {
  return (
    <Link href={`/film/${slug}`}>
      <div className="group max-w-xs md:max-w-sm w-full aspect-[2/3] [perspective:1000px]">
        <div className="col-span-1 w-full aspect-[2/3] border bg-slate-200 border-primary self-center items-center justify-center flex flex-col transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="inset-0 h-full w-full text-center [backface-visibility:hidden] flex flex-col items-center justify-center relative">
            <Image
              src={imageUrl}
              alt={title}
              width={200}
              height={250}
              className="opacity-30 absolute w-[200px] md:w-[250px]"
            />
            <span className="z-10 text-xl font-medium max-w-[200px] md:max-w-[250px]">
              {title}
            </span>
          </div>

          <div className="absolute inset-0 h-full w-full px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <Image src={imageUrl} alt={title} width={200} height={300} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
