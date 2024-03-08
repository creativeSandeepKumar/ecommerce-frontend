import { configureStore } from '@reduxjs/toolkit';
import otherslices from './slices/otherslices';
import productslices from './slices/productslices';

export const makeStore = () => {
  return configureStore({
    reducer: {
        others: otherslices,
        products: productslices
    }
  })
}