"use client";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Send,
  Building2,
  Users,
  Zap,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const t = {
  uz: {
    badge: "Bog'lanish",
    heroTitle: "Biz bilan",
    heroTitleAccent: "Bog'laning",
    heroDesc:
      "Savollaringiz bormi? Korporativ taklif kerakmi? Yoki shunchaki salom deysizmi? Biz doim tayyor!",
    form: {
      title: "Xabar yuboring",
      name: "Ism-Familiya",
      namePh: "Shahzod Rahimov",
      email: "Email manzil",
      emailPh: "siz@email.com",
      company: "Kompaniya (ixtiyoriy)",
      companyPh: "Kompaniya nomi",
      subject: "Mavzu",
      subjectPh: "Sizni qiziqtirgan narsa...",
      message: "Xabar",
      messagePh: "Batafsil yozing...",
      submit: "Xabar yuborish",
      sending: "Yuborilmoqda...",
      success: "Xabaringiz yuborildi! Tez orada javob beramiz.",
    },
    channels: {
      title: "Muloqot kanallari",
      telegram: {
        label: "Telegram Bot",
        desc: "Tez javob uchun botimizga yozing",
      },
      email: {
        label: "Email",
        desc: "Rasmiy so'rovlar uchun",
      },
      channel: {
        label: "Slayd TOP kanali",
        desc: "Yangiliklar va maslahatlar",
      },
      location: {
        label: "Joylashuv",
        desc: "Toshkent, O'zbekiston",
      },
    },
    enterprise: {
      badge: "Enterprise",
      title: "Korporativ yechim kerakmi?",
      desc: "Katta jamoalar va korporativ mijozlar uchun maxsus narxlar, API kirish imkoniyati, va shaxsiy qo'llab-quvvatlash mavjud.",
      features: [
        "Cheksiz foydalanuvchilar",
        "Maxsus API integratsiya",
        "SLA kafolati",
        "Shaxsiy menejer",
        "Korporativ billing",
        "Maxsus treninglar",
      ],
      cta: "Enterprise muzokaralari",
      ctaDesc: "Yoki @aislidebot orqali yozing",
    },
    whyUs: {
      title: "Nima uchun Glowledge?",
      items: [
        {
          icon: "🇺🇿",
          title: "Mahalliy bozor",
          desc: "O'zbek tilidagi AI — bizning asosiy ustunligimiz",
        },
        {
          icon: "⚡",
          title: "Tez javob",
          desc: "24 soat ichida javob beramiz",
        },
        {
          icon: "🤝",
          title: "Hamkorlik",
          desc: "Uzoq muddatli sheriklik munosabatlari",
        },
        {
          icon: "🔒",
          title: "Ishonch",
          desc: "280,000+ foydalanuvchi bizga ishonadi",
        },
      ],
    },
  },
  ru: {
    badge: "Контакты",
    heroTitle: "Свяжитесь",
    heroTitleAccent: "с нами",
    heroDesc:
      "Есть вопросы? Нужно корпоративное предложение? Или просто хотите сказать привет? Мы всегда рады!",
    form: {
      title: "Отправьте сообщение",
      name: "Имя и Фамилия",
      namePh: "Иван Иванов",
      email: "Email адрес",
      emailPh: "you@email.com",
      company: "Компания (необязательно)",
      companyPh: "Название компании",
      subject: "Тема",
      subjectPh: "Что вас интересует...",
      message: "Сообщение",
      messagePh: "Опишите подробнее...",
      submit: "Отправить сообщение",
      sending: "Отправка...",
      success: "Сообщение отправлено! Мы ответим в ближайшее время.",
    },
    channels: {
      title: "Каналы связи",
      telegram: {
        label: "Telegram Бот",
        desc: "Напишите боту для быстрого ответа",
      },
      email: {
        label: "Email",
        desc: "Для официальных запросов",
      },
      channel: {
        label: "Канал Slayd TOP",
        desc: "Новости и советы",
      },
      location: {
        label: "Расположение",
        desc: "Ташкент, Узбекистан",
      },
    },
    enterprise: {
      badge: "Enterprise",
      title: "Нужно корпоративное решение?",
      desc: "Для больших команд и корпоративных клиентов доступны специальные цены, API доступ и персональная поддержка.",
      features: [
        "Неограниченные пользователи",
        "Специальная API интеграция",
        "Гарантия SLA",
        "Личный менеджер",
        "Корпоративный биллинг",
        "Специальные тренинги",
      ],
      cta: "Переговоры Enterprise",
      ctaDesc: "Или напишите через @aislidebot",
    },
    whyUs: {
      title: "Почему Glowledge?",
      items: [
        {
          icon: "🇺🇿",
          title: "Локальный рынок",
          desc: "AI на узбекском языке — наше главное преимущество",
        },
        {
          icon: "⚡",
          title: "Быстрый ответ",
          desc: "Отвечаем в течение 24 часов",
        },
        {
          icon: "🤝",
          title: "Партнёрство",
          desc: "Долгосрочные партнёрские отношения",
        },
        {
          icon: "🔒",
          title: "Доверие",
          desc: "280 000+ пользователей доверяют нам",
        },
      ],
    },
  },
  en: {
    badge: "Contact",
    heroTitle: "Get in",
    heroTitleAccent: "Touch",
    heroDesc:
      "Have questions? Need an enterprise deal? Or just want to say hi? We're always ready!",
    form: {
      title: "Send a Message",
      name: "Full Name",
      namePh: "John Smith",
      email: "Email Address",
      emailPh: "you@email.com",
      company: "Company (optional)",
      companyPh: "Company name",
      subject: "Subject",
      subjectPh: "What are you interested in...",
      message: "Message",
      messagePh: "Tell us more...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent! We'll get back to you soon.",
    },
    channels: {
      title: "Contact Channels",
      telegram: {
        label: "Telegram Bot",
        desc: "Message our bot for quick responses",
      },
      email: {
        label: "Email",
        desc: "For official inquiries",
      },
      channel: {
        label: "Slayd TOP Channel",
        desc: "News and tips",
      },
      location: {
        label: "Location",
        desc: "Tashkent, Uzbekistan",
      },
    },
    enterprise: {
      badge: "Enterprise",
      title: "Need an Enterprise Solution?",
      desc: "For large teams and corporate clients, we offer special pricing, API access, and dedicated support.",
      features: [
        "Unlimited users",
        "Custom API integration",
        "SLA guarantee",
        "Dedicated account manager",
        "Corporate billing",
        "Custom training sessions",
      ],
      cta: "Enterprise Inquiry",
      ctaDesc: "Or message us via @aislidebot",
    },
    whyUs: {
      title: "Why Glowledge?",
      items: [
        {
          icon: "🇺🇿",
          title: "Local Market",
          desc: "AI in Uzbek language — our key advantage",
        },
        {
          icon: "⚡",
          title: "Fast Response",
          desc: "We reply within 24 hours",
        },
        {
          icon: "🤝",
          title: "Partnership",
          desc: "Long-term partnership relationships",
        },
        {
          icon: "🔒",
          title: "Trust",
          desc: "280,000+ users trust us",
        },
      ],
    },
  },
};

