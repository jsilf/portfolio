import { motion } from "framer-motion";

interface IThemedButtonProps {
  onClick?: () => void;
  isOn: boolean;
}

export const ThemedButton = (props: IThemedButtonProps) => {
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 50,
  };

  return (
    <div className="switch" data-ison={props.isOn} onClick={props.onClick}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};
