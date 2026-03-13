"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { ChevronDown, HelpCircle } from "lucide-react";

type Lang = "uz" | "ru" | "en";

const faqs: { q: Record<Lang, string>; a: Record<Lang, string> }[] = [
  {
    q: {
      uz: "SoddaAI qanday ishlaydi?",
      ru: "Как работает SoddaAI?",
      en: "How does SoddaAI work?",
    },
    a: {
      uz: "Siz mavzu yoki fayl kiritasiz, AI bir necha soniya ichida professional kontent (prezentatsiya, insho, kurs ishi va boshqalar) tayyorlaydi. Tayyor faylni PPTX, PDF yoki DOCX formatida yuklab olasiz.",
      ru: "Вы вводите тему или загружаете файл, ИИ за несколько секунд подготавливает профессиональный контент (презентацию, эссе, курсовую и т.д.). Готовый файл скачиваете в формате PPTX, PDF или DOCX.",
      en: "You enter a topic or upload a file, and the AI prepares professional content (presentation, essay, coursework, etc.) in seconds. Download the ready file in PPTX, PDF or DOCX format.",
    },
  },
  {
    q: {
      uz: "30 ta slayd uchun 3,000 so'm to'g'rimi?",
      ru: "Правда ли, что 30 слайдов стоят 3 000 сум?",
      en: "Is it really 3,000 UZS for 30 slides?",
    },
    a: {
      uz: "Ha, to'g'ri! AI Slide Bot orqali Telegramda 30 ta professional slayd atigi 3,000 so'mga yaratiladi. Bu O'zbekistondagi eng arzon va sifatli AI prezentatsiya xizmati.",
      ru: "Да, верно! Через AI Slide Bot в Telegram 30 профессиональных слайдов создаются всего за 3 000 сум. Это самый доступный и качественный AI сервис презентаций в Узбекистане.",
      en: "Yes, that's right! Via AI Slide Bot in Telegram, 30 professional slides are created for just 3,000 UZS. This is the most affordable and quality AI presentation service in Uzbekistan.",
    },
  },
  {
    q: {
      uz: "Qancha vaqt ichida prezentatsiya tayyor bo'ladi?",
      ru: "Как долго готовится презентация?",
      en: "How long does it take to generate a presentation?",
    },
    a: {
      uz: "O'rtacha 10–30 soniya. Mavzu murakkabligiga qarab ba'zan biroz ko'proq vaqt ketishi mumkin, lekin aksariyat hollarda bir daqiqadan kam.",
      ru: "В среднем 10–30 секунд. В зависимости от сложности темы иногда может занять немного больше, но в большинстве случаев менее минуты.",
      en: "On average 10–30 seconds. Depending on the topic complexity it may take a bit longer, but in most cases under a minute.",
    },
  },
  {
    q: {
      uz: "Qaysi til va formatlarni qo'llab-quvvatlaydi?",
      ru: "Какие языки и форматы поддерживаются?",
      en: "Which languages and formats are supported?",
    },
    a: {
      uz: "O'zbek, Rus va Ingliz tillarida ishlaydi. Eksport formatlari: PPTX (PowerPoint), PDF va DOCX (Word). AI Slide Bot PPTX va PDF formatlarini qo'llab-quvvatlaydi.",
      ru: "Работает на узбекском, русском и английском языках. Форматы экспорта: PPTX (PowerPoint), PDF и DOCX (Word). AI Slide Bot поддерживает форматы PPTX и PDF.",
      en: "Works in Uzbek, Russian and English. Export formats: PPTX (PowerPoint), PDF and DOCX (Word). AI Slide Bot supports PPTX and PDF formats.",
    },
  },
  {
    q: {
      uz: "Bepul versiya bormi? Nima uchun to'lov kerak?",
      ru: "Есть ли бесплатная версия? Почему нужна оплата?",
      en: "Is there a free version? Why is payment needed?",
    },
    a: {
      uz: "Ha, bepul rejada oyiga 5 ta prezentatsiya va 10 ta hujjat yaratish mumkin. To'lov rejasi (3,000 so'm/30 slayd) premium shablonlar, PPTX eksport va cheksiz miqdordagi fayllar uchun kerak. Narx serverlar va AI API xarajatlarini qoplash uchun belgilangan.",
      ru: "Да, в бесплатном плане можно создавать 5 презентаций и 10 документов в месяц. Платный план (3 000 сум / 30 слайдов) нужен для премиум-шаблонов, экспорта PPTX и неограниченного количества файлов. Цена установлена для покрытия затрат на серверы и AI API.",
      en: "Yes, the free plan allows 5 presentations and 10 documents per month. The paid plan (3,000 UZS / 30 slides) is for premium templates, PPTX export and unlimited files. The price covers server and AI API costs.",
    },
  },
  {
    q: {
      uz: "AI Slide Bot Telegramda qanday ishlaydi?",
      ru: "Как работает AI Slide Bot в Telegram?",
      en: "How does the AI Slide Bot work in Telegram?",
    },
    a: {
      uz: "@aislidebot botiga mavzu yozing yoki fayl yuboring. Bot bir necha soniyada professional prezentatsiya yaratib, PPTX yoki PDF ko'rinishida qaytarib yuboradi. Hech qanday dastur o'rnatish shart emas.",
      ru: "Напишите тему или отправьте файл боту @aislidebot. Бот за несколько секунд создаст профессиональную презентацию и вернёт её в формате PPTX или PDF. Не нужно устанавливать никаких программ.",
      en: "Write a topic or send a file to @aislidebot. The bot creates a professional presentation in seconds and returns it in PPTX or PDF format. No software installation required.",
    },
  },
  {
    q: {
      uz: "Presenton nima va u boshqalardan farqi?",
      ru: "Что такое Presenton и чем он отличается?",
      en: "What is Presenton and how is it different?",
    },
    a: {
      uz: "Presenton — ochiq kodli (open-source) AI prezentatsiya generatori. Uni o'z serveringizga Docker orqali o'rnatib, cheksiz va bepul foydalanishingiz mumkin. Bu ayniqsa katta tashkilotlar va dasturchilar uchun qulay.",
      ru: "Presenton — open-source AI генератор презентаций. Его можно установить на свой сервер через Docker и использовать безлимитно и бесплатно. Это особенно удобно для крупных организаций и разработчиков.",
      en: "Presenton is an open-source AI presentation generator. You can install it on your own server via Docker and use it unlimitedly for free. This is especially convenient for large organizations and developers.",
    },
  },
  {
    q: {
      uz: "Ma'lumotlarim xavfsizmi?",
      ru: "Безопасны ли мои данные?",
      en: "Is my data safe?",
    },
    a: {
      uz: "Ha. Foydalanuvchi ma'lumotlari shifrlanadi va uchinchi shaxslarga berilmaydi. AI yaratish uchun kiritilgan mavzu vaqtinchalik qayta ishlanadi va saqlanmaydi.",
      ru: "Да. Данные пользователей шифруются и не передаются третьим лицам. Введённая тема для AI обрабатывается временно и не хранится.",
      en: "Yes. User data is encrypted and not shared with third parties. The topic entered for AI is processed temporarily and not stored.",
    },
  },
];

