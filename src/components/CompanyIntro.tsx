"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { useLang } from "@/context/LangContext";

type L = "uz" | "ru" | "en";

const team = [
  { name: "Shahzod", role: { uz: "CEO", ru: "CEO", en: "CEO" }, color: "from-indigo-500 to-purple-600", initials: "Sh" },
  { name: "Ali", role: { uz: "Frontend & AI", ru: "Frontend & AI", en: "Frontend & AI" }, color: "from-blue-500 to-cyan-500", initials: "Al" },
  { name: "Rahmiddin", role: { uz: "AI & Backend", ru: "AI & Backend", en: "AI & Backend" }, color: "from-purple-500 to-pink-500", initials: "Ra" },
  { name: "Mo'tabarxon", role: { uz: "UI/UX", ru: "UI/UX", en: "UI/UX" }, color: "from-pink-500 to-rose-500", initials: "Mo" },
  { name: "Diyorbek", role: { uz: "Backend", ru: "Backend", en: "Backend" }, color: "from-cyan-500 to-blue-500", initials: "Di" },
  { name: "Behruz", role: { uz: "AI Engineer", ru: "AI Engineer", en: "AI Engineer" }, color: "from-yellow-500 to-orange-500", initials: "Be" },
  { name: "Hamroh", role: { uz: "QA", ru: "QA", en: "QA" }, color: "from-green-500 to-emerald-500", initials: "Ha" },
  { name: "Doniyor", role: { uz: "Moliya", ru: "Финансы", en: "Finance" }, color: "from-amber-500 to-yellow-500", initials: "Do" },
];

const stats = [
  {
    icon: Calendar,
    value: "2023",
    label: { uz: "Yildan beri", ru: "С года", en: "Since" },
    color: "#6366f1",
  },
  {
    icon: MapPin,
    value: "Toshkent",
    label: { uz: "O'zbekiston", ru: "Узбекистан", en: "Uzbekistan" },
    color: "#8b5cf6",
  },
  {
    icon: Users,
    value: "8",
    label: { uz: "Mutaxassis", ru: "Специалистов", en: "Specialists" },
    color: "#06b6d4",
  },
  {
    icon: Sparkles,
    value: "5",
    label: { uz: "AI Mahsulot", ru: "AI Продуктов", en: "AI Products" },
    color: "#10b981",
  },
];

const content = {
  badge: { uz: "Kompaniya haqida", ru: "О компании", en: "About company" },
  headline: {
    uz: "Biz — Glowledge",
    ru: "Мы — Glowledge",
    en: "We are Glowledge",
  },
  sub: {
    uz: "O'zbekistonning AI kontent ekotizimi",
    ru: "AI контент экосистема Узбекистана",
    en: "Uzbekistan's AI content ecosystem",
  },
  p1: {
    uz: "2023 yilda Toshkentda tug'ilgan Glowledge — o'zbek tilidagi foydalanuvchilarga dunyo standartlarida AI vositalarini taqdim etish uchun yaratilgan kompaniya.",
    ru: "Основанный в 2023 году в Ташкенте, Glowledge — компания, созданная для предоставления узбекоязычным пользователям AI инструментов мирового класса.",
    en: "Founded in 2023 in Tashkent, Glowledge is a company built to provide Uzbek-language users with world-class AI tools.",
  },
  p2: {
    uz: "Bugungacha 280,000+ foydalanuvchiga xizmat ko'rsatdik. Prezentatsiya, hujjat, insho va boshqa ko'plab kontentlarni AI yordamida soniyalar ichida yaratish mumkin.",
    ru: "До сегодняшнего дня мы обслужили 280 000+ пользователей. С помощью AI можно создавать презентации, документы, эссе и многое другое за секунды.",
    en: "To date we've served 280,000+ users. With AI you can create presentations, documents, essays and more in seconds.",
  },
  teamTitle: { uz: "8 nafar mutaxassis", ru: "8 специалистов", en: "8 specialists" },
  teamSub: { uz: "Jamoa bilan tanishing", ru: "Познакомьтесь с командой", en: "Meet the team" },
  cta: { uz: "Batafsil ma'lumot", ru: "Подробнее", en: "Learn more" },
};

export default function CompanyIntro() {
  const { lang } = useLang();
  const l = lang as L;

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* subtle bg glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.06), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Top: badge + headline ── */}
        <div className="text-center mb-14">
          <div className="section-badge mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{content.badge[l]}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            {content.headline[l]}
          </h2>
          <p className="text-lg" style={{ color: "var(--text3)" }}>
            {content.sub[l]}
          </p>
        </div>

        {/* ── Main content grid ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Left — Story */}
          <div
            className="p-8 rounded-3xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            {/* mini stat strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.value} className="text-center p-3 rounded-2xl" style={{ background: "var(--bg3)" }}>
                    <Icon className="w-4 h-4 mx-auto mb-1" style={{ color: s.color }} />
                    <div className="text-lg font-extrabold" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-xs" style={{ color: "var(--text3)" }}>{s.label[l]}</div>
                  </div>
                );
              })}
            </div>

            {/* Story text */}
            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed" style={{ color: "var(--text2)" }}>
                {content.p1[l]}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text3)" }}>
                {content.p2[l]}
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:gap-3"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
              }}
            >
              {content.cta[l]}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — Team preview */}
          <div
            className="p-8 rounded-3xl border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                  {content.teamTitle[l]}
                </h3>
                <p className="text-sm" style={{ color: "var(--text3)" }}>
                  {content.teamSub[l]}
                </p>
              </div>
              <Link
                href="/about"
                className="flex items-center gap-1 text-xs font-semibold transition-colors"
                style={{ color: "var(--indigo)" }}
              >
                {l === "uz" ? "Barchasi" : l === "ru" ? "Все" : "All"}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-3 p-3 rounded-2xl transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                  style={{ background: "var(--bg3)" }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0 shadow text-white text-sm font-bold`}
                  >
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
                      {member.name}
                    </div>
                    <div className="text-xs truncate" style={{ color: "var(--text3)" }}>
                      {member.role[l]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Online indicator */}
            <div className="mt-5 pt-4 border-t flex items-center gap-2" style={{ borderColor: "var(--border)" }}>
              <div className="flex -space-x-2">
                {team.slice(0, 5).map((m) => (
                  <div
                    key={m.name}
                    className={`w-7 h-7 rounded-full bg-gradient-to-br ${m.color} border-2 text-white text-xs flex items-center justify-center font-bold`}
                    style={{ borderColor: "var(--surface)" }}
                  >
                    {m.initials[0]}
                  </div>
                ))}
                <div
                  className="w-7 h-7 rounded-full border-2 text-xs flex items-center justify-center font-bold"
                  style={{ borderColor: "var(--surface)", background: "var(--bg3)", color: "var(--text3)" }}
                >
                  +3
                </div>
              </div>
              <span className="text-xs" style={{ color: "var(--text3)" }}>
                {l === "uz"
                  ? "Toshkentda ishlaydi"
                  : l === "ru"
                  ? "Работают в Ташкенте"
                  : "Working in Tashkent"}
              </span>
              <span className="ml-auto flex items-center gap-1 text-xs" style={{ color: "#10b981" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                {l === "uz" ? "Faol" : l === "ru" ? "Активны" : "Active"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
