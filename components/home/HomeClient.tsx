"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PortableText, PortableTextBlock } from "next-sanity";
import { SanityComponents } from "@/sanity/components";
import YokoMenu from "@/components/shared/YokoMenu";
import PageloadOverlay from "@/components/home/PageloadOverlay";

interface HomeClientProps {
  data: {
    current: PortableTextBlock[];
    events: PortableTextBlock[];
    featuredVideo?: {
      url: string;
      title: string;
    };
  };
}

export default function HomeClient({ data }: HomeClientProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="p-6 md:p-12 text-right">
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-end justify-end pb-24 pr-16 z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-primary/50 backdrop-blur-md backdrop-filter border border-black rounded-lg p-2 max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="text-sm uppercase hover:text-primary transition-colors ml-auto"
              >
                Close
              </button>

              <p className="text-secondary italic mb-6">
                We&apos;re excited to share our latest exhibition with you
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid md:grid-cols-5 max-w-4xl gap-12 w-full ml-auto">
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-2">
          <h2>Current</h2>
          {data.current && (
            <div className="text-secondary italic">
              <PortableText
                value={data.current}
                components={SanityComponents}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-2">
          <h2>Events</h2>
          {data.events && (
            <div className="text-secondary italic">
              <PortableText value={data.events} components={SanityComponents} />
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-1">
          <h1 className="">Studio DEFA</h1>
          <ul className="space-y4 text-secondary italic">
            <li>
              <Link href="mailto:noor@studiodefa.com">noor@studiodefa.com</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/studio.defa">
                @studio.defa
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <YokoMenu />
      <PageloadOverlay />
    </main>
  );
}
