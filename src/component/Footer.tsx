"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0a] section-padding">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-col sm:flex-row gap-4">
        <p className="text-text-muted text-sm">
          © {year} Myagmarsuren Nyamkhuu. {f.rights}
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/MyagmarsurenMike"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors cursor-pointer"
          >
            {f.github}
          </a>
          <a
            href="mailto:myagmarsuren014@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors cursor-pointer"
          >
            {f.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
