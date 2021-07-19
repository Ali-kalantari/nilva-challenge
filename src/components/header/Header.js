import React from "react";
import "./Header.css";

const Header = () => {
  const text = `All Day & Night`;
  return (
    <div className="header">
      <img src="https://img.icons8.com/ios/100/000000/2k-logo.png" />
      <div className="header-title">
        <h1>Your Favorite Banners</h1>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Header;
