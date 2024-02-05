import { useRef } from "react";
import { motion } from "framer-motion";
import "./index.scss";
import CartItem from "../CartItem";
import { MdClose } from "react-icons/md";
import Button from "../Button";
import { useOnClickOutside } from "@/hooks/useClickOutside";

interface CartProps {
  closeCart: () => void;
}

const Cart = ({ closeCart }: CartProps) => {
  const cartRef = useRef() as React.MutableRefObject<HTMLDivElement>;
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
            <span>4</span>
          </p>
          <MdClose onClick={closeCart} />
        </div>
        <div className="cart--content--body--container">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cart--content--footer--container">
          <div className="cart--content--summary--container">
            <p>Subtotal</p>
            <p>S/.29.00 PEN</p>
          </div>
          <span>
            * Impuesto incluido y envío calculado en el momento de la compra.
          </span>
          <Button
            text="Continuar con la compra"
            styles={{ borderRadius: 0, padding: "15px" }}
            btnClass="btn-black"
            onClick={() => console.log("Ir al checkout de compra")}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
