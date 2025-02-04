import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
      <SocialLink
        href="https://www.nekonote.co/"
        label=" "
        // label="Built by Nekonote LLC from scratch"
      />

      {/* TODO: ask for social media links */}
      <div className="flex space-x-6">
        <SocialLink
          href="mailto:noor@studiodefa.com"
          label="noor@studiodefa.com"
        />
      </div>
    </footer>
  );
};

const SocialLink: FC<{ href: string; label: string }> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="uppercase text-xs text-muted hover:text-primary font-light"
    >
      {label}
    </Link>
  );
};

export default Footer;
