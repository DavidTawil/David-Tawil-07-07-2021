import { createSlice } from "@reduxjs/toolkit";

import { favoriteLocationsData, favoriteLocations } from "../tests";

const initialState = {
  favoriteLocations: favoriteLocations,
  favoritesData: favoriteLocationsData,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favoriteLocations.push(action.payload.location);
    },
    removeFromFavorites(state, action) {
      const index = state.favoriteLocations.map((location, i) => {
        if (location.Key === action.payload.locationKey) {
          return i;
        }
      });

      state.favoriteLocations = state.favoriteLocations.filter(
        (location) => location.Key !== action.payload.locationKey
      );
      state.favoritesData = state.favoritesData.splice(index, 1);
    },
    updateFavoritesData(state, action) {
      state.favoritesData.push(action.payload.data);
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
