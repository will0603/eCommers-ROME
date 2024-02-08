import "./index.scss";
interface ButtonProps {
  text?: string;
  textSize?: string;
  icon?: React.ReactNode;
  iconSize?: string;
  disabled?: boolean;
  styles?: React.CSSProperties;
  btnClass?: "btn-primary" | "btn-secondary";
  onClick?(): void;
  loading?: boolean;
}

const Button = ({
  text,
  textSize,
  disabled = false,
  icon,
  iconSize,
  btnClass = "btn-primary",
  onClick,
  styles,
  loading,
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick && !loading) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        disabled
          ? `button_container ${btnClass} disabled`
          : `button_container ${btnClass}`
      }
      style={styles}
    >
      {text && (
        <div className="button_text_container" style={{ fontSize: textSize }}>
          <div className={loading ? "text--container" : ""}>
            <span>{text}</span>
            {loading && <div className="loading--pulse"></div>}
          </div>
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
