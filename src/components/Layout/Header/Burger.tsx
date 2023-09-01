import styled from "styled-components";
import { ThemeType } from "../../../context/ThemeContext";

export type BurgerProps = {
  open: boolean;
  click?: () => void;
  theme?: ThemeType;
};

const StyledBurger = styled.div<BurgerProps>`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: ${({ open }) => (!open ? "absolute" : "fixed")};
    top: 30px;
    right: 30px;
    z-index: 200;
  }

  .burger {
    display: block;
    height: 4px;
    border-radius: 25px;
    margin: 3px 0;
    transform-origin: 2px;
    transition: all 0.3s linear;
    background: ${({ open }) =>
      open ? "#fff" : (props: BurgerProps) => props.theme?.primaryColor};

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

export const Burger = ({ open, click }: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={click}>
      <span className="burger"></span>
      <span className="burger"></span>
      <span className="burger"></span>
      <span className="burger"></span>
    </StyledBurger>
  );
};
