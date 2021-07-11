import React from "react";
import { Grid } from "@material-ui/core";

import CurrentWeather from "./CurrentWeather";
import FavoritesIconButton from "./FavoritesIconButton";

export default function WeatherDetailsHeader() {
  return (
    <Grid
      container
      item
      justifyContent="space-between"
      style={{ padding: "0 40px" }}
    >
      <Grid container item xs={6}>
        <CurrentWeather />
      </Grid>
      <Grid container item xs={6} justifyContent="flex-end">
        <FavoritesIconButton />
      </Grid>
    </Grid>
  );
}
