import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  const owner = "Jessica Silfver";

  return (
    <footer>
      <div className="content display-flex justify-between">
        <div>
          <a
            title="Github"
            href="https://github.com/jsilf"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} className="icon" />
          </a>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/jessica-silfver"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            title="E-mail"
            href="mailto:jesilfver@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
        <div>
          <p className="footer-copyright">
            Copyright &copy; {owner} {thisYear}
          </p>
        </div>
        <div>
          <HashLink smooth to={"/#top"} title="To the top">
            <span className="arrow-up"></span>
          </HashLink>
        </div>
      </div>
    </footer>
  );
};
