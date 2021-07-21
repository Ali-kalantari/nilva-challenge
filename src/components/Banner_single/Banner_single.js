import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./banner_single.css";

function Banner_single() {
  const [data, setdata] = useState({});
  const [alldata, setalldata] = useState([]);
  const [n, setn] = useState({});
  const params = useParams();

  const myFetchdata = async () => {
    const req = await fetch(`https://picsum.photos/id/${params.id}/info`);
    const result = await req.json();
    setdata(result);
  };
  const banner_counter = () => {
    alldata.map((item) => {
      if (item.id === params.id) {
        item.click += 1;
        setn(item);
      }
    });
    setalldata(alldata);
    // console.log(alldata);
    localStorage.setItem("data", JSON.stringify(alldata));
    const data = localStorage.getItem("data");
    const final = JSON.parse(data);
    setalldata(final);
  };

  useEffect(() => {
    myFetchdata();
    const data = localStorage.getItem("data");
    const mydata = JSON.parse(data);
    setalldata(mydata);
  }, []);
  return (
    <>
      <div className="single-banner-container">
        <div onClick={banner_counter} className="single-banner">
          <img src={data.download_url} />
        </div>
        <div className="counter">
          <h3>{n.click}</h3>
        </div>
      </div>
    </>
  );
}

export default Banner_single;
