import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ContextProducts from "./context/products";
import ContextCart from "./context/cart";

import "./styles/global.css";

ReactDOM.render(
  <ContextProducts>
    <ContextCart>
      <App />
    </ContextCart>
  </ContextProducts>,
  document.querySelector("#app")
);
