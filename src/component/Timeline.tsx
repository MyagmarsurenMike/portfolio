"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AnimateOnScroll } from "@/component/AnimateOnScroll";
import { TypewriterText } from "@/component/TypewriterText";

export default function Timeline() {
  const { t } = useLanguage();
  const tl = t.timeline;

  return (
    <section id="growth" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <TypewriterText
            text={tl.heading}
            speed={55}
            tag="h2"
            className="text-4xl md:text-5xl font-bold mb-4 block"
            triggerOnView
          />
          <AnimateOnScroll animation="fadeUp" delay={100}>
            <p className="text-text-secondary text-lg">{tl.subtitle}</p>
          </AnimateOnScroll>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {tl.items.map((item, index) => (
              <AnimateOnScroll
                key={item.date}
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                delay={0}
              >
              <div
                className={`md:flex md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-accent rounded-full transform -translate-x-2.5 md:-translate-x-3 mt-1 flex items-center justify-center ring-4 ring-background z-10">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 ml-12 md:ml-0">
                  <div className="bg-card-surface border border-white/[0.1] rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-default">
                    <time className="text-sm font-semibold text-accent">
                      {item.date}
                    </time>
                    <h3 className="text-xl font-bold text-white my-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <AnimateOnScroll animation="fadeUp" delay={100}>
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-accent/10 to-purple-600/10 border border-accent/20">
          <h3 className="text-2xl font-bold mb-4">{tl.ctaTitle}</h3>
          <p className="text-text-secondary mb-6">{tl.ctaDesc}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors cursor-pointer"
          >
            {tl.ctaButton}
          </a>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
