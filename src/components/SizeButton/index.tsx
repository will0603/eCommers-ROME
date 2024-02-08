import "./index.scss";
interface SizeButtonProps {
  available?: boolean;
  value: string;
  onChange: (value: string) => void;
  selected?: boolean;
}

const SizeButton = ({
  available = true,
  value,
  selected = false,
  onChange,
}: SizeButtonProps) => {
  return (
    <button
      onClick={() => onChange(value)}
      className={
        selected
          ? "size--button--main--container selected"
          : "size--button--main--container"
      }
      style={{
        textDecoration: available ? "none" : "line-through",
        color: available ? "black" : "grey",
      }}
    >
      {value}
    </button>
  );
};

export default SizeButton;
