import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../Componant/SearchSlice";
import CategorySlice from "../Componant/CategorySlice";
import CartSlice from "./CartSlice";
const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});
export default Store;