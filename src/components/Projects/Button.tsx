import styled from "styled-components";

const StyledButton = styled.button`
  background: #041124;
  color: #fff;
  font-size: 1.125rem;
  border-radius: 50px;
  padding: 1rem;
  margin-top: 4rem;
  border: none;
  animation: pulse 1.8s infinite;
  box-shadow: 0 0 0 0.8rem transparent;
  transition: all 0.25s ease;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #041124;
    }
  }
  &:hover {
    background: #fff;
    color: #041124;
  }
`;

interface IButton {
  click: () => void;
  children: string;
}

export const Button = ({ click, children }: IButton) => {
  return <StyledButton onClick={click}>{children}</StyledButton>;
};
