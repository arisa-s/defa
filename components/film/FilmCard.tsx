import Link from "next/link";
import { FC } from "react";

export interface FilmsCardProps {
  slug: string;
  title: string;
}

export const FilmCard: FC<FilmsCardProps> = ({ slug, title }) => {
  return (
    <Link href={`/film/${slug}`}>
      <h2>{title}</h2>
    </Link>
  );
};

export default FilmCard;
