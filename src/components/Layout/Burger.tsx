import styled from "styled-components";
import { primaryDarkColor } from "../../context/ThemeContext";

export type burgerProps = {
  open: boolean;
  click?: () => void;
};

const StyledBurger = styled.div<burgerProps>`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .burger {
    width: 40px;
    height: 6px;
    border-radius: 25px;
    margin: 6px 0;
    transform-origin: 2px;
    transition: all 0.3s linear;
    background-color: ${({ open }) =>
      open ? "#fff !important" : primaryDarkColor};

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burger = ({ open, click }: burgerProps) => {
  return (
    <StyledBurger open={open} onClick={click}>
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </StyledBurger>
  );
};
