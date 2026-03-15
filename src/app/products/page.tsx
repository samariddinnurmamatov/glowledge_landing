"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { Brain, Bot, Tv, Server, FileText, ArrowRight, ExternalLink, Check, Layers } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const products = [
  {
    slug: "sodda-ai",
    name: "SoddaAI",
    icon: Brain,
    gradient: "from-indigo-500 to-purple-600",
    glow: "rgba(99,102,241,0.15)",
    platform: { uz: "Web platforma", ru: "Веб-платформа", en: "Web platform" },
    badge: { uz: "Asosiy Mahsulot", ru: "Основной продукт", en: "Core Product" },
    badgeColor: "#6366f1",
    href: "https://sodda.ai",
    external: true,
    tagline: { uz: "20+ turdagi AI kontent yaratish", ru: "20+ видов AI контента", en: "20+ AI content types" },
    desc: {
      uz: "SoddaAI — Glowledgening asosiy platformasi. Prezentatsiya, insho, kurs ishi, marketing matnlari, biznes hujjatlari va ko'proqni bir joydan yarating. 60+ shablon, PPTX/PDF/DOCX eksport, UZ/RU/EN qo'llab-quvvatlash.",
      ru: "SoddaAI — основная платформа Glowledge. Создавайте презентации, эссе, курсовые, маркетинговые тексты, бизнес-документы и многое другое в одном месте. 60+ шаблонов, экспорт PPTX/PDF/DOCX, поддержка UZ/RU/EN.",
      en: "SoddaAI — Glowledge's core platform. Create presentations, essays, coursework, marketing texts, business documents and more in one place. 60+ templates, PPTX/PDF/DOCX export, UZ/RU/EN support.",
    },
    forWhom: { uz: "Barcha foydalanuvchilar", ru: "Все пользователи", en: "Everyone" },
    outputs: ["PPTX", "PDF", "DOCX"],
    features: {
      uz: ["20+ kontent turi", "60+ premium shablon", "PPTX · PDF · DOCX eksport", "Ko'p tilli (UZ/RU/EN)", "Tez va ishonchli", "Bepul rejada ishlash"],
      ru: ["20+ видов контента", "60+ премиум шаблонов", "Экспорт PPTX · PDF · DOCX", "Многоязычность (UZ/RU/EN)", "Быстро и надёжно", "Бесплатный план"],
      en: ["20+ content types", "60+ premium templates", "PPTX · PDF · DOCX export", "Multilingual (UZ/RU/EN)", "Fast and reliable", "Free plan available"],
    },
  },
  {
    slug: "ai-slide-bot",
    name: "AI Slide Bot",
    icon: Bot,
    gradient: "from-blue-500 to-cyan-500",
    glow: "rgba(6,182,212,0.15)",
    platform: { uz: "Telegram bot", ru: "Telegram бот", en: "Telegram bot" },
    badge: { uz: "Mashhur", ru: "Популярный", en: "Popular" },
    badgeColor: "#06b6d4",
    href: "https://t.me/aislidebot",
    external: true,
    tagline: { uz: "Telegramda professional prezentatsiya", ru: "Профессиональные презентации в Telegram", en: "Professional presentations in Telegram" },
    desc: {
      uz: "@aislidebot — Telegramda mavzu yuboring, 30 soniyada professional prezentatsiya oling. 21,707+ oylik foydalanuvchi ishonadi. 30 ta slayd atigi 3,000 so'm.",
      ru: "@aislidebot — отправьте тему в Telegram и получите профессиональную презентацию за 30 секунд. Доверяют 21 707+ ежемесячных пользователей. 30 слайдов всего за 3 000 сум.",
      en: "@aislidebot — send a topic in Telegram and get a professional presentation in 30 seconds. Trusted by 21,707+ monthly users. 30 slides for just 3,000 UZS.",
    },
    forWhom: { uz: "Telegram foydalanuvchilari", ru: "Пользователи Telegram", en: "Telegram users" },
    outputs: ["PPTX", "PDF"],
    features: {
      uz: ["21,707+ oylik foydalanuvchi", "30 slayd = 3,000 so'm", "~30 soniyada tayyor", "PPTX va PDF eksport", "Telegramdan chiqmasdan", "Sodda va tez"],
      ru: ["21 707+ ежемесячных пользователей", "30 слайдов = 3 000 сум", "Готово за ~30 секунд", "Экспорт PPTX и PDF", "Не выходя из Telegram", "Просто и быстро"],
      en: ["21,707+ monthly users", "30 slides = 3,000 UZS", "Ready in ~30 seconds", "PPTX and PDF export", "Without leaving Telegram", "Simple and fast"],
    },
  },
  {
    slug: "slayd-top",
    name: "Slayd TOP",
    icon: Tv,
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(139,92,246,0.15)",
    platform: { uz: "Telegram kanal", ru: "Telegram канал", en: "Telegram channel" },
    badge: { uz: "183K+ Obunachi", ru: "183K+ подписчиков", en: "183K+ Subscribers" },
    badgeColor: "#8b5cf6",
    href: "https://t.me/slaydtop",
    external: true,
    tagline: { uz: "O'zbekistondagi eng yirik AI kanali", ru: "Крупнейший AI канал в Узбекистане", en: "Uzbekistan's largest AI channel" },
    desc: {
      uz: "@slaydtop — O'zbekistondagi eng yirik AI va texnologiya Telegram kanali. 183,928+ obunachi. Kunlik AI yangiliklari, ta'lim kontenti, tendensiyalar va foydali resurslar.",
      ru: "@slaydtop — крупнейший Telegram канал об ИИ и технологиях в Узбекистане. 183 928+ подписчиков. Ежедневные новости ИИ, образовательный контент, тренды и полезные ресурсы.",
      en: "@slaydtop — Uzbekistan's largest AI and technology Telegram channel. 183,928+ subscribers. Daily AI news, educational content, trends and useful resources.",
    },
    forWhom: { uz: "AI qiziquvchilar", ru: "Интересующиеся ИИ", en: "AI enthusiasts" },
    outputs: [{ uz: "Mazmunli kontent", ru: "Полезный контент", en: "Educational content" }[("uz") as Lang3]],
    features: {
      uz: ["183,928+ obunachi", "Kunlik yangiliklar", "AI tendensiyalari", "Ta'lim kontenti", "Foydali resurslar", "Bepul obuna"],
      ru: ["183 928+ подписчиков", "Ежедневные новости", "AI тренды", "Образовательный контент", "Полезные ресурсы", "Бесплатная подписка"],
      en: ["183,928+ subscribers", "Daily news", "AI trends", "Educational content", "Useful resources", "Free subscription"],
    },
  },
  {
    slug: "slaydpro",
    name: "SlaydPro",
    icon: Server,
    gradient: "from-green-500 to-emerald-600",
    glow: "rgba(16,185,129,0.15)",
    platform: { uz: "AI Prezentatsiya", ru: "AI Prezentatsiya", en: "AI Prezentatsiya" },
    badge: { uz: "Self-hosted", ru: "Self-hosted", en: "Self-hosted" },
    badgeColor: "#10b981",
    href: "/products/slaydpro",
    external: false,
    tagline: { uz: "O'z serveringizda AI prezentatsiya generatori", ru: "AI генератор презентаций на вашем сервере", en: "AI presentation generator on your own server" },
    desc: {
      uz: "SlaydPro — AI prezentatsiya generatori. Docker bilan o'z serveringizga o'rnating, cheksiz va bepul foydalaning. Katta tashkilotlar va dasturchilar uchun ideal.",
      ru: "SlaydPro — AI генератор презентаций. Установите через Docker на свой сервер, используйте безлимитно и бесплатно. Идеально для крупных организаций и разработчиков.",
      en: "SlaydPro — AI presentation generator. Install via Docker on your server, use unlimitedly and for free. Ideal for large organizations and developers.",
    },
    forWhom: { uz: "Dasturchilar va tashkilotlar", ru: "Разработчики и организации", en: "Developers and organizations" },
    outputs: ["PPTX", "PDF"],
    features: {
      uz: ["To'liq self-hosted", "Docker bilan o'rnatish", "Cheksiz va bepul", "O'z serveringizda", "API integratsiya", "Maxsus sozlash"],
      ru: ["Полностью self-hosted", "Установка через Docker", "Безлимитно и бесплатно", "На своём сервере", "API интеграция", "Кастомизация"],
      en: ["Fully self-hosted", "Docker installation", "Unlimited and free", "On your own server", "API integration", "Custom configuration"],
    },
  },
  {
    slug: "ai-docx-editor",
    name: "AI Docx Editor",
    icon: FileText,
    gradient: "from-orange-500 to-amber-500",
    glow: "rgba(245,158,11,0.15)",
    platform: { uz: "Web editor", ru: "Веб-редактор", en: "Web editor" },
    badge: { uz: "Beta", ru: "Beta", en: "Beta" },
    badgeColor: "#f59e0b",
    href: "/products/ai-docx-editor",
    external: false,
    tagline: { uz: "AI bilan DOCX fayllarni tahrirlang", ru: "Редактируйте DOCX файлы с ИИ", en: "Edit DOCX files with AI" },
    desc: {
      uz: "AI Docx Editor — mavjud Word hujjatlaringizni AI yordamida tahrirlang, yaxshilang yoki kengaytiring. Google Gemini tomonidan quvvatlanadi. Beta versiyada.",
      ru: "AI Docx Editor — редактируйте, улучшайте или расширяйте существующие Word документы с помощью ИИ. Работает на Google Gemini. Версия Beta.",
      en: "AI Docx Editor — edit, improve or expand your existing Word documents with AI. Powered by Google Gemini. Beta version.",
    },
    forWhom: { uz: "Hujjat mualliflari", ru: "Авторы документов", en: "Document creators" },
    outputs: ["DOCX"],
    features: {
      uz: ["Google Gemini AI", "DOCX yuklash va tahrirlash", "Smart to'ldirish", "Matn yaxshilash", "Tez ishlash", "Beta - bepul"],
      ru: ["Google Gemini AI", "Загрузка и редактирование DOCX", "Умное заполнение", "Улучшение текста", "Быстрая работа", "Beta - бесплатно"],
      en: ["Google Gemini AI", "DOCX upload and edit", "Smart completion", "Text improvement", "Fast processing", "Beta - free"],
    },
  },
];

