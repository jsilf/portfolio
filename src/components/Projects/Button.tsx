import styled from "styled-components";

const StyledButton = styled.button`
  background: #041124;
  color: #fff;
  font-size: 1.125rem;
  border-radius: 50px;
  padding: 1rem;
  margin-top: 4rem;
  border: none;
`;
interface IButton {
  click: () => void;
  children: string;
}

export const Button = ({ click, children }: IButton) => {
  return <StyledButton onClick={click}>{children}</StyledButton>;
};
