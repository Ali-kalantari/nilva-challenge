import React from "react";
import { Link } from "react-router-dom";
import "./Banners.css";

const Banner = (props) => {
  
  return (
    <>
    <Link to={`/banner/${props.item.id}`} >
    <div className="banner">
      <div className="img-container">
        <img src={props.item.download_url} alt={props.item.author} title={props.item.author} />
      </div>
      <div className="bannername">
        <p>{props.item.author}</p>
      </div>
    </div>
    </Link>
    </>
  );
};

export default Banner;
