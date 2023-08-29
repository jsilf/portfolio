import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type iconType = {
  title: string;
  href: string;
  faIcon: IconProp;
  classname: string;
};

export const Icon = ({ title, href, faIcon, classname }: iconType) => {
  return (
    <a title={title} href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faIcon} className={classname} />
    </a>
  );
};
