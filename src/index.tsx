// React
import React from "react";
import ReactDom from "react-dom";

// App
import App from "./App";

// Accept hot reload triggers on this non react component file
if (module.hot) {
  module.hot.accept();
}

ReactDom.hydrate(<App />, document.getElementById("app"));
