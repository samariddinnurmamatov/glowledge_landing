"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { GraduationCap, BookOpen, Briefcase, Code2, ArrowRight } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const audiences = [
  {
    id: "students",
    icon: GraduationCap,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.10)",
    border: "rgba(99,102,241,0.20)",
    gradient: "from-indigo-500 to-purple-600",
    title: { uz: "Talabalar", ru: "Студенты", en: "Students" },
    desc: {
      uz: "Kurs ishi, insho, referat va prezentatsiyalarni daqiqalar ichida tayyor qiling. O'qishga ko'proq vaqt qolsin.",
      ru: "Готовьте курсовые, эссе, рефераты и презентации за минуты. Больше времени на учёбу.",
      en: "Prepare coursework, essays, abstracts and presentations in minutes. More time for actual studying.",
    },
    products: ["SoddaAI", "AI Slide Bot"],
    href: "/solutions#students",
  },
  {
    id: "teachers",
    icon: BookOpen,
    color: "#10b981",
    bg: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.20)",
    gradient: "from-green-500 to-emerald-600",
    title: { uz: "O'qituvchilar", ru: "Учителя", en: "Teachers" },
    desc: {
      uz: "Dars materiallari, ma'ruza slaydlari va testlarni AI bilan tez yarating. Darsga tayyorlanishni tezlashtiring.",
      ru: "Быстро создавайте учебные материалы, слайды лекций и тесты с ИИ. Ускорьте подготовку к урокам.",
      en: "Quickly create teaching materials, lecture slides and tests with AI. Speed up your lesson preparation.",
    },
    products: ["SoddaAI", "AI Slide Bot"],
    href: "/solutions#teachers",
  },
  {
    id: "business",
    icon: Briefcase,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.20)",
    gradient: "from-orange-500 to-amber-500",
    title: { uz: "Tadbirkorlar", ru: "Предприниматели", en: "Entrepreneurs" },
    desc: {
      uz: "Pitch deck, biznes-reja, hisobot va marketing kontentini AI bilan professional tarzda tayyorlang.",
      ru: "Профессионально готовьте pitch deck, бизнес-план, отчёты и маркетинговый контент с ИИ.",
      en: "Professionally prepare pitch decks, business plans, reports and marketing content with AI.",
    },
    products: ["SoddaAI", "AI Docx Editor"],
    href: "/solutions#business",
  },
  {
    id: "developers",
    icon: Code2,
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.10)",
    border: "rgba(6,182,212,0.20)",
    gradient: "from-cyan-500 to-blue-600",
    title: { uz: "Dasturchilar", ru: "Разработчики", en: "Developers" },
    desc: {
      uz: "SlaydPro'ni Docker bilan o'z serveringizda ishlating. API integratsiya, self-hosted, cheksiz foydalanish.",
      ru: "Запускайте SlaydPro с Docker на своём сервере. API интеграция, self-hosted, безлимитное использование.",
      en: "Run SlaydPro with Docker on your own server. API integration, self-hosted, unlimited usage.",
    },
    products: ["SlaydPro", "API"],
    href: "/solutions#developers",
  },
];

export default function Audiences() {
  const { lang } = useLang();

  const heading = { uz: "Kim Uchun Yaratilgan?", ru: "Для Кого?", en: "Built for Who?" }[lang as Lang3];
  const sub = {
    uz: "Talabadan dasturchigacha — har bir foydalanuvchi uchun to'g'ri vosita",
    ru: "От студента до разработчика — правильный инструмент для каждого",
    en: "From student to developer — the right tool for everyone",
  }[lang as Lang3];
  const viewAll = { uz: "Barcha yechimlarni ko'rish", ru: "Смотреть все решения", en: "View all solutions" }[lang as Lang3];

  return (
    <section id="audiences" className="py-24 px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === "uz" ? "Yechimlar" : lang === "ru" ? "Решения" : "Solutions"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>{heading}</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text3)" }}>{sub}</p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <Link
                key={a.id}
                href={a.href}
                className="group flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = a.border;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 36px ${a.bg}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${a.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>
                  {a.title[lang as Lang3]}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--text3)" }}>
                  {a.desc[lang as Lang3]}
                </p>

                {/* Product tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {a.products.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-medium px-2 py-0.5 rounded-md"
                      style={{ background: a.bg, color: a.color }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: a.color }}>
                  <span>{lang === "uz" ? "Ko'proq" : lang === "ru" ? "Подробнее" : "Learn more"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all */}
        <div className="text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: "var(--indigo)" }}
          >
            {viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
