import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home-slice";
import uiReducer from "./ui-slice";
import favoritesReducer from "./favorites-slice";

const store = configureStore({
  reducer: { home: homeReducer, ui: uiReducer, favorites: favoritesReducer },
});

export default store;
