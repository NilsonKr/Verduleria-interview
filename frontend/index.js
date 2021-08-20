import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ContextProducts from "./context/products";

import "./styles/global.css";

ReactDOM.render(
  <ContextProducts>
    <App />
  </ContextProducts>,
  document.querySelector("#app")
);
