"use client";
import PageloadOverlay from "@/components/home/PageloadOverlay";
import YokoMenu from "@/components/shared/YokoMenu";

export default function Home() {
  return (
    <main className="p-6 md:p-12">
      <div>
        <h1 className="text-lg">Studio DEFA</h1>
      </div>
      <div className="grid md:grid-cols-2 max-w-2xl gap-6 w-full ml-auto">
        <div className="flex flex-col space-y-6 md:space-y-12">
          <h2>Current</h2>
          <p className="text-secondary italic">
            The Archive of Lost Wonders
            <br />6 - 20 March 2025
          </p>
        </div>
        <div className="flex flex-col space-y-6 md:space-y-12">
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
      </div>
      <YokoMenu />
      <PageloadOverlay />
    </main>
  );
}
