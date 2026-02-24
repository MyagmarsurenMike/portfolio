"use client";

import { useEffect, useState } from "react";

interface Bulb {
  id: number;
  x: string;
  y: string;
  size: string;
  color: string;
  duration: number;
  delay: number;
  animation: "breathe" | "fadeInOut" | "float" | "pulse";
  scrollSpeed: number;
}

export default function BreathingBulbs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bulbs: Bulb[] = [
    // Top area bulbs
    { id: 1, x: "-10%", y: "-20%", size: "w-96 h-96", color: "bg-purple-500/25", duration: 4, delay: 0, animation: "breathe", scrollSpeed: 0.3 },
    { id: 2, x: "85%", y: "-15%", size: "w-80 h-80", color: "bg-white/10", duration: 5, delay: 0.5, animation: "fadeInOut", scrollSpeed: 0.4 },
    { id: 3, x: "50%", y: "-25%", size: "w-72 h-72", color: "bg-violet-500/15", duration: 6, delay: 1, animation: "float", scrollSpeed: 0.25 },

    // Middle-top area bulbs
    { id: 4, x: "15%", y: "10%", size: "w-96 h-96", color: "bg-white/15", duration: 4.5, delay: 0.3, animation: "pulse", scrollSpeed: 0.35 },
    { id: 5, x: "70%", y: "15%", size: "w-88 h-88", color: "bg-purple-500/20", duration: 5.5, delay: 1.2, animation: "breathe", scrollSpeed: 0.32 },
    { id: 6, x: "-5%", y: "20%", size: "w-80 h-80", color: "bg-violet-500/10", duration: 4, delay: 0.7, animation: "fadeInOut", scrollSpeed: 0.38 },

    // Middle area bulbs
    { id: 7, x: "45%", y: "35%", size: "w-96 h-96", color: "bg-white/12", duration: 6, delay: 0, animation: "float", scrollSpeed: 0.4 },
    { id: 8, x: "80%", y: "40%", size: "w-72 h-72", color: "bg-purple-500/18", duration: 5, delay: 1.5, animation: "pulse", scrollSpeed: 0.33 },
    { id: 9, x: "10%", y: "45%", size: "w-80 h-80", color: "bg-violet-500/12", duration: 4.5, delay: 0.8, animation: "breathe", scrollSpeed: 0.36 },

    // Middle-bottom area bulbs
    { id: 10, x: "75%", y: "60%", size: "w-96 h-96", color: "bg-white/8", duration: 5.5, delay: 0.4, animation: "fadeInOut", scrollSpeed: 0.42 },
    { id: 11, x: "20%", y: "65%", size: "w-88 h-88", color: "bg-purple-500/22", duration: 4, delay: 1.1, animation: "float", scrollSpeed: 0.31 },
    { id: 12, x: "55%", y: "70%", size: "w-80 h-80", color: "bg-white/10", duration: 6, delay: 0.6, animation: "pulse", scrollSpeed: 0.37 },

    // Bottom area bulbs
    { id: 13, x: "-15%", y: "85%", size: "w-96 h-96", color: "bg-violet-500/18", duration: 5, delay: 0.9, animation: "breathe", scrollSpeed: 0.45 },
    { id: 14, x: "85%", y: "90%", size: "w-80 h-80", color: "bg-white/12", duration: 4.5, delay: 0.2, animation: "fadeInOut", scrollSpeed: 0.43 },
    { id: 15, x: "35%", y: "95%", size: "w-88 h-88", color: "bg-purple-500/20", duration: 5.5, delay: 1.3, animation: "float", scrollSpeed: 0.4 },

    // Side bulbs
    { id: 16, x: "-20%", y: "40%", size: "w-80 h-80", color: "bg-white/9", duration: 6, delay: 0.4, animation: "pulse", scrollSpeed: 0.34 },
    { id: 17, x: "95%", y: "50%", size: "w-72 h-72", color: "bg-purple-500/16", duration: 4.5, delay: 1, animation: "breathe", scrollSpeed: 0.39 },

    // Extra scattered bulbs
    { id: 18, x: "30%", y: "15%", size: "w-64 h-64", color: "bg-white/11", duration: 5, delay: 0.5, animation: "fadeInOut", scrollSpeed: 0.35 },
    { id: 19, x: "60%", y: "55%", size: "w-72 h-72", color: "bg-violet-500/14", duration: 5.5, delay: 0.8, animation: "float", scrollSpeed: 0.41 },
    { id: 20, x: "15%", y: "75%", size: "w-80 h-80", color: "bg-white/13", duration: 4, delay: 1.2, animation: "pulse", scrollSpeed: 0.38 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bulbs.map((bulb) => (
        <div
          key={bulb.id}
          className={`absolute ${bulb.size} ${bulb.color} rounded-full blur-3xl ${bulb.animation}`}
          style={{
            left: bulb.x,
            top: bulb.y,
            animation: `${bulb.animation} ${bulb.duration}s ease-in-out ${bulb.delay}s infinite`,
            transform: `translateY(${scrollY * bulb.scrollSpeed * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}
