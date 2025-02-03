import Link from "next/link";
import { FC } from "react";

export interface ProjectsCardProps {
  title: string;
  slug: string;
}

export const ProjectsCard: FC<ProjectsCardProps> = ({ title, slug }) => {
  return (
    <Link href={`/project/${slug}`}>
      <h2 className=" text-lg md:text-2xl underline p-4">{title}</h2>
    </Link>
  );
};

export default ProjectsCard;
