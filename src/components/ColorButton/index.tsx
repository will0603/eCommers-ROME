import "./index.scss";

interface ColorButtonProps {
  colorValue: string;
  colorLabel: string;
  available?: boolean;
  selected?: boolean;
  onChange: (value: string) => void;
}

const ColorButton = ({
  available = true,
  colorValue,
  colorLabel,
  selected = false,
  onChange,
}: ColorButtonProps) => {
  return (
    <div
      onClick={() => onChange(colorLabel)}
      className={
        selected
          ? "color--button--main--container selected"
          : "color--button--main--container"
      }
    >
      <div
        className="color--button--colour--container"
        style={{
          backgroundColor: `${colorValue}`,
          opacity: available ? "1" : "0.6",
        }}
      ></div>
      {!available && <div className="color--button--colour--disabled"></div>}
    </div>
  );
};

export default ColorButton;
