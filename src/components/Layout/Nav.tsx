import { useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Burger, IOpenProps } from "./Burger";

const StyledNav = styled.nav<IOpenProps>`
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    background: ${({ open }) => (!open ? "transparent" : "#111111da")};
    width: ${({ open }) => (!open ? "100px" : "100%")};
    height: ${({ open }) => (!open ? "80px" : "40vh")};
    overflow: hidden;
    transition: height 0.2s ease-in-out;

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
          <HashLink smooth to={"/#portfolio"}>
            portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#about"}>
            about
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#contact"}>
            contact
          </HashLink>
        </li>
      </ul>
    </StyledNav>
  );
};
