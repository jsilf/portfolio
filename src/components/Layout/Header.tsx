import { ThemedButton } from "../Parts/ThemedButton";
import { Icon } from "../Parts/Icon";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Burger, burgerProps } from "./Burger";
import { primaryDarkColor } from "../../context/ThemeContext";
import logo from "../../assets/Logo_.svg";

type ThemeProps = {
  themeIsOn: boolean;
  setTheme: () => void;
};

const StyledNav = styled.nav<burgerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-mobile {
    display: none;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    background-color: ${({ open }) =>
      !open ? "transparent" : primaryDarkColor};
    width: ${({ open }) => (!open ? "100px" : "100%")};
    height: ${({ open }) => (!open ? "100px" : "100vh")};
    overflow: hidden;
    transition: width 0.3s ease-in;
    justify-content: center;
    flex-direction: column;

    .switch {
      background-color: ${({ open }) => (open ? "#fff" : primaryDarkColor)};
    }
    .handle {
      background-color: ${({ open }) => (!open ? "#fff" : primaryDarkColor)};
    }

    .inner-nav {
      display: ${({ open }) => (!open ? "none" : "flex")};
      margin-bottom: 1.5rem;
    }

    .inner-icons {
      display: ${({ open }) => (!open ? "none" : "flex")};
      flex-direction: column-reverse;

      .lightbulbs {
        display: none;
      }
    }

    ul {
      display: ${({ open }) => (!open ? "none" : "flex")};
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        margin: 1rem 0 !important;
      }
    }
  }
`;

export const Header = ({ setTheme, themeIsOn }: ThemeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header id="top">
      <HashLink smooth to={"/"} className="logo-mobile">
        <img src={logo} width={90} height={90} alt="logga" />
      </HashLink>
      <StyledNav open={isOpen}>
        <Burger open={isOpen} click={handleClick}></Burger>
        <div className="inner-nav">
          <HashLink smooth to={"/"} className="logo">
            <img src={logo} width={90} height={90} alt="logga" />
          </HashLink>

          <ul>
            <li>
              <HashLink onClick={handleClick} smooth to={"/#portfolio"}>
                portfolio
              </HashLink>
            </li>

            <li>
              <HashLink onClick={handleClick} smooth to={"/#about"}>
                about
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="inner-icons">
          <ThemedButton isOn={themeIsOn} onClick={setTheme}></ThemedButton>

          <Icon
            title={"Github"}
            href={"https://github.com/jsilf"}
            faIcon={faGithubSquare}
            classname="icon icon-header"
          />

          <Icon
            title={"LinkedIn"}
            href={"https://www.linkedin.com/in/jessica-silfver"}
            faIcon={faLinkedin}
            classname="icon icon-header"
          />

          <Icon
            title={"E-mail"}
            href={"mailto:jesilfver@gmail.com"}
            faIcon={faEnvelope}
            classname="icon icon-header"
          />
        </div>
      </StyledNav>
    </header>
  );
};
