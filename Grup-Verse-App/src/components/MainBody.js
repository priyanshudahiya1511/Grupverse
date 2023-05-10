import React from "react";
import HomeUnauthenticatedWebview from "./HomeUnauthenticatedWebview";
import {Route,Routes} from "react-router-dom";
import Createpost from "./Createpost";
import Createteam from "./Createteam";
import HomeUnauthenticatedAppview from "./HomeUnauthenticatedAppview";


const MainBody = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<HomeUnauthenticatedWebview/>}/>
            <Route path="/createpost" element={<Createpost/>}/>
            <Route path="/createteam" element={<Createteam/>}/>
            <Route path="/Homeunauthenticatedappview" element={<HomeUnauthenticatedAppview/>}/>
            
        </Routes>
    </>
  );
};

export default MainBody;
