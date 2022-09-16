import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filters/slice';
import cartSlice from './cart/slice';
import laptopSlice from './laptop/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    laptop: laptopSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
