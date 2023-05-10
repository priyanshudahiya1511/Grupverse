import React from "react";
import Navbar from "./navbar";
import userImage from "./imgFolder/userImage.png";
import "./cssFolder/Createteam.css"
import { useNavigate } from "react-router-dom";

function Createteam(){

    const  navigate = useNavigate();
    return(
        <div>
             <Navbar userImage={userImage}/>
            <div className="main">
               <div heading >
                   <img/>
                   <p>Create Your Team</p>
               </div>
               <div className="underline"></div>
               <div className="close-btn" onClick={() => navigate(-1)}>X</div>

               <form>
                <div >
                    <img />
                    <input type="text" placeholder="Enter Team Name"></input>
                </div>

                <div className="bio">
                    <img/>
                    <input type="text" placeholder="Enter Team Bio"></input>
                </div>

                <div className="goal">
                    <img/>
                    <input type="text" placeholder="Enter Team Goal"></input>
                </div>

                <div className="tags" >
                    <img/>
                    <input type="text" placeholder="Select Tags"></input>
                </div>

                <div className="new-tags">
                    <img/>
                    <input type="text" placeholder="Enter New Tags"></input>
                </div>

                <button>Create</button>
               </form>
            </div>
        </div>
    )
}

export default Createteam;