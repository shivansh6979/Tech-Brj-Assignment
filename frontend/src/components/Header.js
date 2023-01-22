import React from "react";
import logo from "../Images/Brijwasi.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="navlinks">
        <span>Menu</span>
        <span>About Us</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default Header;
