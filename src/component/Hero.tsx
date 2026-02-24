import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="space-y-8">
            <div>
              <div className="animate-slideInFromLeft flex gap-3">
                <div className="inline-block mb-4 px-4 py-1.5 bg-white/[0.05] border border-white/[0.1] rounded-full  gap-4">
                    <span className="text-sm text-accent">✨ Available for work</span>
                </div>
                <div className="inline-block mb-4 px-4 py-1.5 bg-white/[0.05] border border-white/[0.1] rounded-full  gap-4">
                    <span className="text-sm text-accent">🖥️　Web App development</span>
                </div>
                {/* <div className="inline-block mb-4 px-4 py-1.5 bg-white/[0.05] border border-white/[0.1] rounded-full  gap-4">
                    <span className="text-sm text-accent">✨ Available for work</span>
                </div> */}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 animate-slideInFromLeftLong animate-delay-100">
                Solving problem{" "}
                <span className="gradient-text">is my passion</span>
              </h1>
              <p className="text-text-secondary text-lg md:text-xl max-w-lg animate-slideInFromLeft animate-delay-200">
                I am a final-year Computer Science student passionate about
                building modern web applications. Trilingual in English,
                Mongolian, and Japanese (N2).
              </p>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-colors animate-slideInFromLeft animate-delay-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-white/[0.2] text-white hover:border-accent hover:bg-white/[0.05] rounded-full font-medium transition-all animate-slideInFromLeft animate-delay-400"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Avatar Card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background Card */}
              <div className="absolute inset-0 card-hover rounded-3xl" />

              {/* Avatar */}
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl">
                  <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-accent to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                    <img 
                    src="Billiard.jpeg" 
                    alt="avatar" 
                    className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-card-surface border border-white/[0.08] rounded-2xl p-4 backdrop-blur-sm">
                <p className="text-text-muted text-sm font-medium">Available</p>
                <p className="text-lg font-bold text-accent">Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
