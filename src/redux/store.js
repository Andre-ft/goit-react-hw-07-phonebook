import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

setupListeners(store.dispatch);
