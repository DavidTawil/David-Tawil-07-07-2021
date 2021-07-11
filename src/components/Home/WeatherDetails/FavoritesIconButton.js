import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import * as colors from "../../../UI/colors";
import { LightTooltip } from "../../../UI/customized";
import { favoritesActions } from "../../../store/favorites-slice";

const useStyles = makeStyles((theme) => ({
  favoritesButton: {
    height: "fit-content",
    color: colors.favoritesColor,
    transition: "0.3s",
    "&:hover": {
      opacity: 0.8,
    },
  },
  favoritesSvg: {
    height: "32px",
    width: "32px",
  },
}));

export default function FavoritesIconButton() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favoriteLocations);
  const selectedLocation = useSelector((state) => state.home.selectedLocation);

  const isLocationInFavorites = favorites.find(
    (location) => location.Key === selectedLocation.Key
  );

  const favoritesClickedHandler = () => {
    if (isLocationInFavorites) {
      dispatch(
        favoritesActions.removeFromFavorites({
          locationKey: selectedLocation.Key,
        })
      );
    } else {
      dispatch(favoritesActions.addToFavorites({ location: selectedLocation }));
    }
  };
  return (
    <LightTooltip
      title={
        isLocationInFavorites ? "Remove from favorites" : "Add to favorites"
      }
      placement="top-end"
    >
      <IconButton
        size="medium"
        className={classes.favoritesButton}
        onClick={favoritesClickedHandler}
      >
        {isLocationInFavorites ? (
          <FavoriteIcon className={classes.favoritesSvg} />
        ) : (
          <FavoriteBorderIcon className={classes.favoritesSvg} />
        )}
      </IconButton>
    </LightTooltip>
  );
}
