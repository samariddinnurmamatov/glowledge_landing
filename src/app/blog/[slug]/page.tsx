"use client";

import { use } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { Clock, ChevronLeft, ArrowRight, BookOpen } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const articles: Record<string, {
  tag: Record<Lang3, string>; tagColor: string; gradient: string; icon: string;
  title: Record<Lang3, string>;
  date: string; readTime: Record<Lang3, string>;
  intro: Record<Lang3, string>;
  sections: { h: Record<Lang3, string>; p: Record<Lang3, string> }[];
  related: string[];
}> = {
  "ai-prezentatsiya-yaratish": {
    tag: { uz: "Qo'llanma", ru: "Руководство", en: "Guide" }, tagColor: "#6366f1",
    gradient: "from-indigo-500 to-purple-600", icon: "🎯",
    title: { uz: "AI bilan 30 soniyada professional prezentatsiya yaratish", ru: "Создание профессиональной презентации с ИИ за 30 секунд", en: "Creating a professional presentation with AI in 30 seconds" },
    date: "2026-03-10", readTime: { uz: "3 daqiqa", ru: "3 минуты", en: "3 min read" },
    intro: {
      uz: "Prezentatsiya tayyorlash ko'pincha soatlar oladi — mavzuni o'rganish, slaydlarni loyihalash, matn yozish. Lekin SoddaAI va AI Slide Bot bilan bu jarayonni daqiqalarga, hatto soniyalarga qisqartirish mumkin.",
      ru: "Подготовка презентации часто занимает часы — изучение темы, проектирование слайдов, написание текста. Но с SoddaAI и AI Slide Bot этот процесс можно сократить до минут, а то и секунд.",
      en: "Preparing a presentation often takes hours — researching the topic, designing slides, writing text. But with SoddaAI and AI Slide Bot, this process can be reduced to minutes, even seconds.",
    },
    sections: [
      {
        h: { uz: "1-qadam: Mavzuni aniqlang", ru: "Шаг 1: Определите тему", en: "Step 1: Define your topic" },
        p: { uz: "Aniq mavzu - bu yarim ish. Mavzuni qanchalik aniq yozsangiz, AI shunchalik yaxshi natija beradi. Masalan: 'Iqtisodiyot' o'rniga 'O'zbekistonda xizmat ko'rsatish sektorining rivojlanishi 2020-2025' desangiz, natija ancha professional bo'ladi.", ru: "Чёткая тема — это половина работы. Чем точнее вы напишете тему, тем лучший результат даст ИИ. Например, вместо 'Экономика' напишите 'Развитие сферы услуг в Узбекистане 2020-2025' — результат будет намного профессиональнее.", en: "A clear topic is half the work. The more specific your topic, the better the AI result. For example, instead of 'Economics' write 'Development of the service sector in Uzbekistan 2020-2025' — the result will be much more professional." },
      },
      {
        h: { uz: "2-qadam: Platformani tanlang", ru: "Шаг 2: Выберите платформу", en: "Step 2: Choose your platform" },
        p: { uz: "SoddaAI (sodda.ai) — brauzer orqali ishlash uchun. Slayd soni, shakl va format ustidan ko'proq nazorat beriladi. AI Slide Bot (@aislidebot) — Telegram ichida ishlash uchun. Tez va qulay, hech qanday ro'yxatdan o'tish shart emas.", ru: "SoddaAI (sodda.ai) — для работы через браузер. Даёт больше контроля над количеством слайдов, оформлением и форматом. AI Slide Bot (@aislidebot) — для работы внутри Telegram. Быстро и удобно, не нужна регистрация.", en: "SoddaAI (sodda.ai) — for working via browser. Gives more control over slide count, formatting and format. AI Slide Bot (@aislidebot) — for working inside Telegram. Fast and convenient, no registration needed." },
      },
      {
        h: { uz: "3-qadam: Natijani tekshirish va tahrirlash", ru: "Шаг 3: Проверка и редактирование результата", en: "Step 3: Review and edit the result" },
        p: { uz: "AI tayyorlagan kontent asosida yaratiladi — lekin har doim bir marta o'qib chiqing. Faktlar, sanalar va raqamlarni tekshiring. Kerak bo'lsa matnni qisqartiring yoki kengaytiring.", ru: "Контент, подготовленный ИИ, является основой — но всегда прочитайте один раз. Проверяйте факты, даты и цифры. При необходимости сократите или расширьте текст.", en: "The content prepared by AI is a foundation — but always read it once. Check facts, dates and numbers. Shorten or expand the text if needed." },
      },
    ],
    related: ["kurs-ishi-ai", "ai-slide-bot-qollanma", "pptx-pdf-docx-farqi"],
  },
  "kurs-ishi-ai": {
    tag: { uz: "Maslahat", ru: "Советы", en: "Tips" }, tagColor: "#10b981",
    gradient: "from-green-500 to-emerald-600", icon: "📚",
    title: { uz: "Kurs ishini AI bilan yozish: 5 asosiy qadam", ru: "Написание курсовой работы с ИИ: 5 ключевых шагов", en: "Writing coursework with AI: 5 key steps" },
    date: "2026-03-07", readTime: { uz: "5 daqiqa", ru: "5 минут", en: "5 min read" },
    intro: {
      uz: "Kurs ishi yozish talabalar uchun eng ko'p vaqt talab qiladigan vazifalardan biri. AI yordamida bu jarayonni ancha tezlashtirish mumkin — lekin to'g'ri yondashuv bilan.",
      ru: "Написание курсовой работы — одна из самых трудоёмких задач для студентов. С помощью ИИ этот процесс можно значительно ускорить — но при правильном подходе.",
      en: "Writing coursework is one of the most time-consuming tasks for students. With AI assistance, this process can be significantly accelerated — but with the right approach.",
    },
    sections: [
      {
        h: { uz: "1. Mavzu va rejani aniqlang", ru: "1. Определите тему и план", en: "1. Define topic and outline" },
        p: { uz: "Kurs ishi yozishdan oldin aniq mavzu va reja bor bo'lishi kerak. SoddaAI ga 'Men (mavzu) bo'yicha kurs ishi yozmoqchiman, menga reja tuzib ber' deb so'rang.", ru: "Перед написанием курсовой должна быть чёткая тема и план. Попросите SoddaAI: 'Я хочу написать курсовую по (тема), составь мне план'.", en: "Before writing coursework, you need a clear topic and outline. Ask SoddaAI: 'I want to write coursework on (topic), make me an outline'." },
      },
      {
        h: { uz: "2. Har bir bo'limni alohida yarating", ru: "2. Создавайте каждый раздел отдельно", en: "2. Create each section separately" },
        p: { uz: "Butun kurs ishini bir vaqtda yaratishdan ko'ra, har bir bo'limni alohida so'rang. Bu natija sifatini oshiradi va tahrirlash osonlashadi.", ru: "Вместо создания всей курсовой сразу, запрашивайте каждый раздел отдельно. Это улучшает качество результата и упрощает редактирование.", en: "Instead of creating the entire coursework at once, ask for each section separately. This improves result quality and simplifies editing." },
      },
      {
        h: { uz: "3. Faktlarni tekshiring", ru: "3. Проверяйте факты", en: "3. Verify facts" },
        p: { uz: "AI ba'zan noto'g'ri ma'lumot berishi mumkin. Muhim statistika, sanalar va iqtiboslarni doimo tekshirib oling. Akademik maqolalar yoki ishonchli manbalar bilan taqqoslang.", ru: "ИИ иногда может давать неверную информацию. Всегда проверяйте важную статистику, даты и цитаты. Сверяйтесь с академическими статьями или надёжными источниками.", en: "AI can sometimes give incorrect information. Always verify important statistics, dates and quotes. Cross-reference with academic articles or reliable sources." },
      },
    ],
    related: ["ai-prezentatsiya-yaratish", "pptx-pdf-docx-farqi"],
  },
};

