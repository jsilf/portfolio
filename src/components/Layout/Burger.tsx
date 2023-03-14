import styled from "styled-components";

export interface IOpenProps {
  open: boolean;
  click?: () => void;
}

const StyledBurger = styled.div<IOpenProps>`
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
    background-color: ${({ open }) => (open ? "#fff !important" : "#041124")};

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

export const Burger = ({ open, click }: IOpenProps) => {
  return (
    <StyledBurger open={open} onClick={click}>
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </StyledBurger>
  );
};
