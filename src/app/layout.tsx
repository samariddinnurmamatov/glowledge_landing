import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LangProvider } from "@/context/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glowledge — O'zbekistonning #1 AI Ekotizimi",
  description:
    "Glowledge AI ekotizimi: prezentatsiya, hujjat, insho, kurs ishi va 20+ turdagi kontent soniyalar ichida. SoddaAI, AI Slide Bot, SlaydPro va ko'proq.",
  openGraph: {
    title: "Glowledge — O'zbekistonning #1 AI Ekotizimi",
    description: "5 ta AI mahsulot, 280K+ foydalanuvchi, UZ · RU · EN qo'llab-quvvatlash.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={geist.variable} style={{ background: "var(--bg)", color: "var(--text)" }}>
        <ThemeProvider>
          <LangProvider>
            <Navbar />
            {children}
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
