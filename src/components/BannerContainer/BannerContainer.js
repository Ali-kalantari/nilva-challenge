import React, { useState, useEffect } from "react";
import Banner from "./../Banner/Banner";
import "./bannercontainer.css";

function BannerContainer() {
  const [data, setdata] = useState([]);
  const [n, setn] = useState(60);
  const url = "https://picsum.photos/v2/list?page=2&limit=100";

  const Fetchdata = async () => {
    const req = await fetch(url);
    const result = await req.json();
    const a = result;
    const data = a.map((item, index) => {
      return { ...item, click: 0 };
    });

    localStorage.setItem("data", JSON.stringify(data));
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
    const data = localStorage.getItem("data");
    const mydata = JSON.parse(data).slice(0, data.length - n);
    setdata(mydata);
  };
  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      Fetchdata();
    } else {
      const data = localStorage.getItem("data");
      const mydata = JSON.parse(data).slice(0, n);
      setdata(mydata);
    }

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
