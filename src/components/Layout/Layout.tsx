import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { ThemeType as Theme, themes } from "../../context/ThemeContext";
import { Footer } from "./Footer";
import { useMousePosition } from "../../hooks/useMousePosition";
import { Header } from "./Header";
import { useScrollPosition } from "../../hooks/useScrollPosition";

export type StyledTheme = {
  theme: Theme;
};

type StyledProps = { theme: Theme; x: number; y: number };

const StyledLayout = styled.div<StyledProps>`
  color: ${(props: StyledProps) => props.theme.color};
  background: radial-gradient(
    400px at ${(props: StyledProps) => props.x}px
      ${(props: StyledProps) => props.y}px,
    rgb(232, 74, 95) -70%,
    ${(props: StyledProps) => props.theme.background} 80%
  );

  @media screen and (max-width: 768px) {
    background-color: ${(props: StyledProps) =>
      props.theme.background} !important;
  }
  nav li a {
    color: ${(props: StyledProps) => props.theme.color};
  }
`;

export const Layout = () => {
  const [theme, setTheme] = useState<Theme>(themes.dark);
  const [isOn, setIsOn] = useState(false);
  const [storageTheme, setStorageTheme] = useState<string>("");

  const { x, y } = useMousePosition();
  const { scrollX, scrollY } = useScrollPosition();

  useEffect(() => {
    return getThemesFromLS();
  }, [storageTheme]);

  const getThemesFromLS = () => {
    const getTheme = localStorage.getItem("theme") || "";
    if (getTheme) setStorageTheme(getTheme);
    storageTheme === "light" ? setTheme(themes.light) : setTheme(themes.dark);
  };

  const toggleTheme = () => {
    setIsOn(!isOn);
    if (theme === themes.light) {
      setTheme(themes.dark);
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme(themes.light);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <StyledLayout y={y + scrollY} x={x + scrollX}>
        <Header setTheme={toggleTheme} themeIsOn={isOn} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledLayout>
    </ThemeContext.Provider>
  );
};
