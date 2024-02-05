import "./index.scss";
import Product from "@assets/images/clothe.png";

interface ProductCardProps {
  title?: string;
  price?: number;
  imgSrc?: string;
}

const ProductCard = ({
  title = "Hoodie Cropped Unity Sports Oversize",
  price = 12,
  imgSrc = "",
}: ProductCardProps) => {
  return (
    <div className="product--card--container">
      <div className="product--card--image--container">
        <img src={imgSrc || Product}></img>
      </div>
      <div className="product--card--layout--container">
        <p>{title}</p>
        <p>S/{price?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
