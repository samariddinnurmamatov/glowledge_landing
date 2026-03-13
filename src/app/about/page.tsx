"use client";

import { useLang } from "@/context/LangContext";
import { Heart, Target, Zap, Globe, Users } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const team = [
  { name: "Shahzod", role: { uz: "Asoschi & CEO", ru: "Основатель и CEO", en: "Founder & CEO" }, bio: { uz: "Glowledgeni yaratdi va rivojlantirmoqda", ru: "Создал и развивает Glowledge", en: "Created and developing Glowledge" }, emoji: "⭐", gradient: "from-indigo-500 to-purple-600" },
  { name: "Ali", role: { uz: "Frontend & AI Engineer", ru: "Frontend & AI Engineer", en: "Frontend & AI Engineer" }, bio: { uz: "Foydalanuvchi interfeysi va AI integratsiyasi", ru: "Пользовательский интерфейс и AI интеграция", en: "User interface and AI integration" }, emoji: "🚀", gradient: "from-blue-500 to-cyan-500" },
  { name: "Rahmiddin", role: { uz: "AI & Backend Engineer", ru: "AI & Backend Engineer", en: "AI & Backend Engineer" }, bio: { uz: "AI modellar va backend arxitekturasi", ru: "AI модели и backend архитектура", en: "AI models and backend architecture" }, emoji: "🧠", gradient: "from-purple-500 to-pink-500" },
  { name: "Mo'tabarxon", role: { uz: "UI/UX Dizayner", ru: "UI/UX Дизайнер", en: "UI/UX Designer" }, bio: { uz: "Foydalanuvchi tajribasi va vizual dizayn", ru: "Пользовательский опыт и визуальный дизайн", en: "User experience and visual design" }, emoji: "🌐", gradient: "from-pink-500 to-rose-500" },
  { name: "Diyorbek", role: { uz: "Backend Developer", ru: "Backend Developer", en: "Backend Developer" }, bio: { uz: "Server va ma'lumotlar bazasi arxitekturasi", ru: "Серверная и база данных архитектура", en: "Server and database architecture" }, emoji: "💎", gradient: "from-cyan-500 to-blue-500" },
  { name: "Behruz", role: { uz: "AI Engineer", ru: "AI Engineer", en: "AI Engineer" }, bio: { uz: "AI model optimallashtirish va tayyorlash", ru: "Оптимизация и подготовка AI моделей", en: "AI model optimization and training" }, emoji: "⚡", gradient: "from-yellow-500 to-orange-500" },
  { name: "Hamroh", role: { uz: "Evaluator", ru: "Оценщик", en: "Evaluator" }, bio: { uz: "Sifat nazorati va mahsulot baholash", ru: "Контроль качества и оценка продукта", en: "Quality control and product evaluation" }, emoji: "🖨️", gradient: "from-green-500 to-emerald-500" },
  { name: "Doniyor", role: { uz: "Moliya", ru: "Финансы", en: "Finance" }, bio: { uz: "Moliyaviy strategiya va operatsiyalar", ru: "Финансовая стратегия и операции", en: "Financial strategy and operations" }, emoji: "💰", gradient: "from-amber-500 to-yellow-500" },
];

