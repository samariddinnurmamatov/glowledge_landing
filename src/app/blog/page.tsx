"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { BookOpen, Clock, ArrowRight, Search } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const posts = [
  {
    slug: "ai-prezentatsiya-yaratish",
    tag: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" },
    tagColor: "#6366f1",
    tagBg: "rgba(99,102,241,0.10)",
    title: { uz: "AI bilan 30 soniyada professional prezentatsiya yaratish", ru: "Создание профессиональной презентации с ИИ за 30 секунд", en: "Creating a professional presentation with AI in 30 seconds" },
    excerpt: { uz: "SoddaAI va AI Slide Bot yordamida professional prezentatsiya yaratishning eng tez yo'lini o'rganing. Mavzu kiritishdan tayyor PPTX olishgacha.", ru: "Узнайте самый быстрый способ создания профессиональных презентаций с помощью SoddaAI и AI Slide Bot. От ввода темы до готового PPTX.", en: "Learn the fastest way to create professional presentations using SoddaAI and AI Slide Bot. From entering a topic to getting a ready PPTX." },
    readTime: { uz: "3 daqiqa", ru: "3 минуты", en: "3 min read" },
    date: "2026-03-10",
    gradient: "from-indigo-500 to-purple-600",
    icon: "🎯",
    featured: true,
  },
  {
    slug: "kurs-ishi-ai",
    tag: { uz: "Maslahat", ru: "Советы", en: "Tips" },
    tagColor: "#10b981",
    tagBg: "rgba(16,185,129,0.10)",
    title: { uz: "Kurs ishini AI bilan yozish: 5 asosiy qadam", ru: "Написание курсовой работы с ИИ: 5 ключевых шагов", en: "Writing coursework with AI: 5 key steps" },
    excerpt: { uz: "Talabalar uchun: AI yordamida kurs ishi, referat va diplom ishlarini tez va sifatli yozish bo'yicha amaliy maslahatlar.", ru: "Для студентов: практические советы по быстрому и качественному написанию курсовых, рефератов и дипломных работ с помощью ИИ.", en: "For students: practical tips on writing coursework, research papers and theses quickly and with quality using AI." },
    readTime: { uz: "5 daqiqa", ru: "5 минут", en: "5 min read" },
    date: "2026-03-07",
    gradient: "from-green-500 to-emerald-600",
    icon: "📚",
    featured: false,
  },
  {
    slug: "slaydpro-docker",
    tag: { uz: "Texnik", ru: "Технический", en: "Technical" },
    tagColor: "#f59e0b",
    tagBg: "rgba(245,158,11,0.10)",
    title: { uz: "SlaydPro'ni Docker bilan o'z serveringizda o'rnatish", ru: "Установка SlaydPro с Docker на своём сервере", en: "Installing SlaydPro with Docker on your own server" },
    excerpt: { uz: "SlaydPro AI prezentatsiya generatorini o'z serveringizga o'rnatish bo'yicha to'liq qo'llanma. Docker, environment variables va sozlashlar.", ru: "Полное руководство по установке self-hosted AI генератора презентаций на собственный сервер. Docker, переменные среды и настройки.", en: "Complete guide to installing the AI presentation generator on your own server. Docker, environment variables and settings." },
    readTime: { uz: "8 daqiqa", ru: "8 минут", en: "8 min read" },
    date: "2026-03-04",
    gradient: "from-orange-500 to-amber-600",
    icon: "⚙️",
    featured: false,
  },
  {
    slug: "uzbekiston-ai-trend",
    tag: { uz: "Yangilik", ru: "Новости", en: "News" },
    tagColor: "#8b5cf6",
    tagBg: "rgba(139,92,246,0.10)",
    title: { uz: "O'zbekistonda AI texnologiyalari: 2026 yil tendensiyalari", ru: "AI технологии в Узбекистане: тенденции 2026 года", en: "AI technologies in Uzbekistan: 2026 trends" },
    excerpt: { uz: "O'zbekistonda sun'iy intellekt sohasida so'nggi o'zgarishlar, yangi startaplar va Glowledge kabi mahalliy platformalarning rivojlanishi.", ru: "Последние изменения в сфере искусственного интеллекта в Узбекистане, новые стартапы и развитие местных платформ, таких как Glowledge.", en: "Latest changes in the artificial intelligence sector in Uzbekistan, new startups and the development of local platforms like Glowledge." },
    readTime: { uz: "4 daqiqa", ru: "4 минуты", en: "4 min read" },
    date: "2026-03-01",
    gradient: "from-purple-500 to-pink-600",
    icon: "🚀",
    featured: false,
  },
  {
    slug: "pptx-pdf-docx-farqi",
    tag: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" },
    tagColor: "#6366f1",
    tagBg: "rgba(99,102,241,0.10)",
    title: { uz: "PPTX, PDF va DOCX: qaysi formatni tanlash kerak?", ru: "PPTX, PDF и DOCX: какой формат выбрать?", en: "PPTX, PDF and DOCX: which format to choose?" },
    excerpt: { uz: "Har bir format qachon va qayerda qo'llanilishi, ularning afzalliklari va kamchiliklari haqida batafsil ko'rsatma.", ru: "Подробное руководство о том, когда и где использовать каждый формат, их преимуществах и недостатках.", en: "Detailed guide on when and where to use each format, their advantages and disadvantages." },
    readTime: { uz: "4 daqiqa", ru: "4 минуты", en: "4 min read" },
    date: "2026-02-25",
    gradient: "from-blue-500 to-cyan-500",
    icon: "📄",
    featured: false,
  },
  {
    slug: "ai-slide-bot-qollanma",
    tag: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" },
    tagColor: "#06b6d4",
    tagBg: "rgba(6,182,212,0.10)",
    title: { uz: "AI Slide Bot: to'liq qo'llanma (boshlang'ichlar uchun)", ru: "AI Slide Bot: полное руководство (для начинающих)", en: "AI Slide Bot: complete guide (for beginners)" },
    excerpt: { uz: "@aislidebot ni birinchi marta ishlatmoqdamisiz? Ushbu to'liq qo'llanmada botdan to'g'ri foydalanishni o'rganing.", ru: "Впервые используете @aislidebot? В этом полном руководстве узнайте, как правильно пользоваться ботом.", en: "Using @aislidebot for the first time? Learn how to use the bot correctly in this complete guide." },
    readTime: { uz: "6 daqiqa", ru: "6 минут", en: "6 min read" },
    date: "2026-02-20",
    gradient: "from-cyan-500 to-blue-500",
    icon: "🤖",
    featured: false,
  },
];

