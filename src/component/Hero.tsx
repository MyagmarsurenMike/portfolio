"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TypewriterText } from "@/component/TypewriterText";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="min-h-screen pt-28 pb-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="space-y-8">
            <div>
              {/* Role label */}
              <div className="animate-slideInFromLeft flex items-center gap-2 mb-5">
                <span className="inline-block w-8 h-px bg-accent opacity-60" />
                <span className="text-sm font-medium tracking-widest uppercase text-text-muted">
                  Full Stack Developer
                </span>
              </div>
              {/* Badges */}
              <div className="animate-slideInFromLeft flex flex-wrap gap-2 mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-orb inline-block" />
                  <span className="text-xs font-medium text-accent">{h.badge1}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.05] border border-white/[0.1] rounded-full">
                  <span className="text-xs font-medium text-text-secondary">{h.badge2}</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 animate-slideInFromLeftLong animate-delay-100">
                <TypewriterText
                  text={h.headline1}
                  speed={55}
                  delay={400}
                  tag="span"
                />{" "}
                <TypewriterText
                  text={h.headline2}
                  speed={50}
                  delay={400 + h.headline1.length * 55 + 120}
                  className="gradient-text"
                  showCursor
                  tag="span"
                />
              </h1>
              <p className="text-text-secondary text-lg md:text-xl max-w-lg animate-slideInFromLeft animate-delay-200">
                {h.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors animate-slideInFromLeft animate-delay-300 cursor-pointer"
              >
                {h.cta1}
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/[0.2] text-white hover:border-accent hover:bg-white/[0.05] rounded-full font-medium transition-all animate-slideInFromLeft animate-delay-400 cursor-pointer"
              >
                {h.cta2}
              </a>
            </div>
          </div>

          {/* Avatar Card */}
          <div className="flex justify-center md:justify-end mt-12 md:mt-0">
            <div className="relative" style={{ width: "320px", height: "380px" }}>
              {/* Avatar image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-accent/10">
                <img
                  src="Billiard.jpeg"
                  alt="Myagmarsuren Nyamkhuu"
                  className="w-full h-full object-cover"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Floating status card — bottom left */}
              <div className="absolute -bottom-4 -left-6 bg-card-surface/90 backdrop-blur-md border border-white/[0.1] rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-orb" />
                  <p className="text-sm font-semibold text-white">{h.availableLabel}</p>
                </div>
                <p className="text-xs text-text-muted mt-0.5 ml-4">{h.availableValue}</p>
              </div>

              {/* Floating lang badge — top right */}
              <div className="absolute -top-3 -right-4 bg-accent/90 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg shadow-accent/30">
                <p className="text-xs font-bold text-white tracking-wide">EN · MN · JA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
