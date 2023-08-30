import styled from "styled-components";

type StyledCursorProps = { top: string; left: string };

export const StyledCursor = styled.div`
  background: radial-gradient(
    400px at ${(props: StyledCursorProps) => props.left}
      ${(props: StyledCursorProps) => props.top},
    rgba(232, 74, 95, 0.2),
    transparent 90%
  );
  position: fixed;
  top: ${(props: StyledCursorProps) => props.top};
  left: ${(props: StyledCursorProps) => props.left};
  z-index: 10;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: background;
  inset: 0;
  pointer-events: none;
`;
