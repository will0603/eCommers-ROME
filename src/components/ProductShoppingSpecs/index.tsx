import ColorButton from "../ColorButton";
import CantInput from "../CantInput";
import SizeButton from "../SizeButton";
import { ProductColor, ProductOnCart } from "@/interfaces";
import "./index.scss";

interface ProductShoppingSpecsProps {
  currentSpecs: ProductOnCart;
  productName?: string;
  productPrice?: number;
  onChangeSpecs(field: string, value: string | number): void;
  colorVariants: ProductColor[];
  sizeVariants: string[];
}

const ProductShoppingSpecs = ({
  productName = "ACTIVE ZERO SLEEVE R HOODIE",
  productPrice = 89,
  onChangeSpecs,
  currentSpecs,
  colorVariants,
  sizeVariants,
}: ProductShoppingSpecsProps) => {
  const handleMinus = () => {
    if (currentSpecs?.cantProduct !== 1) {
      onChangeSpecs("cantProduct", currentSpecs?.cantProduct - 1);
    }
  };
  return (
    <div className="product--shopping--specs--container">
      <div className="product--shopping--specs--header">
        <strong>{productName}</strong>
        <span>S./.{productPrice?.toFixed(2)}</span>
      </div>
      <div className="product--shopping--specs--body">
        <div className="product--shopping--specs--option">
          <p>
            Color: <span>{currentSpecs?.colorProduct}</span>
          </p>
          <div className="product--shopping--options">
            {colorVariants &&
              colorVariants.map((color, index) => {
                return (
                  <ColorButton
                    key={index}
                    onChange={(value) => onChangeSpecs("colorProduct", value)}
                    colorValue={color.code}
                    colorLabel={color.label}
                    selected={currentSpecs.colorProduct === color.label}
                  />
                );
              })}
          </div>
        </div>
        <div className="product--shopping--specs--option">
          <p>
            Tamaño: <span>{currentSpecs?.sizeProduct}</span>
          </p>
          <div className="product--shopping--options">
            {sizeVariants &&
              sizeVariants.map((size, index) => {
                return (
                  <SizeButton
                    key={index}
                    value={size}
                    onChange={(value) => onChangeSpecs("sizeProduct", value)}
                    selected={currentSpecs?.sizeProduct === size}
                  />
                );
              })}
          </div>
        </div>
        <div className="product--shopping--specs--option">
          <p>Cantidad</p>
          <div className="product--shopping--options">
            <CantInput
              cant={currentSpecs?.cantProduct}
              onMinus={() => handleMinus()}
              onPlus={() =>
                onChangeSpecs("cantProduct", currentSpecs?.cantProduct + 1)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShoppingSpecs;
