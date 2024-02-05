import { useState } from "react";
import Logo from "@assets/images/logo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import Button from "@components/Button";
import SideBar from "@components/SideBar";
import { AnimatePresence } from "framer-motion";
import "./index.scss";
import Cart from "../Cart";
const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  return (
    <nav className="navbar_main_container">
      <div className="navbar_logo_container">
        <img src={Logo} alt="LogoCompany"></img>
      </div>
      <div className="navbar_call_to_actions_container">
        <Button
          icon={<AiOutlineShoppingCart />}
          iconSize={"25px"}
          btnClass="btn-secondary"
          onClick={() => setShowCart(true)}
        />
        <Button
          icon={<TbWorld />}
          iconSize={"25px"}
          btnClass="btn-secondary"
          onClick={() => console.log("abrir menu")}
        />
        <Button
          icon={<HiOutlineMenuAlt3 />}
          iconSize={"25px"}
          btnClass="btn-secondary"
          onClick={() => setShowSideBar(!showSideBar)}
        />
      </div>
      <AnimatePresence>
        {showSideBar && <SideBar closeSidebar={() => setShowSideBar(false)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showCart && <Cart closeCart={() => setShowCart(false)} />}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
