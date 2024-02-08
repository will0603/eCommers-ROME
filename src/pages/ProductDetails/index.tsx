import { urlDecoded } from "@/helpers";
import { productsFake } from "@/helpers/datafake";
import MainContainer from "@components/MainContainer";
import ProductDetails from "@templates/ProductDetails";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productName } = useParams();
  console.log("aca", urlDecoded(productName));
  //cambiar
  const productOnParams = productsFake.filter(
    (product) => product.name === productName
  );

  return (
    <MainContainer>
      <ProductDetails
        nameProduct={productOnParams[0].name}
        priceProduct={productOnParams[0].price}
        id={productOnParams[0].id}
        imgsProduct={productOnParams[0].imgUrls}
        variantsProduct={productOnParams[0].variants}
      />
    </MainContainer>
  );
};

export default ProductDetailsPage;