export default function FAQ() {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
            style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.2)", color: "var(--indigo)" }}
          >
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Ko'p So'raladigan Savollar" : lang === "ru" ? "Часто Задаваемые Вопросы" : "Frequently Asked Questions"}
          </h2>
          <p className="text-lg" style={{ color: "var(--text3)" }}>
            {lang === "uz"
              ? "Mijozlarimiz eng ko'p beradigan savollarga javoblar"
              : lang === "ru"
              ? "Ответы на самые частые вопросы наших пользователей"
              : "Answers to the most common questions from our users"}
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  background: "var(--surface)",
                  borderColor: isOpen ? "rgba(99,102,241,0.4)" : "var(--border)",
                  boxShadow: isOpen ? "0 4px 24px rgba(99,102,241,0.08)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-semibold" style={{ color: "var(--text)" }}>
                    {faq.q[lang]}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? "var(--indigo)" : "var(--text3)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <div className="px-6 pb-5 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm leading-relaxed pt-4" style={{ color: "var(--text2)" }}>
                      {faq.a[lang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 rounded-2xl p-6 text-center border"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <p className="text-sm mb-3" style={{ color: "var(--text3)" }}>
            {lang === "uz"
              ? "Savolingizga javob topa olmadingizmi?"
              : lang === "ru"
              ? "Не нашли ответ на свой вопрос?"
              : "Didn't find the answer to your question?"}
          </p>
          <a
            href="https://t.me/aislidebot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            {lang === "uz" ? "Telegram orqali so'rang" : lang === "ru" ? "Спросить в Telegram" : "Ask via Telegram"}
          </a>
        </div>
      </div>
    </section>
  );
}
