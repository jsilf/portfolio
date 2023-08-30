import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { secondaryColor } from "../../context/ThemeContext";
import { StyledTheme } from "../Layout/Layout";

type iconType = {
  title: string;
  href: string;
  faIcon: IconProp;
  classname: string;
};

const StyledIcon = styled.a<StyledTheme>`
  display: inline-block;

  .icon {
    width: 40px;
    height: 40px;
    padding: 2px;
    color: ${(props: StyledTheme) => props.theme.primaryColor};
    border: 3px solid transparent;
    outline: 3px solid transparent;
    border-radius: 10px;
    transition: all 0.2s ease-in;

    &:hover {
      border: 3px solid ${secondaryColor};
      outline: 3px solid transparent;
    }
  }
  .icon-footer {
    margin-right: 0.7rem;
  }
  .icon-header {
    margin: 0 0.4rem;

    @media screen and (max-width: 768px) {
      margin: 0.5rem;
    }
  }
`;

export const Icon = ({ title, href, faIcon, classname }: iconType) => {
  return (
    <StyledIcon
      title={title}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <FontAwesomeIcon icon={faIcon} className={classname} />
    </StyledIcon>
  );
};
