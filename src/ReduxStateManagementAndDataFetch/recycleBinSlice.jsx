// src/redux/recycleBinSlice.js-->redux
import { createSlice } from '@reduxjs/toolkit';

const recycleBinSlice = createSlice({
  name: 'recycleBin',
  initialState: { deletedItems: [] },
  reducers: {
    addToRecycleBin: (state, action) => {
      state.deletedItems.push(action.payload);
    },
    removeFromRecycleBin: (state, action) => {
      state.deletedItems = state.deletedItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToRecycleBin, removeFromRecycleBin } = recycleBinSlice.actions;
export default recycleBinSlice.reducer;
