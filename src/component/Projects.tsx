"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AnimateOnScroll } from "@/component/AnimateOnScroll";
import { TypewriterText } from "@/component/TypewriterText";

interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

const tagColor = (tag: string): string => {
  const colors: { [key: string]: string } = {
    "Next.js": "bg-black text-white",
    React: "bg-blue-500/20 text-blue-300",
    TypeScript: "bg-blue-600/20 text-blue-200",
    Docker: "bg-sky-500/20 text-sky-300",
    "GitHub Actions": "bg-gray-600/20 text-gray-300",
    "AWS EC2": "bg-orange-500/20 text-orange-300",
    CloudConvert: "bg-purple-500/20 text-purple-300",
    "gantt-task-react": "bg-green-500/20 text-green-300",
    "REST API": "bg-purple-500/20 text-purple-300",
    "Tailwind CSS": "bg-cyan-500/20 text-cyan-300",
    Gantt: "bg-green-500/20 text-green-300",
  };
  return colors[tag] || "bg-gray-700/20 text-gray-300";
};

const ProjectImage = ({ src, title }: { src?: string; title: string }) => {
  if (src) {
    return (
      <div className="w-full h-64 md:h-80 bg-card-nested rounded-lg border border-white/[0.08] overflow-hidden">
        <img src={src} alt={title} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="w-full h-64 md:h-80 bg-card-nested rounded-lg border border-white/[0.08] flex flex-col overflow-hidden">
      <div className="bg-card-surface border-b border-white/[0.08] px-4 py-3 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-xs text-text-muted ml-3">{title}</span>
      </div>
      <div className="flex-1 bg-gradient-to-br from-accent/5 to-purple-600/5 flex items-center justify-center">
        <p className="text-text-muted text-sm">Add screenshot to public/</p>
      </div>
    </div>
  );
};

const featuredTags = [
  ["Next.js", "Docker", "AWS EC2", "GitHub Actions", "CloudConvert"],
  ["React", "TypeScript", "Gantt", "REST API"],
];
const gridTags = [["Next.js", "TypeScript", "Tailwind CSS"]];
const featuredImages = [
  "/projects/school-management.png",
  "/projects/gantt-chart.png",
];

export default function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  const featuredProjects: Project[] = p.projects.slice(0, 2).map((proj, i) => ({
    ...proj,
    tags: featuredTags[i],
    featured: true,
    image: featuredImages[i],
  }));

  const gridProjects: Project[] = p.projects.slice(2).map((proj, i) => ({
    ...proj,
    tags: gridTags[i] || [],
  }));

  return (
    <section id="projects" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <TypewriterText
          text={p.heading}
          speed={70}
          tag="h2"
          className="text-4xl md:text-5xl font-bold mb-16 block"
          triggerOnView
        />

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, idx) => (
            <AnimateOnScroll key={project.title} animation="fadeUp" delay={idx * 80}>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:order-last">
                    <ProjectImage src={project.image} title={project.title} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <ProjectImage src={project.image} title={project.title} />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Grid Projects */}
        {gridProjects.length > 0 && (
          <div>
            <AnimateOnScroll animation="fadeUp">
              <h3 className="text-2xl font-semibold mb-8">{p.otherHeading}</h3>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridProjects.map((project, i) => (
                <AnimateOnScroll key={project.title} animation="fadeUp" delay={i * 100}>
                <div
                  className="card-hover p-6 rounded-xl bg-card-surface space-y-4 cursor-pointer"
                >
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs font-medium ${tagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
