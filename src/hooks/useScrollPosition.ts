import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  const scroll = () => {
    setScrollPosition({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  };

  return scrollPosition;
};
