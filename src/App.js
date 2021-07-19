import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import Banner_single from "./components/Banner_single/Banner_single";
import BannerWrapper from "./components/Wrapper/BannerWrapper";
import VideoWrapper from "./components/Wrapper/VideoWrapper";

function App() {
  return(
    <BrowserRouter >
    <Switch>
   <Route exact path='/banner' component={BannerWrapper}/>
   <Route  path='/banner/:id' component={Banner_single}/>
   <Route  path='/videos' component={VideoWrapper}/>
   {/* <Route  path='/videos' component={VideoWrapper}/> */}
   </Switch>
   </BrowserRouter>
   );
}

export default App;
