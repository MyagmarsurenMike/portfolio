"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HomeOutlined, ProjectOutlined, CodeOutlined, MailOutlined, LineChartOutlined } from "@ant-design/icons";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "mn", label: "MN" },
  { code: "ja", label: "JA" },
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY < 300) {
        setActiveSection("home");
        return;
      }

      const sections = ["projects", "stack", "growth", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: t.nav.projects, href: "#projects", icon: ProjectOutlined, id: "projects" },
    { label: t.nav.stack, href: "#stack", icon: CodeOutlined, id: "stack" },
    { label: t.nav.growth, href: "#growth", icon: LineChartOutlined, id: "growth" },
    { label: t.nav.contact, href: "#contact", icon: MailOutlined, id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "frosted-glass border border-white/[0.08] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-3">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left: Region */}
          <Link href="#" className="text-lg font-semibold text-text-secondary hover:text-accent transition-colors cursor-pointer">
            {t.nav.region}
          </Link>

          {/* Center: Navigation Pill */}
          <div className="flex items-center gap-1 px-1 py-1 rounded-full border border-white/[0.15] bg-white/[0.05] backdrop-blur-sm">
            <button
              onClick={scrollToTop}
              className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer ${
                activeSection === "home"
                  ? "bg-accent/20 text-accent shadow-lg shadow-accent/20"
                  : "text-text-secondary hover:bg-white/10 hover:text-accent"
              }`}
              title={t.nav.home}
            >
              <HomeOutlined style={{ fontSize: "16px" }} />
            </button>

            <div className="h-5 w-px bg-white/[0.15]" />

            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              const IconComponent = link.icon;
              return (
                <div key={link.id} className="flex items-center">
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-accent/20 text-accent shadow-lg shadow-accent/20"
                        : "text-text-secondary hover:bg-white/10 hover:text-accent"
                    }`}
                  >
                    <IconComponent style={{ fontSize: "16px" }} />
                    <span>{link.label}</span>
                  </a>
                  {index < navLinks.length - 1 && (
                    <div className="h-5 w-px bg-white/[0.15] mx-1" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Timer + Language Switcher */}
          <div className="flex gap-4 items-center">
            <div className="text-text-muted font-mono text-sm border-l border-white/[0.1] pl-4">
              {time || "00:00:00"}
            </div>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 px-1 py-1 rounded-full border border-white/[0.15] bg-white/[0.05] backdrop-blur-sm">
              {LANGUAGES.map((lang, i) => (
                <div key={lang.code} className="flex items-center">
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      language === lang.code
                        ? "bg-accent/20 text-accent shadow-sm shadow-accent/20"
                        : "text-text-muted hover:text-accent hover:bg-white/10"
                    }`}
                  >
                    {lang.label}
                  </button>
                  {i < LANGUAGES.length - 1 && (
                    <div className="h-3 w-px bg-white/[0.15]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="#" className="text-sm font-semibold text-text-secondary cursor-pointer">
            {t.nav.region}
          </Link>

          <div className="flex gap-3 items-center">
            {/* Mobile language switcher */}
            <div className="flex items-center gap-1 px-1 py-1 rounded-full border border-white/[0.15] bg-white/[0.05]">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    language === lang.code
                      ? "bg-accent/20 text-accent"
                      : "text-text-muted hover:text-accent"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <div className="text-text-muted font-mono text-xs">
              {time || "00:00:00"}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-accent cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.08] mt-4 pt-4 space-y-2">
            <button
              onClick={() => {
                scrollToTop();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full text-text-secondary hover:bg-white/5 hover:text-accent cursor-pointer"
            >
              <HomeOutlined style={{ fontSize: "16px" }} />
              <span>{t.nav.home}</span>
            </button>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const IconComponent = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-accent/20 text-accent"
                      : "text-text-secondary hover:bg-white/5 hover:text-accent"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconComponent style={{ fontSize: "16px" }} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
