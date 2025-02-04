import { Monoton, Montserrat, Young_Serif } from "next/font/google";

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
