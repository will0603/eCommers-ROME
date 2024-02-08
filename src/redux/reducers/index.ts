import { Reducer, combineReducers } from "redux";
import cartReducer from "./cartReducer";
import { CartAction, CartState } from "@/interfaces";

type RootReducer = Reducer<{ cart: CartState }, CartAction>;

const rootReducer: RootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
