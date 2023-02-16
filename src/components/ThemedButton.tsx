import { useContext } from "react";
import styled from "styled-components";
import { ITheme, ThemeContext } from "../context/ThemeContext";

interface IButtonProps {
  theme: ITheme;
}

interface IThemedButtonProps {
  children: string;
  onClick?: () => void;
}

const Button = styled.button`
  background-color: ${(props: IButtonProps) => props.theme.background};
  color: #000;
`;

export const ThemedButton = (props: IThemedButtonProps) => {
  const theme: ITheme = useContext(ThemeContext);

  return (
    <Button theme={theme} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};
