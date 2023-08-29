import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { faLightbulb as regLightBulb } from "@fortawesome/free-regular-svg-icons/faLightbulb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
import { primaryDarkColor } from "../../context/ThemeContext";

interface IThemedButtonProps {
  onClick?: () => void;
  isOn: boolean;
}

const StyledThemeBtn = styled.div`
  padding: 1.5rem 1rem 0 0;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 1rem;
  }

  .switch {
    width: 56px;
    height: 30px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 50px;
    padding: 1rem 0.5rem;
    cursor: pointer;
  }
  .handle {
    width: 21px;
    height: 21px;
    background-color: ${primaryDarkColor};

    border-radius: 50%;
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }

  .lightbulbs {
    display: flex;
    justify-content: space-between;
    margin-top: 0.6rem;

    .lightbulb {
      margin: 0 0.2rem;
      height: 19px;
      width: 19px;
    }
  }
`;

export const ThemedButton = (props: IThemedButtonProps) => {
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 50,
  };

  return (
    <StyledThemeBtn>
      <div className="switch" data-ison={props.isOn} onClick={props.onClick}>
        <motion.div className="handle" layout transition={spring} />
      </div>
      <div className="lightbulbs">
        <FontAwesomeIcon icon={faLightbulb} className="lightbulb" />
        <FontAwesomeIcon icon={regLightBulb} className="lightbulb" />
      </div>
    </StyledThemeBtn>
  );
};
