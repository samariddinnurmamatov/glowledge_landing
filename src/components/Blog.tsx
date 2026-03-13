"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { ArrowRight, Clock, LayoutTemplate, GraduationCap, Server, TrendingUp } from "lucide-react";

type Lang = "uz" | "ru" | "en";

const posts: {
  slug: string;
  tag: Record<Lang, string>;
  tagColor: string;
  tagTextColor: string;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  readTime: Record<Lang, string>;
  date: string;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
  icon: React.ElementType;
}[] = [
  {
    slug: "ai-prezentatsiya-yaratish",
    tag: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" },
    tagColor: "rgba(99,102,241,0.12)",
    tagTextColor: "#818cf8",
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
    gradientFrom: "#6366f1",
    gradientTo: "#8b5cf6",
    shadowColor: "rgba(99,102,241,0.45)",
    icon: LayoutTemplate,
  },
  {
    slug: "kurs-ishi-ai",
    tag: { uz: "Maslahat", ru: "Советы", en: "Tips" },
    tagColor: "rgba(16,185,129,0.12)",
    tagTextColor: "#34d399",
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
    gradientFrom: "#10b981",
    gradientTo: "#059669",
    shadowColor: "rgba(16,185,129,0.45)",
    icon: GraduationCap,
  },
  {
    slug: "presenton-docker",
    tag: { uz: "Texnik", ru: "Технический", en: "Technical" },
    tagColor: "rgba(245,158,11,0.12)",
    tagTextColor: "#fbbf24",
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
    gradientFrom: "#f59e0b",
    gradientTo: "#d97706",
    shadowColor: "rgba(245,158,11,0.45)",
    icon: Server,
  },
  {
    slug: "uzbekiston-ai-trend",
    tag: { uz: "Yangilik", ru: "Новости", en: "News" },
    tagColor: "rgba(236,72,153,0.12)",
    tagTextColor: "#f472b6",
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
    gradientFrom: "#ec4899",
    gradientTo: "#8b5cf6",
    shadowColor: "rgba(236,72,153,0.45)",
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
  const allPosts = { uz: "Barcha maqolalar →", ru: "Все статьи →", en: "All articles →" }[lang];

  const featured = posts[0];
  const FeaturedIcon = featured.icon;

  return (
    <section id="blog" className="py-24 px-4 sm:px-6" style={{ background: "var(--bg3)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
              style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.2)", color: "#818cf8" }}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">{heading}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold" style={{ color: "var(--text)" }}>
              {heading}
            </h2>
            <p className="text-lg mt-3" style={{ color: "var(--text3)" }}>
              {subheading}
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0 transition-all hover:gap-3"
            style={{ color: "var(--indigo)" }}
          >
            {allPosts}
          </Link>
        </div>

        {/* Grid: 1 big featured + 3 small */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* ── Featured post ── */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative overflow-hidden rounded-3xl border flex flex-col transition-all duration-300 hover:-translate-y-1"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = `${featured.gradientFrom}55`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${featured.shadowColor.replace("0.45","0.15")}`;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Cover with gradient + grid + centered icon */}
            <div
              className="h-52 relative overflow-hidden flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${featured.gradientFrom}, ${featured.gradientTo})` }}
            >
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              {/* Glow blob */}
              <div
                className="absolute w-40 h-40 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", filter: "blur(40px)" }}
              />
              {/* Icon box */}
              <div
                className="relative z-10 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <FeaturedIcon className="w-9 h-9 text-white" strokeWidth={1.8} />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: featured.tagColor, color: featured.tagTextColor }}
                >
                  {featured.tag[lang]}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text3)" }}>
                  <Clock className="w-3 h-3" />
                  {featured.readTime[lang]}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-snug mb-3" style={{ color: "var(--text)" }}>
                {featured.title[lang]}
              </h3>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "var(--text3)" }}>
                {featured.excerpt[lang]}
              </p>
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border)" }}>
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

          {/* ── Small posts ── */}
          <div className="flex flex-col gap-4">
            {posts.slice(1).map((post) => {
              const PostIcon = post.icon;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl border flex gap-5 p-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${post.gradientFrom}44`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${post.shadowColor.replace("0.45","0.12")}`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Vibrant icon box */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
                      boxShadow: `0 6px 20px ${post.shadowColor}`,
                    }}
                  >
                    <PostIcon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: post.tagColor, color: post.tagTextColor }}
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
