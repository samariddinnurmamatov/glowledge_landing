"use client";

import { useLang } from "@/context/LangContext";

const teamMembers = [
  {
    name: "Shahzod Alimardanov",
    role: { uz: "Asoschisi & CEO", ru: "Основатель & CEO", en: "Founder & CEO" },
    emoji: "⭐",
    gradient: "from-yellow-400 to-orange-500",
    bio: {
      uz: "Glowledge'ning asosi va AI mahsulotlar strategiyasi",
      ru: "Основание Glowledge и стратегия AI продуктов",
      en: "Glowledge foundation and AI products strategy",
    },
  },
  {
    name: "Samariddin Nurmamatov",
    role: { uz: "Frontend & AI Engineer", ru: "Frontend & AI Engineer", en: "Frontend & AI Engineer" },
    emoji: "🚀",
    gradient: "from-blue-500 to-cyan-500",
    bio: {
      uz: "Foydalanuvchi interfeyslari va web tajribasi",
      ru: "Пользовательские интерфейсы и web опыт",
      en: "User interfaces and web experience",
    },
  },
  {
    name: "Rahmiddin Dehqonov",
    role: { uz: "AI Engineer", ru: "AI Engineer", en: "AI Engineer" },
    emoji: "🧠",
    gradient: "from-purple-500 to-pink-500",
    bio: {
      uz: "Sun'iy intellekt modellari va backend arxitektura",
      ru: "AI модели и backend архитектура",
      en: "AI models and backend architecture",
    },
  },
  {
    name: "Mo\u02BBtabarxon Turdaliyeva",
    role: { uz: "UI/UX Designer", ru: "UI/UX Дизайнер", en: "UI/UX Designer" },
    emoji: "🌐",
    gradient: "from-green-500 to-teal-500",
    bio: {
      uz: "Mahsulot dizayni va foydalanuvchi tajribasi",
      ru: "Дизайн продукта и пользовательский опыт",
      en: "Product design and user experience",
    },
  },
  {
    name: "Diyorbek Xazratqulov",
    role: { uz: "Backend Developer", ru: "Backend Developer", en: "Backend Developer" },
    emoji: "💎",
    gradient: "from-cyan-500 to-blue-600",
    bio: {
      uz: "Mahsulot rivojlantirish va jamoa rahbariyati",
      ru: "Развитие продукта и руководство командой",
      en: "Product development and team leadership",
    },
  },
  {
    name: "Bexruz Maxmudov",
    role: { uz: "AI Engineer", ru: "AI Engineer", en: "AI Engineer" },
    emoji: "⚡",
    gradient: "from-orange-500 to-red-500",
    bio: {
      uz: "AI ilovalari va machine learning muhandisligi",
      ru: "AI приложения и machine learning",
      en: "AI applications and machine learning engineering",
    },
  },
  {
    name: "Hamroh Print",
    role: { uz: "Evaluator", ru: "Оценщик", en: "Evaluator" },
    emoji: "🖨️",
    gradient: "from-violet-500 to-purple-600",
    bio: {
      uz: "Mahsulot sifati va foydalanuvchi testlash",
      ru: "Качество продукта и тестирование пользователей",
      en: "Product quality and user testing",
    },
  },
  {
    name: "Doniyorbek",
    role: { uz: "Finance", ru: "Финансы", en: "Finance" },
    emoji: "💰",
    gradient: "from-emerald-500 to-green-600",
    bio: {
      uz: "Moliyaviy rejalashtirish va biznes tahlili",
      ru: "Финансовое планирование и бизнес-анализ",
      en: "Financial planning and business analysis",
    },
  },
];

export default function Team() {
  const { lang, t } = useLang();

  return (
    <section id="team" className="py-24 px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
            style={{ background: "rgba(249,115,22,0.08)", borderColor: "rgba(249,115,22,0.2)", color: "#f97316" }}
          >
            <span className="text-sm">👥</span>
            <span className="text-sm font-semibold">{t.team.title}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {t.team.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text3)" }}>
            {t.team.subtitle}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 40px rgba(99,102,241,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Avatar */}
              <div className="relative mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {member.emoji}
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 flex items-center justify-center"
                  style={{ borderColor: "var(--bg)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>

              <h3 className="text-base font-bold mb-0.5" style={{ color: "var(--text)" }}>
                {member.name}
              </h3>
              <p className={`text-xs font-semibold mb-2 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                {member.role[lang]}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text3)" }}>
                {member.bio[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Team note */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 border"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="flex -space-x-2">
              {["⭐", "🚀", "🧠", "🌐"].map((em, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm border-2"
                  style={{ borderColor: "var(--bg)" }}
                >
                  {em}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "var(--text2)" }}>
              <span className="font-bold" style={{ color: "var(--text)" }}>8 ta</span> iste&apos;dodli mutaxassis bir buyuk maqsad yo&apos;lida ishlayapti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
