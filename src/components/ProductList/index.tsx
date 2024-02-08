import { MutableRefObject, useRef } from "react";
import ProductCard from "../ProductCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { ProductData } from "@/interfaces";
import "./index.scss";

interface ProductListProps {
  titleCollection?: string;
  productsData: ProductData[];
}

const ProductList = ({
  titleCollection = "Title & Collection",
  productsData,
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
            {productsData &&
              productsData.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    title={product.name}
                    price={product.price}
                    imgSrc={product.imgUrls[0]}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