const channels = [
  {
    icon: <MessageCircle size={20} />,
    key: "telegram",
    href: "https://t.me/aislidebot",
    value: "@aislidebot",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Mail size={20} />,
    key: "email",
    href: "mailto:hello@glowledge.uz",
    value: "hello@glowledge.uz",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Phone size={20} />,
    key: "channel",
    href: "https://t.me/slaydtop",
    value: "@slaydtop",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <MapPin size={20} />,
    key: "location",
    href: "#",
    value: "",
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function ContactPage() {
  const { lang } = useLang();
  const c = t[lang];

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  }

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-6 text-center overflow-x-hidden"
        style={{ background: "var(--bg-2)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, var(--indigo), transparent)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <span className="section-badge">{c.badge}</span>
          <h1 className="text-5xl font-black mt-6 mb-4 leading-tight">
            {c.heroTitle}{" "}
            <span style={{ color: "var(--indigo)" }}>{c.heroTitleAccent}</span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            {c.heroDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-8"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h2 className="text-2xl font-bold mb-6">{c.form.title}</h2>

              {sent ? (
                <div className="flex flex-col items-center py-12 gap-4 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(99,102,241,0.15)" }}
                  >
                    <CheckCircle size={32} style={{ color: "var(--indigo)" }} />
                  </div>
                  <p className="text-lg font-semibold">{c.form.success}</p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="text-sm underline"
                    style={{ color: "var(--indigo)" }}
                  >
                    {lang === "uz"
                      ? "Yana xabar yuborish"
                      : lang === "ru"
                      ? "Отправить ещё"
                      : "Send another"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.form.name}
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={c.form.namePh}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          background: "var(--bg-2)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.form.email}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={c.form.emailPh}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          background: "var(--bg-2)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.form.company}
                    </label>
                    <input
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={c.form.companyPh}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        background: "var(--bg-2)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.form.subject}
                    </label>
                    <input
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder={c.form.subjectPh}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        background: "var(--bg-2)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {c.form.message}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={c.form.messagePh}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      style={{
                        background: "var(--bg-2)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-semibold text-white transition-all"
                    style={{
                      background: sending
                        ? "var(--border)"
                        : "var(--indigo)",
                      cursor: sending ? "not-allowed" : "pointer",
                    }}
                  >
                    <Send size={16} />
                    {sending ? c.form.sending : c.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Channels */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-lg font-bold mb-5">{c.channels.title}</h3>
              <div className="space-y-4">
                {channels.map((ch) => {
                  const info = c.channels[ch.key as keyof typeof c.channels] as {
                    label: string;
                    desc: string;
                  };
                  const isLink = ch.href !== "#";
                  const content = (
                    <div className="flex items-start gap-3 group">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ch.gradient} flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {ch.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold">{info.label}</div>
                        <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                          {info.desc}
                        </div>
                        {ch.value && (
                          <div
                            className="text-sm font-mono mt-1"
                            style={{ color: "var(--indigo)" }}
                          >
                            {ch.value}
                          </div>
                        )}
                      </div>
                      {isLink && (
                        <ChevronRight
                          size={16}
                          style={{ color: "var(--muted)" }}
                          className="flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform"
                        />
                      )}
                    </div>
                  );

                  return isLink ? (
                    <a
                      key={ch.key}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={ch.key}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Why Us */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-lg font-bold mb-5">{c.whyUs.title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {c.whyUs.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl p-3"
                    style={{ background: "var(--bg-2)" }}
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div
                      className="text-xs mt-0.5 leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.15) 100%)",
              border: "1px solid rgba(99,102,241,0.3)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(99,102,241,0.3), transparent)",
              }}
            />
            <div className="relative flex flex-col md:flex-row gap-10 items-start">
              {/* Left */}
              <div className="flex-1">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{
                    background: "rgba(99,102,241,0.2)",
                    color: "var(--indigo)",
                    border: "1px solid rgba(99,102,241,0.3)",
                  }}
                >
                  <Building2 size={12} />
                  {c.enterprise.badge}
                </span>
                <h2 className="text-3xl font-black mb-4">{c.enterprise.title}</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  {c.enterprise.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a
                    href="https://t.me/aislidebot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "var(--indigo)" }}
                  >
                    <MessageCircle size={16} />
                    {c.enterprise.cta}
                  </a>
                  <a
                    href="mailto:enterprise@glowledge.uz"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:opacity-80"
                    style={{
                      background: "var(--bg-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  >
                    <Mail size={16} />
                    enterprise@glowledge.uz
                  </a>
                </div>
                <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>
                  {c.enterprise.ctaDesc}
                </p>
              </div>

              {/* Right — feature list */}
              <div
                className="rounded-2xl p-6 min-w-64"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users size={16} style={{ color: "var(--indigo)" }} />
                  <span className="font-semibold text-sm">
                    {lang === "uz"
                      ? "Enterprise imkoniyatlari"
                      : lang === "ru"
                      ? "Enterprise возможности"
                      : "Enterprise Features"}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {c.enterprise.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Zap size={14} style={{ color: "var(--indigo)" }} className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
