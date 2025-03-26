"use client";
import { useEffect } from "react";
import Lenis from "lenis";


function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothTouch: true,
      smoothWheel: true,
      syncTouchLerp: 0.0075,
      wheelMultiplier: 1.3,
    });

    const updateScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(updateScroll);
    };

    requestAnimationFrame(updateScroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;
