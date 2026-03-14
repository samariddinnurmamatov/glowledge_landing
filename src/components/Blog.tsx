"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { ArrowRight, Clock, LayoutTemplate, GraduationCap, Server, TrendingUp } from "lucide-react";

type Lang = "uz" | "ru" | "en";

const posts: {
  slug: string;
  tag: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  readTime: Record<Lang, string>;
  date: string;
  icon: React.ElementType;
}[] = [
  {
    slug: "ai-prezentatsiya-yaratish",
    tag: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" },
    title: {
      uz: "AI bilan 30 soniyada professional prezentatsiya yaratish",
      ru: "Создание профессиональной презентации с ИИ за 30 секунд",
      en: "Creating a professional presentation with AI in 30 seconds",
    },
    excerpt: {
      uz: "SoddaAI va AI Slide Bot yordamida professional prezentatsiya yaratishning eng tez yo'lini o'rganing. Mavzu kiritishdan tayyor PPTX olishgacha.",
      ru: "Узнайте самый быстрый способ создания профессиональных презентаций с помощью SoddaAI и AI Slide Bot.",
      en: "Learn the fastest way to create professional presentations using SoddaAI and AI Slide Bot.",
    },
    readTime: { uz: "3 daqiqa", ru: "3 минуты", en: "3 min" },
    date: "2026-03-10",
    icon: LayoutTemplate,
  },
  {
    slug: "kurs-ishi-ai",
    tag: { uz: "Maslahat", ru: "Советы", en: "Tips" },
    title: {
      uz: "Kurs ishini AI bilan yozish: 5 asosiy qadam",
      ru: "Написание курсовой работы с ИИ: 5 ключевых шагов",
      en: "Writing coursework with AI: 5 key steps",
    },
    excerpt: {
      uz: "Talabalar uchun: AI yordamida kurs ishi, referat va diplom ishlarini tez va sifatli yozish bo'yicha amaliy maslahatlar.",
      ru: "Для студентов: практические советы по быстрому написанию курсовых и дипломных работ с ИИ.",
      en: "For students: practical tips on writing coursework and theses quickly with AI.",
    },
    readTime: { uz: "5 daqiqa", ru: "5 минут", en: "5 min" },
    date: "2026-03-07",
    icon: GraduationCap,
  },
  {
    slug: "presenton-docker",
    tag: { uz: "Texnik", ru: "Технический", en: "Technical" },
    title: {
      uz: "Presenton'ni Docker bilan o'z serveringizda o'rnatish",
      ru: "Установка Presenton с Docker на своём сервере",
      en: "Installing Presenton with Docker on your own server",
    },
    excerpt: {
      uz: "Ochiq kodli AI prezentatsiya generatorini o'z serveringizga o'rnatish bo'yicha to'liq qo'llanma.",
      ru: "Полное руководство по установке open-source AI генератора презентаций на собственный сервер.",
      en: "Complete guide to installing the open-source AI presentation generator on your server.",
    },
    readTime: { uz: "8 daqiqa", ru: "8 минут", en: "8 min" },
    date: "2026-03-04",
    icon: Server,
  },
  {
    slug: "uzbekiston-ai-trend",
    tag: { uz: "Yangilik", ru: "Новости", en: "News" },
    title: {
      uz: "O'zbekistonda AI texnologiyalari: 2026 yil tendensiyalari",
      ru: "AI технологии в Узбекистане: тенденции 2026 года",
      en: "AI technologies in Uzbekistan: 2026 trends",
    },
    excerpt: {
      uz: "O'zbekistonda sun'iy intellekt sohasida so'nggi o'zgarishlar va Glowledge kabi mahalliy platformalarning rivojlanishi.",
      ru: "Последние изменения в сфере ИИ в Узбекистане и развитие местных платформ, таких как Glowledge.",
      en: "Latest changes in AI in Uzbekistan and the development of local platforms like Glowledge.",
    },
    readTime: { uz: "4 daqiqa", ru: "4 минуты", en: "4 min" },
    date: "2026-03-01",
    icon: TrendingUp,
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
  const readMore = { uz: "O'qish", ru: "Читать", en: "Read" }[lang];
  const allPosts = { uz: "Barcha maqolalar", ru: "Все статьи", en: "All articles" }[lang];

  const featured = posts[0];
  const FeaturedIcon = featured.icon;

  return (
    <section id="blog" className="py-24 px-4 sm:px-6" style={{ background: "var(--bg3)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border"
              style={{
                background: "rgba(99,102,241,0.08)",
                borderColor: "rgba(99,102,241,0.18)",
                color: "var(--indigo)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold tracking-wide uppercase">{heading}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
              {heading}
            </h2>
            <p className="text-base mt-2" style={{ color: "var(--text3)" }}>
              {subheading}
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0 transition-all hover:gap-3"
            style={{ color: "var(--indigo)" }}
          >
            {allPosts}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid: featured left + 3 cards right — equal height */}
        <div className="grid lg:grid-cols-2 gap-5 items-stretch">

          {/* ── Featured post ── */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.35)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(99,102,241,0.1)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Cover */}
            <div
              className="relative flex flex-col items-start justify-end flex-shrink-0 overflow-hidden"
              style={{
                height: 220,
                background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)",
              }}
            >
              {/* Grid lines */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Glow orbs */}
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)", filter: "blur(40px)" }} />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)", filter: "blur(30px)" }} />

              {/* Icon — top right */}
              <div
                className="absolute top-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <FeaturedIcon className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>

              {/* Tag + title on cover */}
              <div className="relative z-10 p-6 w-full">
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-3"
                  style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}
                >
                  {featured.tag[lang]}
                </span>
                <p className="text-white font-bold text-base leading-snug line-clamp-2 max-w-xs" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                  {featured.title[lang]}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text3)" }}>
                  <Clock className="w-3 h-3" />
                  {featured.readTime[lang]}
                </span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text3)" }}>
                {featured.excerpt[lang]}
              </p>
              <div
                className="flex items-center justify-between mt-5 pt-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-xs" style={{ color: "var(--text3)" }}>
                  {formatDate(featured.date, lang)}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                  style={{ color: "var(--indigo)" }}
                >
                  {readMore}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          {/* ── Small posts — fill full height ── */}
          <div className="flex flex-col gap-4 h-full">
            {posts.slice(1).map((post) => {
              const PostIcon = post.icon;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-4 rounded-2xl border p-5 flex-1 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    minHeight: 0,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(99,102,241,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.15)",
                    }}
                  >
                    <PostIcon className="w-5 h-5" style={{ color: "var(--indigo)" }} strokeWidth={1.7} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-md"
                          style={{ background: "rgba(99,102,241,0.1)", color: "var(--indigo)" }}
                        >
                          {post.tag[lang]}
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text3)" }}>
                          <Clock className="w-3 h-3" />
                          {post.readTime[lang]}
                        </span>
                      </div>
                      <h3
                        className="text-sm font-semibold leading-snug"
                        style={{ color: "var(--text)" }}
                      >
                        {post.title[lang]}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs" style={{ color: "var(--text3)" }}>
                        {formatDate(post.date, lang)}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                        style={{ color: "var(--indigo)" }}
                      >
                        {readMore}
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
