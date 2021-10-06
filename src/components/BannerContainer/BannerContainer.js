import React, { useState, useEffect } from "react";
import Banner from "./../Banner/Banner";
import "./bannercontainer.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  selectAllPosts,
} from "./../../features/banners/BannerSlice";

function BannerContainer() {
  const dispatch = useDispatch();
  const banners = useSelector(selectAllPosts);
  const [data, setdata] = useState([]);
  const [n] = useState(60);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
    // const req = await fetch(url);
    // const result = await req.json();
    const data = banners.slice(0, n + 39);
    // console.log(data);
    setdata(data);
  };

  useEffect(() => {
    dispatch(fetchPosts());
    console.log(banners);
    const mydata = banners.slice(0, n);
    setdata(mydata);
    console.log(data);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="banner-container">
      {data.map((item) => {
        return <Banner key={item.id} item={item} />;
      })}
      {/* {
        banners.map(item=>{
          return <Banner key={item.id} item={item} />
        })
      } */}
    </div>
  );
}

export default BannerContainer;
