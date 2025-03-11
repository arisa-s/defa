"use client";
import PageloadOverlay from "@/components/home/PageloadOverlay";
import YokoMenu from "@/components/shared/YokoMenu";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 md:p-12 text-right">
      <div className="grid md:grid-cols-5 max-w-4xl gap-12 w-full ml-auto">
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-2">
          <h2>Current</h2>
          <p className="text-secondary italic">
            The Archive of Lost Wonders
            <br />6 - 20 March 2025
          </p>
          <p className="text-secondary italic">
            309 Bethnal Green Road, E2 6AH
          </p>
        </div>
        <div className="flex flex-col space-y-6 md:space-y-12 md:col-span-2">
          <h2>Events</h2>
          <ul className="space-y-4 text-secondary italic">
            <li>
              Joel Kerr Screening and Q&A with Hugo Hamlet <br />
              Sunday, 9 March - 16.00
            </li>
            <li>
              Museum Tour led by Ludo Amory <br />
              Tuesday, 11 March - 18.30
            </li>
            <li>
              Ting Yu Gao Performance
              <br /> Tuesday, 11 March - 19.30
            </li>
            <li>
              Museum Tour led by Stella & Noor
              <br /> Thursday, 13 March - 18.30
            </li>
            <li>
              Elaine Chan (@scumofthestars) Flash Day
              <br /> Saturday, 15 March - 11.00-18.00
            </li>
            <li>
              Museum Tour led by Maria Dragoi
              <br /> Tuesday, 18 March - 18.30
            </li>
            <li>
              Museum Tour led by Maria Dragoi
              <br /> Thursday, 20 March - 18.30
            </li>
            <li>
              CLOSING
              <br /> Thursday, 20 March - 19.30
            </li>
            <li>
              Hangry x Jamal Supper Club
              <br /> Saturday, 22 March - 20.00
            </li>
          </ul>
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
