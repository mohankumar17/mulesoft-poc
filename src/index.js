import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/components/themes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MUIThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </MUIThemeProvider>
);

reportWebVitals();
