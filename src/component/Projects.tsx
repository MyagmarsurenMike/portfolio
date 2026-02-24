interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  image?: string; // Path to project screenshot
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
        <div className="text-center">
          <div className="text-4xl mb-2">📱</div>
          <p className="text-text-muted text-sm">Add screenshot to public/</p>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const featuredProjects: Project[] = [
    {
      title: "School Management Production System",
      description:
        "A comprehensive school management system with file upload capabilities, PDF-to-image conversion, and CI/CD pipeline integration. Deployed on AWS EC2 with Docker containerization.",
      tags: ["Next.js", "Docker", "AWS EC2", "GitHub Actions", "CloudConvert"],
      featured: true,
      image: "/projects/school-management.png", // Add your screenshot here
    },
    {
      title: "Gantt Chart Project Management",
      description:
        "Interactive project management tool with Gantt chart visualization. Built with React and TypeScript, featuring task grouping, real-time updates, and backend integration.",
      tags: ["React", "TypeScript", "Gantt", "REST API"],
      featured: true,
      image: "/projects/gantt-chart.png", // Add your screenshot here
    },
  ];

  const gridProjects: Project[] = [
    {
      title: "Documentation & Planning Tool",
      description: "Collaborative documentation and planning application with Gantt functionality.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-slideInFromLeftLong">Featured Projects</h2>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Alternate layout for even projects */}
              {idx % 2 === 0 ? (
                <>
                  {/* Content Left */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tagColor(
                            tag
                          )}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Screenshot Right */}
                  <div className="md:order-last">
                    <ProjectImage src={project.image} title={project.title} />
                  </div>
                </>
              ) : (
                <>
                  {/* Screenshot Left */}
                  <div>
                    <ProjectImage src={project.image} title={project.title} />
                  </div>
                  {/* Content Right */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${tagColor(
                            tag
                          )}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Grid Projects */}
        {gridProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridProjects.map((project) => (
                <div
                  key={project.title}
                  className="card-hover p-6 rounded-xl bg-card-surface space-y-4"
                >
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs font-medium ${tagColor(
                          tag
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
