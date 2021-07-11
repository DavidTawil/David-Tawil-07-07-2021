import React from "react";
import dayjs from "dayjs";
import { Paper, makeStyles, Grid, Typography } from "@material-ui/core";

import CardDetails from "./CardDetails";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    overflow: "hidden",
  },
  container: {
    height: "100%",
  },
  header: {
    padding: "8px 16px",
    borderBottom: "1px solid #eee",
  },
  body: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
}));

export default function ForecastCard({ day }) {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container direction="column" className={classes.container}>
        <Grid item className={classes.header}>
          <Typography variant="h6" display="inline">
            {dayjs(day.Date).format("ddd")}{" "}
          </Typography>
          <Typography variant="subtitle2" display="inline">
            {dayjs(day.Date).format("DD/MM/YY")}
          </Typography>
        </Grid>
        <Grid container item direction="column" className={classes.body}>
          <CardDetails
            title="DAY"
            temperatureStr={`${day.Temperature.Maximum.Value}° ${day.Temperature.Maximum.Unit}`}
            description={day.Day.IconPhrase}
            iconId={day.Day.Icon}
          />
          <CardDetails
            title="NIGHT"
            temperatureStr={`${day.Temperature.Minimum.Value}° ${day.Temperature.Minimum.Unit}`}
            description={day.Night.IconPhrase}
            iconId={day.Night.Icon}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
