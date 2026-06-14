"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";

const ROTATE_MS = 7000; // time each group of phrases stays on screen
const STAGGER = 0.25; // delay between each line arriving (tuc tuc tuc)

const container: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: STAGGER } },
  exit: { transition: { staggerChildren: 0.1 } },
};

const lineVariant: Variants = {
  initial: { opacity: 0, x: "40%" },
  animate: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: "-40%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Hero() {
  const t = useTranslations("Home");
  const slides = t.raw("heroSlides") as string[][];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((p) => (p + 1) % slides.length),
      ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [slides.length]);

  const lines = slides[slide];

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* Animated gradient fallback (shows if the video is missing) */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-zinc-900 via-zinc-800 to-black" />

      {/* Background video — drop your file at public/hero.mp4 */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Warm gold glow rising from the lower-left — prestige accent. */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 80% at 15% 100%, color-mix(in srgb, var(--gold) 35%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-2 text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {lines.map((line) => (
              <motion.span key={line} variants={lineVariant} className="gold-sweep">
                {line}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
