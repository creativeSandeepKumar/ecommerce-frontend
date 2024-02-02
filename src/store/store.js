import { configureStore } from '@reduxjs/toolkit';
import otherslices from './slices/otherslices';

export const makeStore = () => {
  return configureStore({
    reducer: {
        others: otherslices
    }
  })
}