import Button from "@/components/Button";
import "./index.scss";
import ProductImagesCarrousel from "@/components/ProductImagesCarrousel";
import ProductShoppingSpecs from "@/components/ProductShoppingSpecs";
import { GoShieldCheck } from "react-icons/go";
import { useState } from "react";
import AccordionInfo from "@/components/AccordionInfo";
import ExchangePolicy from "@/components/ExchangePolicy";
import BreadCumb from "@/components/BreadCumb";
import { useDispatch } from "react-redux";
import { addProductToCart } from "@/redux/actions";
import { ProductOnCart, ProductVariant } from "@/interfaces";
import { getOnceVariantsFromProduct } from "@/helpers";

interface ProductDetailsProps {
  id: number;
  nameProduct: string;
  imgsProduct: string[];
  priceProduct: number;
  variantsProduct: ProductVariant[];
  //..extender segun la data traida de BD
}

const ProductDetails = ({
  id,
  nameProduct,
  imgsProduct,
  priceProduct,
  variantsProduct,
}: ProductDetailsProps) => {
  const variantsInfo = getOnceVariantsFromProduct(variantsProduct);

  const ProductInitialValues: ProductOnCart = {
    id,
    nameProduct,
    imgProduct: imgsProduct ? imgsProduct[0] : "",
    priceProduct,
    colorProduct: variantsInfo.allColors[0].label,
    sizeProduct: variantsInfo.allSizes[0],
    cantProduct: 1,
  };

  const [productSpecs, setProductSpecs] =
    useState<ProductOnCart>(ProductInitialValues);

  const dispatch = useDispatch();

  const handleChangeInfo = (field: string, value: string | number) => {
    setProductSpecs({
      ...productSpecs,
      nameProduct,
      priceProduct,
      imgProduct: imgsProduct ? imgsProduct[0] : "",
      [field]: value,
    });
  };

  return (
    <div className="product--details--template--main--container">
      <div className="product--details--content--container content--container">
        <BreadCumb />
        <div className="product--details--content--body--container">
          <ProductImagesCarrousel productImages={imgsProduct || []} />
          <div className="product--details--shopping--content--container">
            <div className="product--shopping--specs--header">
              <strong>{nameProduct}</strong>
              <span>S./.{priceProduct?.toFixed(2)}</span>
            </div>
            <ProductShoppingSpecs
              onChangeSpecs={(field, value) => handleChangeInfo(field, value)}
              currentSpecs={productSpecs}
              colorVariants={variantsInfo?.allColors}
              sizeVariants={variantsInfo?.allSizes}
            />
            <div className="product--shopping--info--cta--buttons">
              <Button
                styles={{ padding: "18px 10px" }}
                onClick={() => dispatch(addProductToCart(productSpecs))}
                btnClass="btn-secondary"
                text="AÑADIR A LA CESTA"
              />
              <Button
                styles={{ padding: "18px 10px" }}
                onClick={() => console.log("Comprar ahora")}
                text="COMPRAR AHORA"
              />
            </div>
            <br></br>
            <div className="product--details--footer--container">
              <strong>Impuesto incluido.</strong>
              <br></br>
              <p>
                <GoShieldCheck /> 100% Pagos Seguros
              </p>
              <span>Tus datos estan protegidos con nosotros.</span>
              <AccordionInfo
                title="Reseñas"
                content={<p>Aún no hay reseñas.</p>}
              />
            </div>
          </div>
          <AccordionInfo
            title="Cambios y devoluciones"
            content={<ExchangePolicy />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
