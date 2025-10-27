"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    let lenis: any;

    const initLenis = async () => {
      const Lenis = (await import("@studio-freight/lenis")).default;
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical" as const,
        gestureOrientation: "vertical" as const,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
}
