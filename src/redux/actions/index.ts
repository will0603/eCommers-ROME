import { ProductOnCart } from "@/interfaces";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_CART,
  SET_PRODUCT_FROM_CART,
} from "../typesof";

export const clearCart = (cart: ProductOnCart[]) => ({
  type: SET_CART,
  payload: cart,
});

export const addProductToCart = (product: ProductOnCart) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeProductFromCart = (product: ProductOnCart) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: product,
});

export const setProductFromCart = (product: ProductOnCart) => ({
  type: SET_PRODUCT_FROM_CART,
  payload: product,
});
