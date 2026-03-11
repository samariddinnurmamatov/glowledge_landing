"use client";

import { useLang } from "@/context/LangContext";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {t.howItWorks.title}
          </h2>
          <p className="text-lg" style={{ color: "var(--text3)" }}>
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div
            className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5"
            style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)", opacity: 0.3 }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300 z-10 relative">
                    <span className="text-xl font-black text-white">{step.step}</span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                </div>

                <div
                  className="rounded-2xl border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <h3 className="text-lg font-bold mb-3" style={{ color: "var(--text)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text3)" }}>
                    {step.desc}
                  </p>
                </div>

                {/* Arrow */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 z-20">
                    <ArrowRight className="w-6 h-6" style={{ color: "var(--indigo)", opacity: 0.5 }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo banner */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 border"
            style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.2)" }}
          >
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span className="text-sm font-semibold" style={{ color: "var(--indigo)" }}>
              O&apos;rtacha vaqt: ~15 soniya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
