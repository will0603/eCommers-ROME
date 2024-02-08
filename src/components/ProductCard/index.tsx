import { useNavigate } from "react-router-dom";
import "./index.scss";
import Product from "@assets/images/clothe.png";
import { urlEncoded } from "@/helpers";

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
  const navigate = useNavigate();

  return (
    <div className="product--card--container">
      <div
        className="product--card--image--container"
        onClick={() => navigate(`/product/${urlEncoded(title)}`)}
      >
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
