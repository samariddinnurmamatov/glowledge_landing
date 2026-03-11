"use client";

import { useLang } from "@/context/LangContext";
import { Check, Sparkles, Zap } from "lucide-react";

export default function Pricing() {
  const { t } = useLang();

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "var(--bg3)" }}
    >
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.1), transparent)", filter: "blur(80px)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
            style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)", color: "#10b981" }}
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">{t.pricing.title}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {t.pricing.title}
          </h2>
          <p className="text-lg" style={{ color: "var(--text3)" }}>
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {t.pricing.plans.map((plan, i) => (
            <div
              key={i}
              className="relative rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={
                plan.highlighted
                  ? { padding: "1px", background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }
                  : { border: "1px solid var(--border)" }
              }
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="flex items-center gap-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {t.pricing.popular}
                  </span>
                </div>
              )}

              <div
                className="h-full flex flex-col p-7 rounded-3xl"
                style={{ background: "var(--bg2)" }}
              >
                {plan.highlighted && <div className="h-4 mb-2" />}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
                    {plan.name}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text3)" }}>{plan.desc}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-4xl font-extrabold ${plan.highlighted ? "gradient-text" : ""}`}
                      style={plan.highlighted ? {} : { color: "var(--text)" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm mb-1 leading-tight" style={{ color: "var(--text3)" }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <div
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.highlighted ? "bg-gradient-to-br from-indigo-500 to-purple-600" : ""
                        }`}
                        style={plan.highlighted ? {} : { background: "var(--bg3)" }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: plan.highlighted ? "white" : "var(--text2)" }}
                        />
                      </div>
                      <span style={{ color: "var(--text2)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                      : ""
                  }`}
                  style={
                    plan.highlighted
                      ? {}
                      : {
                          background: "var(--bg3)",
                          color: "var(--text2)",
                          border: "1px solid var(--border)",
                        }
                  }
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm mt-8" style={{ color: "var(--text3)" }}>
          💡 AI Slide Bot orqali:{" "}
          <span className="font-semibold" style={{ color: "var(--text2)" }}>
            @aislidebot
          </span>{" "}
          — Telegramda to&apos;g&apos;ridan-to&apos;g&apos;ri foydalaning
        </p>
      </div>
    </section>
  );
}
