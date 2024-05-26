import { configureStore } from "@reduxjs/toolkit";
import { queryApi } from "./api";
export const store = configureStore({
  reducer: {
    [queryApi.reducerPath]: queryApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(queryApi.middleware),
});
