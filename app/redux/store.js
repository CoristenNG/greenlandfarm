// store/store.js
import { configureStore } from '@reduxjs/toolkit';

import authReducer, { authApi } from './slices/authSlice';
import  { addressApi } from './slices/addressSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
