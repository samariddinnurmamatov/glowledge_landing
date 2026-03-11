"use client";

import { useLang } from "@/context/LangContext";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sardor T.",
    role: { uz: "Talaba, Toshkent DU", ru: "Студент, ТашГУ", en: "Student, Tashkent SU" },
    text: {
      uz: "Kurs ishimni 10 daqiqada tayyorladim! Avval 2 kun sarflardim. SoddaAI hayotimni o'zgartirdi, haqiqatan ham ajoyib platforma.",
      ru: "Подготовил курсовую за 10 минут! Раньше тратил 2 дня. SoddaAI изменил мою жизнь, действительно потрясающая платформа.",
      en: "Prepared my coursework in 10 minutes! Before I used to spend 2 days. SoddaAI changed my life, truly amazing platform.",
    },
    rating: 5,
    product: "SoddaAI",
    color: "#6366f1",
  },
  {
    name: "Nilufar M.",
    role: { uz: "O'qituvchi, Samarqand", ru: "Учитель, Самарканд", en: "Teacher, Samarkand" },
    text: {
      uz: "Dars rejalarini va prezentatsiyalarni AI bilan yaratish juda qulay. Har kuni ishlataman, vaqtim ko'paydi.",
      ru: "Создавать планы уроков и презентации с ИИ очень удобно. Использую каждый день, стало больше времени.",
      en: "Creating lesson plans and presentations with AI is very convenient. I use it every day, I have more time now.",
    },
    rating: 5,
    product: "AI Slide Bot",
    color: "#8b5cf6",
  },
  {
    name: "Bobur K.",
    role: { uz: "Tadbirkor, Buxoro", ru: "Предприниматель, Бухара", en: "Entrepreneur, Bukhara" },
    text: {
      uz: "Biznes taqdimotlarimni 3,000 so'mga 30 ta professional slayd bilan yarataman. Bu narxda bunday sifat boshqa hech qaerda yo'q!",
      ru: "Создаю бизнес-презентации за 3,000 сум с 30 профессиональными слайдами. Такого качества за такую цену нигде больше нет!",
      en: "I create business presentations for 3,000 UZS with 30 professional slides. Such quality at this price is nowhere else!",
    },
    rating: 5,
    product: "AI Slide Bot",
    color: "#10b981",
  },
  {
    name: "Zulfiya R.",
    role: { uz: "Magistrant, TDTU", ru: "Магистрант, ТАТУ", en: "Master's student, TATU" },
    text: {
      uz: "Referat yozish endi stressli emas. Glowledge bilan 5 daqiqada tayyor referat. Texnik fanlar uchun ham mukammal!",
      ru: "Написание реферата больше не стрессовое. С Glowledge готовый реферат за 5 минут. Идеально и для технических наук!",
      en: "Writing research papers is no longer stressful. With Glowledge, a ready paper in 5 minutes. Perfect for technical subjects too!",
    },
    rating: 5,
    product: "SoddaAI",
    color: "#f59e0b",
  },
  {
    name: "Akbar N.",
    role: { uz: "Dasturchi, Namangan", ru: "Программист, Наманган", en: "Developer, Namangan" },
    text: {
      uz: "Presenton open-source ekanligi juda yaxshi! O'z serverimda o'rnatdim, Docker bilan juda oson bo'ldi.",
      ru: "Отлично, что Presenton open-source! Установил на свой сервер, с Docker всё прошло очень легко.",
      en: "Great that Presenton is open-source! Installed on my own server, it was very easy with Docker.",
    },
    rating: 5,
    product: "Presenton",
    color: "#06b6d4",
  },
  {
    name: "Dilnoza S.",
    role: { uz: "HR Manager, Toshkent", ru: "HR Менеджер, Ташкент", en: "HR Manager, Tashkent" },
    text: {
      uz: "Xodimlar uchun rezyume va taqdimotlar yaratishda AI Slide Bot'dan foydalanamiz. Jamoamizning sevimli vositasi!",
      ru: "Используем AI Slide Bot для создания резюме и презентаций сотрудников. Любимый инструмент нашей команды!",
      en: "We use AI Slide Bot to create resumes and presentations for employees. Our team's favorite tool!",
    },
    rating: 5,
    product: "AI Slide Bot",
    color: "#8b5cf6",
  },
];

export default function Testimonials() {
  const { lang, t } = useLang();

  return (
    <section
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "var(--bg3)" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1), transparent)", filter: "blur(60px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
            style={{ background: "rgba(234,179,8,0.08)", borderColor: "rgba(234,179,8,0.2)", color: "#eab308" }}
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">{t.testimonials.title}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {t.testimonials.title}
          </h2>
          <p className="text-lg" style={{ color: "var(--text3)" }}>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(99,102,241,0.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4" style={{ opacity: 0.08 }}>
                <Quote className="w-8 h-8" style={{ color: "var(--text)" }} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: "var(--text2)" }}>
                &ldquo;{review.text[lang]}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0"
                  style={{ background: review.color }}
                >
                  {review.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
                    {review.name}
                  </p>
                  <p className="text-xs truncate" style={{ color: "var(--text3)" }}>
                    {review.role[lang]}
                  </p>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full text-white flex-shrink-0"
                  style={{ background: review.color }}
                >
                  {review.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate stats */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-3xl font-extrabold" style={{ color: "var(--text)" }}>4.9</p>
            <p className="text-sm" style={{ color: "var(--text3)" }}>O&apos;rtacha baho</p>
          </div>
          <div className="hidden sm:block w-px h-16" style={{ background: "var(--border)" }} />
          <div className="text-center">
            <p className="text-3xl font-extrabold" style={{ color: "var(--text)" }}>280K+</p>
            <p className="text-sm" style={{ color: "var(--text3)" }}>Faol foydalanuvchi</p>
          </div>
          <div className="hidden sm:block w-px h-16" style={{ background: "var(--border)" }} />
          <div className="text-center">
            <p className="text-3xl font-extrabold" style={{ color: "var(--text)" }}>99%</p>
            <p className="text-sm" style={{ color: "var(--text3)" }}>Mamnunlik darajasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
