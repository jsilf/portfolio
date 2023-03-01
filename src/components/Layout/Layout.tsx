import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { ITheme, themes } from "../../context/ThemeContext";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ThemedButton } from "./ThemedButton";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";

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
    background: ${(props: IStyledAppProps) => props.theme.blueColor};
    color: ${(props: IStyledAppProps) => props.theme.textColor};
  }
`;

export const Layout = () => {
  const [theme, setTheme] = useState<ITheme>(themes.dark);
  const [isOn, setIsOn] = useState(false);

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
        <header>
          <HashLink smooth to={"/"}>
            <img src={logo} width={70} height={70} alt="logga" />
          </HashLink>
          <Nav></Nav>
          <ThemedButton isOn={isOn} onClick={toggleTheme}></ThemedButton>
        </header>
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledLayout>
    </ThemeContext.Provider>
  );
};
