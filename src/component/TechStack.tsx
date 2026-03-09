"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGithubactions,
  SiAmazonec2,
  SiVercel,
} from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateOnScroll } from "@/component/AnimateOnScroll";
import { TypewriterText } from "@/component/TypewriterText";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export default function TechStack() {
  const { t } = useLanguage();
  const ts = t.techStack;

  const techGroups = [
    {
      category: ts.frontend,
      items: [
        { name: "React 19", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Ant Design", icon: <AiOutlineAntDesign /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "HTML5 / CSS3", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
      ] as TechItem[],
    },
    {
      category: ts.devops,
      items: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> },
        { name: "AWS EC2", icon: <SiAmazonec2 /> },
        { name: "Vercel", icon: <SiVercel /> },
      ] as TechItem[],
    },
  ];

  return (
    <section id="stack" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <TypewriterText
          text={ts.heading}
          speed={65}
          tag="h2"
          className="text-4xl md:text-5xl font-bold mb-16 block"
          triggerOnView
        />

        <div className="space-y-12">
          {techGroups.map((group, idx) => (
            <AnimateOnScroll key={group.category} animation="fadeUp" delay={idx * 120}>
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-6">{group.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {group.items.map((tech, i) => (
                  <AnimateOnScroll key={tech.name} animation="fadeUp" delay={i * 40}>
                  <div
                    className="card-hover p-4 rounded-xl bg-card-surface flex flex-col items-center justify-center text-center min-h-24 cursor-pointer"
                  >
                    <div className="text-3xl mb-2 text-accent" style={{ fontSize: "32px" }}>
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {tech.name}
                    </span>
                  </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA Callout */}
        <AnimateOnScroll animation="fadeUp" delay={100}>
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-accent/10 to-purple-600/10 border border-accent/20">
          <div className="md:flex justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">{ts.ctaTitle}</h3>
              <p className="text-text-secondary">{ts.ctaDesc}</p>
            </div>
            <a
              href="#contact"
              className="inline-block mt-4 md:mt-0 px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              {ts.ctaButton}
            </a>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
