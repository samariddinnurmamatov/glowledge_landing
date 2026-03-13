"use client";

import { use } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { Brain, Bot, Tv, Server, FileText, Check, ArrowRight, ExternalLink, ChevronLeft } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const productData: Record<string, {
  name: string; icon: React.ElementType; gradient: string;
  tagline: Record<Lang3, string>;
  hero: Record<Lang3, string>;
  problem: Record<Lang3, string>;
  features: { icon: string; title: Record<Lang3, string>; desc: Record<Lang3, string> }[];
  steps: { step: string; title: Record<Lang3, string>; desc: Record<Lang3, string> }[];
  pricing: Record<Lang3, string>;
  href: string; external: boolean;
  faq: { q: Record<Lang3, string>; a: Record<Lang3, string> }[];
}> = {
  "sodda-ai": {
    name: "SoddaAI",
    icon: Brain,
    gradient: "from-indigo-500 to-purple-600",
    tagline: { uz: "20+ turdagi AI kontent, bir joyda", ru: "20+ видов AI контента в одном месте", en: "20+ AI content types, all in one place" },
    hero: {
      uz: "Har Qanday Kontentni Soniyalarda Yarating",
      ru: "Создавайте Любой Контент за Секунды",
      en: "Create Any Content in Seconds",
    },
    problem: {
      uz: "Prezentatsiya, insho yoki kurs ishi tayyorlash soatlab vaqt oladi. SoddaAI bu jarayonni soniyalarga aylantiradi — siz mavzu kiritasiz, AI qolgan ishni qiladi.",
      ru: "Подготовка презентации, эссе или курсовой занимает часы. SoddaAI превращает этот процесс в секунды — вы вводите тему, ИИ делает всё остальное.",
      en: "Preparing a presentation, essay or coursework takes hours. SoddaAI turns this into seconds — you enter the topic, AI does the rest.",
    },
    features: [
      {
        icon: "🎯",
        title: { uz: "20+ Kontent Turi", ru: "20+ Видов контента", en: "20+ Content Types" },
        desc: { uz: "Prezentatsiya, insho, kurs ishi, referat, marketing matnlari va ko'proq.", ru: "Презентации, эссе, курсовые, рефераты, маркетинговые тексты и многое другое.", en: "Presentations, essays, coursework, abstracts, marketing texts and more." },
      },
      {
        icon: "🎨",
        title: { uz: "60+ Premium Shablon", ru: "60+ Премиум шаблонов", en: "60+ Premium Templates" },
        desc: { uz: "Professional dizaynlar, turli sohalar va maqsadlar uchun.", ru: "Профессиональные дизайны для разных отраслей и целей.", en: "Professional designs for various industries and purposes." },
      },
      {
        icon: "📁",
        title: { uz: "PPTX · PDF · DOCX Eksport", ru: "Экспорт PPTX · PDF · DOCX", en: "PPTX · PDF · DOCX Export" },
        desc: { uz: "Kerakli formatda yuklab oling va darhol foydalaning.", ru: "Скачайте в нужном формате и используйте сразу.", en: "Download in the format you need and use immediately." },
      },
      {
        icon: "🌍",
        title: { uz: "UZ · RU · EN", ru: "UZ · RU · EN", en: "UZ · RU · EN" },
        desc: { uz: "O'zbek, Rus va Ingliz tillarida professional natija.", ru: "Профессиональный результат на узбекском, русском и английском.", en: "Professional output in Uzbek, Russian and English." },
      },
      {
        icon: "⚡",
        title: { uz: "~15 Soniya", ru: "~15 Секунд", en: "~15 Seconds" },
        desc: { uz: "O'rtacha 15 soniyada tayyor kontent. 99.9% uptime.", ru: "Готовый контент в среднем за 15 секунд. 99.9% аптайм.", en: "Ready content in ~15 seconds on average. 99.9% uptime." },
      },
      {
        icon: "🤖",
        title: { uz: "Top AI Modellar", ru: "Лучшие AI Модели", en: "Top AI Models" },
        desc: { uz: "Google Gemini, GPT-4 va Claude tomonidan quvvatlanadi.", ru: "Работает на Google Gemini, GPT-4 и Claude.", en: "Powered by Google Gemini, GPT-4 and Claude." },
      },
    ],
    steps: [
      { step: "1", title: { uz: "Mavzu Kiriting", ru: "Введите Тему", en: "Enter Topic" }, desc: { uz: "Mavzu yozing yoki fayl yuklang.", ru: "Напишите тему или загрузите файл.", en: "Type your topic or upload a file." } },
      { step: "2", title: { uz: "AI Ishlaydi", ru: "ИИ Работает", en: "AI Works" }, desc: { uz: "AI bir necha soniyada professional kontent yaratadi.", ru: "ИИ создаёт профессиональный контент за несколько секунд.", en: "AI creates professional content in seconds." } },
      { step: "3", title: { uz: "Yuklab Oling", ru: "Скачайте", en: "Download" }, desc: { uz: "PPTX, PDF yoki DOCX formatida oling.", ru: "Получите в формате PPTX, PDF или DOCX.", en: "Get it in PPTX, PDF or DOCX format." } },
    ],
    pricing: { uz: "Bepul rejada oyiga 5 ta prezentatsiya va 10 ta hujjat. Pro: 3,000 so'm / 30 slayd. Enterprise: maxsus narxlar.", ru: "Бесплатный план: 5 презентаций и 10 документов в месяц. Pro: 3 000 сум / 30 слайдов. Enterprise: индивидуальные цены.", en: "Free plan: 5 presentations and 10 documents/month. Pro: 3,000 UZS / 30 slides. Enterprise: custom pricing." },
    href: "https://sodda.ai",
    external: true,
    faq: [
      { q: { uz: "Bepul foydalanish mumkinmi?", ru: "Можно ли использовать бесплатно?", en: "Can I use it for free?" }, a: { uz: "Ha, bepul rejada oyiga 5 ta prezentatsiya va 10 ta hujjat yaratish mumkin.", ru: "Да, в бесплатном плане можно создавать 5 презентаций и 10 документов в месяц.", en: "Yes, the free plan allows 5 presentations and 10 documents per month." } },
      { q: { uz: "Qancha vaqt oladi?", ru: "Сколько времени занимает?", en: "How long does it take?" }, a: { uz: "O'rtacha 10-30 soniya. Ko'p hollarda bir daqiqadan kam.", ru: "В среднем 10-30 секунд. В большинстве случаев менее минуты.", en: "On average 10-30 seconds. In most cases under a minute." } },
    ],
  },
  "presenton": {
    name: "Presenton",
    icon: Server,
    gradient: "from-green-500 to-emerald-600",
    tagline: { uz: "Open-source AI prezentatsiya generatori", ru: "Open-source AI генератор презентаций", en: "Open-source AI presentation generator" },
    hero: { uz: "O'z Serveringizda AI Prezentatsiya", ru: "AI Презентации на Вашем Сервере", en: "AI Presentations on Your Own Server" },
    problem: {
      uz: "Katta tashkilotlar ma'lumotlarini uchinchi shaxslarga berishdan xavotirlanadi. Presenton bu muammoni hal qiladi — barcha hisoblash o'z serveringizda amalga oshiriladi.",
      ru: "Крупные организации беспокоятся о передаче данных третьим лицам. Presenton решает эту проблему — все вычисления выполняются на вашем сервере.",
      en: "Large organizations worry about sharing data with third parties. Presenton solves this — all computation happens on your own server.",
    },
    features: [
      { icon: "🔓", title: { uz: "To'liq Open-source", ru: "Полностью Open-source", en: "Fully Open-source" }, desc: { uz: "GitHub da mavjud, istalgan vaqt kodga kirishingiz mumkin.", ru: "Доступно на GitHub, полный доступ к коду в любое время.", en: "Available on GitHub, full code access at any time." } },
      { icon: "🐳", title: { uz: "Docker bilan", ru: "Через Docker", en: "Via Docker" }, desc: { uz: "Bir docker-compose buyrug'i bilan ishlata boshlang.", ru: "Запустите одной командой docker-compose.", en: "Start with a single docker-compose command." } },
      { icon: "♾️", title: { uz: "Cheksiz Foydalanish", ru: "Безлимитное Использование", en: "Unlimited Usage" }, desc: { uz: "O'z serveringizda cheksiz prezentatsiya yarating.", ru: "Создавайте неограниченное количество презентаций на своём сервере.", en: "Create unlimited presentations on your own server." } },
      { icon: "🔒", title: { uz: "Ma'lumotlar Xavfsiz", ru: "Данные в Безопасности", en: "Data is Safe" }, desc: { uz: "Barcha ma'lumotlar faqat sizning serveringizda saqlanadi.", ru: "Все данные хранятся только на вашем сервере.", en: "All data is stored only on your server." } },
      { icon: "🔧", title: { uz: "Maxsus Sozlash", ru: "Кастомизация", en: "Customization" }, desc: { uz: "Kodni o'zgartiring, o'z brendingizni qo'shing.", ru: "Измените код, добавьте свой бренд.", en: "Modify code, add your own branding." } },
      { icon: "🌐", title: { uz: "API Integratsiya", ru: "API Интеграция", en: "API Integration" }, desc: { uz: "REST API orqali boshqa tizimlaringizga ulang.", ru: "Подключайте к другим системам через REST API.", en: "Connect to your other systems via REST API." } },
    ],
    steps: [
      { step: "1", title: { uz: "Docker ni O'rnating", ru: "Установите Docker", en: "Install Docker" }, desc: { uz: "Serveringizga Docker va docker-compose o'rnating.", ru: "Установите Docker и docker-compose на свой сервер.", en: "Install Docker and docker-compose on your server." } },
      { step: "2", title: { uz: "Kodni Yuklab Oling", ru: "Скачайте Код", en: "Download Code" }, desc: { uz: "GitHub dan repositoriyani clone qiling.", ru: "Клонируйте репозиторий с GitHub.", en: "Clone the repository from GitHub." } },
      { step: "3", title: { uz: "Ishga Tushiring", ru: "Запустите", en: "Start" }, desc: { uz: "docker-compose up buyrug'ini bajaring va tayyor!", ru: "Выполните docker-compose up и готово!", en: "Run docker-compose up and you're ready!" } },
    ],
    pricing: { uz: "Presenton to'liq bepul va open-source. Faqat o'z serveringiz va AI API xarajatlarini to'lang.", ru: "Presenton полностью бесплатный и open-source. Платите только за свой сервер и AI API.", en: "Presenton is completely free and open-source. Only pay for your own server and AI API costs." },
    href: "https://github.com/glowledge/presenton",
    external: true,
    faq: [
      { q: { uz: "Qaysi AI modellarni qo'llab-quvvatlaydi?", ru: "Какие AI модели поддерживаются?", en: "Which AI models are supported?" }, a: { uz: "Google Gemini, OpenAI GPT va Anthropic Claude modellarini qo'llab-quvvatlaydi.", ru: "Поддерживает модели Google Gemini, OpenAI GPT и Anthropic Claude.", en: "Supports Google Gemini, OpenAI GPT and Anthropic Claude models." } },
      { q: { uz: "Texnik talablar?", ru: "Технические требования?", en: "Technical requirements?" }, a: { uz: "Docker va 2GB+ RAM bo'lgan istalgan Linux/Mac/Windows server ishlaydi.", ru: "Любой Linux/Mac/Windows сервер с Docker и 2GB+ RAM.", en: "Any Linux/Mac/Windows server with Docker and 2GB+ RAM." } },
    ],
  },
  "ai-docx-editor": {
    name: "AI Docx Editor",
    icon: FileText,
    gradient: "from-orange-500 to-amber-500",
    tagline: { uz: "Mavjud DOCX fayllaringizni AI bilan yangilang", ru: "Обновляйте существующие DOCX файлы с ИИ", en: "Update your existing DOCX files with AI" },
    hero: { uz: "Word Hujjatingizni AI Bilan Yaxshilang", ru: "Улучшите Word Документ с ИИ", en: "Improve Your Word Document with AI" },
    problem: { uz: "Mavjud Word hujjatni qayta yozish yoki yaxshilash ko'p vaqt oladi. AI Docx Editor bu jarayonni avtomatlashtirib, sifatli natija beradi.", ru: "Переписывание или улучшение существующего Word документа занимает много времени. AI Docx Editor автоматизирует этот процесс, давая качественный результат.", en: "Rewriting or improving an existing Word document takes a lot of time. AI Docx Editor automates this process, delivering quality results." },
    features: [
      { icon: "📤", title: { uz: "DOCX Yuklang", ru: "Загрузите DOCX", en: "Upload DOCX" }, desc: { uz: "Mavjud Word faylingizni yuklang.", ru: "Загрузите существующий Word файл.", en: "Upload your existing Word file." } },
      { icon: "🤖", title: { uz: "Gemini AI", ru: "Gemini AI", en: "Gemini AI" }, desc: { uz: "Google Gemini eng so'nggi modeli bilan ishlaydi.", ru: "Работает с последней моделью Google Gemini.", en: "Works with the latest Google Gemini model." } },
      { icon: "✍️", title: { uz: "Smart Tahrirlash", ru: "Умное Редактирование", en: "Smart Editing" }, desc: { uz: "Matnni yaxshilash, kengaytirish yoki qisqartirish.", ru: "Улучшение, расширение или сокращение текста.", en: "Improve, expand or condense text." } },
      { icon: "📥", title: { uz: "DOCX Yuklab Oling", ru: "Скачайте DOCX", en: "Download DOCX" }, desc: { uz: "Tahrirlangan hujjatni DOCX formatida oling.", ru: "Получите отредактированный документ в формате DOCX.", en: "Get the edited document in DOCX format." } },
      { icon: "🆓", title: { uz: "Beta — Bepul", ru: "Beta — Бесплатно", en: "Beta — Free" }, desc: { uz: "Hozircha beta versiyada bepul foydalaning.", ru: "Используйте бесплатно в текущей beta версии.", en: "Use for free in the current beta version." } },
      { icon: "🔒", title: { uz: "Xavfsiz", ru: "Безопасно", en: "Secure" }, desc: { uz: "Fayllaringiz shifrlanib, saqlanmaydi.", ru: "Ваши файлы шифруются и не сохраняются.", en: "Your files are encrypted and not stored." } },
    ],
    steps: [
      { step: "1", title: { uz: "DOCX Yuklang", ru: "Загрузите DOCX", en: "Upload DOCX" }, desc: { uz: "Tahrirlash kerak bo'lgan Word faylingizni yuklang.", ru: "Загрузите Word файл, который нужно отредактировать.", en: "Upload the Word file you need to edit." } },
      { step: "2", title: { uz: "Buyruq Bering", ru: "Дайте Команду", en: "Give Command" }, desc: { uz: "AI ga nima qilishini ayting: yaxshilash, kengaytirish, tarjima...", ru: "Скажите ИИ что делать: улучшить, расширить, перевести...", en: "Tell AI what to do: improve, expand, translate..." } },
      { step: "3", title: { uz: "Yuklab Oling", ru: "Скачайте", en: "Download" }, desc: { uz: "Yangilangan DOCX faylingizni yuklab oling.", ru: "Скачайте обновлённый DOCX файл.", en: "Download your updated DOCX file." } },
    ],
    pricing: { uz: "Hozirda beta versiyada — to'liq bepul. Kelajakda Pro rejaga o'tishi mumkin.", ru: "Сейчас в beta — полностью бесплатно. В будущем возможен переход на Pro план.", en: "Currently in beta — completely free. May transition to Pro plan in the future." },
    href: "https://sodda.ai",
    external: true,
    faq: [
      { q: { uz: "Qanday fayl formatlari qo'llab-quvvatlanadi?", ru: "Какие форматы файлов поддерживаются?", en: "What file formats are supported?" }, a: { uz: "Hozirda .docx formati qo'llab-quvvatlanadi.", ru: "В настоящее время поддерживается формат .docx.", en: "Currently .docx format is supported." } },
      { q: { uz: "Faylim xavfsizmi?", ru: "Безопасен ли мой файл?", en: "Is my file safe?" }, a: { uz: "Ha, fayllar faqat qayta ishlash uchun ishlatiladi va saqlanmaydi.", ru: "Да, файлы используются только для обработки и не сохраняются.", en: "Yes, files are only used for processing and not stored." } },
    ],
  },
};

