import { MutableRefObject, useRef } from "react";
import CategoryListItem from "../CategoryListItem";
import PolosCt from "@assets/images/ctpolos.jpg";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import PolerasCt from "@assets/images/ctpoleras.webp";
import PantalonesCt from "@assets/images/ctpantalones.webp";
import CamisasCt from "@assets/images/ctcamisas.jpg";
import ChaquetasCt from "@assets/images/ctchaquetas.jpg";
import "./index.scss";

const CategoryList = () => {
  const carouselRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollToRigth = () => {
    if (carouselRef?.current) {
      carouselRef.current.scrollLeft += 310;
    }
  };
  const scrollToLeft = () => {
    if (carouselRef?.current) {
      carouselRef.current.scrollLeft -= 310;
    }
  };
  return (
    <div className="category--list--main--container">
      <div
        onClick={() => scrollToRigth()}
        className="btn--carrousel btn--carrousel--next--btn"
      >
        <GrFormNextLink />
      </div>
      <div
        onClick={() => scrollToLeft()}
        className="btn--carrousel btn--carrousel--prev--btn"
      >
        <GrFormPreviousLink />
      </div>
      <div
        ref={carouselRef}
        className="category--list--container content--container"
      >
        <div className="category--list--container--carrousel">
          <CategoryListItem srcImg={PolosCt} title="Polos" />
          <CategoryListItem srcImg={PolerasCt} title="Poleras" />
          <CategoryListItem srcImg={PantalonesCt} title="Pantalones" />
          <CategoryListItem srcImg={CamisasCt} title="Camisas" />
          <CategoryListItem srcImg={ChaquetasCt} title="Chaquetas" />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
