import { urlDecoded } from "@/helpers";
import { productsFake } from "@/helpers/datafake";
import { ProductData } from "@/interfaces";
import MainContainer from "@components/MainContainer";
import ProductDetails from "@templates/ProductDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null
  );
  useEffect(() => {
    const productOnParams = productsFake.filter(
      (product) => product.name === urlDecoded(params.productName)
    );
    if (productOnParams) {
      setCurrentProduct(productOnParams[0]);
    }
  }, [params]);

  return (
    <MainContainer>
      {currentProduct && (
        <ProductDetails
          nameProduct={currentProduct.name}
          priceProduct={currentProduct.price}
          id={currentProduct.id}
          imgsProduct={currentProduct.imgUrls}
          variantsProduct={currentProduct.variants}
        />
      )}
    </MainContainer>
  );
};

export default ProductDetailsPage;
