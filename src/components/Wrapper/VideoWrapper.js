import * as React from "react";
import VideoContainer from "../VideoContainer/VideoContainer";
import Dashboard from './../Dashborad/Dashboard';
import Header from './../header/Header'


function VideoWrapper() {
  return (
    <div>
        <Header />
        <Dashboard />
        <VideoContainer />
    </div>
  );
}

export default VideoWrapper;
