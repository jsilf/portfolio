import { HashLink } from "react-router-hash-link";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <HashLink smooth to={"/#portfolio"}>
            portfolio
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"/#about"}>
            about
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
