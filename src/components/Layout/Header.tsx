import { HashLink } from "react-router-hash-link";
import { Nav } from "./Nav";
import { ThemedButton } from "../Parts/ThemedButton";
import logo from "../../assets/Logo_.svg";
import { Icon } from "../Parts/Icon";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ setTheme, themeIsOn }: any) => {
  return (
    <header id="top">
      <div className="inner">
        <HashLink smooth to={"/"}>
          <img src={logo} width={70} height={70} alt="logga" />
        </HashLink>

        <Nav></Nav>

        <ThemedButton isOn={themeIsOn} onClick={setTheme}></ThemedButton>

        <Icon
          title={"Github"}
          href={"https://github.com/jsilf"}
          faIcon={faGithubSquare}
          classname="icon"
        />
        <Icon
          title={"LinkedIn"}
          href={"https://www.linkedin.com/in/jessica-silfver"}
          faIcon={faLinkedin}
          classname="icon"
        />
        <Icon
          title={"E-mail"}
          href={"mailto:jesilfver@gmail.com"}
          faIcon={faEnvelope}
          classname="icon"
        />
      </div>
    </header>
  );
};
