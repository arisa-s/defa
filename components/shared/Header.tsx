"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useClickOutside } from "@/utils";
import { LINKS } from "@/constants";

const NavLink = ({
  href,
  children,
  selected,
}: {
  href: string;
  children: React.ReactNode;
  selected?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`${
        selected ? "text-primary font-medium underline" : "text-muted"
      } text-lg hover:underline hover:text-primary hover:font-medium uppercase text-xs font-accent`}
    >
      {children}
    </Link>
  );
};

const NavigationMenu = ({
  orientation,
}: {
  orientation: "horizontal" | "vertical";
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={
        orientation === "horizontal"
          ? "flex space-x-6"
          : "flex flex-col p-5 space-y-6 text-center"
      }
    >
      {LINKS.map(({ href, label }) => {
        if (orientation === "vertical" && href === pathname) return null;
        return (
          <NavLink key={href} href={href} selected={pathname === href}>
            {label}
          </NavLink>
        );
      })}
    </nav>
  );
};

const MobileHeader: React.FC = () => {
  const pathname = usePathname();
  const displayPathname = pathname.split("/").pop()?.replace(/-/g, " ");
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setMenuOpen(false));

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false); // Close the menu when the route changes
  }, [pathname]);

  return (
    <div>
      <div
        className={`max-w-8xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 ${
          menuOpen ? "" : "bg-primary-bg/50 backdrop-blur-md backdrop-filter"
        }`}
      >
        <Link href="/">
          <Image
            className={`${pathname.startsWith("/films") ? "w-16" : "w-12"} cursor-pointer`}
            src={pathname.startsWith("/films") ? "/filmLogo.png" : "/logo.png"}
            width={2709}
            height={2708}
            alt="Studio Defa"
          />
        </Link>

        {/* Page title */}
        <h2 className="text-primary font-medium uppercase text-xs text-center">
          {displayPathname}
        </h2>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="text-primary focus:outline-none lg:hidden"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Animated dropdown (mobile only) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={ref}
            key="mobile-menu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed flex flex-col top-0 left-0 right-0 w-full lg:hidden z-50 transition-colors duration-300 bg-primary-bg/50 backdrop-blur-md backdrop-filter"
          >
            <button
              className="ml-auto mr-4 mt-4 cursor-pointer"
              onClick={toggleMenu}
            >
              CLOSE
            </button>
            <span className="text-center mx-auto uppercase font-medium text-sm">
              {displayPathname}
            </span>
            <div className="relative">
              <NavigationMenu orientation="vertical" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopHeader: React.FC = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div
      className="transition-colors duration-300
        bg-primary-bg/50 backdrop-blur-md backdrop-filter"
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 ">
        <Link href="/">
          <Image
            className={`${pathname.startsWith("/films") ? "w-24 top-0" : "w-16 top-4"} cursor-pointer absolute`}
            src={pathname.startsWith("/films") ? "/filmLogo.png" : "/logo.png"}
            width={2709}
            height={2708}
            alt="Studio Defa"
          />
        </Link>
        <NavigationMenu orientation="horizontal" />
      </div>
    </div>
  );
};

const SiteHeader: React.FC = () => {
  return (
    <header
      className={`
        fixed w-full z-10 transition-colors duration-300
      `}
    >
      {/* Desktop nav */}
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>

      {/* Mobile nav */}
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
    </header>
  );
};

export default SiteHeader;
