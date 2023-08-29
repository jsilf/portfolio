import { useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Burger, burgerProps } from "./Burger";
import { primaryDarkColor } from "../../context/ThemeContext";
import logo from "../../assets/Logo_.svg";

const StyledNav = styled.nav<burgerProps>`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    background: ${({ open }) => (!open ? "transparent" : primaryDarkColor)};
    width: ${({ open }) => (!open ? "100px" : "100%")};
    height: ${({ open }) => (!open ? "80px" : "100%")};
    overflow: hidden;
    transition: height 0.2s ease-in-out;

    .inner-nav,
    .inner-icons {
      display: ${({ open }) => (!open ? "none" : "flex")};
      flex-direction: column;
    }

    ul {
      display: ${({ open }) => (!open ? "none" : "flex")};
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 50%;
      transform: translate(50%, 50%);

      li:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav open={isOpen}>
      <Burger open={isOpen} click={handleClick}></Burger>
      <ul>
        <li>
          <HashLink onClick={handleClick} smooth to={"/#portfolio"}>
            portfolio
          </HashLink>
        </li>

        <li>
          {" "}
          <HashLink smooth to={"/"}>
            <img src={logo} width={70} height={70} alt="logga" />
          </HashLink>
        </li>

        <li>
          <HashLink onClick={handleClick} smooth to={"/#about"}>
            about
          </HashLink>
        </li>
      </ul>
    </StyledNav>
  );
};
