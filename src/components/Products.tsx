"use client";

import { useLang } from "@/context/LangContext";
import {
  Presentation,
  Bot,
  FileCode2,
  FileText,
  ExternalLink,
  Users,
  Star,
  Zap,
} from "lucide-react";

const products = [
  {
    id: "soddaai",
    name: "SoddaAI",
    tagline: { uz: "Har turdagi kontent uchun", ru: "Для любого контента", en: "For all content types" },
    description: {
      uz: "O'zbekistonning eng kuchli AI kontent platformasi. Prezentatsiya, insho, kurs ishi, referat, rezyume va boshqa 20+ turdagi kontentni soniyalar ichida yarating.",
      ru: "Мощнейшая AI платформа Узбекистана. Создавайте презентации, эссе, рефераты и 20+ типов контента за секунды.",
      en: "Uzbekistan's most powerful AI content platform. Create presentations, essays, coursework, and 20+ content types in seconds.",
    },
    icon: Zap,
    gradient: "from-indigo-500 via-purple-500 to-cyan-500",
    features: {
      uz: ["Prezentatsiya", "Insho", "Kurs ishi", "Referat", "Rezyume", "Rasm generatsiya"],
      ru: ["Презентация", "Эссе", "Курсовая работа", "Реферат", "Резюме", "Генерация изображений"],
      en: ["Presentation", "Essay", "Coursework", "Research paper", "Resume", "Image generation"],
    },
    stats: "20+ funksiya",
    link: "https://sodda.ai",
    badge: "Asosiy Platforma",
    badgeColor: "rgba(99,102,241,0.15)",
    badgeText: "#6366f1",
  },
  {
    id: "aislide",
    name: "AI Slide Bot",
    tagline: { uz: "Telegram bot", ru: "Telegram бот", en: "Telegram bot" },
    description: {
      uz: "Telegram'da to'g'ridan-to'g'ri ishlaydi! 30 slayd = 3,000 so'm. Professional prezentatsiya soniyalar ichida.",
      ru: "Работает прямо в Telegram! 30 слайдов = 3,000 сум. Профессиональная презентация за секунды.",
      en: "Works directly in Telegram! 30 slides = 3,000 UZS. Professional presentation in seconds.",
    },
    icon: Bot,
    gradient: "from-cyan-500 to-blue-600",
    features: {
      uz: ["30 slayd = 3,000 so'm", "PDF yoki PPTX", "Jadval va rasm", "Tez yetkazib berish"],
      ru: ["30 слайдов = 3,000 сум", "PDF или PPTX", "Таблицы и рисунки", "Быстрая доставка"],
      en: ["30 slides = 3,000 UZS", "PDF or PPTX", "Tables & images", "Fast delivery"],
    },
    stats: "21,707 oylik foydalanuvchi",
    link: "https://t.me/aislidebot",
    badge: "Mashhur",
    badgeColor: "rgba(6,182,212,0.15)",
    badgeText: "#06b6d4",
  },
  {
    id: "slaydtop",
    name: "Slayd TOP",
    tagline: { uz: "Telegram kanal", ru: "Telegram канал", en: "Telegram channel" },
    description: {
      uz: "183,000+ obunachiga ega Telegram kanalimiz. AI yangiliklari, namuna prezentatsiyalar va ko'p narsa.",
      ru: "Telegram канал с 183,000+ подписчиками. Новости ИИ, примеры презентаций и многое другое.",
      en: "Telegram channel with 183,000+ subscribers. AI news, sample presentations and more.",
    },
    icon: Users,
    gradient: "from-purple-500 to-pink-600",
    features: {
      uz: ["183,928+ obunachi", "Kunlik yangiliklar", "AI yangiliklari", "Bepul"],
      ru: ["183,928+ подписчиков", "Ежедневные новости", "Новости ИИ", "Бесплатно"],
      en: ["183,928+ subscribers", "Daily updates", "AI news", "Free"],
    },
    stats: "183,928+ obunachi",
    link: "https://t.me/slaydtop",
    badge: "Telegram",
    badgeColor: "rgba(139,92,246,0.15)",
    badgeText: "#8b5cf6",
  },
  {
    id: "presenton",
    name: "Presenton",
    tagline: { uz: "Open-source", ru: "Open-source", en: "Open-source" },
    description: {
      uz: "Ochiq kodli AI prezentatsiya generatori. O'z serveringizda o'rnatib, cheksiz foydalaning.",
      ru: "Open-source AI генератор презентаций. Установите на свой сервер без ограничений.",
      en: "Open-source AI presentation generator. Install on your server and use without limits.",
    },
    icon: FileCode2,
    gradient: "from-green-500 to-emerald-600",
    features: {
      uz: ["Open-source", "Docker deployment", "Ko'p AI model", "Self-hosted"],
      ru: ["Open-source", "Docker деплой", "Много AI моделей", "Self-hosted"],
      en: ["Open-source", "Docker deployment", "Multiple AI models", "Self-hosted"],
    },
    stats: "Open-source",
    link: "#",
    badge: "Open Source",
    badgeColor: "rgba(16,185,129,0.15)",
    badgeText: "#10b981",
  },
  {
    id: "docxeditor",
    name: "AI Docx Editor",
    tagline: { uz: "Hujjat muharriri", ru: "Редактор документов", en: "Document editor" },
    description: {
      uz: "AI yordamida DOCX hujjatlarini tahrirlang. Aqlli matn qayta yozish, diagrammalar va jadvallar.",
      ru: "Редактируйте DOCX с ИИ. Умное переписывание, диаграммы и таблицы.",
      en: "Edit DOCX documents with AI. Smart rewriting, charts and tables.",
    },
    icon: FileText,
    gradient: "from-orange-500 to-amber-600",
    features: {
      uz: ["AI tahrir", "Diagrammalar", "Jadvallar", "PDF eksport"],
      ru: ["AI редактирование", "Диаграммы", "Таблицы", "PDF экспорт"],
      en: ["AI editing", "Diagrams", "Tables", "PDF export"],
    },
    stats: "Google Gemini AI",
    link: "#",
    badge: "Beta",
    badgeColor: "rgba(245,158,11,0.15)",
    badgeText: "#f59e0b",
  },
];

