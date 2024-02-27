// store.ts
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
