"use client";

import { useRef, useState } from "react";

export default function GoldSweep({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [sweeping, setSweeping] = useState(false);
  const sweepingRef = useRef(false);

  function handleEnter() {
    if (sweepingRef.current) return;
    sweepingRef.current = true;
    setSweeping(true);
  }

  function handleAnimationEnd() {
    sweepingRef.current = false;
    setSweeping(false);
  }

  return (
    <span
      className={`gold-sweep ${sweeping ? "is-sweeping" : ""} ${className}`}
      onMouseEnter={handleEnter}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </span>
  );
}