export default function ProductsPage() {
  const { lang } = useLang();

  const heading = { uz: "Bizning Mahsulotlar", ru: "Наши Продукты", en: "Our Products" }[lang as Lang3];
  const sub = {
    uz: "Glowledge ekotizimidagi 5 ta AI mahsulot — har bir ehtiyojingiz uchun",
    ru: "5 AI продуктов в экосистеме Glowledge — для каждой вашей потребности",
    en: "5 AI products in the Glowledge ecosystem — for your every need",
  }[lang as Lang3];

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Page hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute pointer-events-none" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="section-badge mb-5">
            <Layers className="w-4 h-4" />
            <span>{lang === "uz" ? "Mahsulotlar" : lang === "ru" ? "Продукты" : "Products"}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5" style={{ color: "var(--text)" }}>{heading}</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "var(--text3)" }}>{sub}</p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {products.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;
            return (
              <article
                key={p.slug}
                className="group relative rounded-3xl border overflow-hidden transition-all duration-300"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 56px ${p.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                  {/* Visual side */}
                  <div className={`lg:w-72 flex-shrink-0 bg-gradient-to-br ${p.gradient} flex items-center justify-center p-12 min-h-[180px] lg:min-h-full relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                    <Icon className="w-20 h-20 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="text-xs font-bold px-3 py-1 rounded-full border" style={{ borderColor: p.badgeColor + "40", color: p.badgeColor, background: p.badgeColor + "15" }}>
                          {p.badge[lang as Lang3]}
                        </span>
                        <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "var(--bg3)", color: "var(--text3)" }}>
                          {p.platform[lang as Lang3]}
                        </span>
                        <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "var(--bg3)", color: "var(--text3)" }}>
                          {lang === "uz" ? "Kim uchun: " : lang === "ru" ? "Для: " : "For: "}{p.forWhom[lang as Lang3]}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: "var(--text)" }}>{p.name}</h2>
                      <p className="text-base font-medium mb-4" style={{ color: "var(--indigo)" }}>{p.tagline[lang as Lang3]}</p>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text3)" }}>{p.desc[lang as Lang3]}</p>

                      {/* Features grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                        {p.features[lang as Lang3].map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--text2)" }}>
                            <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: p.badgeColor }} />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-3">
                      {p.external ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${p.gradient.includes("indigo") ? "#6366f1" : p.gradient.includes("blue") ? "#3b82f6" : p.gradient.includes("purple") ? "#8b5cf6" : p.gradient.includes("green") ? "#10b981" : "#f59e0b"}, ${p.gradient.includes("purple-6") ? "#9333ea" : p.gradient.includes("cyan") ? "#06b6d4" : p.gradient.includes("pink") ? "#ec4899" : p.gradient.includes("emerald") ? "#059669" : "#d97706"})` }}
                        >
                          {lang === "uz" ? "Ochish" : lang === "ru" ? "Открыть" : "Open"}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-r from-indigo-500 to-purple-600"
                        >
                          {lang === "uz" ? "Batafsil" : lang === "ru" ? "Подробнее" : "Learn more"}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      {/* Output badges */}
                      <div className="flex gap-1.5 flex-wrap">
                        {p.outputs.map((o) => (
                          <span key={o} className="text-xs font-semibold px-2 py-1 rounded-lg border" style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text3)" }}>{o}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Qayerdan Boshlash Kerak?" : lang === "ru" ? "С чего начать?" : "Where to Start?"}
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text3)" }}>
            {lang === "uz" ? "Ko'pchilik SoddaAI dan boshlaydi — bepul, tez, qulay." : lang === "ru" ? "Большинство начинают с SoddaAI — бесплатно, быстро, удобно." : "Most start with SoddaAI — free, fast, convenient."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://sodda.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              {lang === "uz" ? "SoddaAI ni Sinab Ko'ring" : lang === "ru" ? "Попробовать SoddaAI" : "Try SoddaAI"}
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:scale-105"
              style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--surface)" }}
            >
              {lang === "uz" ? "Menga mos mahsulotni toping" : lang === "ru" ? "Найдите подходящий продукт" : "Find the right product"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
