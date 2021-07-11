import React from "react";
import { useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import ForecastCard from "./ForecastCard";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    flex: 1,
    padding: "40px",
  },
}));
export default function ForecastCards() {
  const classes = useStyles();

  const fiveDayForecast = useSelector(
    (state) => state.home.locationFiveDayForecast
  );

  const cards = fiveDayForecast?.DailyForecasts?.map((day) => {
    return (
      <Grid key={day.Date} container item xs={2}>
        <ForecastCard day={day} />
      </Grid>
    );
  });

  return (
    <Grid
      container
      justifyContent="space-between"
      className={classes.cardsContainer}
    >
      {cards}
    </Grid>
  );
}
