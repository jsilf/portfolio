import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  const owner = "Jessica Silfver";

  return (
    <footer>
      <div className="content display-flex justify-between">
        <div>
          <a href="https://github.com/jsilf">
            <FontAwesomeIcon icon={faGithubSquare} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/jessica-silfver">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="mailto:jesilfver@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
        </div>
        <div>
          <p>
            Copyright &copy; {owner} {thisYear}
          </p>
        </div>
      </div>
    </footer>
  );
};
