import React, { useState } from "react";
import "./Video.css";
import Video from "../Video/Video";

function VideoContainer() {
  const [data] = useState([
    "117",
    "118",
    "119",
    "12",
    "120",
    "121",
    "122",
    "123",
    "124",
    "125",
    "126",
    "127",
    "128",
    "129",
    "13",
    "130",
    "131",
    "132",
    "133",
    "134",
    "135",
    "136",
    "137",
    "139",
    "14",
    "140",
    "141",
    "142",
    "143",
    "144",
    "145",
    "146",
    "147",
    "149",
    "15",
    "151",
    "152",
    "153",
    "154",
    "155",
    "156",
    "157",
    "158",
    "159",
    "16",
    "160",
    "161",
    "162",
    "163",
    "164",
    "165",
    "166",
    "167",
    "168",
    "169",
    "17",
    "170",
    "171",
    "172",
    "173",
  ]);
  return (
    <div className="video-container">
      {data.map((item, index) => {
        return <Video />;
      })}
    </div>
  );
}

export default VideoContainer;
