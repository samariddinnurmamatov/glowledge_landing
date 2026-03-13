"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { GraduationCap, BookOpen, Briefcase, Users, Code2, ArrowRight, ExternalLink, Check } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const audiences = [
  {
    id: "students",
    icon: GraduationCap,
    gradient: "from-indigo-500 to-purple-600",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.12)",
    title: { uz: "Talabalar", ru: "Студенты", en: "Students" },
    problem: {
      uz: "Kurs ishi, insho, referat yozish yoki prezentatsiya tayyorlash ko'p vaqt oladi. Imtihonlar, dars va boshqa majburiyatlar orasida vaqt topish qiyin.",
      ru: "Написание курсовых, эссе, рефератов или подготовка презентаций занимает много времени. Трудно найти время между экзаменами, занятиями и другими обязанностями.",
      en: "Writing coursework, essays, abstracts or preparing presentations takes a lot of time. It's hard to find time between exams, classes and other responsibilities.",
    },
    solution: {
      uz: "SoddaAI bilan kurs ishingizni daqiqalarda tayyorlang. AI Slide Bot bilan Telegram ichida 30 soniyada prezentatsiya yarating. Siz faqat mavzuni kiritasiz.",
      ru: "Готовьте курсовую за минуты с SoddaAI. Создавайте презентации за 30 секунд в Telegram с AI Slide Bot. Вам нужно только ввести тему.",
      en: "Prepare your coursework in minutes with SoddaAI. Create presentations in 30 seconds in Telegram with AI Slide Bot. You just enter the topic.",
    },
    workflow: {
      uz: ["Mavzu yoki savol kiritasiz", "AI kontent tuzilmasini yaratadi", "Matnni tekshirasiz va tahrirlaysiz", "PPTX / PDF / DOCX ni yuklab olasiz"],
      ru: ["Вводите тему или вопрос", "ИИ создаёт структуру контента", "Проверяете и редактируете текст", "Скачиваете PPTX / PDF / DOCX"],
      en: ["Enter your topic or question", "AI creates the content structure", "Review and edit the text", "Download PPTX / PDF / DOCX"],
    },
    products: [
      { name: "SoddaAI", desc: { uz: "Kurs ishi, insho, referat", ru: "Курсовые, эссе, рефераты", en: "Coursework, essays, abstracts" }, href: "https://sodda.ai", external: true },
      { name: "AI Slide Bot", desc: { uz: "Prezentatsiya Telegramda", ru: "Презентации в Telegram", en: "Presentations in Telegram" }, href: "https://t.me/aislidebot", external: true },
    ],
  },
  {
    id: "teachers",
    icon: BookOpen,
    gradient: "from-green-500 to-emerald-600",
    color: "#10b981",
    glow: "rgba(16,185,129,0.12)",
    title: { uz: "O'qituvchilar", ru: "Учителя", en: "Teachers" },
    problem: {
      uz: "Har dars uchun slayd, test, vazifa va material tayyorlash juda ko'p vaqt oladi. Zamonaviy vizual kontentga ehtiyoj katta, ammo ko'p o'qituvchilar dizayn bilmaydi.",
      ru: "Подготовка слайдов, тестов, заданий и материалов для каждого урока занимает очень много времени. Есть большая потребность в современном визуальном контенте, но многие учителя не умеют дизайнить.",
      en: "Preparing slides, tests, assignments and materials for each lesson takes a lot of time. There's a great need for modern visual content, but many teachers don't know design.",
    },
    solution: {
      uz: "SoddaAI bilan dars slaydlaringizni sekundlarda yarating. Professional dizayn shablonlari bilan ishlaydigan prezentatsiyalarni AI tayyorlaydi.",
      ru: "Создавайте учебные слайды за секунды с SoddaAI. AI готовит презентации с профессиональными дизайн шаблонами.",
      en: "Create lesson slides in seconds with SoddaAI. AI prepares presentations with professional design templates.",
    },
    workflow: {
      uz: ["Dars mavzusini kiritasiz", "AI slayd tuzilmasini yaratadi", "Shablon va dizaynni tanlaysiz", "Darhol foydalanishga tayyor"],
      ru: ["Вводите тему урока", "ИИ создаёт структуру слайдов", "Выбираете шаблон и дизайн", "Сразу готово к использованию"],
      en: ["Enter the lesson topic", "AI creates the slide structure", "Choose template and design", "Ready to use immediately"],
    },
    products: [
      { name: "SoddaAI", desc: { uz: "Dars slaydlari va materiallar", ru: "Учебные слайды и материалы", en: "Lesson slides and materials" }, href: "https://sodda.ai", external: true },
      { name: "AI Slide Bot", desc: { uz: "Tez tayyorlash uchun", ru: "Для быстрой подготовки", en: "For quick preparation" }, href: "https://t.me/aislidebot", external: true },
    ],
  },
  {
    id: "business",
    icon: Briefcase,
    gradient: "from-orange-500 to-amber-500",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
    title: { uz: "Tadbirkorlar", ru: "Предприниматели", en: "Entrepreneurs" },
    problem: {
      uz: "Investorlar uchun pitch deck, mijozlar uchun taqdimot, yillik hisobot — bularning barchasi professional ko'rinishga ega bo'lishi kerak va tez tayyorlangan bo'lishi lozim.",
      ru: "Pitch deck для инвесторов, презентация для клиентов, годовой отчёт — всё это должно выглядеть профессионально и быть подготовлено быстро.",
      en: "Pitch deck for investors, presentation for clients, annual report — all of these need to look professional and be prepared quickly.",
    },
    solution: {
      uz: "SoddaAI bilan professional biznes taqdimotlarini daqiqalarda yarating. AI Docx Editor bilan hujjatlaringizni yaxshilang. Hamkor bilan uchrashuvga doim tayyor bo'ling.",
      ru: "Создавайте профессиональные бизнес-презентации за минуты с SoddaAI. Улучшайте документы с AI Docx Editor. Всегда будьте готовы к встрече с партнёром.",
      en: "Create professional business presentations in minutes with SoddaAI. Improve your documents with AI Docx Editor. Always be ready for a partner meeting.",
    },
    workflow: {
      uz: ["Biznes mavzu yoki maqsadni kiritasiz", "AI pitch deck strukturasini yaratadi", "Brend ranglarini moslashtarasiz", "Investor yoki mijozga taqdim etasiz"],
      ru: ["Вводите бизнес-тему или цель", "ИИ создаёт структуру pitch deck", "Настраиваете цвета бренда", "Презентуете инвестору или клиенту"],
      en: ["Enter business topic or goal", "AI creates pitch deck structure", "Customize brand colors", "Present to investor or client"],
    },
    products: [
      { name: "SoddaAI", desc: { uz: "Pitch deck, biznes taqdimot", ru: "Pitch deck, бизнес-презентация", en: "Pitch deck, business presentation" }, href: "https://sodda.ai", external: true },
      { name: "AI Docx Editor", desc: { uz: "Hujjat yaxshilash", ru: "Улучшение документов", en: "Document improvement" }, href: "/products/ai-docx-editor", external: false },
    ],
  },
  {
    id: "teams",
    icon: Users,
    gradient: "from-purple-500 to-violet-600",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.12)",
    title: { uz: "Jamoalar", ru: "Команды", en: "Teams" },
    problem: {
      uz: "Katta jamoalarda kontent yaratish jarayoni murakkab: standartlashtirish, brend qo'llanmaga moslik, turli foydalanuvchilar uchun ruxsatlar.",
      ru: "В больших командах процесс создания контента сложен: стандартизация, соответствие бренд-гайдлайну, права доступа для разных пользователей.",
      en: "In large teams, content creation is complex: standardization, brand guideline compliance, access permissions for different users.",
    },
    solution: {
      uz: "Enterprise rejasida maxsus shablonlar, brend sozlash va API integratsiya bilan butun jamoangizga kontent yaratishni soddalashtiring.",
      ru: "С Enterprise планом упростите создание контента для всей команды с кастомными шаблонами, настройкой бренда и API интеграцией.",
      en: "With the Enterprise plan, simplify content creation for your whole team with custom templates, brand customization and API integration.",
    },
    workflow: {
      uz: ["Enterprise rejasini yoqasiz", "Brend shablonlarini sozlaysiz", "Jamoa a'zolariga ruxsat berasiz", "API orqali mavjud tizimlaringizga ulaysiz"],
      ru: ["Активируете Enterprise план", "Настраиваете шаблоны бренда", "Назначаете права команде", "Подключаете к системам через API"],
      en: ["Activate the Enterprise plan", "Set up brand templates", "Assign permissions to team", "Connect to your systems via API"],
    },
    products: [
      { name: "SoddaAI Enterprise", desc: { uz: "Jamoa uchun maxsus", ru: "Индивидуально для команды", en: "Custom for teams" }, href: "/contact", external: false },
      { name: "Presenton", desc: { uz: "O'z serveringizda", ru: "На своём сервере", en: "On your own server" }, href: "/products/presenton", external: false },
    ],
  },
  {
    id: "developers",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-600",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.12)",
    title: { uz: "Dasturchilar", ru: "Разработчики", en: "Developers" },
    problem: {
      uz: "Tashkilotlar o'z AI prezentatsiya generatorini istamoqda, lekin noldan qurish juda murakkab va qimmat. Uchinchi taraf xizmatlariga bog'liqlik ham muammo.",
      ru: "Организации хотят собственный AI генератор презентаций, но строить с нуля очень сложно и дорого. Зависимость от сторонних сервисов тоже проблема.",
      en: "Organizations want their own AI presentation generator, but building from scratch is very complex and expensive. Dependency on third-party services is also a problem.",
    },
    solution: {
      uz: "Presenton — open-source AI prezentatsiya generatori. Docker bilan bir buyruqda o'rnating. REST API orqali o'z tizimingizga ulang. Kodga to'liq kirish.",
      ru: "Presenton — open-source AI генератор презентаций. Установите одной командой через Docker. Подключите к своей системе через REST API. Полный доступ к коду.",
      en: "Presenton — open-source AI presentation generator. Install with one Docker command. Connect to your system via REST API. Full code access.",
    },
    workflow: {
      uz: ["GitHub dan yuklab olasiz", "Docker compose bilan ishga tushirasiz", "API kalitlarini sozlaysiz", "REST API orqali integratsiya qilasiz"],
      ru: ["Скачиваете с GitHub", "Запускаете через Docker compose", "Настраиваете API ключи", "Интегрируете через REST API"],
      en: ["Download from GitHub", "Start via Docker compose", "Configure API keys", "Integrate via REST API"],
    },
    products: [
      { name: "Presenton", desc: { uz: "Open-source, Docker, API", ru: "Open-source, Docker, API", en: "Open-source, Docker, API" }, href: "/products/presenton", external: false },
      { name: "Enterprise API", desc: { uz: "Maxsus API integratsiya", ru: "Кастомная API интеграция", en: "Custom API integration" }, href: "/contact", external: false },
    ],
  },
];

