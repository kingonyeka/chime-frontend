import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const defaultState = {
  cart: [{ email: getUserFromLocalStorage()?.name || "", products: [] }],
  numItemsInCart: 0,
  cartTotal: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { products } = action.payload;
      const userCart = state.cart.find(
        (cart) => cart.email === getUserFromLocalStorage()?.name
      );

      if (userCart) {
        products.forEach((product) => {
          const existingProduct = userCart.products.find(
            (p) => p.slug === product.slug
          );

          if (existingProduct) {
            toast.info("Item already in cart");
          } else {
            userCart.products.push(product);
            state.numItemsInCart += 1;
            state.cartTotal += product.price * product.quantities;
            cartSlice.caseReducers.calculateTotals(state);
            toast.success("Item added to cart");
          }
        });

        cartSlice.caseReducers.calculateTotals(state);
      } else {
        toast.error("User cart not found");
      }

      // console.log(products);
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const userCart = state.cart.find(
        (cart) => cart.email === getUserFromLocalStorage()?.name
      );

      if (userCart) {
        const productIndex = userCart.products.findIndex(
          (p) => p.slug === cartID
        );

        if (productIndex !== -1) {
          const product = userCart.products[productIndex];
          state.numItemsInCart -= product.quantities;
          state.cartTotal -= product.price * product.quantities;
          userCart.products.splice(productIndex, 1);
          cartSlice.caseReducers.calculateTotals(state);
          toast.success("Item removed from cart");
        }
      }
    },

    clearCart: (state) => {
      const userCart = state.cart.find(
        (cart) => cart.email === getUserFromLocalStorage()?.name
      );

      if (userCart) {
        userCart.products = [];
        state.numItemsInCart = 0;
        state.cartTotal = 0;
        cartSlice.caseReducers.calculateTotals(state);
        toast.success("Cart cleared");
      }
    },

    editItem: (state, action) => {
      const { slug, quantities } = action.payload;
      const userCart = state.cart.find(
        (cart) => cart.email === getUserFromLocalStorage()?.name
      );

      if (userCart) {
        const product = userCart.products.find((p) => p.slug === slug);

        if (product) {
          const quantityDifference = quantities - product.quantities;
          state.numItemsInCart += quantityDifference;
          state.cartTotal += product.price * quantityDifference;
          product.quantities = quantities;
          cartSlice.caseReducers.calculateTotals(state);
          toast.success("Item quantity updated");
        }
      }
    },

    calculateTotals: (state) => {
      state.orderTotal = state.cartTotal;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