const categories = [
  { id: "all", label: { uz: "Barchasi", ru: "Все", en: "All" } },
  { id: "guide", label: { uz: "Qo'llanmalar", ru: "Руководства", en: "Guides" } },
  { id: "tips", label: { uz: "Maslahatlar", ru: "Советы", en: "Tips" } },
  { id: "technical", label: { uz: "Texnik", ru: "Технические", en: "Technical" } },
  { id: "news", label: { uz: "Yangiliklar", ru: "Новости", en: "News" } },
];

function formatDate(dateStr: string, lang: Lang3) {
  const d = new Date(dateStr);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  const locale = lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US";
  try { return d.toLocaleDateString(locale, opts); } catch { return dateStr; }
}

export default function BlogPage() {
  const { lang } = useLang();

  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="section-badge mb-5">
            <BookOpen className="w-4 h-4" />
            <span>Blog</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Glowledge Blog" : lang === "ru" ? "Блог Glowledge" : "Glowledge Blog"}
          </h1>
          <p className="text-lg mb-8" style={{ color: "var(--text3)" }}>
            {lang === "uz" ? "AI, kontent yaratish va mahsulotlarimiz bo'yicha maqolalar" : lang === "ru" ? "Статьи об ИИ, создании контента и наших продуктах" : "Articles about AI, content creation and our products"}
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--text3)" }} />
            <input
              type="text"
              placeholder={lang === "uz" ? "Maqola qidirish..." : lang === "ru" ? "Поиск статей..." : "Search articles..."}
              className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-all"
              style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text)" }}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="sticky top-16 z-40 py-3 px-4 sm:px-6 border-b overflow-x-auto" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto flex items-center gap-2 w-max sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all whitespace-nowrap"
              style={{ background: cat.id === "all" ? "var(--indigo)" : "var(--bg3)", color: cat.id === "all" ? "#fff" : "var(--text2)", borderColor: cat.id === "all" ? "var(--indigo)" : "var(--border)" }}
            >
              {cat.label[lang as Lang3]}
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text3)" }}>
            {lang === "uz" ? "Tanlangan Maqola" : lang === "ru" ? "Избранная Статья" : "Featured"}
          </p>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <article
              className="rounded-3xl border overflow-hidden grid lg:grid-cols-2 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.3)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(99,102,241,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className={`bg-gradient-to-br ${featured.gradient} flex items-center justify-center min-h-[220px] lg:min-h-full relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <span className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">{featured.icon}</span>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: featured.tagBg, color: featured.tagColor }}>
                      {featured.tag[lang as Lang3]}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text3)" }}>
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime[lang as Lang3]}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug" style={{ color: "var(--text)" }}>
                    {featured.title[lang as Lang3]}
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--text3)" }}>{featured.excerpt[lang as Lang3]}</p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                  <span className="text-sm" style={{ color: "var(--text3)" }}>{formatDate(featured.date, lang as Lang3)}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--indigo)" }}>
                    {lang === "uz" ? "O'qish" : lang === "ru" ? "Читать" : "Read more"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "var(--text3)" }}>
            {lang === "uz" ? "Barcha Maqolalar" : lang === "ru" ? "Все Статьи" : "All Articles"}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article
                  className="flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.25)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(99,102,241,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className={`bg-gradient-to-br ${post.gradient} h-36 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">{post.icon}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: post.tagBg, color: post.tagColor }}>{post.tag[lang as Lang3]}</span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text3)" }}><Clock className="w-3 h-3" />{post.readTime[lang as Lang3]}</span>
                    </div>
                    <h3 className="font-bold leading-snug mb-2 flex-1" style={{ color: "var(--text)" }}>{post.title[lang as Lang3]}</h3>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                      <span className="text-xs" style={{ color: "var(--text3)" }}>{formatDate(post.date, lang as Lang3)}</span>
                      <span className="text-xs font-semibold flex items-center gap-1" style={{ color: "var(--indigo)" }}>
                        {lang === "uz" ? "O'qish" : lang === "ru" ? "Читать" : "Read"}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
