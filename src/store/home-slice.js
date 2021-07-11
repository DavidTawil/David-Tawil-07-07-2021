import { createSlice } from "@reduxjs/toolkit";
import { locations, fiveDayForecast, locationCurrentWeather } from "../tests";
import { defaultLocationData } from "../utils/globals";

const initialState = {
  locationsOptions: [],
  selectedLocation: defaultLocationData,
  // locationCurrentWeather: [],
  // locationFiveDayForecast: [],
  locationCurrentWeather: locationCurrentWeather,
  locationFiveDayForecast: fiveDayForecast,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateLocationsOptions(state, action) {
      state.locationsOptions = action.payload.locations;
    },
    setSelectedLocation(state, action) {
      state.selectedLocation = action.payload.selectedLocation;
    },
    setLocationCurrentWeather(state, action) {
      state.locationCurrentWeather = action.payload.locationCurrentWeather;
    },
    setLocationFiveDayForecast(state, action) {
      state.locationFiveDayForecast = action.payload.locationFiveDayForecast;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
