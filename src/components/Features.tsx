"use client";

import { useLang } from "@/context/LangContext";
import { Globe, Zap, Download, LayoutTemplate, Brain, DollarSign } from "lucide-react";

const iconMap = [Globe, Zap, Download, LayoutTemplate, Brain, DollarSign];
const colorMap = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-orange-500 to-amber-500",
  "from-red-500 to-rose-500",
  "from-yellow-500 to-orange-500",
];
const glowMap = [
  "rgba(59,130,246,0.12)",
  "rgba(139,92,246,0.12)",
  "rgba(16,185,129,0.12)",
  "rgba(249,115,22,0.12)",
  "rgba(239,68,68,0.12)",
  "rgba(234,179,8,0.12)",
];

export default function Features() {
  const { t } = useLang();

  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "var(--bg3)" }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent)", filter: "blur(60px)", transform: "translateY(-50%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent)", filter: "blur(60px)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 border"
            style={{ background: "rgba(139,92,246,0.08)", borderColor: "rgba(139,92,246,0.2)", color: "var(--purple)" }}
          >
            <Brain className="w-4 h-4" />
            <span className="text-sm font-semibold">{t.features.title}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            {t.features.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text3)" }}>
            {t.features.subtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((feature, i) => {
            const Icon = iconMap[i];
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${glowMap[i]}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[i]} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--text)" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text3)" }}>
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* AI Models banner */}
        <div
          className="mt-16 rounded-3xl p-px"
          style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}
        >
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "var(--bg)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl flex-shrink-0">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold" style={{ color: "var(--text)" }}>
                  Google Gemini · GPT-4 · Claude AI
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--text3)" }}>
                  Eng yaxshi AI modellar bilan ishlaydi
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex -space-x-1">
                {[
                  { l: "G", bg: "#4285F4" },
                  { l: "O", bg: "#34A853" },
                  { l: "C", bg: "#FF6C00" },
                ].map(({ l, bg }, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white border-2"
                    style={{ background: bg, borderColor: "var(--bg)" }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--text2)" }}>
                3+ AI Models
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
