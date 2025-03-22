import { useState, useLayoutEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [isSmallScreen, setIsSmallScreen] = useState();

  useLayoutEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setWindowSize({
        width: newWidth,
        height: newHeight,
      });
      if (newWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, isSmallScreen };
}

export { useWindowSize };
