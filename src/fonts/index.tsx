import { Inter, Dancing_Script, Playfair_Display } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
export const playFair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--main-font",
});
export const dancing_script = Dancing_Script({
  subsets: ["latin"],
  variable: "--display-font",
});
