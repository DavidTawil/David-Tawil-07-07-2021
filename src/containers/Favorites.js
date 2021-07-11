import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, makeStyles, Typography, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { getFavoritesData } from "../store/favorites-actions";
import { homeActions } from "../store/home-slice";
import FavoriteCard from "../components/Favorites/FavoriteCard";
import { Spinner } from "../UI/customized";

const useStyles = makeStyles((theme) => ({
  favoritesContainer: {
    height: "100%",
    width: "100%",
    padding: "3rem 6rem",
  },
  cardContainer: {
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "30%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "25%",
    },
  },
  noFavoritesPaper: {
    height: "fit-content",
    padding: "30px",
  },
}));

export default function Favorites() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector((state) => state.ui.isLoading);
  const favoriteLocations = useSelector(
    (state) => state.favorites.favoriteLocations
  );
  const favoritesData = useSelector((state) => state.favorites.favoritesData);
  const unitType = useSelector((state) => state.ui.unitType);

  useEffect(() => {
    console.log(favoriteLocations);
    if (favoriteLocations.length) {
      dispatch(getFavoritesData(favoriteLocations));
    }
  }, [favoriteLocations, dispatch]);

  const locationClickedHandler = (location) => {
    dispatch(homeActions.setSelectedLocation({ selectedLocation: location }));
    history.push("/home");
  };

  const cards = [];
  if (!favoriteLocations.length) {
    cards.push(
      <Paper elevation={2} className={classes.noFavoritesPaper}>
        <Grid container>
          <Typography variant="h6">
            There are no favorite locations to display
          </Typography>
        </Grid>
      </Paper>
    );
  }
  if (favoritesData.length === favoriteLocations.length && !isLoading) {
    favoritesData.map((locationData, index) =>
      cards.push(
        <Grid
          key={favoriteLocations[index].LocalizedName}
          container
          item
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
          className={classes.cardContainer}
          onClick={() => locationClickedHandler(favoriteLocations[index])}
        >
          <FavoriteCard
            name={favoriteLocations[index].LocalizedName}
            temperature={`${locationData[0]?.Temperature[unitType].Value} °${locationData[0]?.Temperature[unitType].Unit}`}
            description={locationData[0].WeatherText}
            iconId={locationData[0].WeatherIcon}
          />
        </Grid>
      )
    );
  }

  return (
    <Grid
      container
      spacing={2}
      alignItems={!favoriteLocations.length ? "center" : "flex-start"}
      justifyContent="center"
      className={classes.favoritesContainer}
    >
      {!isLoading ? cards : Spinner(80)}
    </Grid>
  );
}
