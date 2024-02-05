import "./index.scss";
interface ButtonProps {
  text?: string;
  textSize?: string;
  icon?: React.ReactNode;
  iconSize?: string;
  styles?: React.CSSProperties;
  btnClass?: "btn-primary" | "btn-secondary" | "btn-black";
  onClick(): void;
}

const Button = ({
  text,
  textSize,
  icon,
  iconSize,
  btnClass = "btn-primary",
  onClick,
  styles,
}: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`button_container ${btnClass}`}
      style={styles}
    >
      {text && (
        <div className="button_text_container" style={{ fontSize: textSize }}>
          <span>{text}</span>
        </div>
      )}
      {icon && (
        <p className="button_icon_container" style={{ fontSize: iconSize }}>
          {icon}
        </p>
      )}
    </div>
  );
};

export default Button;
