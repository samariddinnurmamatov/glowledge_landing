"use client";

import { useLang } from "@/context/LangContext";
import { Sparkles, ArrowRight, Play, Star } from "lucide-react";

const avatarColors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden pt-24 pb-16"
      style={{ background: "var(--bg)" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-160px",
          left: "-160px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border text-sm font-semibold"
          style={{
            background: "var(--surface)",
            borderColor: "rgba(99,102,241,0.25)",
            color: "var(--indigo)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "var(--indigo)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "var(--indigo)" }}
            />
          </span>
          {t.hero.badge}
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          style={{ color: "var(--text)" }}
        >
          <span className="block">{t.hero.title1}</span>
          <span className="block mt-2 gradient-text">{t.hero.title2}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text2)" }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#products"
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Sparkles className="w-5 h-5" />
            {t.hero.cta1}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-2xl border transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            style={{
              color: "var(--text)",
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <Play className="w-4 h-4 fill-current" style={{ color: "var(--indigo)" }} />
            {t.hero.cta2}
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* Avatars + rating */}
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
                <span className="font-bold" style={{ color: "var(--text)" }}>
                  280,000+
                </span>{" "}
                {t.hero.trustedBy}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block w-px h-10"
            style={{ background: "var(--border)" }}
          />

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text3)" }}>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>183K+ Obunachi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>21K+ Oylik</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: "var(--text3)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: "var(--text3)" }}
          />
        </div>
      </div>
    </section>
  );
}
