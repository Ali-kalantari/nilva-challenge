import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPosts,
  bannerUpdated,
} from "../../features/banners/BannerSlice";
import "./banner_single.css";

function Banner_single() {
  const [data, setdata] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const post = posts.find((item) => item.id === params.id);

  // const myFetchdata = async () => {
  //   const req = await fetch(`https://picsum.photos/id/${params.id}/info`);
  //   const result = await req.json();
  //   setdata(result);
  // };

  const Updatecounter = () => {
    if (params.id) {
      dispatch(bannerUpdated({ id: params.id }));
    }
  };

  useEffect(() => {
    // myFetchdata();
    setdata(post);
  },[posts]);
  return (
    <>
      <div className="single-banner-container">
        <div onClick={Updatecounter} className="single-banner">
          <img alt={data.author} src={data.download_url} />
        </div>
        <div className="counter">
          <h3>{data.click}</h3>
          
        </div>
        
      </div>
    </>
  );
}

export default Banner_single;
