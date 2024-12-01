// src/redux/store.js-->corrected
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import wishlistReducer from './wishlistSlice';
import recycleBinReducer from './recycleBinSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    wishlist: wishlistReducer,
    recycleBin: recycleBinReducer,
  },
});

export default store;
