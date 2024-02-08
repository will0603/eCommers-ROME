import { FiHome, FiUser, FiShoppingBag } from "react-icons/fi";
import SideNavGroupWrapper from "@components/SideNavGroupWrapper";
import { BiCategory } from "react-icons/bi";
import { RiMenLine } from "react-icons/ri";
import { MdOutlineClose, MdFavorite } from "react-icons/md";
import { RiWomenLine } from "react-icons/ri";
import Button from "@components/Button";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useOnClickOutside } from "@hooks/useClickOutside";
import "./index.scss";

interface SideBarProps {
  closeSidebar: () => void;
}

const SideBar = ({ closeSidebar }: SideBarProps) => {
  const outSideBarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useOnClickOutside(outSideBarRef, closeSidebar);

  return (
    <>
      <motion.div
        className="sidebar_mask_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <motion.aside
        initial={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 0.2 }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        ref={outSideBarRef}
        className="sidebar_main_container"
      >
        <div className="sidebar_profile_info_container">
          <div className="sidebar_close_icon_container">
            <Button
              btnClass="btn-secondary"
              iconSize="20px"
              icon={<MdOutlineClose />}
              onClick={closeSidebar}
            ></Button>
          </div>
          <p className="sidebar_username_container">Hola, Identificate</p>
        </div>
        <div className="sidebar_navitems_container">
          <SideNavGroupWrapper
            navGroupItems={[
              { title: "Inicio", path: "/", icon: <FiHome /> },
              { title: "Ver perfil", path: "/", icon: <FiUser /> },
              {
                title: "Categorías",
                icon: <BiCategory />,
                dropDownInfo: [
                  {
                    title: "Hombre",
                    icon: <RiMenLine />,
                    onCallToAction: () => console.log("Ir a cat hombres"),
                  },
                  {
                    title: "Mujer",
                    icon: <RiWomenLine />,
                    dropDownInfo: [
                      {
                        title: "Vestidos",
                        onCallToAction: () => console.log("Ir a vestidos"),
                      },
                      {
                        title: "Lenceria",
                        onCallToAction: () => console.log("Ir a lenceria"),
                      },
                    ],
                  },
                ],
              },
              { title: "Mis canjes", path: "/", icon: <FiShoppingBag /> },
              { title: "Favoritos", path: "/", icon: <MdFavorite /> },
            ]}
          />
        </div>
      </motion.aside>
    </>
  );
};

export default SideBar;
