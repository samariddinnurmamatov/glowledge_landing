import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LangProvider } from "@/context/LangContext";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glowledge — O'zbekistonning #1 AI Platformasi",
  description:
    "Glowledge AI ekotizimi: prezentatsiya, hujjat, insho, kurs ishi va boshqalarni soniyalar ichida yarating.",
  openGraph: {
    title: "Glowledge — O'zbekistonning #1 AI Platformasi",
    description: "AI bilan kontent yarating: prezentatsiya, hujjat, insho va boshqalar.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={geist.variable}>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
