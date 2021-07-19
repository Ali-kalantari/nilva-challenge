import React from "react";
import BannerContainer from "../BannerContainer/BannerContainer";
import Header from "../header/Header";
import Dashboard from "./../Dashborad/Dashboard";
import "./Wrapper.css";

function BannerWrapper() {
  return (
    <div>
      <Dashboard />
      <Header />
      <BannerContainer />
    </div>
  );
}

export default BannerWrapper;
