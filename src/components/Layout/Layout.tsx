import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { ThemeType as Theme, themes } from "../../context/ThemeContext";
import { Footer } from "./Footer";
import { StyledCursor } from "../Parts/Cursor";
import { useMousePosition } from "../../hooks/useMousePosition";
import { Header } from "./Header";

type StyledProps = { theme: Theme };

const StyledLayout = styled.div`
  background: ${(props: StyledProps) => props.theme.background};
  color: ${(props: StyledProps) => props.theme.color};

  nav li a {
    color: ${(props: StyledProps) => props.theme.color};
  }

  @media screen and (max-width: 768px) {
    nav li a {
      color: ${(props: StyledProps) => props.theme.color};
    }

    .burger {
      background-color: ${(props: StyledProps) => props.theme.color};
    }

    .switch {
      background-color: ${(props: StyledProps) => props.theme.color};
    }
    .handle {
      background-color: ${(props: StyledProps) => props.theme.color};
    }
  }
`;

export const Layout = () => {
  const [theme, setTheme] = useState<Theme>(themes.dark);
  const [isOn, setIsOn] = useState(false);

  const { x, y } = useMousePosition();

  const toggleTheme = () => {
    setIsOn(!isOn);
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <StyledLayout>
        <Header setTheme={toggleTheme} themeIsOn={isOn} />

        <StyledCursor top={`${y}px`} left={`${x}px`} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledLayout>
    </ThemeContext.Provider>
  );
};
