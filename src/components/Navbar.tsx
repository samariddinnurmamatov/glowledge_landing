"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useLang } from "@/context/LangContext";
import { Lang } from "@/lib/i18n";
import Link from "next/link";
import {
  Moon, Sun, Menu, X, Sparkles, ChevronDown,
  Brain, Bot, Tv, Server, FileText, ArrowRight,
} from "lucide-react";

const LANGS: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

const products = [
  {
    name: "SoddaAI",
    desc: { uz: "20+ turdagi AI kontent", ru: "20+ видов AI контента", en: "20+ AI content types" },
    href: "https://sodda.ai",
    external: true,
    icon: Brain,
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "AI Slide Bot",
    desc: { uz: "Telegramda prezentatsiya", ru: "Презентации в Telegram", en: "Presentations in Telegram" },
    href: "https://t.me/aislidebot",
    external: true,
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Slayd TOP",
    desc: { uz: "AI haqida kanal", ru: "Канал об ИИ", en: "AI content channel" },
    href: "https://t.me/slaydtop",
    external: true,
    icon: Tv,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Presenton",
    desc: { uz: "Open-source Docker", ru: "Open-source Docker", en: "Open-source Docker" },
    href: "/products/presenton",
    external: false,
    icon: Server,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "AI Docx Editor",
    desc: { uz: "AI bilan DOCX tahrirlash", ru: "Редактор DOCX с ИИ", en: "AI-powered DOCX editor" },
    href: "/products/ai-docx-editor",
    external: false,
    icon: FileText,
    color: "from-orange-500 to-amber-500",
  },
];

type Lang3 = "uz" | "ru" | "en";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDrop, setProductsDrop] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsDrop(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setProductsDrop(false), 120);
  };

  const mainLinks = [
    { label: t.nav.solutions, href: "/solutions" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--bg2)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300 group-hover:scale-105">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold" style={{ color: "var(--text)" }}>
            Glow<span className="gradient-text">ledge</span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Products dropdown */}
          <div ref={dropRef} className="relative" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
            <Link
              href="/products"
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
              style={{ color: "var(--text2)" }}
            >
              {t.nav.products}
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{ transform: productsDrop ? "rotate(180deg)" : "rotate(0deg)", color: "var(--text3)" }}
              />
            </Link>

            {productsDrop && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[420px] rounded-2xl border p-3 shadow-2xl"
                style={{ background: "var(--bg2)", borderColor: "var(--border)", boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}
                onMouseEnter={openDrop}
                onMouseLeave={closeDrop}
              >
                <div className="grid grid-cols-1 gap-1">
                  {products.map((p) => {
                    const Icon = p.icon;
                    const content = (
                      <div className="flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-white/5 group/item cursor-pointer">
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0 shadow`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{p.name}</span>
                            {p.external && <span className="text-xs px-1.5 py-0.5 rounded-md" style={{ background: "var(--bg3)", color: "var(--text3)" }}>↗</span>}
                          </div>
                          <p className="text-xs truncate" style={{ color: "var(--text3)" }}>{p.desc[lang as Lang3]}</p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" style={{ color: "var(--indigo)" }} />
                      </div>
                    );
                    return p.external ? (
                      <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">{content}</a>
                    ) : (
                      <Link key={p.name} href={p.href} onClick={() => setProductsDrop(false)}>{content}</Link>
                    );
                  })}
                </div>
                <div className="mt-2 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                  <Link
                    href="/products"
                    onClick={() => setProductsDrop(false)}
                    className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition-colors"
                    style={{ color: "var(--indigo)" }}
                  >
                    {lang === "uz" ? "Barcha mahsulotlar" : lang === "ru" ? "Все продукты" : "View all products"}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/5"
              style={{ color: "var(--text2)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2">
          {/* Language */}
          <div className="hidden sm:flex items-center rounded-lg p-1 gap-0.5" style={{ background: "var(--bg3)" }}>
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

          {/* Theme */}
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

          {/* CTA */}
          <a
            href="https://sodda.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t.nav.getStarted}
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--bg3)", color: "var(--text2)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t px-4 pb-5 max-h-[80vh] overflow-y-auto" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
          <div className="flex flex-col gap-1 pt-3">
            {/* Products accordion */}
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg"
              style={{ color: "var(--text2)" }}
            >
              {t.nav.products}
              <ChevronDown
                className="w-4 h-4 transition-transform duration-200"
                style={{ transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)", color: "var(--text3)" }}
              />
            </button>
            {mobileProductsOpen && (
              <div className="ml-4 flex flex-col gap-1 pb-1">
                {products.map((p) => {
                  const Icon = p.icon;
                  const inner = (
                    <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl" style={{ background: "var(--bg3)" }}>
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{p.name}</span>
                    </div>
                  );
                  return p.external ? (
                    <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>{inner}</a>
                  ) : (
                    <Link key={p.name} href={p.href} onClick={() => setMobileOpen(false)}>{inner}</Link>
                  );
                })}
              </div>
            )}

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium rounded-lg"
                style={{ color: "var(--text2)" }}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-2 mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center rounded-lg p-1 gap-0.5" style={{ background: "var(--bg3)" }}>
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-md transition-all"
                    style={lang === l.code ? { background: "var(--bg2)", color: "var(--indigo)" } : { color: "var(--text3)" }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <a
                href="https://sodda.ai"
                target="_blank"
                rel="noopener noreferrer"
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
