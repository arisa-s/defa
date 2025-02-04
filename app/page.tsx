"use client";
import PageloadOverlay from "@/components/home/PageloadOverlay";
import YokoMenu from "@/components/shared/YokoMenu";

export default function Home() {
  return (
    <div className="items-center justify-items-center h-screen">
      <main className="p-4 flex flex-col gap-8 items-center sm:items-start justify-center min-h-screen max-w-6xl mx-auto md: text-lg md:text-2xl ">
        <p className="text-center m-auto">Home page</p>
        <YokoMenu />
        <PageloadOverlay />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
