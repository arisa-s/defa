import { Monoton, Montserrat, Young_Serif } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: ["400"],
  subsets: ["latin"],
});

export const monoton = Monoton({
  variable: "--font-monoton",
  weight: ["400"],
  subsets: ["latin"],
});

export const agrandir = localFont({
  src: [
    {
      path: "../public/fonts/Agrandir/Agrandir-GrandLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir/Agrandir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir/Agrandir-TextBold.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir/Agrandir-TextBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir/Agrandir-GrandHeavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Agrandir/Agrandir-GrandHeavy.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-agrandir",
});
