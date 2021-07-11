import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
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
    width: "15%",
    height: "40%",
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
    if (favoriteLocations.length) {
    //   dispatch(getFavoritesData(favoriteLocations));
    }
  }, [favoriteLocations, dispatch]);

  const locationClickedHandler = (location) => {
    dispatch(homeActions.setSelectedLocation({ selectedLocation: location }));
    history.push("/home");
  };

  const cards = [];
  if (favoritesData.length === favoriteLocations.length && !isLoading) {
    favoritesData.map((locationData, index) =>
      cards.push(
        <Grid
          key={favoriteLocations[index].LocalizedName}
          container
          item
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
    <Grid container spacing={2} className={classes.favoritesContainer}>
      {!isLoading ? cards : Spinner(80)}
    </Grid>
  );
}
