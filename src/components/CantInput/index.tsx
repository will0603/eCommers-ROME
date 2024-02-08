import { HiMinus, HiPlus } from "react-icons/hi";
import "./index.scss";

interface CantInputProps {
  cant?: number;
  onPlus?(): void;
  onMinus?(): void;
}

const CantInput = ({ cant = 1, onPlus, onMinus }: CantInputProps) => {
  return (
    <div className="cant--input--main--container">
      <p onClick={onMinus}>
        <HiMinus />
      </p>
      <span>{cant}</span>
      <p onClick={onPlus}>
        <HiPlus />
      </p>
    </div>
  );
};

export default CantInput;
