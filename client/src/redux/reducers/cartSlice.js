import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  CartProduct: [],
  orders: [],
  cartLength: 0,
  searchedProduct: [],
};

const storedCartItems = localStorage.getItem("cartItems");
if (storedCartItems) {
  initialState.CartProduct = JSON.parse(storedCartItems);
  initialState.cartLength = initialState.CartProduct.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.CartProduct.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex !== -1) {
        state.CartProduct[existingItemIndex].quantity++;
      } else {
        state.CartProduct.push({
          ...action.payload,
          quantity: 1,
          selectedSize: "15ml",
        });
      }
      state.cartLength += 1;
      toast.success("Added to cart successfully");
      localStorage.setItem("cartItems", JSON.stringify(state.CartProduct));
    },

    removeFromCart: (state, action) => {
      const removedItem = state.CartProduct.find(
        (item) => item._id === action.payload
      );
      if (removedItem) {
        state.cartLength -= removedItem.quantity;
        state.CartProduct = state.CartProduct.filter(
          (item) => item._id !== action.payload
        );
        toast.success("Remove from cart successfully");
        localStorage.setItem("cartItems", JSON.stringify(state.CartProduct));
      }
    },

    emptyCart: (state, action) => {
      state.CartProduct = [];
      state.cartLength = 0;
      localStorage.removeItem("cartItems");
    },

    checkout: (state, action) => {
      state.orders = state.CartProduct;
      state.CartProduct = [];
      state.cartLength = 0;
      localStorage.removeItem("cartItems");
    },

    updateCartItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.CartProduct.find((item) => item._id === productId);
      if (product) {
        state.cartLength += quantity - product.quantity;
        product.quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.CartProduct));
      }
    },

    updateCartItemSize: (state, action) => {
      const { productId, size } = action.payload;
      const product = state.CartProduct.find((item) => item._id === productId);
      if (product) {
        product.selectedSize = size;
        localStorage.setItem("cartItems", JSON.stringify(state.CartProduct));
      }
    },

    // ____________________Search_____________----
    search: (state, action) => {
      state.searchedProduct = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  search,
  emptyCart,
  checkout,
  updateCartItemQuantity,
  updateCartItemSize
} = cartSlice.actions;
export default cartSlice.reducer;
