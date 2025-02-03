import Link from "next/link";
import { FC } from "react";

export interface PublicationCardProps {
  slug: string;
  title: string;
}

export const PublicationCard: FC<PublicationCardProps> = ({ slug, title }) => {
  return (
    <Link href={`/publication/${slug}`}>
      <h2 className=" text-lg md:text-2xl  underline p-4">{title}</h2>
    </Link>
  );
};

export default PublicationCard;
