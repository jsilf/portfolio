import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { faLightbulb as regLightBulb } from "@fortawesome/free-regular-svg-icons/faLightbulb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { primaryDarkColor } from "../../../context/ThemeContext";
import { StyledTheme } from "../Layout";
import { useEffect } from "react";

type ThemedButtonProps = {
  onClick?: () => void;
  isOn: boolean;
};

const StyledThemeBtn = styled.div<StyledTheme>`
  padding: 1.5rem 1rem 0 0;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
  }

  .switch {
    width: 56px;
    height: 30px;
    background-color: ${primaryDarkColor};
    border-radius: 50px;
    cursor: pointer;
    padding: 5px;

    @media screen and (max-width: 768px) {
      background-color: #fff;
    }
  }
  .handle {
    width: 21px;
    height: 21px;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
    @media screen and (max-width: 768px) {
      background-color: ${primaryDarkColor};
    }
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;

    .handle {
      transform: translateX(26px);
      transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }

  .lightbulbs {
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;

    .lightbulb {
      margin: 0 0.2rem;
      height: 19px;
      width: 19px;
      color: ${(props: StyledTheme) => props.theme.primaryColor};
    }
  }
`;

export const ThemedButton = (props: ThemedButtonProps) => {
  return (
    <StyledThemeBtn>
      <div className="switch" data-ison={props.isOn} onClick={props.onClick}>
        <div className="handle"></div>
      </div>
      <div className="lightbulbs">
        <FontAwesomeIcon icon={faLightbulb} className="lightbulb" />
        <FontAwesomeIcon icon={regLightBulb} className="lightbulb" />
      </div>
    </StyledThemeBtn>
  );
};
