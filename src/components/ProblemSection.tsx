"use client";

import { useLang } from "@/context/LangContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProblemSection() {
  const { t } = useLang();
  const p = t.problem;

  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border"
            style={{ background: "rgba(239,68,68,0.08)", borderColor: "rgba(239,68,68,0.2)", color: "#ef4444" }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            {p.badge}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-2xl sm:text-4xl font-extrabold text-center mb-10 leading-tight"
          style={{ color: "var(--text)" }}
        >
          {p.title}
        </h2>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {p.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--text2)" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="flex justify-center">
          <Link
            href="#products"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-2xl transition-all hover:scale-105"
            style={{ background: "rgba(99,102,241,0.12)", color: "var(--indigo)", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            {p.solution}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
