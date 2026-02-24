"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HomeOutlined, ProjectOutlined, CodeOutlined, MailOutlined, LineChartOutlined } from "@ant-design/icons";

export default function Navbar() {
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

      // Show home as active when at the top
      if (window.scrollY < 300) {
        setActiveSection("home");
        return;
      }

      // Detect active section
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
    // Set initial time
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects", icon: ProjectOutlined },
    { label: "Stack", href: "#stack", icon: CodeOutlined },
    { label: "Growth", href: "#growth", icon: LineChartOutlined },
    { label: "Contact", href: "#contact", icon: MailOutlined },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "frosted-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left: Region */}
          <Link href="#" className="text-lg font-semibold text-text-secondary hover:text-accent transition-colors">
            asia/mongolia
          </Link>

          {/* Center: Navigation with Bordered Pill Container */}
          <div className="flex items-center gap-1 px-1 py-1 rounded-full border border-white/[0.15] bg-white/[0.05] backdrop-blur-sm">
            {/* Home Icon */}
            <button
              onClick={scrollToTop}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                activeSection === "home"
                  ? "bg-accent/20 text-accent shadow-lg shadow-accent/20"
                  : "text-text-secondary hover:bg-white/10 hover:text-accent"
              }`}
              title="Back to top"
            >
              <HomeOutlined style={{ fontSize: "16px" }} />
            </button>

            <div className="h-5 w-px bg-white/[0.15]" />

            {navLinks.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const IconComponent = link.icon;
              return (
                <div key={link.label} className="flex items-center">
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
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

          {/* Right: Timer + CTA */}
          <div className="flex gap-6 items-center">
            <div className="text-text-muted font-mono text-sm border-l border-white/[0.1] pl-6">
              {time || "00:00:00"}
            </div>
            {/* <a
              href="#contact"
              className="px-6 py-2 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors text-sm"
            >
              Hire Me
            </a> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="#" className="text-sm font-semibold text-text-secondary">
            asia/mongolia
          </Link>

          <div className="flex gap-4 items-center">
            <div className="text-text-muted font-mono text-xs">
              {time || "00:00:00"}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-accent"
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 w-full text-text-secondary hover:bg-white/5 hover:text-accent"
            >
              <HomeOutlined style={{ fontSize: "16px" }} />
              <span>Home</span>
            </button>

            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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
            <a
              href="#contact"
              className="block px-6 py-2 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors text-center text-sm mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
