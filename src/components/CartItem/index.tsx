import "./index.scss";
import CantInput from "../CantInput";
import { ProductOnCart } from "@/interfaces";
import { useDispatch } from "react-redux";
import { removeProductFromCart, setProductFromCart } from "@/redux/actions";
import { useNavigate } from "react-router-dom";
import { urlEncoded } from "@/helpers";

const CartItem = ({ product }: { product: ProductOnCart }) => {
  const {
    imgProduct,
    nameProduct,
    colorProduct,
    sizeProduct,
    priceProduct,
    cantProduct,
  } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlForParam = urlEncoded(product?.nameProduct);

  const handleMinus = () => {
    if (cantProduct !== 1) {
      dispatch(
        setProductFromCart({ ...product, cantProduct: cantProduct - 1 })
      );
    }
  };

  const handlePlus = () => {
    dispatch(setProductFromCart({ ...product, cantProduct: cantProduct + 1 }));
  };

  return (
    <div className="cart--item--main--container">
      <div
        className="cart--item--image--container"
        onClick={() => navigate(`/product/${urlForParam}`)}
      >
        <img src={imgProduct}></img>
      </div>
      <div className="cart--item--layout--container">
        <p className="cart--item--product--title">{nameProduct}</p>
        <strong className="cart--item--product-specs">
          {colorProduct} / {sizeProduct}{" "}
        </strong>
        <p className="cart--item--product--price">
          S./{priceProduct.toFixed(2)} PEN
        </p>
        <div className="cart--item--cta--container">
          <CantInput
            cant={cantProduct}
            onMinus={handleMinus}
            onPlus={handlePlus}
          />
          <p
            className="cart--item--delete--option"
            onClick={() => dispatch(removeProductFromCart(product))}
          >
            Eliminar
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
