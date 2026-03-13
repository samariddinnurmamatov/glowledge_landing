"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { Send, MessageCircle, Mail, MapPin, Building2, CheckCircle } from "lucide-react";

type L = "uz" | "ru" | "en";

const content = {
  badge: { uz: "Bog'lanish", ru: "Контакты", en: "Contact" },
  title: { uz: "Biz bilan bog'laning", ru: "Свяжитесь с нами", en: "Get in touch" },
  sub: {
    uz: "Savol, taklif yoki hamkorlik bo'yicha murojaat qiling. Biz 24 soat ichida javob beramiz.",
    ru: "Задайте вопрос, оставьте предложение или запросите партнёрство. Мы ответим в течение 24 часов.",
    en: "Ask a question, make a suggestion, or request a partnership. We'll respond within 24 hours.",
  },
  nameLabel: { uz: "Ismingiz", ru: "Ваше имя", en: "Your name" },
  emailLabel: { uz: "Email", ru: "Email", en: "Email" },
  typeLabel: { uz: "Murojaat turi", ru: "Тип обращения", en: "Inquiry type" },
  types: {
    uz: ["Umumiy savol", "Hamkorlik", "Texnik yordam", "Narx so'rovi", "Boshqa"],
    ru: ["Общий вопрос", "Партнёрство", "Техподдержка", "Запрос цены", "Другое"],
    en: ["General question", "Partnership", "Technical support", "Pricing inquiry", "Other"],
  },
  msgLabel: { uz: "Xabar", ru: "Сообщение", en: "Message" },
  msgPlaceholder: {
    uz: "Savolingizni yoki taklifingizni yozing...",
    ru: "Напишите ваш вопрос или предложение...",
    en: "Write your question or suggestion...",
  },
  submit: { uz: "Yuborish", ru: "Отправить", en: "Send message" },
  sending: { uz: "Yuborilmoqda...", ru: "Отправка...", en: "Sending..." },
  successTitle: { uz: "Xabar yuborildi!", ru: "Сообщение отправлено!", en: "Message sent!" },
  successMsg: {
    uz: "Rahmat! Biz 24 soat ichida siz bilan bog'lanamiz.",
    ru: "Спасибо! Мы свяжемся с вами в течение 24 часов.",
    en: "Thank you! We'll get back to you within 24 hours.",
  },
  infoTitle: { uz: "Aloqa ma'lumotlari", ru: "Контактная информация", en: "Contact information" },
  enterpriseTitle: { uz: "Korporativ yechim?", ru: "Корпоративное решение?", en: "Enterprise solution?" },
  enterpriseDesc: {
    uz: "Kompaniyangiz uchun alohida tariflar, integratsiya va texnik qo'llab-quvvatlash taklif qilamiz.",
    ru: "Предлагаем специальные тарифы, интеграцию и техническую поддержку для вашей компании.",
    en: "We offer custom pricing, integration, and technical support for your company.",
  },
  enterpriseCta: { uz: "Hamkorlik qilish", ru: "Стать партнёром", en: "Become a partner" },
};

const contactInfo = [
  { icon: MessageCircle, label: { uz: "Telegram Bot", ru: "Telegram Bot", en: "Telegram Bot" }, value: "@aislidebot", href: "https://t.me/aislidebot", color: "#6366f1" },
  { icon: Mail, label: { uz: "Email", ru: "Email", en: "Email" }, value: "info@sodda.ai", href: "mailto:info@sodda.ai", color: "#8b5cf6" },
  { icon: MapPin, label: { uz: "Manzil", ru: "Адрес", en: "Location" }, value: "Toshkent, O'zbekiston", href: "https://maps.google.com/?q=Tashkent,Uzbekistan", color: "#06b6d4" },
  { icon: Building2, label: { uz: "Kompaniya", ru: "Компания", en: "Company" }, value: "Glowledge", href: "/about", color: "#10b981" },
];

