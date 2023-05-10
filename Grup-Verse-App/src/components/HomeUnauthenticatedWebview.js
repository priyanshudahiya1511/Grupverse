
import React from "react";
import PostSection from "./PostSection";
import "./cssFolder/style.css";
import userImage from "./imgFolder/userImage.png";
import gp1image from "./imgFolder/gp1 image.png";
import fbImage from "./imgFolder/logo/facebook-logo.png";
import igImage from "./imgFolder/logo/Instagram-logo.png";
import lImage from "./imgFolder/logo/linkdin-logo.png";
import tImage from "./imgFolder/logo/twitter-logo.png";
import "./cssFolder/grid-css.css";
import ThirdGridComponent from "./ThirdGridComponent";
import Navbar from "./navbar";
import PopUp from "./PopUp";

function HomeUnauthenticatedWebview(){
    return(
        <div>
          <Navbar userImage={userImage} />
          
          <div id="grid-container">
            {/* Right Side Container */}
            <div id="right-side-container">
              <div className="sidebar-container">
                <ul>
                  <li>
                    <a href=" ">
                      <span className="icon-post1">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      My Feed
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <span className="icon-post1">
                        <i className="fa-solid fa-signs-post"></i>
                      </span>
                      My Post
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <span className="icon-post1">
                        <i className="fa-sharp fa-solid fa-envelopes-bulk"></i>
                      </span>
                      My Team Post
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <span className="icon-post1">
                        <i className="fa-solid fa-users"></i>
                      </span>
                      My Following Post
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <span className="icon-post1">
                        <i className="fa-solid fa-share-nodes"></i>
                      </span>
                      Shared Post
                    </a>
                  </li>
                </ul>
              </div>
              <h4 className="sidebar-container-heading">
                Trending Topics of the week
              </h4>
              <div className="card-container">
                <div className="card">
                  <img src={gp1image} alt="img" />
                  <p>Top software for designers</p>
                </div>
              </div>
    
              <div className="social-links">
                <img
                  src={fbImage}
                  alt="Instagram-logo"
                  style={{ borderRadius: "50%" }}
                  width="60px"
                  height="40px"
                  position="relative"
                  left="10px"
                />
                <img
                  src={igImage}
                  alt="Facebook-logo"
                  style={{ borderRadius: "50%" }}
                  width="45px"
                  height="40px"
                />
                <img
                  src={tImage}
                  alt="Twitter-logo"
                  style={{ borderRadius: "50%" }}
                  width="40px"
                  height="40px"
                />
                <img
                  src={lImage}
                  alt="LinkedIn-logo"
                  style={{ borderRadius: "50%" }}
                  width="40px"
                  height="40px"
                />
              </div>
              </div>
    
    <div id="mid-Container">
      {/* Search Container */}
      <div className="search-container" id="search-container-box">
        <input type="text" id="search-input" placeholder="Search..." />
        <button id="search-button">
          <i className="fa fa-search"></i>
        </button>
        <button id="mic-button">
          <i className="fa fa-microphone"></i>
        </button>
      </div>
      <div className="pp"><PopUp/></div>
      {/* Post Section */}
      <PostSection id="post-section"></PostSection>
    </div>
    
    {/* Another Div */}
    <div class="another-div">
      <ThirdGridComponent></ThirdGridComponent>
    </div>
    </div>
        </div>
      )
}

export default HomeUnauthenticatedWebview;