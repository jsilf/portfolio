import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <HashLink smooth to={"/#"}>
            top
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#about"}>
            about
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#portfolio"}>
            github repos
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#contact"}>
            contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
