import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './banner_single.css'

function Banner_single() {
  const [data, setdata] = useState({});
  const [counter, setcounter] = useState(0);
  const params = useParams();
  const Fetchdata = async () => {
    const req = await fetch(`https://picsum.photos/id/${params.id}/info`);
    const result = await req.json();
    setdata(result);
  };
  const banner_counter = ()=>{
    setcounter(counter + 1)
  }
  useEffect(() => {
    Fetchdata();
  }, []);
  return (
      <>
      <div className='single-banner-container'>
    <div onClick={banner_counter} className='single-banner'>
      <img src={data.download_url} />
    </div>
    <div className='counter'>
        <h3>{counter}</h3>
    </div>
    </div>
    
    </>
  );
}

export default Banner_single;
