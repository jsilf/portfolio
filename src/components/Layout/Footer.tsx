import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";
import { Arrow } from "../Parts/Arrow";
import { Icon } from "../Parts/Icon";

export const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  const owner = "Jessica Silfver";

  return (
    <footer>
      <div className="content display-flex justify-between align-center">
        <div>
          <Icon
            title={"Github"}
            href={"https://github.com/jsilf"}
            faIcon={faGithubSquare}
            classname="icon icon-footer"
          />
          <Icon
            title={"LinkedIn"}
            href={"https://www.linkedin.com/in/jessica-silfver"}
            faIcon={faLinkedin}
            classname="icon icon-footer"
          />
          <Icon
            title={"E-mail"}
            href={"mailto:jesilfver@gmail.com"}
            faIcon={faEnvelope}
            classname="icon icon-footer"
          />
        </div>
        <div>
          <p className="footer-copyright">
            Copyright &copy; {owner} {thisYear}
          </p>
        </div>
        <div>
          <HashLink smooth to={"/#top"} title="To the top">
            <Arrow classname="arrow-up" />
          </HashLink>
        </div>
      </div>
    </footer>
  );
};
