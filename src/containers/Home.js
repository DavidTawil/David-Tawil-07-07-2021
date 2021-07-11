import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import WeatherDetails from "../components/Home/WeatherDetails/WeatherDetails";
import { homeActions } from "../store/home-slice";
import { getLocationsOptions, getLocationWeather } from "../store/home-actions";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
  },
  searchContainer: {
    marginBottom: "3vh",
    width: "fit-content",
  },
  paper: {
    width: "70%",
    backgroundColor: "rgba(255,255,255, 0.4)",
    padding: "2rem",
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const locationsOptions = useSelector((state) => state.home.locationsOptions);
  const selectedLocation = useSelector((state) => state.home.selectedLocation);
  const unitType = useSelector((state) => state.ui.unitType);

  useEffect(() => {
    dispatch(getLocationWeather(selectedLocation, unitType));
  }, [selectedLocation, dispatch, unitType]);

  const fetchLocations = (event) => {
    const str = event.currentTarget.value;
    if (str.length >= 2) {
      dispatch(getLocationsOptions(str));
    }
  };

  const selectedLocationHandler = (_, value) => {
    value &&
      dispatch(homeActions.setSelectedLocation({ selectedLocation: value }));
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <Grid item className={classes.searchContainer}>
        <Autocomplete
          id="locations"
          autoHighlight
          options={locationsOptions}
          onChange={selectedLocationHandler}
          value={selectedLocation}
          getOptionLabel={(option) => option?.LocalizedName}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Choose location"
              size="small"
              onChange={fetchLocations}
            />
          )}
        />
      </Grid>
      <Grid container item justifyContent="center" style={{ height: "75%" }}>
        <WeatherDetails />
      </Grid>
    </Grid>
  );
}