// Generic article for missing slugs
function getArticle(slug: string, lang: Lang3) {
  if (articles[slug]) return articles[slug];
  return null;
}

function formatDate(dateStr: string, lang: Lang3) {
  const d = new Date(dateStr);
  try { return d.toLocaleDateString(lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US", { day: "numeric", month: "long", year: "numeric" }); } catch { return dateStr; }
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLang();

  const article = getArticle(slug, lang as Lang3);

  if (!article) {
    return (
      <main style={{ background: "var(--bg)", color: "var(--text)" }}>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-5xl mb-6">📄</div>
            <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
              {lang === "uz" ? "Maqola topilmadi" : lang === "ru" ? "Статья не найдена" : "Article not found"}
            </h1>
            <p className="mb-6" style={{ color: "var(--text3)" }}>
              {lang === "uz" ? "Qidirayotgan maqolangiz mavjud emas yoki hali yozilmagan." : lang === "ru" ? "Статья, которую вы ищете, не существует или ещё не написана." : "The article you're looking for doesn't exist or hasn't been written yet."}
            </p>
            <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600">
              <ChevronLeft className="w-4 h-4" />
              {lang === "uz" ? "Blogga qaytish" : lang === "ru" ? "Вернуться в блог" : "Back to Blog"}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const relatedPosts = (article.related || []).map((r) => articles[r]).filter(Boolean);

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Article hero */}
      <section className={`relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-br ${article.gradient}`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            {lang === "uz" ? "Blog" : "Blog"}
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
              {article.tag[lang as Lang3]}
            </span>
            <span className="flex items-center gap-1.5 text-white/70 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime[lang as Lang3]}
            </span>
            <span className="text-white/60 text-xs">{formatDate(article.date, lang as Lang3)}</span>
          </div>
          <div className="text-7xl mb-6">{article.icon}</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {article.title[lang as Lang3]}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text2)" }}>
            {article.intro[lang as Lang3]}
          </p>
          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                  {section.h[lang as Lang3]}
                </h2>
                <p className="leading-relaxed" style={{ color: "var(--text2)" }}>
                  {section.p[lang as Lang3]}
                </p>
              </div>
            ))}
          </div>

          {/* Share / CTA */}
          <div className="mt-14 p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <p className="font-semibold mb-3" style={{ color: "var(--text)" }}>
              {lang === "uz" ? "O'zingiz sinab ko'ring 👇" : lang === "ru" ? "Попробуйте сами 👇" : "Try it yourself 👇"}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://sodda.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:scale-105">
                {lang === "uz" ? "SoddaAI ni Sinash" : lang === "ru" ? "Попробовать SoddaAI" : "Try SoddaAI"}
              </a>
              <a href="https://t.me/aislidebot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:scale-105" style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--bg3)" }}>
                {lang === "uz" ? "AI Slide Bot" : lang === "ru" ? "AI Slide Bot" : "AI Slide Bot"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: "var(--text)" }}>
              <BookOpen className="w-5 h-5" style={{ color: "var(--indigo)" }} />
              {lang === "uz" ? "O'xshash Maqolalar" : lang === "ru" ? "Похожие Статьи" : "Related Articles"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedPosts.map((p, i) => (
                <Link key={i} href={`/blog/${article.related[i]}`} className="group flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-0.5" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform`}>{p.icon}</div>
                  <div>
                    <p className="text-sm font-semibold line-clamp-2" style={{ color: "var(--text)" }}>{p.title[lang as Lang3]}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--text3)" }}>{p.readTime[lang as Lang3]}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--indigo)" }} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
