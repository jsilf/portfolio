import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return mousePosition;
};
