"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { Check, X, Zap, ExternalLink, Mail } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

export default function PricingPage() {
  const { lang } = useLang();

  const plans = [
    {
      name: { uz: "Bepul", ru: "Бесплатно", en: "Free" },
      price: "0",
      period: { uz: "so'm / oy", ru: "сум / месяц", en: "UZS / month" },
      desc: { uz: "Sinab ko'rish uchun", ru: "Для пробного использования", en: "To try it out" },
      highlighted: false,
      badge: null,
      cta: { uz: "Boshlash", ru: "Начать", en: "Start Free" },
      ctaHref: "https://sodda.ai",
      external: true,
      features: [
        { label: { uz: "5 prezentatsiya/oy", ru: "5 презентаций/мес", en: "5 presentations/month" }, included: true },
        { label: { uz: "10 hujjat/oy", ru: "10 документов/мес", en: "10 documents/month" }, included: true },
        { label: { uz: "Asosiy shablonlar", ru: "Базовые шаблоны", en: "Basic templates" }, included: true },
        { label: { uz: "PDF eksport", ru: "Экспорт PDF", en: "PDF export" }, included: true },
        { label: { uz: "PPTX eksport", ru: "Экспорт PPTX", en: "PPTX export" }, included: false },
        { label: { uz: "60+ premium shablon", ru: "60+ премиум шаблонов", en: "60+ premium templates" }, included: false },
        { label: { uz: "Ustuvor qo'llab-quvvatlash", ru: "Приоритетная поддержка", en: "Priority support" }, included: false },
        { label: { uz: "API kirish", ru: "API доступ", en: "API access" }, included: false },
      ],
    },
    {
      name: { uz: "Pro", ru: "Pro", en: "Pro" },
      price: "3,000",
      period: { uz: "so'm / 30 slayd", ru: "сум / 30 слайдов", en: "UZS / 30 slides" },
      desc: { uz: "Professional kontent uchun", ru: "Для профессионального контента", en: "For professional content" },
      highlighted: true,
      badge: { uz: "Mashhur", ru: "Популярный", en: "Most Popular" },
      cta: { uz: "Pro Boshlash", ru: "Начать Pro", en: "Start Pro" },
      ctaHref: "https://t.me/aislidebot",
      external: true,
      features: [
        { label: { uz: "Cheksiz prezentatsiyalar", ru: "Неограниченные презентации", en: "Unlimited presentations" }, included: true },
        { label: { uz: "Cheksiz hujjatlar", ru: "Неограниченные документы", en: "Unlimited documents" }, included: true },
        { label: { uz: "60+ premium shablon", ru: "60+ премиум шаблонов", en: "60+ premium templates" }, included: true },
        { label: { uz: "PPTX + PDF eksport", ru: "Экспорт PPTX + PDF", en: "PPTX + PDF export" }, included: true },
        { label: { uz: "Telegram bot orqali", ru: "Через Telegram бот", en: "Via Telegram bot" }, included: true },
        { label: { uz: "Rasmlar va diagrammalar", ru: "Изображения и диаграммы", en: "Images and diagrams" }, included: true },
        { label: { uz: "Ustuvor qo'llab-quvvatlash", ru: "Приоритетная поддержка", en: "Priority support" }, included: true },
        { label: { uz: "API kirish", ru: "API доступ", en: "API access" }, included: false },
      ],
    },
    {
      name: { uz: "Enterprise", ru: "Enterprise", en: "Enterprise" },
      price: { uz: "Aloqa", ru: "Связаться", en: "Contact" }[lang as Lang3] as string,
      period: { uz: "maxsus narx", ru: "индивидуальная цена", en: "custom pricing" },
      desc: { uz: "Katta tashkilotlar uchun", ru: "Для крупных организаций", en: "For large organizations" },
      highlighted: false,
      badge: null,
      cta: { uz: "Bog\'lanish", ru: "Связаться", en: "Contact Us" },
      ctaHref: "/contact",
      external: false,
      features: [
        { label: { uz: "Hamma Pro imkoniyatlar", ru: "Все функции Pro", en: "All Pro features" }, included: true },
        { label: { uz: "API integratsiya", ru: "API интеграция", en: "API integration" }, included: true },
        { label: { uz: "Maxsus shablonlar", ru: "Кастомные шаблоны", en: "Custom templates" }, included: true },
        { label: { uz: "Dedicated server", ru: "Выделенный сервер", en: "Dedicated server" }, included: true },
        { label: { uz: "24/7 qo'llab-quvvatlash", ru: "Поддержка 24/7", en: "24/7 support" }, included: true },
        { label: { uz: "SLA kafolati", ru: "Гарантия SLA", en: "SLA guarantee" }, included: true },
        { label: { uz: "Maxsus onboarding", ru: "Индивидуальный онбординг", en: "Custom onboarding" }, included: true },
        { label: { uz: "Brend sozlash", ru: "Настройка бренда", en: "Brand customization" }, included: true },
      ],
    },
  ];

  const compare = [
    { feature: { uz: "Prezentatsiyalar/oy", ru: "Презентаций/мес", en: "Presentations/month" }, free: { uz: "5 ta", ru: "5 шт", en: "5" }, pro: { uz: "Cheksiz", ru: "Безлимит", en: "Unlimited" }, enterprise: { uz: "Cheksiz", ru: "Безлимит", en: "Unlimited" } },
    { feature: { uz: "Shablonlar", ru: "Шаблонов", en: "Templates" }, free: { uz: "Asosiy", ru: "Базовые", en: "Basic" }, pro: { uz: "60+", ru: "60+", en: "60+" }, enterprise: { uz: "60+ + Maxsus", ru: "60+ + Custom", en: "60+ + Custom" } },
    { feature: { uz: "PPTX Eksport", ru: "PPTX Экспорт", en: "PPTX Export" }, free: "✗", pro: "✓", enterprise: "✓" },
    { feature: { uz: "PDF Eksport", ru: "PDF Экспорт", en: "PDF Export" }, free: "✓", pro: "✓", enterprise: "✓" },
    { feature: { uz: "Telegram Bot", ru: "Telegram Bot", en: "Telegram Bot" }, free: "✗", pro: "✓", enterprise: "✓" },
    { feature: { uz: "API Kirish", ru: "API Доступ", en: "API Access" }, free: "✗", pro: "✗", enterprise: "✓" },
    { feature: { uz: "Dedicated Server", ru: "Выделенный Сервер", en: "Dedicated Server" }, free: "✗", pro: "✗", enterprise: "✓" },
    { feature: { uz: "Qo'llab-quvvatlash", ru: "Поддержка", en: "Support" }, free: { uz: "Email", ru: "Email", en: "Email" }, pro: { uz: "Ustuvor", ru: "Приоритет", en: "Priority" }, enterprise: { uz: "24/7 SLA", ru: "24/7 SLA", en: "24/7 SLA" } },
  ];

  const faqs = [
    {
      q: { uz: "Pro rejaning narxi qanday hisoblanadi?", ru: "Как рассчитывается стоимость Pro?", en: "How is Pro pricing calculated?" },
      a: { uz: "Pro 3,000 so'm/30 slayd — har safar 30 ta slayd to'plami sotib olasiz. Bu Telegram boti (@aislidebot) orqali amalga oshiriladi.", ru: "Pro 3 000 сум/30 слайдов — каждый раз покупаете пакет из 30 слайдов. Это осуществляется через Telegram бот (@aislidebot).", en: "Pro 3,000 UZS/30 slides — you buy a 30-slide pack each time. This is done through the Telegram bot (@aislidebot)." },
    },
    {
      q: { uz: "Presenton narxi qancha?", ru: "Сколько стоит Presenton?", en: "How much does Presenton cost?" },
      a: { uz: "Presenton to'liq bepul va open-source. Faqat o'z serveringiz xarajatlarini to'laysiz.", ru: "Presenton полностью бесплатный и open-source. Платите только за расходы своего сервера.", en: "Presenton is completely free and open-source. You only pay for your own server costs." },
    },
    {
      q: { uz: "Bepul rejadan Pro ga qanday o'tish mumkin?", ru: "Как перейти с бесплатного на Pro?", en: "How to upgrade from Free to Pro?" },
      a: { uz: "@aislidebot Telegram botiga o'ting va to'lov amalni bajaring. Darhol ishlaydi.", ru: "Перейдите к боту @aislidebot в Telegram и выполните оплату. Работает сразу.", en: "Go to @aislidebot Telegram bot and complete the payment. Works immediately." },
    },
    {
      q: { uz: "Qaytarib to'lash siyosati bormi?", ru: "Есть ли политика возврата?", en: "Is there a refund policy?" },
      a: { uz: "Texnik muammo bo'lsa, 24 soat ichida to'lovni qaytaramiz. Telegram orqali bog'laning.", ru: "При технической проблеме возвращаем оплату в течение 24 часов. Свяжитесь через Telegram.", en: "In case of a technical issue, we refund within 24 hours. Contact us via Telegram." },
    },
  ];

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute pointer-events-none" style={{ top: "-80px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="section-badge mb-5">
            <Zap className="w-4 h-4" />
            <span>{lang === "uz" ? "Narxlar" : lang === "ru" ? "Цены" : "Pricing"}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-5" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Ochiq va Sodda Narxlar" : lang === "ru" ? "Прозрачные Цены" : "Transparent Pricing"}
          </h1>
          <p className="text-lg" style={{ color: "var(--text3)" }}>
            {lang === "uz" ? "Kredit karta talab qilinmaydi. Hech qanday yashirin to'lov yo'q." : lang === "ru" ? "Кредитная карта не нужна. Никаких скрытых платежей." : "No credit card required. No hidden fees."}
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name[lang as Lang3]}
                className="relative flex flex-col rounded-3xl border overflow-hidden transition-all duration-300"
                style={{
                  background: plan.highlighted ? "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))" : "var(--surface)",
                  borderColor: plan.highlighted ? "rgba(99,102,241,0.4)" : "var(--border)",
                  boxShadow: plan.highlighted ? "0 0 0 1px rgba(99,102,241,0.15), 0 20px 60px rgba(99,102,241,0.12)" : "none",
                }}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-600">
                    {plan.badge[lang as Lang3]}
                  </div>
                )}
                <div className="p-7 border-b" style={{ borderColor: "var(--border)" }}>
                  <h3 className="text-xl font-extrabold mb-1" style={{ color: "var(--text)" }}>{plan.name[lang as Lang3]}</h3>
                  <p className="text-sm mb-5" style={{ color: "var(--text3)" }}>{plan.desc[lang as Lang3]}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-extrabold" style={{ color: "var(--text)" }}>{plan.price}</span>
                    <span className="text-sm" style={{ color: "var(--text3)" }}>{plan.period[lang as Lang3]}</span>
                  </div>
                </div>

                <div className="p-7 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {f.included
                          ? <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" />
                          : <X className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--text3)" }} />}
                        <span className={`text-sm ${!f.included ? "opacity-50" : ""}`} style={{ color: f.included ? "var(--text2)" : "var(--text3)" }}>
                          {f.label[lang as Lang3]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-7 pt-0">
                  {plan.external ? (
                    <a
                      href={plan.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${plan.highlighted ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/30" : "border hover:border-indigo-400/50"}`}
                      style={!plan.highlighted ? { borderColor: "var(--border)", color: "var(--text2)", background: "var(--bg3)" } : {}}
                    >
                      {plan.cta[lang as Lang3]}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={plan.ctaHref}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 border"
                      style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--bg3)" }}
                    >
                      {plan.cta[lang as Lang3]}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-6" style={{ color: "var(--text3)" }}>
            💡 {lang === "uz" ? "AI Slide Bot (Telegram) orqali Pro 3,000 so'm / 30 slayd — to'g'ridan-to'g'ri Telegramda to'lang." : lang === "ru" ? "Через AI Slide Bot (Telegram) Pro 3 000 сум / 30 слайдов — оплатите прямо в Telegram." : "Via AI Slide Bot (Telegram) Pro 3,000 UZS / 30 slides — pay directly in Telegram."}
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Rejalar Taqqoslanmasi" : lang === "ru" ? "Сравнение Планов" : "Plan Comparison"}
          </h2>
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {/* Header */}
            <div className="grid grid-cols-4 border-b text-sm font-bold p-4" style={{ borderColor: "var(--border)", background: "var(--bg3)" }}>
              <div style={{ color: "var(--text3)" }}>{lang === "uz" ? "Imkoniyat" : lang === "ru" ? "Возможность" : "Feature"}</div>
              {[{ uz: "Bepul", ru: "Бесплатно", en: "Free" }, { uz: "Pro", ru: "Pro", en: "Pro" }, { uz: "Enterprise", ru: "Enterprise", en: "Enterprise" }].map((h) => (
                <div key={h.uz} className="text-center" style={{ color: "var(--text)" }}>{h[lang as Lang3]}</div>
              ))}
            </div>
            {compare.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 p-4 text-sm border-b last:border-0"
                style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--surface)" : "transparent" }}
              >
                <div style={{ color: "var(--text2)" }}>{row.feature[lang as Lang3]}</div>
                {[row.free, row.pro, row.enterprise].map((val, j) => (
                  <div key={j} className="text-center font-medium">
                    {typeof val === "string" ? (
                      <span style={{ color: val === "✓" ? "#22c55e" : val === "✗" ? "var(--text3)" : "var(--text2)" }}>{val}</span>
                    ) : (
                      <span style={{ color: "var(--text2)" }}>{(val as Record<Lang3, string>)[lang as Lang3]}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Ko'p So'raladigan Savollar" : lang === "ru" ? "Частые Вопросы" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <p className="font-semibold mb-2" style={{ color: "var(--text)" }}>{faq.q[lang as Lang3]}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text3)" }}>{faq.a[lang as Lang3]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {lang === "uz" ? "Enterprise Taklif" : lang === "ru" ? "Enterprise Предложение" : "Enterprise Offer"}
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text3)" }}>
            {lang === "uz"
              ? "10+ foydalanuvchi yoki maxsus ehtiyojlar? Biz bilan bog'laning — maxsus narx va imkoniyatlar taqdim etamiz."
              : lang === "ru"
              ? "10+ пользователей или особые требования? Свяжитесь с нами — предложим индивидуальные цены и возможности."
              : "10+ users or special requirements? Contact us — we'll offer custom pricing and capabilities."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all hover:scale-105">
              {lang === "uz" ? "Bog'lanish" : lang === "ru" ? "Связаться" : "Contact Sales"}
            </Link>
            <a href="https://t.me/aislidebot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all hover:scale-105" style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--surface)" }}>
              {lang === "uz" ? "Telegram orqali" : lang === "ru" ? "Через Telegram" : "Via Telegram"}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
