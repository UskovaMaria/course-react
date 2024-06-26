import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        item.quantity++;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

