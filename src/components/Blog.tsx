"use client";

import { useLang } from "@/context/LangContext";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

type Lang = "uz" | "ru" | "en";

const posts: {
  slug: string;
  tag: Record<Lang, string>;
  tagColor: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  readTime: Record<Lang, string>;
  date: string;
  gradient: string;
  icon: string;
}[] = [
  {
    slug: "ai-prezentatsiya-yaratish",
    tag: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" },
    tagColor: "rgba(99,102,241,0.15)",
    title: {
      uz: "AI bilan 30 soniyada professional prezentatsiya yaratish",
      ru: "Создание профессиональной презентации с ИИ за 30 секунд",
      en: "Creating a professional presentation with AI in 30 seconds",
    },
    excerpt: {
      uz: "SoddaAI va AI Slide Bot yordamida professional prezentatsiya yaratishning eng tez yo'lini o'rganing. Mavzu kiritishdan tayyor PPTX olishgacha.",
      ru: "Узнайте самый быстрый способ создания профессиональных презентаций с помощью SoddaAI и AI Slide Bot. От ввода темы до готового PPTX.",
      en: "Learn the fastest way to create professional presentations using SoddaAI and AI Slide Bot. From entering a topic to getting a ready PPTX.",
    },
    readTime: { uz: "3 daqiqa", ru: "3 минуты", en: "3 min read" },
    date: "2026-03-10",
    gradient: "from-indigo-500 to-purple-600",
    icon: "🎯",
  },
  {
    slug: "kurs-ishi-ai",
    tag: { uz: "Maslahat", ru: "Советы", en: "Tips" },
    tagColor: "rgba(16,185,129,0.15)",
    title: {
      uz: "Kurs ishini AI bilan yozish: 5 asosiy qadam",
      ru: "Написание курсовой работы с ИИ: 5 ключевых шагов",
      en: "Writing coursework with AI: 5 key steps",
    },
    excerpt: {
      uz: "Talabalar uchun: AI yordamida kurs ishi, referat va diplom ishlarini tez va sifatli yozish bo'yicha amaliy maslahatlar.",
      ru: "Для студентов: практические советы по быстрому и качественному написанию курсовых, рефератов и дипломных работ с помощью ИИ.",
      en: "For students: practical tips on writing coursework, research papers and theses quickly and with quality using AI.",
    },
    readTime: { uz: "5 daqiqa", ru: "5 минут", en: "5 min read" },
    date: "2026-03-07",
    gradient: "from-green-500 to-emerald-600",
    icon: "📚",
  },
  {
    slug: "presenton-docker",
    tag: { uz: "Texnik", ru: "Технический", en: "Technical" },
    tagColor: "rgba(245,158,11,0.15)",
    title: {
      uz: "Presenton'ni Docker bilan o'z serveringizda o'rnatish",
      ru: "Установка Presenton с Docker на своём сервере",
      en: "Installing Presenton with Docker on your own server",
    },
    excerpt: {
      uz: "Ochiq kodli AI prezentatsiya generatorini o'z serveringizga o'rnatish bo'yicha to'liq qo'llanma. Docker, environment variables va sozlashlar.",
      ru: "Полное руководство по установке open-source AI генератора презентаций на собственный сервер. Docker, переменные среды и настройки.",
      en: "Complete guide to installing the open-source AI presentation generator on your own server. Docker, environment variables and settings.",
    },
    readTime: { uz: "8 daqiqa", ru: "8 минут", en: "8 min read" },
    date: "2026-03-04",
    gradient: "from-orange-500 to-amber-600",
    icon: "⚙️",
  },
  {
    slug: "uzbekiston-ai-trend",
    tag: { uz: "Yangilik", ru: "Новости", en: "News" },
    tagColor: "rgba(139,92,246,0.15)",
    title: {
      uz: "O'zbekistonda AI texnologiyalari: 2026 yil tendensiyalari",
      ru: "AI технологии в Узбекистане: тенденции 2026 года",
      en: "AI technologies in Uzbekistan: 2026 trends",
    },
    excerpt: {
      uz: "O'zbekistonda sun'iy intellekt sohasida so'nggi o'zgarishlar, yangi startaplar va Glowledge kabi mahalliy platformalarning rivojlanishi.",
      ru: "Последние изменения в сфере искусственного интеллекта в Узбекистане, новые стартапы и развитие местных платформ, таких как Glowledge.",
      en: "Latest changes in the artificial intelligence sector in Uzbekistan, new startups and the development of local platforms like Glowledge.",
    },
    readTime: { uz: "4 daqiqa", ru: "4 минуты", en: "4 min read" },
    date: "2026-03-01",
    gradient: "from-purple-500 to-pink-600",
    icon: "🚀",
  },
];

