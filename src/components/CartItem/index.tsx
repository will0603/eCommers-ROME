import "./index.scss";
import { HiMinus } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

interface CartItemProps {
  srcImage?: string;
  productTitle?: string;
  productColour?: string;
  productSize?: string;
  productPrice?: number;
  productCant?: number;
}

const CartItem = ({
  srcImage = "https://romestore.pe/cdn/shop/files/188_optimized.jpg?v=1697649289",
  productTitle = "Getting Better BVD",
  productColour = "Azulino",
  productSize = "S",
  productPrice = 29,
  productCant = 1,
}: CartItemProps) => {
  return (
    <div className="cart--item--main--container">
      <div className="cart--item--image--container">
        <img src={srcImage}></img>
      </div>
      <div className="cart--item--layout--container">
        <p className="cart--item--product--title">{productTitle}</p>
        <strong className="cart--item--product-specs">
          {productColour} / {productSize}{" "}
        </strong>
        <p className="cart--item--product--price">
          S./{productPrice.toFixed(2)} PEN
        </p>
        <div className="cart--item--cta--container">
          <div className="cart--item--cant--options">
            <p>
              <HiMinus />
            </p>
            <span>{productCant}</span>
            <p>
              <HiPlus />
            </p>
          </div>
          <p className="cart--item--delete--option">Eliminar</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
