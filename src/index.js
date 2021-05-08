import React from "react";
import ReactDOM from "react-dom";

// import the css reset rules
import "modern-css-reset";

import App from "./App";
import { settings } from "./configure/settings";

ReactDOM.render(
  <React.StrictMode>
      <App settings={settings} />
  </React.StrictMode>,
  document.getElementById("root")
);
