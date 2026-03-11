"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LangContext";
import { Users, Bell, Package, LayoutTemplate } from "lucide-react";

const statsData = [
  { icon: Users,          value: 280000, suffix: "+", labelKey: "users" as const,      color: "from-blue-500 to-cyan-500" },
  { icon: Bell,           value: 183928, suffix: "+", labelKey: "subscribers" as const, color: "from-purple-500 to-pink-500" },
  { icon: Package,        value: 20,     suffix: "+", labelKey: "products" as const,    color: "from-green-500 to-emerald-500" },
  { icon: LayoutTemplate, value: 60,     suffix: "+", labelKey: "templates" as const,   color: "from-orange-500 to-red-500" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, label, visible }: { stat: typeof statsData[0]; label: string; visible: boolean }) {
  const count = useCountUp(stat.value, 2000, visible);
  const Icon = stat.icon;
  const fmt = (n: number) => n >= 1000 ? n.toLocaleString("en-US") : n.toString();

  return (
    <div
      className="group relative flex flex-col items-center gap-4 p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.35)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(99,102,241,0.12)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--text)" }}>
          {visible ? fmt(count) : "0"}
          {visible && count >= stat.value ? stat.suffix : ""}
        </div>
        <div className="text-sm font-medium mt-1" style={{ color: "var(--text3)" }}>
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const labels = [t.stats.users, t.stats.subscribers, t.stats.products, t.stats.templates];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, i) => (
          <StatCard key={i} stat={stat} label={labels[i]} visible={visible} />
        ))}
      </div>
    </section>
  );
}
