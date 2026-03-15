"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { HelpCircle, ChevronDown, Bot, DollarSign, Globe, Settings, Building2, Zap } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const categories = [
  {
    id: "usage",
    icon: Zap,
    color: "#6366f1",
    bg: "rgba(99,102,241,0.10)",
    label: { uz: "Foydalanish", ru: "Использование", en: "Usage" },
    faqs: [
      {
        q: { uz: "SoddaAI qanday ishlaydi?", ru: "Как работает SoddaAI?", en: "How does SoddaAI work?" },
        a: { uz: "sodda.ai saytiga kiring, mavzu kiriting yoki fayl yuklang, kontent turini tanlang va 'Yaratish' tugmasini bosing. AI 10-30 soniyada tayyor kontent yaratadi.", ru: "Перейдите на sodda.ai, введите тему или загрузите файл, выберите тип контента и нажмите 'Создать'. ИИ готовит контент за 10-30 секунд.", en: "Go to sodda.ai, enter a topic or upload a file, choose content type and click 'Create'. AI prepares content in 10-30 seconds." },
      },
      {
        q: { uz: "Qancha vaqt ichida natija tayyor bo'ladi?", ru: "Как долго готовится результат?", en: "How long does it take to get results?" },
        a: { uz: "O'rtacha 10-30 soniya. Ba'zan murakkab mavzularda 1 daqiqagacha bo'lishi mumkin, lekin bu kamdan-kam hollarda.", ru: "В среднем 10-30 секунд. Иногда для сложных тем может занять до 1 минуты, но это редко.", en: "On average 10-30 seconds. For complex topics it may take up to 1 minute, but this is rare." },
      },
      {
        q: { uz: "Bir vaqtda nechta prezentatsiya yaratish mumkin?", ru: "Сколько презентаций можно создать одновременно?", en: "How many presentations can be created at once?" },
        a: { uz: "Hozirda bir vaqtda bitta so'rov qabul qilinadi. Pro va Enterprise rejalarda ustuvor navbat beriladi.", ru: "Сейчас принимается по одному запросу за раз. В планах Pro и Enterprise предоставляется приоритетная очередь.", en: "Currently one request at a time is accepted. Pro and Enterprise plans receive priority queue." },
      },
    ],
  },
  {
    id: "exports",
    icon: Settings,
    color: "#10b981",
    bg: "rgba(16,185,129,0.10)",
    label: { uz: "Eksport", ru: "Экспорт", en: "Export" },
    faqs: [
      {
        q: { uz: "Qaysi format eng yaxshi?", ru: "Какой формат лучший?", en: "Which format is best?" },
        a: { uz: "PPTX — tahrirlanishi mumkin (PowerPoint uchun). PDF — taqdimot uchun yakuniy variant. DOCX — Word hujjat uchun. Maqsadingizga qarab tanlang.", ru: "PPTX — редактируемый (для PowerPoint). PDF — финальный вариант для презентации. DOCX — для Word документа. Выбирайте исходя из цели.", en: "PPTX — editable (for PowerPoint). PDF — final version for presentation. DOCX — for Word document. Choose based on your goal." },
      },
      {
        q: { uz: "PPTX eksport uchun to'lov kerakmi?", ru: "Нужна ли оплата для PPTX экспорта?", en: "Is payment needed for PPTX export?" },
        a: { uz: "Ha, PPTX eksport faqat Pro va Enterprise rejalarda mavjud. Bepul rejada PDF eksport bepul.", ru: "Да, экспорт PPTX доступен только в планах Pro и Enterprise. В бесплатном плане экспорт PDF бесплатен.", en: "Yes, PPTX export is available only in Pro and Enterprise plans. In the free plan, PDF export is free." },
      },
      {
        q: { uz: "Fayllarni keyinchalik tahrirlash mumkinmi?", ru: "Можно ли редактировать файлы позже?", en: "Can files be edited later?" },
        a: { uz: "PPTX faylni PowerPoint yoki Google Slides da tahrirlash mumkin. AI Docx Editor bilan DOCX fayllarni AI yordamida tahrirlash mumkin.", ru: "PPTX файл можно редактировать в PowerPoint или Google Slides. С AI Docx Editor можно редактировать DOCX файлы с помощью ИИ.", en: "PPTX file can be edited in PowerPoint or Google Slides. With AI Docx Editor you can edit DOCX files using AI." },
      },
    ],
  },
  {
    id: "pricing",
    icon: DollarSign,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.10)",
    label: { uz: "To'lov", ru: "Оплата", en: "Billing" },
    faqs: [
      {
        q: { uz: "Pro narxi qanday ishlaydi?", ru: "Как работает цена Pro?", en: "How does Pro pricing work?" },
        a: { uz: "Pro 3,000 so'm / 30 slayd — bu bir martali to'lov. @aislidebot botida to'lov qilasiz va 30 slayd toʻplami olasiz. Tugaganidan keyin yana to'laysiz.", ru: "Pro 3 000 сум / 30 слайдов — это разовый платёж. Оплачиваете в боте @aislidebot и получаете пакет из 30 слайдов. После использования платите снова.", en: "Pro 3,000 UZS / 30 slides — this is a one-time payment. Pay in @aislidebot bot and get a 30-slide pack. After using, pay again." },
      },
      {
        q: { uz: "Qaytarib to'lash mumkinmi?", ru: "Возможен ли возврат средств?", en: "Is refund possible?" },
        a: { uz: "Texnik muammo tufayli natija yaratilmasa, 24 soat ichida to'liq qaytariladi. @aislidebot botida muammoingizni tasvirlab yozing.", ru: "Если результат не был создан из-за технической проблемы, полный возврат в течение 24 часов. Опишите проблему в боте @aislidebot.", en: "If the result wasn't created due to a technical issue, full refund within 24 hours. Describe the issue in @aislidebot bot." },
      },
      {
        q: { uz: "To'lov qanday amalga oshiriladi?", ru: "Как осуществляется оплата?", en: "How is payment made?" },
        a: { uz: "To'lov @aislidebot Telegram boti orqali amalga oshiriladi. O'zbek bank kartalari qabul qilinadi.", ru: "Оплата осуществляется через Telegram бот @aislidebot. Принимаются узбекские банковские карты.", en: "Payment is made through the Telegram bot @aislidebot. Uzbek bank cards are accepted." },
      },
    ],
  },
  {
    id: "languages",
    icon: Globe,
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.10)",
    label: { uz: "Tillar", ru: "Языки", en: "Languages" },
    faqs: [
      {
        q: { uz: "Qaysi tillar qo'llab-quvvatlanadi?", ru: "Какие языки поддерживаются?", en: "Which languages are supported?" },
        a: { uz: "O'zbek, Rus va Ingliz tillari qo'llab-quvvatlanadi. Interfeys va kontent yaratish uchun barchasi to'liq ishlaydi.", ru: "Поддерживаются узбекский, русский и английский языки. Интерфейс и создание контента работают полностью для всех.", en: "Uzbek, Russian and English languages are supported. Interface and content creation work fully for all." },
      },
      {
        q: { uz: "O'zbek tilida sifat qanday?", ru: "Какое качество на узбекском языке?", en: "What's the quality in Uzbek?" },
        a: { uz: "O'zbek tili native qo'llab-quvvatlash bilan ishlaydi. Bizning AI modellar o'zbek tilida professional kontent yaratish uchun maxsus optimallashtirilgan.", ru: "Узбекский язык работает с нативной поддержкой. Наши AI модели специально оптимизированы для создания профессионального контента на узбекском языке.", en: "Uzbek language works with native support. Our AI models are specially optimized for creating professional content in Uzbek." },
      },
    ],
  },
  {
    id: "technical",
    icon: Settings,
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.10)",
    label: { uz: "Texnik", ru: "Техническое", en: "Technical" },
    faqs: [
      {
        q: { uz: "SlaydPro ni qanday o'rnatish kerak?", ru: "Как установить SlaydPro?", en: "How to install SlaydPro?" },
        a: { uz: "1. GitHub dan yuklab oling. 2. Docker o'rnating. 3. .env faylida API kalitlarini kiriting. 4. docker-compose up -d bajaring. Batafsil: /products/slaydpro", ru: "1. Скачайте с GitHub. 2. Установите Docker. 3. Введите API ключи в .env файле. 4. Выполните docker-compose up -d. Подробнее: /products/slaydpro", en: "1. Download from GitHub. 2. Install Docker. 3. Enter API keys in .env file. 4. Run docker-compose up -d. More details: /products/slaydpro" },
      },
      {
        q: { uz: "API integratsiya qanday ishlaydi?", ru: "Как работает API интеграция?", en: "How does API integration work?" },
        a: { uz: "Enterprise rejasida REST API taqdim etiladi. /contact sahifasida bog'laning va texnik hujjatlashtirish yuboramiz.", ru: "В Enterprise плане предоставляется REST API. Свяжитесь на странице /contact и вышлем техническую документацию.", en: "REST API is provided in the Enterprise plan. Contact us at /contact page and we'll send technical documentation." },
      },
    ],
  },
  {
    id: "enterprise",
    icon: Building2,
    color: "#ec4899",
    bg: "rgba(236,72,153,0.10)",
    label: { uz: "Enterprise", ru: "Enterprise", en: "Enterprise" },
    faqs: [
      {
        q: { uz: "Enterprise uchun minimal foydalanuvchilar soni?", ru: "Минимальное количество пользователей для Enterprise?", en: "Minimum users for Enterprise?" },
        a: { uz: "Enterprise rejasi odatda 10+ foydalanuvchi uchun mo'ljallangan. Kamroq bo'lsa ham maxsus shartnoma tuzish mumkin.", ru: "Enterprise план обычно рассчитан на 10+ пользователей. При меньшем количестве тоже можно заключить индивидуальный договор.", en: "Enterprise plan is usually for 10+ users. With fewer users a custom contract is also possible." },
      },
      {
        q: { uz: "Maxsus shablon va brend moslashtirish mumkinmi?", ru: "Возможна ли настройка кастомных шаблонов и бренда?", en: "Is custom template and brand customization possible?" },
        a: { uz: "Ha, Enterprise rejasida to'liq brend moslashtirish, maxsus shablonlar va korporativ identifikatsiya qo'llab-quvvatlanadi.", ru: "Да, в Enterprise плане поддерживается полная настройка бренда, кастомные шаблоны и корпоративная идентификация.", en: "Yes, Enterprise plan supports full brand customization, custom templates and corporate identity." },
      },
    ],
  },
];

