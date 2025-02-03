"use client";
import PageloadOverlay from "@/components/home/PageloadOverlay";
import YokoMenu from "@/components/shared/YokoMenu";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-screen">
      <main className="p-4 flex flex-col gap-8 items-center sm:items-start justify-center min-h-screen max-w-6xl mx-auto text-lg md: text-lg md:text-2xl ">
        <p>
          Studio DEFA is a curatorial platform and creative production studio
          founded by Noor de Falco dedicated to showcasing and supporting the
          work of a diverse roster of multidisciplinary creatives. Spanning
          film, sculpture, painting, jewelry design, fashion, photography,
          tattoo art, literature, and more, DEFA operates at the intersection of
          artistic mediums, fostering innovative collaborations and
          boundary-pushing projects.
        </p>
        <p>
          DEFA’s ethos is rooted in not taking itself too seriously. Its
          projects are always a bit cheeky, poking fun at the art world, both in
          London and beyond. Everything DEFA creates celebrates a sense of fun
          and creativity.
        </p>
        <p>
          At its core, DEFA is built on a strong sense of community. The
          contributors to its exhibitions and zines are not just
          collaborators—they&apos;re family and friends, creating a deeply
          personal and connected creative network.
        </p>

        <p>
          DEFA Zine translates these values into print, offering a tangible
          extension of each exhibition while adding a literary dimension to the
          experience. It’s more than a magazine—it’s a keepsake that challenges
          the fleeting nature of exhibitions. Eclectic and interdisciplinary,
          the zine blends illustrations and writing in a diverse collection of
          content, ranging from recipes and film reviews to poetry, cultural
          criticism, comic strips, fiction, and drawings. With a global roster
          of contributors, some pieces are intentionally left untranslated in
          the author’s native language, ensuring readers from all backgrounds
          feel invited into the conversation.
        </p>
        <YokoMenu />
        <PageloadOverlay />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
