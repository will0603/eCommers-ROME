import { OnceVariants, ProductOnCart, ProductVariant } from "@/interfaces";

export const getTotalPayFromCart = (products: ProductOnCart[]): number => {
  const totalPrice = products.reduce((total, product) => {
    return total + product.priceProduct * product.cantProduct;
  }, 0);
  return totalPrice;
};

export const getProductFromCart = (
  productsOnCart: ProductOnCart[],
  productToVerify: ProductOnCart
) => {
  const productAlreadyOnCart = productsOnCart.find(
    (product) =>
      product.nameProduct === productToVerify.nameProduct &&
      product.colorProduct === productToVerify.colorProduct &&
      product.sizeProduct === productToVerify.sizeProduct
  );
  return productAlreadyOnCart;
};

export const getOnceVariantsFromProduct = (
  variants: ProductVariant[]
): OnceVariants => {
  const transformedData = variants.reduce(
    (acc: OnceVariants, item: ProductVariant) => {
      // Agregar tallas
      if (!acc.allSizes.includes(item.size)) {
        acc.allSizes.push(item.size);
      }

      // Agregar colores
      const existingColor = acc.allColors.find(
        (color) => color.code === item.color.code
      );
      if (!existingColor) {
        acc.allColors.push(item.color);
      }

      return acc;
    },
    { allSizes: [], allColors: [] }
  );
  return transformedData;
};

export const urlEncoded = (word: string | undefined): string => {
  if (word) {
    const toUri = encodeURIComponent(word);
    return toUri;
  }
  return "";
};

export const urlDecoded = (word: string | undefined): string => {
  if (word) {
    const fromUri = decodeURIComponent(word);
    return fromUri;
  }
  return "";
};
