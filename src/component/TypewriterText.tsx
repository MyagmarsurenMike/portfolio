"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;       // ms per character (default 45)
  delay?: number;       // ms before typing starts (default 0)
  className?: string;
  showCursor?: boolean; // keep cursor blinking after done (default false)
  triggerOnView?: boolean; // start when scrolled into view
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TypewriterText({
  text,
  speed = 45,
  delay = 0,
  className = "",
  showCursor = false,
  triggerOnView = false,
  tag: Tag = "span",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(!triggerOnView);
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useRef(false);

  // Detect reduced-motion once on mount
  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) {
      setDisplayed(text);
      setDone(true);
    }
  }, [text]);

  // IntersectionObserver when triggerOnView=true
  useEffect(() => {
    if (!triggerOnView || started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnView, started]);

  // Typing effect
  useEffect(() => {
    if (!started || reducedMotion.current) return;
    setDisplayed("");
    setDone(false);

    const startTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [started, text, speed, delay]);

  const cursorVisible = !done || showCursor;

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {displayed}
      {cursorVisible && (
        <span
          aria-hidden="true"
          className={`inline-block w-[2px] h-[0.9em] bg-accent align-middle ml-[2px] ${
            done ? "animate-blink" : ""
          }`}
          style={{ marginBottom: "0.05em" }}
        />
      )}
    </Tag>
  );
}
