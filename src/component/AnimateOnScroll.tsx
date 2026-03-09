"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // ms
  className?: string;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect user's reduced-motion preference — show immediately
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const initial: Record<AnimationType, React.CSSProperties> = {
    fadeUp:    { opacity: 0, transform: "translateY(28px)" },
    fadeIn:    { opacity: 0, transform: "none" },
    slideLeft: { opacity: 0, transform: "translateX(-28px)" },
    slideRight:{ opacity: 0, transform: "translateX(28px)" },
  };

  const visible_style: React.CSSProperties = {
    opacity: 1,
    transform: "none",
    transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={visible ? visible_style : { ...initial[animation], transition: "none" }}
    >
      {children}
    </div>
  );
}
