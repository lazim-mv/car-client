"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: true,
        smoothWheel: true,
        syncTouchLerp: 0.0075,
        wheelMultiplier:1.3,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
