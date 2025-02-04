import Link from "next/link";
import { FC } from "react";
import { DefaLink } from "../shared";

export interface PublicationCardProps {
  slug: string;
  title: string;
}

export const PublicationCard: FC<PublicationCardProps> = ({ slug, title }) => {
  return <DefaLink href={`/publication/${slug}`}>{title}</DefaLink>;
};

export default PublicationCard;
