# Animation Reference — Exagrowth

## Stack
- `framer-motion` v11 — primary animation library
- CSS animations for micro-interactions (hover states, borders)
- No GSAP — keep bundle lean

## Standard Variants
Use these named variants consistently across the site:

```ts
// Fade up — for section content
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

// Fade in — for images and cards
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// Scale up — for cards on hover
export const scaleUp = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};
```

## Scroll-triggered Sections
```tsx
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
```

## Reduced Motion
```tsx
import { useReducedMotion } from "framer-motion";

function AnimatedSection() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={reduce ? undefined : fadeUp}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true }}
    />
  );
}
```

## Hero Animations
- Background: Animated radial gradient shifting between #080808 and #0f1a30
- Floating particles: CSS keyframes, no JS (performance)
- Headline: Word-by-word reveal using `motion.span` with stagger 0.05s
- CTA buttons: Pulse glow on electric blue button

```css
/* Particle float */
@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
  33% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
  66% { transform: translateY(10px) translateX(-8px); opacity: 0.3; }
}

/* Button glow pulse */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(37,99,235,0.4); }
  50% { box-shadow: 0 0 40px rgba(37,99,235,0.7), 0 0 80px rgba(37,99,235,0.2); }
}
```

## Card Hover States
```tsx
<motion.div
  whileHover={{ y: -4, transition: { duration: 0.2 } }}
  className="gradient-border rounded-xl p-6 cursor-pointer"
>
```

## Counter Animation (Stats section)
Use `useInView` + `useMotionValue` + `animate()`:
```tsx
const count = useMotionValue(0);
const rounded = useTransform(count, (v) => Math.floor(v));
useEffect(() => {
  if (inView) animate(count, target, { duration: 1.5, ease: "easeOut" });
}, [inView]);
```

## Performance Rules
- `will-change: transform` on elements that translate
- `transform: translateZ(0)` to promote to GPU layer
- Max 6 simultaneous animations on screen
- Use `layoutId` for shared element transitions between pages
- Lazy-load heavy components: `dynamic(() => import('./HeavySection'), { ssr: false })`
