import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

let theme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        border: "1px solid #C1D3DC",
      },
      rounded: {
        borderRadius: "10px",
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
    },
    MuiTextField: {
      root: {
        width: "250px",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  palette: {
    primary: {
      main: "#264653",
    },
    secondary: {
      main: "#2a9d8f",
    },
    text: {
      primary: "#000726",
      secondary: "rgba(255,255,255, 0.8)",
    },
    error: {
      main: "#e76f51",
    },
    warning: {
      main: "#e9c46a",
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
