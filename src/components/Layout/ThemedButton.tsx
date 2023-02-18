interface IThemedButtonProps {
  onClick?: () => void;
}

export const ThemedButton = (props: IThemedButtonProps) => {
  return (
    <label className="theme-button" htmlFor="theme">
      <input aria-label="theme" type="checkbox" onChange={props.onClick} />
      <span className="dark"></span>
    </label>
  );
};
