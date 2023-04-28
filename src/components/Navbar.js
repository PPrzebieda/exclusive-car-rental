import React from "react";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger_menu.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <a href="home">
        <img src={logo} alt="site logo" />
      </a>
      <div className="links">
        <a href="home">HOME</a>
        <a href="about">ABOUT</a>
        <a href="ourcars">OUR CARS</a>
        <a href="opinions">OPINIONS</a>
        <a href="ourteam">OUR TEAM</a>
        <a href="contact">CONTACT</a>
      </div>
      <button className="btn login">Log in</button>
      <button className="btn register">Register</button>
      <div className="mobile">
        <img src={hamburger} alt="mobile menu" />
      </div>
      <div className="btns"></div>
    </div>
  );
}