export default function Products() {
  const { lang, t } = useLang();
  const FeaturedIcon = products[0].icon;

  return (
    <section id="products" className="py-24 px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
            style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.2)", color: "var(--indigo)" }}
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">{t.products.title}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {t.products.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text3)" }}>
            {t.products.subtitle}
          </p>
        </div>

        {/* Featured product - SoddaAI */}
        <div className="mb-8">
          <div
            className="group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 p-8 sm:p-10"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)"}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)"}
          >
            {/* BG gradient */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at top left, rgba(99,102,241,0.15), transparent 60%)",
              }}
            />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${products[0].gradient} flex items-center justify-center shadow-xl`}>
                    <FeaturedIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full mb-1"
                      style={{ background: products[0].badgeColor, color: products[0].badgeText }}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      {products[0].badge}
                    </div>
                    <h3 className="text-2xl font-extrabold" style={{ color: "var(--text)" }}>
                      {products[0].name}
                    </h3>
                  </div>
                </div>
                <p className="mb-6 text-base leading-relaxed" style={{ color: "var(--text2)" }}>
                  {products[0].description[lang]}
                </p>
                <a
                  href={products[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  sodda.ai
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {products[0].features[lang].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl border"
                    style={{ background: "var(--bg3)", borderColor: "var(--border)" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0" />
                    <span className="text-sm font-medium" style={{ color: "var(--text2)" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(1).map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2 p-6"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(99,102,241,0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: product.badgeColor, color: product.badgeText }}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>
                    {product.name}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "var(--text3)" }}>
                    {product.tagline[lang]}
                  </p>
                  <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: "var(--text2)" }}>
                    {product.description[lang]}
                  </p>
                  <div className="flex flex-col gap-1.5 mb-4">
                    {product.features[lang].slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--text2)" }}>
                        <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex items-center justify-between pt-3 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="text-xs" style={{ color: "var(--text3)" }}>{product.stats}</span>
                    {product.link !== "#" && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: "var(--indigo)" }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
