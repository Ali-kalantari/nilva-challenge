import React, { useState, useEffect } from "react";
import Banner from "./../Banner/Banner";
import "./bannercontainer.css";

function BannerContainer() {
  const url = "https://picsum.photos/v2/list?page=2&limit=100";

  const [data, setdata] = useState([]);
  const [n, setn] = useState(60);
  const Fetchdata = async () => {
    const req = await fetch(url);
    const result = await req.json();
    const data = result.slice(0, n);
    const m = data.map(i => i.id)
    console.log(m);
    setdata(data);
  };
  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
    const req = await fetch(url);
    const result = await req.json();
    const data = result.slice(0, n + 40);
    // console.log(data);
    setdata(data);
  };
  useEffect(() => {
    Fetchdata();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="banner-container">
      {data.map((item, index) => {
        return <Banner key={item.id} item={item} />;
      })}
    </div>
  );
}

export default BannerContainer;
