import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Hidden,
  IconButton,
} from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import { uiActions } from "../store/ui-slice";
import * as colors from "../UI/colors";
import { CustomSwitch } from "../UI/customized";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    borderBottom: "1px solid #C1DCDC",
    padding: "8px 16px",
    height: "75px",
  },
  button: {
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.text.secondary}`,
    minWidth: "100px",
  },
  selectedButton: {
    border: `3px solid ${theme.palette.text.secondary}`,
  },
  unitLabel: {
    color: "rgba(255,255,255, 0.8)",
    height: "fit-content",
  },
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const isFavoritesView = location.pathname.includes("favorites");

  const unitType = useSelector((state) => state.ui.unitType);

  const unitTypeChangeHandler = () => {
    if (unitType === "Metric") {
      dispatch(uiActions.setUnitType({ unitType: "Imperial" }));
    } else {
      dispatch(uiActions.setUnitType({ unitType: "Metric" }));
    }
  };

  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.header}
    >
      <Grid container item xs={6} alignItems="center" style={{ width: "auto" }}>
        <Typography variant="h6" style={{ color: "rgba(255,255,255, 0.8)" }}>
          Weather task
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={6}
        justifyContent="flex-end"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid item className={classes.unitLabel}>
          ??C
        </Grid>
        <CustomSwitch
          checked={unitType !== "Metric"}
          onChange={unitTypeChangeHandler}
          name="unitType"
          color="secondary"
        />
        <Grid
          item
          className={classes.unitLabel}
          style={{
            marginRight: "16px",
          }}
        >
          ??F
        </Grid>
        <Hidden smDown>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<HomeRoundedIcon style={{ color: "#fff" }} />}
              className={clsx(classes.button, {
                [classes.selectedButton]: !isFavoritesView,
              })}
              style={{ marginRight: "8px" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={
                <FavoriteRoundedIcon style={{ color: colors.favoritesColor }} />
              }
              className={clsx(classes.button, {
                [classes.selectedButton]: isFavoritesView,
              })}
            >
              Favorites
            </Button>
          </Link>
        </Hidden>
        <Hidden mdUp>
          <Link to="/home">
            <IconButton>
              <HomeRoundedIcon style={{ color: "#fff" }} />
            </IconButton>
          </Link>
          <Link to="/favorites">
            <IconButton>
              <FavoriteRoundedIcon style={{ color: colors.favoritesColor }} />
            </IconButton>
          </Link>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Header;
