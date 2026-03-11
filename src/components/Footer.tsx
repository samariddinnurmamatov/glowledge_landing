"use client";

import { useLang } from "@/context/LangContext";
import { Sparkles, ExternalLink } from "lucide-react";

const tgIcon = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const liIcon = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const footerLinks = {
  products: [
    { name: "SoddaAI",        href: "https://sodda.ai" },
    { name: "AI Slide Bot",   href: "https://t.me/aislidebot" },
    { name: "Slayd TOP",      href: "https://t.me/slaydtop" },
    { name: "Presenton",      href: "#" },
    { name: "AI Docx Editor", href: "#" },
  ],
  company: [
    { name: "Haqimizda", href: "#" },
    { name: "Jamoa",     href: "#team" },
    { name: "Narxlar",   href: "#pricing" },
    { name: "Blog",      href: "#" },
    { name: "Kontakt",   href: "#" },
  ],
  social: [
    { name: "Telegram Bot", href: "https://t.me/aislidebot",                       icon: tgIcon },
    { name: "Slayd TOP",    href: "https://t.me/slaydtop",                         icon: tgIcon },
    { name: "LinkedIn",     href: "https://www.linkedin.com/company/glowledge",    icon: liIcon },
  ],
};

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="border-t pt-16 pb-8 px-4 sm:px-6"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ color: "var(--text)" }}>
                Glow<span className="gradient-text">ledge</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text3)" }}>
              {t.footer.tagline}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text3)" }}>
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>183,928+ Obunachi</span>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text3)" }}>
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>21,707+ Oylik foydalanuvchi</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "var(--text)" }}>
              {t.footer.products}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1.5 text-sm transition-colors group"
                    style={{ color: "var(--text3)" }}
                  >
                    {link.name}
                    {link.href.startsWith("http") && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "var(--text)" }}>
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "var(--text3)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: "var(--text)" }}>
              {t.footer.social}
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm transition-colors group"
                    style={{ color: "var(--text3)" }}
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                      style={{ background: "var(--bg3)" }}
                    >
                      {link.icon}
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text3)" }}>
            © {new Date().getFullYear()} Glowledge. {t.footer.rights}
          </p>
          <div className="flex items-center gap-1 text-sm" style={{ color: "var(--text3)" }}>
            <span>O&apos;zbekiston bilan</span>
            <span className="text-red-500">❤️</span>
            <span>qurilgan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
