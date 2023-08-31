import styled, { keyframes } from "styled-components";
import { secondaryColor } from "../../context/ThemeContext";

type ArrowType = { classname: string };

const animate = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
`;

const StyledArrow = styled.div`
  &.arrow-down {
    span {
      border-bottom: 4px solid ${secondaryColor};
      border-left: 4px solid ${secondaryColor};
      position: absolute;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 30px;
      margin-left: -12px;
      transform: rotate(-45deg);
      animation: ${animate} 1.5s infinite;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &.arrow-up {
    display: block;
    span {
      border-top: 4px solid ${secondaryColor};
      border-right: 4px solid ${secondaryColor};
      display: block;
      width: 30px;
      height: 30px;
      transform: rotate(-45deg) translate(0);
      background: transparent;
      transition: transform 0.4s ease-in;

      @media screen and (max-width: 500px) {
        position: absolute;
        top: 75px;
        right: 40px;
      }

      &:hover {
        transform: rotate(-45deg) translate(10px, -10px);
      }
    }
  }
`;

export const Arrow = ({ classname }: ArrowType) => {
  return (
    <StyledArrow className={classname}>
      <span></span>
    </StyledArrow>
  );
};
