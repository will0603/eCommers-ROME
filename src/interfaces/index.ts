export interface ProductOnCart {
  id: number;
  priceProduct: number;
  nameProduct: string;
  sizeProduct: string;
  colorProduct: string;
  cantProduct: number;
  imgProduct: string;
}

export interface RootState {
  cart: {
    cart: ProductOnCart[];
  };
}

export interface CartState {
  cart: ProductOnCart[];
}

export interface CartAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}
// cambiar

export interface ProductData {
  id: number;
  name: string;
  price: number;
  type: string;
  variants: ProductVariant[];
  imgUrls: string[];
}

export interface ProductVariant {
  size: string;
  color: ProductColor;
  quantity: number;
}

export interface ProductColor {
  label: string;
  code: string;
}
export interface OnceVariants {
  allSizes: string[];
  allColors: ProductColor[];
}

export interface ProductSpecifications {}

//forms

export interface LoginFormTypes {
  emailLogin: string;
  passwordLogin: string;
}

export interface RegisterFormTypes {
  username: string;
  dni: string;
  email: string;
  password: string;
}
