import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { ITheme, themes } from "../../context/ThemeContext";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ThemedButton } from "../Parts/ThemedButton";
import { StyledCursor } from "../Parts/Cursor";
import { useMousePosition } from "../../hooks/useMousePosition";
import logo from "../../assets/Logo_.svg";
import { HashLink } from "react-router-hash-link";
import { Header } from "./Header";

type StyledAppProps = { theme: ITheme };

const StyledLayout = styled.div`
  background: ${(props: StyledAppProps) => props.theme.background};
  color: ${(props: StyledAppProps) => props.theme.color};

  .burger {
    background: ${(props: StyledAppProps) => props.theme.color};
  }

  nav li a {
    color: ${(props: StyledAppProps) => props.theme.color};
  }

  @media screen and (max-width: 768px) {
    nav li a {
      color: ${(props: StyledAppProps) => props.theme.background};
    }
  }

  .project-card_text {
    color: ${(props: StyledAppProps) => props.theme.background};
  }

  .contact-text {
    color: ${(props: StyledAppProps) => props.theme.background};

    a {
      color: ${(props: StyledAppProps) => props.theme.background};
    }
  }

  .icon {
    color: ${(props: StyledAppProps) => props.theme.color};
  }
  .icon:hover {
    border: 3px solid ${(props: StyledAppProps) => props.theme.color};
  }
`;

export const Layout = () => {
  const [theme, setTheme] = useState<ITheme>(themes.dark);
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
