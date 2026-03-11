"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLang } from "@/context/LangContext";
import { Lang } from "@/lib/i18n";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { key: "products" as const, href: "#products" },
  { key: "features" as const, href: "#features" },
  { key: "team" as const, href: "#team" },
  { key: "pricing" as const, href: "#pricing" },
];

const LANGS: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bg2)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300 group-hover:scale-105">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Glow<span className="gradient-text">ledge</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: "var(--text2)" }}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div
            className="hidden sm:flex items-center rounded-lg p-1 gap-0.5"
            style={{ background: "var(--bg3)" }}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className="px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200"
                style={
                  lang === l.code
                    ? { background: "var(--bg2)", color: "var(--indigo)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }
                    : { color: "var(--text3)" }
                }
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{ background: "var(--bg3)", color: "var(--text2)" }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* CTA button */}
          <a
            href="#products"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.nav.getStarted}
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--bg3)", color: "var(--text2)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 pb-4"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
        >
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg transition-all"
                style={{ color: "var(--text2)" }}
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center rounded-lg p-1 gap-0.5" style={{ background: "var(--bg3)" }}>
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-md transition-all"
                    style={
                      lang === l.code
                        ? { background: "var(--bg2)", color: "var(--indigo)" }
                        : { color: "var(--text3)" }
                    }
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <a
                href="#products"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600"
              >
                {t.nav.getStarted}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