const MONTHS: Record<Lang, string[]> = {
  uz: ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"],
  ru: ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
};

function formatDate(dateStr: string, lang: Lang) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const month = MONTHS[lang][m - 1];
  if (lang === "ru") return `${d} ${month} ${y}`;
  if (lang === "uz") return `${d}-${month}, ${y}`;
  return `${month} ${d}, ${y}`;
}

export default function Blog() {
  const { lang } = useLang();

  const heading = lang === "uz" ? "Blog" : lang === "ru" ? "Блог" : "Blog";
  const subheading = {
    uz: "AI va kontent yaratish bo'yicha foydali maqolalar",
    ru: "Полезные статьи об ИИ и создании контента",
    en: "Useful articles about AI and content creation",
  }[lang];
  const readMore = { uz: "O'qish", ru: "Читать", en: "Read more" }[lang];
  const allPosts = { uz: "Barcha maqolalar", ru: "Все статьи", en: "All articles" }[lang];

  return (
    <section id="blog" className="py-24 px-4 sm:px-6" style={{ background: "var(--bg3)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
              style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.2)", color: "var(--indigo)" }}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-semibold">{heading}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold" style={{ color: "var(--text)" }}>
              {heading}
            </h2>
            <p className="text-lg mt-3" style={{ color: "var(--text3)" }}>
              {subheading}
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0 transition-all"
            style={{ color: "var(--indigo)" }}
          >
            {allPosts}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Grid: 1 big + 3 small */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Featured post */}
          <div
            className="group relative overflow-hidden rounded-3xl border flex flex-col transition-all duration-300 hover:-translate-y-1"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.35)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(99,102,241,0.12)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Cover */}
            <div
              className={`h-52 bg-gradient-to-br ${posts[0].gradient} flex items-center justify-center relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <span className="text-6xl relative z-10">{posts[0].icon}</span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: posts[0].tagColor, color: "var(--indigo)" }}
                >
                  {posts[0].tag[lang]}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text3)" }}>
                  <Clock className="w-3 h-3" />
                  {posts[0].readTime[lang]}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-snug mb-3" style={{ color: "var(--text)" }}>
                {posts[0].title[lang]}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--text3)" }}>
                {posts[0].excerpt[lang]}
              </p>

              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <span className="text-xs" style={{ color: "var(--text3)" }}>
                  {formatDate(posts[0].date, lang)}
                </span>
                <a
                  href="#"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold transition-all"
                  style={{ color: "var(--indigo)" }}
                >
                  {readMore}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Small posts */}
          <div className="flex flex-col gap-4">
            {posts.slice(1).map((post, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border flex gap-5 p-5 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(99,102,241,0.10)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Icon box */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${post.gradient} flex items-center justify-center flex-shrink-0 text-2xl shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  {post.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: post.tagColor, color: "var(--text2)" }}
                    >
                      {post.tag[lang]}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text3)" }}>
                      <Clock className="w-3 h-3" />
                      {post.readTime[lang]}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-bold leading-snug mb-1 line-clamp-2"
                    style={{ color: "var(--text)" }}
                  >
                    {post.title[lang]}
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs" style={{ color: "var(--text3)" }}>
                      {formatDate(post.date, lang)}
                    </span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs font-semibold transition-all"
                      style={{ color: "var(--indigo)" }}
                    >
                      {readMore}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