function AccordionItem({ q, a, lang }: { q: Record<Lang3, string>; a: Record<Lang3, string>; lang: Lang3 }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border overflow-hidden transition-all" style={{ background: "var(--surface)", borderColor: open ? "rgba(99,102,241,0.3)" : "var(--border)" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>{q[lang]}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "var(--text3)" }} />
      </button>
      {open && (
        <div className="px-5 pb-4 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm leading-relaxed pt-3" style={{ color: "var(--text3)" }}>{a[lang]}</p>
        </div>
      )}
    </div>
  );
}

export default function HelpPage() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState("usage");

  const active = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute pointer-events-none" style={{ top: "-80px", left: "50%", transform: "translateX(-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="section-badge mb-5">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === "uz" ? "Yordam markazi" : lang === "ru" ? "Центр помощи" : "Help Center"}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Qanday yordam qila olamiz?" : lang === "ru" ? "Чем можем помочь?" : "How can we help?"}
          </h1>
          <p className="text-lg" style={{ color: "var(--text3)" }}>
            {lang === "uz" ? "Eng ko'p so'raladigan savollarga javoblar — toifalar bo'yicha" : lang === "ru" ? "Ответы на самые частые вопросы — по категориям" : "Answers to the most common questions — by category"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Category sidebar */}
          <aside className="lg:w-60 flex-shrink-0">
            <div className="lg:sticky lg:top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold text-left whitespace-nowrap transition-all flex-shrink-0"
                    style={{
                      background: isActive ? cat.bg : "var(--surface)",
                      color: isActive ? cat.color : "var(--text2)",
                      border: `1px solid ${isActive ? cat.color + "40" : "var(--border)"}`,
                    }}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: isActive ? cat.color : "var(--text3)" }} />
                    {cat.label[lang as Lang3]}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* FAQ content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: active.bg }}>
                <active.icon className="w-4 h-4" style={{ color: active.color }} />
              </div>
              <h2 className="text-xl font-bold" style={{ color: "var(--text)" }}>{active.label[lang as Lang3]}</h2>
            </div>
            <div className="space-y-3">
              {active.faqs.map((faq, i) => (
                <AccordionItem key={i} q={faq.q} a={faq.a} lang={lang as Lang3} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still need help */}
      <section className="py-16 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-5">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Javob topa olmadingizmi?" : lang === "ru" ? "Не нашли ответ?" : "Didn't find an answer?"}
          </h2>
          <p className="mb-6" style={{ color: "var(--text3)" }}>
            {lang === "uz" ? "Telegram orqali darhol yordam oling." : lang === "ru" ? "Получите помощь сразу через Telegram." : "Get help immediately via Telegram."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://t.me/aislidebot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:scale-105">
              {lang === "uz" ? "Telegram orqali so'rash" : lang === "ru" ? "Спросить в Telegram" : "Ask via Telegram"}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-all hover:scale-105" style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--surface)" }}>
              {lang === "uz" ? "Aloqa sahifasi" : lang === "ru" ? "Страница контактов" : "Contact page"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
