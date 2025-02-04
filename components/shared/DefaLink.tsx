import Link, { LinkProps } from "next/link";
import { FC } from "react";

export interface DefaLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const DefaLink: FC<DefaLinkProps> = ({ className, ...props }) => {
  return (
    <Link className={`text-link hover:underline s${className}`} {...props} />
  );
};

export default DefaLink;
