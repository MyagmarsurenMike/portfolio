"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Open mailto with form data
    const mailtoLink = `mailto:your-email@example.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DMessage: ${formData.message}`;
    window.location.href = mailtoLink;

    // Show success state
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-slideInFromLeftLong">Let's Connect</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slideInFromLeft">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-text-muted text-sm font-medium">Email</p>
                <a
                  href="mailto:myagmarsuren014@gmail.com"
                  className="text-lg font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  myagmarsuren014@gmail.com
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-text-muted text-sm font-medium">Location</p>
                <p className="text-lg font-medium">Ulaanbaatar, Mongolia</p>
              </div>

              <div className="space-y-2">
                <p className="text-text-muted text-sm font-medium">Social</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MyagmarusurenMike"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors font-medium"
                  >
                    GitHub
                  </a>
                  {/* <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors font-medium"
                  >
                    LinkedIn
                  </a> */}
                  <a 
                    href="https://www.instagram.com/myagmarsuren_0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors font-medium"
                  >
                    instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slideInFromLeft animate-delay-100">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card-surface border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card-surface border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card-surface border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full py-3 rounded-lg font-medium transition-all ${
                isSubmitted
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : "bg-accent hover:bg-accent-hover text-white border border-accent"
              }`}
            >
              {isSubmitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
