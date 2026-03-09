"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const rafId   = useRef<number>(0);

  const [active,   setActive]   = useState(false); // hovering interactive
  const [clicking, setClicking] = useState(false);
  const [mounted,  setMounted]  = useState(false);

  useEffect(() => {
    // Only on fine-pointer (mouse) devices, not touch
    if (!window.matchMedia("(pointer: fine)").matches) return;
    // Respect reduced-motion — keep default cursor
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
    };

    // Smooth ring via rAF lerp
    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.11;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(calc(${ring.current.x}px - 50%), calc(${ring.current.y}px - 50%))`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      setActive(!!el);
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* ── Dot ─────────────────────────────────── */}
      <div
        ref={dotRef}
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 10000, willChange: "transform" }}
      >
        <div
          style={{
            width:  clicking ? 6  : active ? 6  : 8,
            height: clicking ? 6  : active ? 6  : 8,
            borderRadius: "50%",
            background: "#8b5cf6",
            opacity: active ? 0 : 1,
            transition: "width 0.15s ease, height 0.15s ease, opacity 0.15s ease",
            boxShadow: "0 0 6px rgba(139,92,246,0.8)",
          }}
        />
      </div>

      {/* ── Ring ────────────────────────────────── */}
      <div
        ref={ringRef}
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999, willChange: "transform" }}
      >
        <div
          style={{
            width:  clicking ? 32 : active ? 52 : 36,
            height: clicking ? 32 : active ? 52 : 36,
            borderRadius: "50%",
            border: `1.5px solid rgba(139,92,246,${active ? 0.9 : 0.55})`,
            background: active ? "rgba(139,92,246,0.08)" : "transparent",
            boxShadow: active
              ? "0 0 20px rgba(139,92,246,0.25), inset 0 0 12px rgba(139,92,246,0.08)"
              : "0 0 8px rgba(139,92,246,0.15)",
            transition: "width 0.2s cubic-bezier(0.16,1,0.3,1), height 0.2s cubic-bezier(0.16,1,0.3,1), border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
          }}
        />
      </div>
    </>
  );
}
