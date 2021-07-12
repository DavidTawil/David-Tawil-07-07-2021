import { useCallback, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, makeStyles, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import Header from "./layout/Header";
import Home from "./containers/Home";
import Favorites from "./containers/Favorites";
import { uiActions } from "./store/ui-slice";
import { errorMessages } from "./utils/globals";
import { getLocationByGeo } from "./store/home-actions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100%",
    flexWrap: "nowrap",
  },
  content: {
    flex: 1,
    padding: "5rem",
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.ui.error);

  const locationSuccess = useCallback(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(getLocationByGeo(latitude, longitude));
    },
    [dispatch]
  );

  const locationError = useCallback(() => {
    dispatch(
      uiActions.setShowError({
        showError: true,
        errorMsg: errorMessages.geolocationFailed,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  }, [locationSuccess, locationError]);

  const handleErrorClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(uiActions.setShowError({ flag: false }));
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Header />
      <main className={classes.content}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" render={() => <Home />} />
          <Route path="/favorites" render={() => <Favorites />} />
        </Switch>
      </main>
      <Snackbar
        open={error.showError}
        autoHideDuration={5000}
        onClose={handleErrorClose}
      >
        <Alert onClose={handleErrorClose} severity="error">
          {error.errorMsg}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default App;
