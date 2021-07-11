import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

import { weatherIcons } from "../../utils/globals";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#EBEBEB",
    },
  },
  container: {
    padding: "24px",
    height: "100%",
  },
}));

export default function FavoriteCard({
  name,
  temperature,
  description,
  iconId,
}) {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        className={classes.container}
      >
        <Grid item style={{ whiteSpace: "nowrap" }}>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          style={{ height: "fit-content" }}
        >
          <Typography variant="h6">{temperature}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">{description}</Typography>
        </Grid>
        <Grid
          container
          item
          justifyContent="center"
          style={{ height: "fit-content" }}
        >
          <img
            src={weatherIcons[iconId]}
            alt="weather-icon"
            style={{ width: "75px", height: "45px" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
