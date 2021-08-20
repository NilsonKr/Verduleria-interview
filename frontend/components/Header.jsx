import React from "react";
import { Link } from "react-router-dom";
import useProductInfo from "../hooks/useProductInfo";

import Basket from "../assets/groceries.svg";
import FruitsLogo from "../assets/fruits.svg";

import "../styles/Header.css";

const Header = () => {
  const info = useProductInfo();

  return (
    <header>
      <Link to="/" className="navbar">
        <img src={FruitsLogo} alt="Home" width="50px" height="50px" />
        <h2 className="product--link">Products</h2>
      </Link>
      <Link to="/checkout">
        <span>{info.quantity}</span>
        <img src={Basket} alt="Basket" width="50px" height="50px" />
      </Link>
    </header>
  );
};

export default Header;