// Redirect slugs for external products
const externalRedirects: Record<string, string> = {
  "ai-slide-bot": "https://t.me/aislidebot",
  "slayd-top": "https://t.me/slaydtop",
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLang();

  // For Telegram products, show a redirect page
  if (externalRedirects[slug]) {
    return (
      <main style={{ background: "var(--bg)", color: "var(--text)" }}>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">{slug === "ai-slide-bot" ? "🤖" : "📺"}</div>
            <h1 className="text-3xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
              {slug === "ai-slide-bot" ? "AI Slide Bot" : "Slayd TOP"}
            </h1>
            <p className="mb-8" style={{ color: "var(--text3)" }}>
              {lang === "uz" ? "Bu mahsulot Telegram da mavjud." : lang === "ru" ? "Этот продукт доступен в Telegram." : "This product is available on Telegram."}
            </p>
            <a
              href={externalRedirects[slug]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600"
            >
              {lang === "uz" ? "Telegramda Ochish" : lang === "ru" ? "Открыть в Telegram" : "Open in Telegram"}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    );
  }

  const p = productData[slug];
  if (!p) return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Mahsulot topilmadi" : lang === "ru" ? "Продукт не найден" : "Product not found"}
          </h1>
          <Link href="/products" className="text-indigo-500 hover:underline flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            {lang === "uz" ? "Mahsulotlarga qaytish" : lang === "ru" ? "Вернуться к продуктам" : "Back to products"}
          </Link>
        </div>
      </div>
    </main>
  );

  const Icon = p.icon;

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section className={`relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/products" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            {lang === "uz" ? "Barcha mahsulotlar" : lang === "ru" ? "Все продукты" : "All products"}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Icon className="w-9 h-9 text-white" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">{p.name}</h1>
              <p className="text-white/80 mt-1">{p.tagline[lang as Lang3]}</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mb-10">{p.hero[lang as Lang3]}</p>
          <a
            href={p.href}
            target={p.external ? "_blank" : undefined}
            rel={p.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white text-indigo-600 hover:bg-white/90 transition-all hover:scale-105"
          >
            {lang === "uz" ? "Hozir Boshlash" : lang === "ru" ? "Начать сейчас" : "Start Now"}
            {p.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Muammo va Yechim" : lang === "ru" ? "Проблема и Решение" : "Problem & Solution"}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text3)" }}>{p.problem[lang as Lang3]}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Asosiy Imkoniyatlar" : lang === "ru" ? "Основные Возможности" : "Key Features"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>{f.title[lang as Lang3]}</h3>
                <p className="text-sm" style={{ color: "var(--text3)" }}>{f.desc[lang as Lang3]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Qanday Ishlaydi?" : lang === "ru" ? "Как Это Работает?" : "How It Works"}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {p.steps.map((s) => (
              <div key={s.step} className="text-center p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>{s.title[lang as Lang3]}</h3>
                <p className="text-sm" style={{ color: "var(--text3)" }}>{s.desc[lang as Lang3]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Narx" : lang === "ru" ? "Цена" : "Pricing"}
          </h2>
          <p className="text-lg mb-6" style={{ color: "var(--text3)" }}>{p.pricing[lang as Lang3]}</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--indigo)" }}>
            {lang === "uz" ? "Barcha narxlarni ko'rish" : lang === "ru" ? "Смотреть все цены" : "View all pricing"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "var(--text)" }}>FAQ</h2>
          <div className="space-y-4">
            {p.faq.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--indigo)" }} />
                  <div>
                    <p className="font-semibold mb-1" style={{ color: "var(--text)" }}>{item.q[lang as Lang3]}</p>
                    <p className="text-sm" style={{ color: "var(--text3)" }}>{item.a[lang as Lang3]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Bugun Boshlang" : lang === "ru" ? "Начните Сегодня" : "Start Today"}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={p.href}
              target={p.external ? "_blank" : undefined}
              rel={p.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:scale-105"
            >
              {lang === "uz" ? "Hozir Boshlash" : lang === "ru" ? "Начать сейчас" : "Start Now"}
              {p.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
            <Link href="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all hover:scale-105" style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--surface)" }}>
              <ChevronLeft className="w-4 h-4" />
              {lang === "uz" ? "Barcha mahsulotlar" : lang === "ru" ? "Все продукты" : "All products"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
