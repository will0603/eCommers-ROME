import { MutableRefObject, useRef } from "react";
import ProductCard from "../ProductCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./index.scss";
interface ProductListProps {
  titleCollection?: string;
}

const ProductList = ({
  titleCollection = "Title & Collection",
}: ProductListProps) => {
  const carrouselRef = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollToRigth = () => {
    if (carrouselRef?.current) {
      carrouselRef.current.scrollLeft += 400;
    }
  };
  const scrollToLeft = () => {
    if (carrouselRef?.current) {
      carrouselRef.current.scrollLeft -= 400;
    }
  };
  return (
    <div className="product--list--main--container">
      <div className="product--list--content--container content--container ">
        <div className="product--list--content--header--container">
          <strong>{titleCollection}</strong>
          <div className="product--list--content--carrousel--buttons">
            <GoArrowLeft onClick={() => scrollToLeft()} />
            <GoArrowRight onClick={() => scrollToRigth()} />
          </div>
        </div>

        <div
          ref={carrouselRef}
          className="product--list--content--carrousel--container"
        >
          <div className="product--list--content--carrousel">
            <ProductCard imgSrc="https://romestore.pe/cdn/shop/files/19_64c381b3-bb94-4eda-bab6-7f7085cfd226.png?v=1691430275" />
            <ProductCard imgSrc="https://romestore.pe/cdn/shop/files/19_64c381b3-bb94-4eda-bab6-7f7085cfd226.png?v=1691430275" />
            <ProductCard imgSrc="https://romestore.pe/cdn/shop/files/19_64c381b3-bb94-4eda-bab6-7f7085cfd226.png?v=1691430275" />
            <ProductCard imgSrc="https://romestore.pe/cdn/shop/files/19_64c381b3-bb94-4eda-bab6-7f7085cfd226.png?v=1691430275" />
            <ProductCard imgSrc="https://romestore.pe/cdn/shop/files/19_64c381b3-bb94-4eda-bab6-7f7085cfd226.png?v=1691430275" />
            <ProductCard imgSrc="https://romestore.pe/cdn/shop/files/19_64c381b3-bb94-4eda-bab6-7f7085cfd226.png?v=1691430275" />
            <ProductCard imgSrc="https://romestore.pe/cdn/shop/files/19_64c381b3-bb94-4eda-bab6-7f7085cfd226.png?v=1691430275" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
