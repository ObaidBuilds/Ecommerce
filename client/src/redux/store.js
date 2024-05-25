import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import { productAPI } from "./api/product";
import { orderAPI } from "./api/order";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
  },
  middleware: (mid) => [...mid(), productAPI.middleware,orderAPI.middleware],
});

export default store;
