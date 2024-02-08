import { MutableRefObject, useRef, useState } from "react";
import "./index.scss";

interface ProductImagesCarrouselProps {
  productImages?: string[];
}

const ProductImagesCarrousel = ({
  productImages = [
    "https://romestore.pe/cdn/shop/files/178_optimized.jpg?v=1697585338&width=1300",
  ],
}: ProductImagesCarrouselProps) => {
  const carrouselRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [indexImg, setIndexImg] = useState<number>(0);

  const scrollTo = (position: number) => {
    setIndexImg(position);
    if (carrouselRef?.current) {
      carrouselRef.current.style.transform = `translateX(-${position * 100}%)`;
    }
  };
  return (
    <>
      <div className="product--images--carrousel--main--slider--container">
        <div
          ref={carrouselRef}
          className="product--images--carrousel--slider--content--container"
        >
          {productImages &&
            productImages.map((image, index) => {
              return <img src={image} key={index}></img>;
            })}
        </div>
        <div className="product--images--carrousel--slider--dots--container">
          {new Array(productImages.length).fill(0).map((_, index) => {
            return (
              <div
                className={
                  indexImg === index
                    ? "product--carrousel--dot active"
                    : "product--carrousel--dot"
                }
                onClick={() => scrollTo(index)}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="product--images--carrousel--main--grid--container">
        <div className="product--images--carrousel--grid--content--container">
          {productImages &&
            productImages.map((image, index) => {
              return <img src={image} key={index}></img>;
            })}
        </div>
      </div>
    </>
  );
};

export default ProductImagesCarrousel;