export default function ContactPage() {
  const { lang } = useLang();
  const l = lang as L;

  const [formData, setFormData] = useState({ name: "", email: "", type: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden" style={{ background: "var(--bg2)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute pointer-events-none" style={{ top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="section-badge mb-5">
            <Send className="w-4 h-4" />
            <span>{content.badge[l]}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6" style={{ color: "var(--text)" }}>
            {content.title[l]}
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto" style={{ color: "var(--text3)" }}>
            {content.sub[l]}
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-3xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>{content.successTitle[l]}</h2>
                    <p style={{ color: "var(--text3)" }}>{content.successMsg[l]}</p>
                    <button
                      onClick={() => { setSent(false); setFormData({ name: "", email: "", type: "", message: "" }); }}
                      className="mt-8 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all"
                      style={{ background: "var(--bg3)", color: "var(--text2)" }}
                    >
                      {l === "uz" ? "Yangi xabar" : l === "ru" ? "Новое сообщение" : "New message"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text2)" }}>{content.nameLabel[l]}</label>
                        <input
                          type="text" required value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                          style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text)" }}
                          placeholder={l === "uz" ? "Ismingiz" : l === "ru" ? "Ваше имя" : "Your name"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "var(--text2)" }}>{content.emailLabel[l]}</label>
                        <input
                          type="email" required value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                          style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text)" }}
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "var(--text2)" }}>{content.typeLabel[l]}</label>
                      <select
                        required value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                        style={{ background: "var(--bg3)", borderColor: "var(--border)", color: formData.type ? "var(--text)" : "var(--text3)" }}
                      >
                        <option value="" disabled>{l === "uz" ? "Tanlang..." : l === "ru" ? "Выберите..." : "Select..."}</option>
                        {content.types[l].map((t) => (
                          <option key={t} value={t} style={{ color: "var(--text)", background: "var(--bg2)" }}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "var(--text2)" }}>{content.msgLabel[l]}</label>
                      <textarea
                        required rows={5} value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                        style={{ background: "var(--bg3)", borderColor: "var(--border)", color: "var(--text)" }}
                        placeholder={content.msgPlaceholder[l]}
                      />
                    </div>

                    <button
                      type="submit" disabled={sending}
                      className="w-full py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60"
                      style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff" }}
                    >
                      <Send className="w-4 h-4" />
                      {sending ? content.sending[l] : content.submit[l]}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact info */}
              <div className="p-6 rounded-3xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <h3 className="text-lg font-bold mb-5" style={{ color: "var(--text)" }}>{content.infoTitle[l]}</h3>
                <div className="space-y-3">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={info.value}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.01]"
                        style={{ background: "var(--bg3)" }}
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${info.color}20` }}>
                          <Icon className="w-5 h-5" style={{ color: info.color }} />
                        </div>
                        <div>
                          <div className="text-xs mb-0.5" style={{ color: "var(--text3)" }}>{info.label[l]}</div>
                          <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Enterprise */}
              <div className="p-6 rounded-3xl border relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))", borderColor: "rgba(99,102,241,0.3)" }}>
                <div className="absolute pointer-events-none" style={{ top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)", filter: "blur(30px)" }} />
                <Building2 className="w-8 h-8 mb-3" style={{ color: "#6366f1" }} />
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--text)" }}>{content.enterpriseTitle[l]}</h3>
                <p className="text-sm mb-5" style={{ color: "var(--text3)" }}>{content.enterpriseDesc[l]}</p>
                <a
                  href="https://t.me/aislidebot" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  {content.enterpriseCta[l]}
                </a>
              </div>

              {/* Telegram community */}
              <div className="p-5 rounded-3xl border flex items-center gap-4" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow" style={{ background: "linear-gradient(135deg,#229ED9,#1a7dc4)" }}>
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold mb-0.5" style={{ color: "var(--text)" }}>Slayd TOP</div>
                  <div className="text-xs" style={{ color: "var(--text3)" }}>
                    {l === "uz" ? "183,928 obunachi — AI yangiliklar kanali" : l === "ru" ? "183 928 подписчиков — канал AI новостей" : "183,928 subscribers — AI news channel"}
                  </div>
                </div>
                <a
                  href="https://t.me/slaydtop" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold flex-shrink-0 transition-all hover:opacity-80"
                  style={{ background: "var(--bg3)", color: "var(--indigo)" }}
                >
                  {l === "uz" ? "Qo'shilish" : l === "ru" ? "Вступить" : "Join"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
