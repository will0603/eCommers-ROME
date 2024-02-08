import { CartAction, CartState } from "@/interfaces";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_CART,
  SET_PRODUCT_FROM_CART,
} from "../typesof";
import { getProductFromCart } from "@/helpers";

const initialState: CartState = {
  cart: [],
};

export default function cartReducer(
  state = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case SET_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case ADD_PRODUCT_TO_CART: {
      //caso de q el producto con sus mismas specs ya esta en el carrito, solo se aumenta la cantidad
      return getProductFromCart(state.cart, action.payload)
        ? {
            ...state,
            cart: [
              ...state.cart.map((product) =>
                product === getProductFromCart(state.cart, action.payload)
                  ? {
                      ...product,
                      cantProduct:
                        product.cantProduct + action.payload.cantProduct,
                    }
                  : product
              ),
            ],
          }
        : {
            ...state,
            cart: [...state.cart, action.payload],
          };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const updatedCart = state.cart.filter(
        (product) => product !== getProductFromCart(state.cart, action.payload)
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case SET_PRODUCT_FROM_CART: {
      const updatedCart = state.cart.map((product) =>
        product === getProductFromCart(state.cart, action.payload)
          ? { ...product, cantProduct: action.payload.cantProduct }
          : product
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    default:
      return state;
  }
}
