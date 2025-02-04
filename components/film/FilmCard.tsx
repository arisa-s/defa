import Link from "next/link";
import { FC } from "react";
import { DefaLink } from "../shared";

export interface FilmsCardProps {
  slug: string;
  title: string;
}

export const FilmCard: FC<FilmsCardProps> = ({ slug, title }) => {
  return <DefaLink href={`/film/${slug}`}>{title}</DefaLink>;
};

export default FilmCard;
