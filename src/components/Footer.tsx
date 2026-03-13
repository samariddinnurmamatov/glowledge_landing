"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { Sparkles, ExternalLink } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const tgIcon = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
const liIcon = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  const { lang } = useLang();

  const cols: {
    heading: Record<Lang3, string>;
    links: { label: Record<Lang3, string>; href: string; external?: boolean }[];
  }[] = [
    {
      heading: { uz: "Mahsulotlar", ru: "Продукты", en: "Products" },
      links: [
        { label: { uz: "SoddaAI", ru: "SoddaAI", en: "SoddaAI" }, href: "https://sodda.ai", external: true },
        { label: { uz: "AI Slide Bot", ru: "AI Slide Bot", en: "AI Slide Bot" }, href: "https://t.me/aislidebot", external: true },
        { label: { uz: "Slayd TOP", ru: "Slayd TOP", en: "Slayd TOP" }, href: "https://t.me/slaydtop", external: true },
        { label: { uz: "Presenton", ru: "Presenton", en: "Presenton" }, href: "/products/presenton" },
        { label: { uz: "AI Docx Editor", ru: "AI Docx Editor", en: "AI Docx Editor" }, href: "/products/ai-docx-editor" },
        { label: { uz: "Barcha mahsulotlar →", ru: "Все продукты →", en: "All products →" }, href: "/products" },
      ],
    },
    {
      heading: { uz: "Yechimlar", ru: "Решения", en: "Solutions" },
      links: [
        { label: { uz: "Talabalar uchun", ru: "Для студентов", en: "For Students" }, href: "/solutions#students" },
        { label: { uz: "O'qituvchilar uchun", ru: "Для учителей", en: "For Teachers" }, href: "/solutions#teachers" },
        { label: { uz: "Tadbirkorlar uchun", ru: "Для предпринимателей", en: "For Entrepreneurs" }, href: "/solutions#business" },
        { label: { uz: "Jamoalar uchun", ru: "Для команд", en: "For Teams" }, href: "/solutions#teams" },
        { label: { uz: "Dasturchilar uchun", ru: "Для разработчиков", en: "For Developers" }, href: "/solutions#developers" },
      ],
    },
    {
      heading: { uz: "Kompaniya", ru: "Компания", en: "Company" },
      links: [
        { label: { uz: "Haqimizda", ru: "О нас", en: "About Us" }, href: "/about" },
        { label: { uz: "Blog", ru: "Блог", en: "Blog" }, href: "/blog" },
        { label: { uz: "Narxlar", ru: "Цены", en: "Pricing" }, href: "/pricing" },
        { label: { uz: "Yordam markazi", ru: "Центр помощи", en: "Help Center" }, href: "/help" },
        { label: { uz: "Aloqa / Enterprise", ru: "Контакт / Enterprise", en: "Contact / Enterprise" }, href: "/contact" },
      ],
    },
  ];

  const social = [
    { name: "AI Slide Bot", href: "https://t.me/aislidebot", icon: tgIcon, label: { uz: "Telegram Bot", ru: "Telegram Bot", en: "Telegram Bot" } },
    { name: "Slayd TOP", href: "https://t.me/slaydtop", icon: tgIcon, label: { uz: "Slayd TOP Kanal", ru: "Канал Slayd TOP", en: "Slayd TOP Channel" } },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/glowledge", icon: liIcon, label: { uz: "LinkedIn", ru: "LinkedIn", en: "LinkedIn" } },
    { name: "SoddaAI", href: "https://sodda.ai", icon: <Sparkles className="w-4 h-4" />, label: { uz: "sodda.ai", ru: "sodda.ai", en: "sodda.ai" } },
  ];

  return (
    <footer className="border-t" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: "var(--text)" }}>
                Glow<span className="gradient-text">ledge</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--text3)" }}>
              {lang === "uz"
                ? "O'zbekistoning #1 AI kontent ekotizimi. Prezentatsiya, hujjat, insho va ko'proqni soniyalar ichida yarating."
                : lang === "ru"
                ? "ИИ экосистема №1 в Узбекистане. Создавайте презентации, документы, эссе и многое другое за секунды."
                : "Uzbekistan's #1 AI content ecosystem. Create presentations, documents, essays and more in seconds."}
            </p>
            {/* Status dots */}
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text3)" }}>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span>183,928+ {lang === "ru" ? "подписчиков" : lang === "en" ? "subscribers" : "obunachi"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text3)" }}>
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
                <span>21,707+ {lang === "ru" ? "месячных польз." : lang === "en" ? "monthly users" : "oylik foydalanuvchi"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text3)" }}>
                <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                <span>280,000+ {lang === "ru" ? "всего" : lang === "en" ? "total users" : "jami"}</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-2 flex-wrap">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105"
                  style={{ background: "var(--bg3)", color: "var(--text3)" }}
                  title={s.label[lang as Lang3]}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading[lang as Lang3]}>
              <h4 className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ color: "var(--text)" }}>
                {col.heading[lang as Lang3]}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => {
                  const label = link.label[lang as Lang3];
                  const inner = (
                    <span className="flex items-center gap-1 text-sm transition-colors hover:text-indigo-400 group/l" style={{ color: "var(--text3)" }}>
                      {label}
                      {link.external && <ExternalLink className="w-3 h-3 opacity-0 group-hover/l:opacity-100 transition-opacity" />}
                    </span>
                  );
                  return (
                    <li key={label}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                      ) : (
                        <Link href={link.href}>{inner}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text3)" }}>
            © {new Date().getFullYear()} Glowledge. {lang === "ru" ? "Все права защищены." : lang === "en" ? "All rights reserved." : "Barcha huquqlar himoyalangan."}
          </p>
          <div className="flex items-center gap-3">
            <Link href="/help" className="text-xs transition-colors hover:text-indigo-400" style={{ color: "var(--text3)" }}>
              {lang === "uz" ? "Yordam" : lang === "ru" ? "Помощь" : "Help"}
            </Link>
            <span style={{ color: "var(--border)" }}>·</span>
            <Link href="/contact" className="text-xs transition-colors hover:text-indigo-400" style={{ color: "var(--text3)" }}>
              {lang === "uz" ? "Aloqa" : lang === "ru" ? "Контакт" : "Contact"}
            </Link>
            <span style={{ color: "var(--border)" }}>·</span>
            <span className="text-xs flex items-center gap-1" style={{ color: "var(--text3)" }}>
              🇺🇿 {lang === "uz" ? "O'zbekistondan ❤️" : lang === "ru" ? "Сделано в Узбекистане ❤️" : "Made in Uzbekistan ❤️"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
