import React from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <aside>
        <div className="dashboard-header">
          <img
            src="https://i.picsum.photos/id/152/3888/2592.jpg?hmac=M1xv1MzO9xjf5-tz1hGR9bQpNt973ANkqfEVDW0-WYU"
            alt="profilepicture"
          />
          <p>Bob Smith</p>
        </div>
        <ul className="dashboard-list">
          <li className="dashboard-list-li">
            <Link to="/banner">Banners</Link>
          </li>
          <li className="dashboard-list-li">
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Dashboard;
