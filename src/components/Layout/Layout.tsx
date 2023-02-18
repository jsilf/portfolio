import { ChangeEvent, useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { ITheme, themes } from "../../context/ThemeContext";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ThemedButton } from "./ThemedButton";

interface IStyledAppProps {
  theme: ITheme;
}

const StyledLayout = styled.div`
  background: ${(props: IStyledAppProps) => props.theme.background};
  color: ${(props: IStyledAppProps) => props.theme.color};

  a {
    color: ${(props: IStyledAppProps) => props.theme.color};
  }

  .project-card {
    background: ${(props: IStyledAppProps) => props.theme.color};
  }
`;

export const Layout = () => {
  const [theme, setTheme] = useState<ITheme>(themes.dark);

  const toggleTheme = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <StyledLayout>
        <header>
          <Nav></Nav>
          <ThemedButton onClick={toggleTheme}></ThemedButton>
        </header>

        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledLayout>
    </ThemeContext.Provider>
  );
};
