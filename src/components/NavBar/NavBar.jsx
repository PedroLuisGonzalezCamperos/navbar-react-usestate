import React from "react";
import CartWitget from "./CartWitget";
import "./navbar.scss";
import logo from "../../assets/logocompu.png"
//recoredar comando rafce

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="" className="logo" />
      </div>

      <ul>
        <li>Laptops</li>
        <li>Celulares</li>
        <li>Tablets</li>
        <li>Accesorios</li>
      </ul>

      <CartWitget />
    </nav>
  );
};

export default NavBar;