"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AnimateOnScroll } from "@/component/AnimateOnScroll";
import { TypewriterText } from "@/component/TypewriterText";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

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

    const mailtoLink = `mailto:myagmarsuren014@gmail.com?subject=Portfolio Contact from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DMessage: ${formData.message}`;
    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <TypewriterText
          text={c.heading}
          speed={60}
          tag="h2"
          className="text-4xl md:text-5xl font-bold mb-16 block"
          triggerOnView
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimateOnScroll animation="fadeUp">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{c.subheading}</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                {c.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-text-muted text-sm font-medium">{c.emailLabel}</p>
                <a
                  href="mailto:myagmarsuren014@gmail.com"
                  className="text-lg font-medium text-accent hover:text-accent-hover transition-colors cursor-pointer"
                >
                  myagmarsuren014@gmail.com
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-text-muted text-sm font-medium">{c.locationLabel}</p>
                <p className="text-lg font-medium">{c.locationValue}</p>
              </div>

              <div className="space-y-2">
                <p className="text-text-muted text-sm font-medium">{c.socialLabel}</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/MyagmarusurenMike"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors font-medium cursor-pointer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/myagmarsuren_0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover transition-colors font-medium cursor-pointer"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="fadeUp" delay={120}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
                {c.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card-surface border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder={c.namePlaceholder}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
                {c.emailInputLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card-surface border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                placeholder={c.emailPlaceholder}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
                {c.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card-surface border border-white/[0.08] rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder={c.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full py-3 rounded-lg font-medium transition-all cursor-pointer ${
                isSubmitted
                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                  : "bg-accent hover:bg-accent-hover text-white border border-accent"
              }`}
            >
              {isSubmitted ? `✓ ${c.sentButton}` : c.sendButton}
            </button>
          </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
