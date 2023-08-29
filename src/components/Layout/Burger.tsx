import styled from "styled-components";
import { primaryDarkColor } from "../../context/ThemeContext";

export type burgerProps = {
  open: boolean;
  click?: () => void;
};

const StyledBurger = styled.div<burgerProps>`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .burger {
    display: block;
    height: 4px;
    border-radius: 25px;
    margin: 3px 0;
    transform-origin: 2px;
    transition: all 0.3s linear;
    background: ${({ open }) => (open ? "#fff" : primaryDarkColor)};

    &:nth-child(1) {
      width: ${({ open }) => (open ? "45px" : "46px")};
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      width: ${({ open }) => (open ? "0" : "35px")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      width: ${({ open }) => (open ? "0" : "44px")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(4) {
      width: ${({ open }) => (open ? "45px" : "40px")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burger = ({ open, click }: burgerProps) => {
  return (
    <StyledBurger open={open} onClick={click}>
      <span className="burger"></span>
      <span className="burger"></span>
      <span className="burger"></span>
      <span className="burger"></span>
    </StyledBurger>
  );
};
