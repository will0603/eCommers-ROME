import { useRef } from "react";
import { motion } from "framer-motion";
import "./index.scss";
import CartItem from "../CartItem";
import { MdClose } from "react-icons/md";
import Button from "../Button";
import { useOnClickOutside } from "@/hooks/useClickOutside";
import { useSelector } from "react-redux";
import { RootState } from "@/interfaces";
import { getTotalPayFromCart } from "@/helpers";

interface CartProps {
  closeCart: () => void;
}

const Cart = ({ closeCart }: CartProps) => {
  const cartRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { cart } = useSelector((state: RootState) => state.cart);

  console.log({ cart });

  useOnClickOutside(cartRef, closeCart);

  return (
    <>
      <motion.div
        className="cart--mask--main--container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        transition={{ ease: "linear", duration: 0.3 }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        ref={cartRef}
        className="cart--content--container"
      >
        <div className="cart--content--header--container">
          <p>
            <strong>SU CESTA</strong>
            <span>{cart.length}</span>
          </p>
          <MdClose onClick={closeCart} />
        </div>
        <div className="cart--content--body--container">
          {cart.length > 0 ? (
            cart &&
            cart?.map((product, index) => {
              return <CartItem key={index} product={product} />;
            })
          ) : (
            <div className="cart--content--empty--cart">
              <p>No hay productos</p>
            </div>
          )}
        </div>
        <div className="cart--content--footer--container">
          <div className="cart--content--summary--container">
            <p>Subtotal</p>
            <p>S/{getTotalPayFromCart(cart).toFixed(2)} PEN</p>
          </div>
          <span>
            * Impuesto incluido y envío calculado en el momento de la compra.
          </span>
          <Button
            text="Continuar con la compra"
            disabled={!(cart.length > 0)}
            styles={{ borderRadius: 0, padding: "15px" }}
            btnClass="btn-primary"
            onClick={() => console.log("Ir al checkout de compra")}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