export default function SolutionsPage() {
  const { lang } = useLang();

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="section-badge mb-5">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === "uz" ? "Yechimlar" : lang === "ru" ? "Решения" : "Solutions"}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Har Bir Foydalanuvchi Uchun" : lang === "ru" ? "Для Каждого Пользователя" : "For Every User"}
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "var(--text3)" }}>
            {lang === "uz"
              ? "Talabadan dasturchiga, o'qituvchidan tadbirkorga — Glowledge har bir vaziyatda ishlaydi"
              : lang === "ru"
              ? "От студента до разработчика, от учителя до предпринимателя — Glowledge работает в каждой ситуации"
              : "From student to developer, from teacher to entrepreneur — Glowledge works in every situation"}
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <div className="sticky top-16 z-40 py-3 px-4 sm:px-6 border-b overflow-x-auto" style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
        <div className="max-w-4xl mx-auto flex items-center gap-2 w-max sm:w-auto">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border transition-colors hover:border-indigo-400/50"
                style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text2)" }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: a.color }} />
                {a.title[lang as Lang3]}
              </a>
            );
          })}
        </div>
      </div>

      {/* Audience sections */}
      {audiences.map((a, idx) => {
        const Icon = a.icon;
        const isEven = idx % 2 === 0;
        return (
          <section
            key={a.id}
            id={a.id}
            className="py-24 px-4 sm:px-6"
            style={{ background: isEven ? "var(--bg)" : "var(--bg2)" }}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-14 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
                {/* Left */}
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-bold mb-6`} style={{ background: a.glow, color: a.color }}>
                    <Icon className="w-4 h-4" />
                    {a.title[lang as Lang3]}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text3)" }}>
                      {lang === "uz" ? "Muammo" : lang === "ru" ? "Проблема" : "The Problem"}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "var(--text2)" }}>{a.problem[lang as Lang3]}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--text3)" }}>
                      {lang === "uz" ? "Yechim" : lang === "ru" ? "Решение" : "The Solution"}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "var(--text2)" }}>{a.solution[lang as Lang3]}</p>
                  </div>

                  {/* Products */}
                  <div className="flex flex-wrap gap-3">
                    {a.products.map((p) => {
                      const inner = (
                        <div className="flex flex-col px-4 py-3 rounded-xl border text-sm transition-all hover:scale-105" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                          <div className="flex items-center gap-1.5 font-semibold mb-0.5" style={{ color: a.color }}>
                            {p.name}
                            {p.external && <ExternalLink className="w-3 h-3" />}
                          </div>
                          <span className="text-xs" style={{ color: "var(--text3)" }}>{p.desc[lang as Lang3]}</span>
                        </div>
                      );
                      return p.external ? (
                        <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                      ) : (
                        <Link key={p.name} href={p.href}>{inner}</Link>
                      );
                    })}
                  </div>
                </div>

                {/* Right — workflow */}
                <div className="p-7 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                  <h3 className="font-bold mb-5" style={{ color: "var(--text)" }}>
                    {lang === "uz" ? "Ish jarayoni" : lang === "ru" ? "Рабочий процесс" : "Workflow"}
                  </h3>
                  <ol className="space-y-4">
                    {a.workflow[lang as Lang3].map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-gradient-to-br ${a.gradient}`}
                        >
                          {i + 1}
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                          <Check className="w-4 h-4 flex-shrink-0 text-green-500" />
                          <span className="text-sm" style={{ color: "var(--text2)" }}>{step}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                    {a.products[0].external ? (
                      <a
                        href={a.products[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold"
                        style={{ color: a.color }}
                      >
                        {lang === "uz" ? "Hozir boshlash" : lang === "ru" ? "Начать сейчас" : "Start now"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link href={a.products[0].href} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: a.color }}>
                        {lang === "uz" ? "Batafsil" : lang === "ru" ? "Подробнее" : "Learn more"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Boshlashga Tayyormisiz?" : lang === "ru" ? "Готовы начать?" : "Ready to Start?"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://sodda.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:scale-105">
              {lang === "uz" ? "Bepul Boshlash" : lang === "ru" ? "Начать Бесплатно" : "Start Free"}
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all hover:scale-105" style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--surface)" }}>
              {lang === "uz" ? "Mahsulotlarni Ko'rish" : lang === "ru" ? "Смотреть Продукты" : "View Products"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
