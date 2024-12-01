// src/redux/wishlistSlice.js-->redux
import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: [] },
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      console.log(state.items);
      state.items = state.items.filter((item) => item.id !== action.payload);
      console.log(`Item removed with id: ${action.payload.id}`);
     
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