const values = [
  { icon: Target, label: { uz: "Maqsadga Yo'nalish", ru: "Целеустремлённость", en: "Goal-Oriented" }, desc: { uz: "Har bir mahsulotimiz aniq muammoni hal qiladi.", ru: "Каждый наш продукт решает конкретную проблему.", en: "Every product we build solves a specific problem." }, color: "from-indigo-500 to-purple-600" },
  { icon: Zap, label: { uz: "Tezlik va Sifat", ru: "Скорость и Качество", en: "Speed & Quality" }, desc: { uz: "Tez, ishonchli va professional natija har doim.", ru: "Быстрый, надёжный и профессиональный результат всегда.", en: "Fast, reliable and professional results every time." }, color: "from-yellow-500 to-orange-500" },
  { icon: Globe, label: { uz: "Mahalliy, Global Sifat", ru: "Местное, мировое качество", en: "Local Roots, Global Quality" }, desc: { uz: "O'zbek tilida, dunyo standartlarida yaratilgan.", ru: "На узбекском языке, на мировом уровне качества.", en: "In Uzbek language, to world-class quality standards." }, color: "from-green-500 to-emerald-500" },
  { icon: Heart, label: { uz: "Foydalanuvchiga E'tibor", ru: "Забота о пользователях", en: "User-First" }, desc: { uz: "Foydalanuvchi tajribasi va qulaylik birinchi o'rinda.", ru: "Пользовательский опыт и удобство на первом месте.", en: "User experience and convenience come first." }, color: "from-pink-500 to-rose-500" },
];

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute pointer-events-none" style={{ top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="section-badge mb-5">
            <Users className="w-4 h-4" />
            <span>{lang === "uz" ? "Haqimizda" : lang === "ru" ? "О нас" : "About"}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "O\'zbekistonda Tug\'ilgan, Dunyoga Yo\'nalgan" : lang === "ru" ? "Рождены в Узбекистане, Нацелены на Мир" : "Born in Uzbekistan, Built for the World"}
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "var(--text3)" }}>
            {lang === "uz"
              ? "Glowledge — 8 ta ishtiyoqli dasturchi va dizaynerlar jamoasi tomonidan yaratilgan O'zbekistoning eng yirik AI kontent ekotizimi."
              : lang === "ru"
              ? "Glowledge — крупнейшая AI контент экосистема Узбекистана, созданная командой из 8 увлечённых разработчиков и дизайнеров."
              : "Glowledge — Uzbekistan's largest AI content ecosystem, built by a team of 8 passionate developers and designers."}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6" style={{ color: "var(--text)" }}>
                {lang === "uz" ? "Bizning Hikoyamiz" : lang === "ru" ? "Наша История" : "Our Story"}
              </h2>
              <div className="space-y-4" style={{ color: "var(--text3)" }}>
                <p>
                  {lang === "uz"
                    ? "2023 yilda O'zbekistonda AI xizmatlarining yetishmasligi, ayniqsa o'zbek tiliga bo'lgan qo'llab-quvvatlashning zaif ekanligi aniq edi. Biz bu bo'shliqni to'ldirish uchun yig'ildik."
                    : lang === "ru"
                    ? "В 2023 году в Узбекистане была очевидна нехватка AI сервисов, особенно слабая поддержка узбекского языка. Мы собрались вместе, чтобы заполнить этот пробел."
                    : "In 2023, the lack of AI services in Uzbekistan was evident, especially weak support for the Uzbek language. We came together to fill this gap."}
                </p>
                <p>
                  {lang === "uz"
                    ? "Bugun Glowledge 280,000+ foydalanuvchi bilan O'zbekistoning #1 AI ekotizimiga aylandi. SoddaAI, AI Slide Bot, Slayd TOP, Presenton va AI Docx Editor — har biri o'z auditoriyasiga xizmat qiladi."
                    : lang === "ru"
                    ? "Сегодня Glowledge с 280 000+ пользователями стала AI экосистемой №1 в Узбекистане. SoddaAI, AI Slide Bot, Slayd TOP, Presenton и AI Docx Editor — каждый служит своей аудитории."
                    : "Today Glowledge with 280,000+ users has become Uzbekistan's #1 AI ecosystem. SoddaAI, AI Slide Bot, Slayd TOP, Presenton and AI Docx Editor — each serving its audience."}
                </p>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "280K+", label: { uz: "Foydalanuvchi", ru: "Пользователей", en: "Users" }, color: "#6366f1" },
                { num: "183K+", label: { uz: "Obunachi", ru: "Подписчиков", en: "Subscribers" }, color: "#8b5cf6" },
                { num: "5", label: { uz: "AI Mahsulot", ru: "AI Продуктов", en: "AI Products" }, color: "#06b6d4" },
                { num: "8", label: { uz: "Jamoa a'zosi", ru: "Членов команды", en: "Team Members" }, color: "#10b981" },
              ].map((s) => (
                <div key={s.num} className="p-5 rounded-2xl border text-center" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.num}</div>
                  <div className="text-sm" style={{ color: "var(--text3)" }}>{s.label[lang as Lang3]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Missiyamiz" : lang === "ru" ? "Наша Миссия" : "Our Mission"}
          </h2>
          <blockquote className="text-xl font-medium leading-relaxed mb-6 italic" style={{ color: "var(--text2)" }}>
            &ldquo;{lang === "uz"
              ? "O'zbek tilidagi barcha foydalanuvchiga dunyo standartlarida AI vositalarini qulay va arzon narxda taqdim etish."
              : lang === "ru"
              ? "Предоставить всем узбекоязычным пользователям AI инструменты мирового класса — удобно и по доступным ценам."
              : "Provide all Uzbek-language users with world-class AI tools — conveniently and at affordable prices."}&rdquo;
          </blockquote>
          <p style={{ color: "var(--text3)" }}>
            {lang === "uz"
              ? "Biz faqat texnologiya yaratmayapmiz — O'zbekistonda AI savodxonligini oshiramiz va mahalliy foydalanuvchilarga imkon beramiz."
              : lang === "ru"
              ? "Мы не просто создаём технологии — мы повышаем AI грамотность в Узбекистане и даём возможности местным пользователям."
              : "We're not just building technology — we're increasing AI literacy in Uzbekistan and empowering local users."}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Qadriyatlarimiz" : lang === "ru" ? "Наши Ценности" : "Our Values"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.label.uz} className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>{v.label[lang as Lang3]}</h3>
                  <p className="text-sm" style={{ color: "var(--text3)" }}>{v.desc[lang as Lang3]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-badge mb-4">
              <Users className="w-4 h-4" />
              <span>{lang === "uz" ? "Jamoa" : lang === "ru" ? "Команда" : "Team"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
              {lang === "uz" ? "Glowledge Jamoasi" : lang === "ru" ? "Команда Glowledge" : "Glowledge Team"}
            </h2>
            <p className="text-lg" style={{ color: "var(--text3)" }}>
              {lang === "uz" ? "8 ta iste'dodli mutaxassis, bir buyuk maqsad" : lang === "ru" ? "8 талантливых специалистов, одна великая цель" : "8 talented specialists, one great mission"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {team.map((m) => (
              <div
                key={m.name}
                className="group p-6 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(99,102,241,0.10)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-105 transition-transform`}>
                    {m.emoji}
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 bg-green-400" style={{ borderColor: "var(--surface)" }} />
                </div>
                <h3 className="font-bold text-base mb-0.5" style={{ color: "var(--text)" }}>{m.name}</h3>
                <p className="text-xs font-medium mb-2" style={{ color: "var(--indigo)" }}>{m.role[lang as Lang3]}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text3)" }}>{m.bio[lang as Lang3]}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-sm" style={{ color: "var(--text3)" }}>
            🇺🇿 {lang === "uz" ? "Toshkent, O'zbekiston — dunyo uchun yaratmoqdamiz" : lang === "ru" ? "Ташкент, Узбекистан — создаём для мира" : "Tashkent, Uzbekistan — building for the world"}
          </p>
        </div>
      </section>
    </main>
  );
}
