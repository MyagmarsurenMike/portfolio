"use client";

/* ─────────────────────────────────────────────────────────────
   Background system — 4 layers:
   1. Dot grid  (CSS, zero JS, ultra-lightweight)
   2. Noise texture overlay  (SVG filter, adds organic depth)
   3. Gradient orbs  (6 blurred blobs, staggered animations)
   4. Top aurora glow  (wide gradient at page top)
───────────────────────────────────────────────────────────── */

const orbs = [
  // Top-left — large anchor, deep violet
  { id: 1, w: 600, h: 600, x: "-12%", y: "-8%",  color: "rgba(109,40,217,0.22)",  anim: "orb-breathe", dur: "6s",  delay: "0s"   },
  // Top-right — medium, blue-indigo
  { id: 2, w: 440, h: 440, x: "72%",  y: "-10%", color: "rgba(79,70,229,0.18)",   anim: "orb-float",   dur: "8s",  delay: "1s"   },
  // Center — subtle large orb for mid-page warmth
  { id: 3, w: 500, h: 500, x: "30%",  y: "38%",  color: "rgba(124,58,237,0.13)",  anim: "orb-pulse",   dur: "7s",  delay: "2s"   },
  // Left-center — indigo, ties hero to middle sections
  { id: 4, w: 380, h: 380, x: "-8%",  y: "55%",  color: "rgba(99,102,241,0.17)",  anim: "orb-breathe", dur: "6.5s","delay": "0.8s" },
  // Bottom-right — violet anchor
  { id: 5, w: 520, h: 520, x: "68%",  y: "72%",  color: "rgba(139,92,246,0.18)",  anim: "orb-float",   dur: "7.5s","delay": "1.5s" },
  // Center-right accent — small, pops of cyan-violet
  { id: 6, w: 280, h: 280, x: "82%",  y: "40%",  color: "rgba(167,139,250,0.14)", anim: "orb-pulse",   dur: "5.5s","delay": "2.5s" },
];

export default function BreathingBulbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">

      {/* ── Layer 1: Dot grid ──────────────────────────── */}
      <div className="absolute inset-0 dot-grid" />

      {/* ── Layer 2: Noise texture ────────────────────── */}
      <div className="absolute inset-0 noise-overlay" />

      {/* ── Layer 3: Top aurora glow ──────────────────── */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: "420px",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(109,40,217,0.28) 0%, rgba(79,70,229,0.12) 40%, transparent 70%)",
        }}
      />

      {/* ── Layer 4: Gradient orbs ────────────────────── */}
      {orbs.map((o) => (
        <div
          key={o.id}
          className={`absolute rounded-full blur-3xl ${o.anim}`}
          style={{
            width:             o.w,
            height:            o.h,
            left:              o.x,
            top:               o.y,
            background:        o.color,
            animationDuration: o.dur,
            animationDelay:    o.delay,
          }}
        />
      ))}

      {/* ── Layer 5: Edge vignette for depth ──────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
