import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { ITheme, themes } from "../../context/ThemeContext";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ThemedButton } from "./ThemedButton";
import logo from "../../assets/Logo.svg";
import { HashLink } from "react-router-hash-link";

interface IStyledAppProps {
  theme: ITheme;
}

const StyledLayout = styled.div`
  background: ${(props: IStyledAppProps) => props.theme.background};
  color: ${(props: IStyledAppProps) => props.theme.color};

  .burger {
    background: ${(props: IStyledAppProps) => props.theme.color};
  }

  nav li a {
    color: ${(props: IStyledAppProps) => props.theme.color};
  }

  @media screen and (max-width: 768px) {
    nav li a {
      color: ${(props: IStyledAppProps) => props.theme.background};
    }
  }

  .arrow-down {
    border-bottom: 2px solid ${(props: IStyledAppProps) => props.theme.color};
    border-left: 2px solid ${(props: IStyledAppProps) => props.theme.color};
  }

  .arrow-up {
    border-top: 2px solid ${(props: IStyledAppProps) => props.theme.color};
    border-right: 2px solid ${(props: IStyledAppProps) => props.theme.color};
  }

  .project-card_text {
    color: ${(props: IStyledAppProps) => props.theme.background};
  }

  .contact-text {
    color: ${(props: IStyledAppProps) => props.theme.background};

    a {
      color: ${(props: IStyledAppProps) => props.theme.background};
    }
  }

  .icon {
    color: ${(props: IStyledAppProps) => props.theme.color};
  }
  .icon:hover {
    border: 3px solid ${(props: IStyledAppProps) => props.theme.color};
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
        <header id="top">
          <div className="inner">
            <HashLink smooth to={"/"}>
              <img src={logo} width={70} height={70} alt="logga" />
            </HashLink>
            <Nav></Nav>
            <ThemedButton isOn={isOn} onClick={toggleTheme}></ThemedButton>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <Footer />
      </StyledLayout>
    </ThemeContext.Provider>
  );
};
