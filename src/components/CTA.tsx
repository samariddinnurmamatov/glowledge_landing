"use client";

import { useLang } from "@/context/LangContext";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  const { t } = useLang();

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Gradient border card */}
        <div
          className="rounded-3xl p-px"
          style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}
        >
          <div
            className="rounded-3xl p-10 sm:p-16 text-center overflow-hidden relative"
            style={{ background: "var(--bg2)" }}
          >
            {/* BG blobs */}
            <div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15), transparent)", filter: "blur(40px)" }}
            />
            <div
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent)", filter: "blur(40px)" }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-8 shadow-2xl shadow-indigo-500/30">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6" style={{ color: "var(--text)" }}>
                {t.cta.title}
              </h2>
              <p
                className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                style={{ color: "var(--text2)" }}
              >
                {t.cta.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://sodda.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <Sparkles className="w-5 h-5" />
                  {t.cta.button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://t.me/aislidebot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-2xl border transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                  style={{
                    color: "var(--text)",
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  {"secondary" in t.cta ? (t.cta as { secondary: string }).secondary : "Telegram Bot"}
                </a>
              </div>

              {/* Note */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <p className="text-sm flex items-center gap-1.5" style={{ color: "var(--text3)" }}>
                  <Zap className="w-3.5 h-3.5 text-yellow-500" />
                  {t.cta.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
