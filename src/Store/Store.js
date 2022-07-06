import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-store";
import dataSlice from "./data-store";

const store = configureStore({
  reducer: { theme: themeSlice.reducer, data: dataSlice.reducer },
});

export default store;
