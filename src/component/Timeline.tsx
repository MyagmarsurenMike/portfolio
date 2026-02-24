import { CheckCircleOutlined } from "@ant-design/icons";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    date: "2021",
    title: "Started My Tech Journey",
    description:
      "Embarked on my programming journey by learning algorithms and C++ basics.",
  },
  {
    date: "2022",
    title: "Sharpened My Skills",
    description:
      "Deepened my technical expertise by developing multiple academic projects using Java and MySQL, focusing on database management and OOP principles.",
  },
  {
    date: "2023",
    title: "Turning Point",
    description:
      "Participated in NAPROCK (Procon) 2023. While the project faced challenges, the experience was a pivotal turning point that accelerated my growth in collaborative development.",
  },
  {
    date: "2024",
    title: "Found My Passion",
    description:
      "Started learning web development and instantly fell in love with turning ideas into real, working websites.",
  },
  {
    date: "2025",
    title: "Cloud and DevOps Focus",
    description:
      "Driven to understand systems beyond the frontend & backend, I started learning scalable architectures with AWS, implementing CI/CD pipelines using GitHub Actions, and deploying containerized applications for real-world, production environments.",  },
  {
    date: "Future Goal",
    title: "Continuous Growth",
    description:
      "Committed to staying at the forefront of technology by exploring AI/ML. My focus is on leveraging modern tools with intention — understanding their capabilities, guiding them strategically, and using them to amplify productivity rather than replace critical thinking."
  },
];

export default function Timeline() {
  return (
    <section id="growth" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slideInFromLeftLong">
            My Growth Journey
          </h2>
          <p className="text-text-secondary text-lg animate-slideInFromLeft animate-delay-100">
            A timeline of my learning and professional development in tech.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-transparent opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.date}
                className={`md:flex md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } animate-slideInFromLeft`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-accent rounded-full transform -translate-x-2.5 md:-translate-x-3 mt-1 flex items-center justify-center ring-4 ring-background z-10">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 ml-12 md:ml-0">
                  <div className="bg-card-surface border border-white/[0.1] rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
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
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-accent/10 to-purple-600/10 border border-accent/20 animate-slideInFromLeft animate-delay-300">
          <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
          <p className="text-text-secondary mb-6">
            I'm continuously learning and staying updated with the latest
            technologies. Always open to new challenges and opportunities to
            grow.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
