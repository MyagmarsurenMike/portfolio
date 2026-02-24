# Enhanced Breathing Bulbs System

Your portfolio now features an advanced ambient background system with **20 animated bulbs** throughout the entire page!

## What's New

### 📊 20 Animated Bulbs Scattered Everywhere
- **Top area**: 3 bulbs for hero section ambiance
- **Middle-top area**: 3 bulbs for projects section
- **Middle area**: 3 bulbs for central focal point
- **Middle-bottom area**: 3 bulbs for tech stack section
- **Bottom area**: 3 bulbs for footer/contact section
- **Side bulbs**: 2 bulbs on edges for framing
- **Extra scattered**: 2 bonus bulbs for depth

### 🎨 Multiple Colors & Opacity Levels
- **Purple bulbs**: `bg-purple-500/20` to `bg-purple-500/25`
- **White bulbs**: `bg-white/8` to `bg-white/15` (blurred white as requested!)
- **Violet bulbs**: `bg-violet-500/10` to `bg-violet-500/18`
- All with heavy `blur-3xl` for soft, dreamy appearance

### 🎬 4 Different Animation Types
Each bulb uses one of these animations:

1. **Breathe** (5 bulbs)
   - Gentle scale (1 → 1.1) and vertical float
   - Duration: 4-5.5s
   - Creates calm, living effect

2. **Fade In/Out** (5 bulbs)
   - Opacity oscillation (0.2 → 0.8)
   - Duration: 5s
   - Some appear, some disappear dynamically

3. **Float** (5 bulbs)
   - Smooth vertical movement with subtle horizontal drift
   - Duration: 6s
   - Diagonal floating motion
   - Moves -40px to 0 on Y-axis

4. **Pulse** (5 bulbs)
   - Scale expansion (1 → 1.15) with opacity fade
   - Duration: 4.5s
   - Heartbeat-like pulsing effect

### 📜 Scroll-Based Parallax Effect
- **Bottom-to-top transition on scroll**
- Each bulb has a `scrollSpeed` multiplier (0.25 - 0.45)
- As you scroll down, bulbs move up (parallax effect)
- Creates depth and visual interest
- Smooth `transition: transform 0.1s ease-out` for fluid motion

### ⏱️ Staggered Timing
- Each bulb has unique `delay` (0 - 1.5s)
- Prevents all bulbs from animating in sync
- Creates organic, non-repetitive motion
- Different durations per bulb (4s - 6s)

## Technical Details

### Component: `BreathingBulbs.tsx`
```typescript
- "use client" (client-side for scroll detection)
- 20 bulbs defined in array with individual properties
- useEffect hook listens to scroll events
- Each bulb gets `transform` updated based on scrollY
- Bulbs positioned with percentage-based left/top
```

### CSS Animations: `globals.css`
```css
@keyframes breathe    /* Scale + vertical movement */
@keyframes fadeInOut  /* Opacity pulsing */
@keyframes float      /* Multi-directional floating */
@keyframes pulse      /* Scale expansion + fade */
```

### Positioning Strategy
- Fixed position overlay (`z-0`)
- Uses negative offsets and percentage positioning
- Spreads bulbs across entire viewport
- Intentionally extends beyond visible area for edge glow

## Visual Effect

When you load the portfolio:
1. ✨ 20 glowing orbs scattered across dark background
2. Some breathing, some fading, some floating, some pulsing
3. Blend of white and purple tones for visual interest
4. As you scroll, bulbs move upward (parallax)
5. Creates dreamy, ambient atmosphere
6. Non-interactive (pointer-events-none) so doesn't interfere

## Browser Compatibility

- Modern browsers with CSS animation support
- Fallback for older browsers (just shows static blurred circles)
- GPU-accelerated transforms for smooth 60fps animation
- Lightweight: uses CSS animations, not JavaScript

## Customization

To adjust bulb intensity, modify the opacity values in bulb definitions:
```typescript
color: "bg-white/10"  // Lower number = more transparent
color: "bg-purple-500/25"  // Higher number = more opaque
```

To change animation speed, modify duration:
```typescript
duration: 4  // Seconds (lower = faster)
```

To adjust scroll parallax effect, modify scrollSpeed:
```typescript
scrollSpeed: 0.3  // Higher = more dramatic parallax
```

---

**Result**: A living, breathing background that enhances the portfolio's modern aesthetic without distracting from content. 🌌✨
