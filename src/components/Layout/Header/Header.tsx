import { ThemedButton } from "./ThemedButton";
import { Icon } from "../../Parts/Icon";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Burger, BurgerProps } from "./Burger";
import { primaryDarkColor } from "../../../context/ThemeContext";
import logo from "../../../assets/Logo.svg";

type ThemeProps = {
  themeIsOn: boolean;
  setTheme: () => void;
};

const StyledNav = styled.nav<BurgerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    justify-content: center;
    flex-direction: column;
    z-index: 99;
    background-color: ${primaryDarkColor};
    transform: ${({ open }) => (!open ? "translateX(100%)" : "translateX(0)")};
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.3s ease-in;

    .icon-header,
    .lightbulb,
    li a {
      color: #fff !important;
    }

    .inner-nav {
      margin-bottom: 1.5rem;
    }

    ul {
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

  //no scroll when menu in phone is open
  const mediaQ = window.matchMedia("(max-width: 768px)");

  const handleOverflow = (mediaQ: MediaQueryList) => {
    if (mediaQ.matches && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  handleOverflow(mediaQ);

  return (
    <header id="top">
      <HashLink smooth to={"/"} className="logo-mobile">
        <img src={logo} width={70} height={70} alt="logga" />
      </HashLink>
      <Burger open={isOpen} click={handleClick}></Burger>
      <StyledNav open={isOpen}>
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
