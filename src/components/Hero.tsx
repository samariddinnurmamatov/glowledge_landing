"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { Sparkles, ArrowRight, Star, Brain, Bot, Server, Tv, FileText } from "lucide-react";

type Lang3 = "uz" | "ru" | "en";

const products = [
  { name: "SoddaAI", icon: Brain, color: "#6366f1", bg: "rgba(99,102,241,0.12)" },
  { name: "AI Slide Bot", icon: Bot, color: "#06b6d4", bg: "rgba(6,182,212,0.12)" },
  { name: "Slayd TOP", icon: Tv, color: "#8b5cf6", bg: "rgba(139,92,246,0.12)" },
  { name: "SlaydPro", icon: Server, color: "#10b981", bg: "rgba(16,185,129,0.12)" },
  { name: "AI Docx Editor", icon: FileText, color: "#f59e0b", bg: "rgba(245,158,11,0.12)" },
];

const avatarColors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];

const copy: Record<Lang3, { badge: string; h1a: string; h1b: string; sub: string; cta1: string; cta2: string; trust: string; tagA: string; tagB: string; tagC: string; trustA: string; trustB: string; trustC: string }> = {
  uz: {
    badge: "280,000+ foydalanuvchi ishonadi · O'zbekiston #1",
    h1a: "Prezentatsiya, hujjat, insho —",
    h1b: "30 soniyada tayyor",
    sub: "Mavzu yozing → AI professional kontent yaratadi → PPTX, PDF, DOCX yuklab oling. O'zbek, Rus, Ingliz tillarida.",
    cta1: "Bepul Sinab Ko'rish",
    cta2: "Mahsulotlarni Ko'rish",
    trust: "foydalanuvchi ishonadi",
    tagA: "PPTX · PDF · DOCX",
    tagB: "UZ · RU · EN",
    tagC: "Gemini · GPT-4 · Claude",
    trustA: "✓ Kredit karta kerak emas",
    trustB: "✓ 30 soniyada natija",
    trustC: "✓ 60+ shablon",
  },
  ru: {
    badge: "280 000+ пользователей доверяют · №1 в Узбекистане",
    h1a: "Презентация, документ, эссе —",
    h1b: "готово за 30 секунд",
    sub: "Введите тему → ИИ создаёт профессиональный контент → Скачайте PPTX, PDF или DOCX. На узбекском, русском, английском.",
    cta1: "Попробовать Бесплатно",
    cta2: "Смотреть Продукты",
    trust: "пользователей доверяют",
    tagA: "PPTX · PDF · DOCX",
    tagB: "UZ · RU · EN",
    tagC: "Gemini · GPT-4 · Claude",
    trustA: "✓ Без кредитной карты",
    trustB: "✓ Результат за 30 секунд",
    trustC: "✓ 60+ шаблонов",
  },
  en: {
    badge: "280,000+ users trust us · Uzbekistan's #1",
    h1a: "Presentations, documents, essays —",
    h1b: "ready in 30 seconds",
    sub: "Enter a topic → AI creates professional content → Download PPTX, PDF or DOCX. In Uzbek, Russian, English.",
    cta1: "Try for Free",
    cta2: "View Products",
    trust: "users trust us",
    tagA: "PPTX · PDF · DOCX",
    tagB: "UZ · RU · EN",
    tagC: "Gemini · GPT-4 · Claude",
    trustA: "✓ No credit card",
    trustB: "✓ Result in 30 seconds",
    trustC: "✓ 60+ templates",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const c = copy[lang as Lang3];

  return (
    <section
      className="relative flex flex-col items-center pt-28 pb-20"
      style={{ background: "var(--bg)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial fade on grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, transparent 60%, var(--bg) 100%)",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute pointer-events-none" style={{ top: "-200px", left: "-200px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.22), transparent 70%)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-100px", right: "-150px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none" style={{ top: "40%", left: "60%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.10), transparent 70%)", filter: "blur(70px)" }} />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border text-sm font-semibold section-badge">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--indigo)" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--indigo)" }} />
          </span>
          {c.badge}
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6" style={{ color: "var(--text)" }}>
          <span className="block">{c.h1a}</span>
          <span className="block mt-2 gradient-text">{c.h1b}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text2)" }}>
          {c.sub}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[c.tagA, c.tagB, c.tagC].map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text2)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Trust micro-copy */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mb-8 text-xs" style={{ color: "var(--text3)" }}>
          <span>{c.trustA}</span>
          <span>{c.trustB}</span>
          <span>{c.trustC}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="https://sodda.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Sparkles className="w-5 h-5" />
            {c.cta1}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/products"
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-2xl border transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            style={{ color: "var(--text)", borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {c.cta2}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: "var(--indigo)" }} />
          </Link>
        </div>

        {/* Products ecosystem strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all hover:scale-105"
                style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text2)" }}
              >
                <span className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: p.bg }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: p.color }} />
                </span>
                {p.name}
              </div>
            );
          })}
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {avatarColors.map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: color, borderColor: "var(--bg)" }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-xs" style={{ color: "var(--text3)" }}>
                <span className="font-bold" style={{ color: "var(--text)" }}>280,000+</span>{" "}{c.trust}
              </p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10" style={{ background: "var(--border)" }} />

          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text3)" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>183K+ {lang === "uz" ? "Obunachi" : lang === "ru" ? "подписчиков" : "Subscribers"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>21K+ {lang === "uz" ? "Bot Foydalanuvchi" : lang === "ru" ? "пользоват. бота" : "Bot Users"}</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
