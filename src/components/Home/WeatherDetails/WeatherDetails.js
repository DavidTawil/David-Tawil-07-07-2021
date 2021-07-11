import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Paper, Grid, Typography, makeStyles } from "@material-ui/core";

import WeatherDetailsHeader from "./WeatherDetailsHeader";
import ForecastCards from "./ForecastCards";
import { Spinner } from "../../../UI/customized";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "70%",
    backgroundColor: "rgba(255,255,255, 0.4)",
    padding: "2rem",
  },
}));

export default function WeatherDetails() {
  const classes = useStyles();

  const isLoading = useSelector((state) => state.ui.isLoading);
  const currentWeather = useSelector(
    (state) => state.home.locationCurrentWeather
  );

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container direction="column" style={{ height: "100%" }}>
        {!isLoading ? (
          <Fragment>
            <WeatherDetailsHeader />
            <Grid container item justifyContent="center" alignItems="center">
              <Typography variant="h3">
                {currentWeather[0]?.WeatherText}
              </Typography>
            </Grid>
            <ForecastCards />
          </Fragment>
        ) : (
          Spinner(80)
        )}
      </Grid>
    </Paper>
  );
}
