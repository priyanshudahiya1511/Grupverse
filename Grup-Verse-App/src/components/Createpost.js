import React, { useState } from "react";
import Navbar from "./navbar";
import userImage from "./imgFolder/userImage.png";
import "./cssFolder/Createpost.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function Createpost(){

    const navigate = useNavigate();

    const [Tags,setTags] = useState();

    const optionList = [
        { value: "space", label: "Space" },
        { value: "neurosience", label: "Neuroscience" },
        { value: "medicine", label: "Medicine" },
        { value: "physics", label: "Physics" },
        { value: "mathematics", label: "Mathematics" },
        { value: "computer science", label: "Computer Science" },
        { value: "music", label: "Music" },
        { value: "beauty", label: "Beauty" },
        { value: "economics", label: "Economics" }
      ];

      function handletags(data){
        setTags(data);
      }

    return(
        <div>
            <Navbar userImage={userImage}/>
            <div className="main">
               <div heading >
                   <img/>
                   <p>Create Your Post</p>
               </div>
               <div className="underline"></div>   
               <div className="close-btn" onClick={() => navigate(-1)}>X</div>
            </div>

            <form>
                <label className="post-title">
                    <p >Enter Post Title</p>
                    <input type="text" name="title"/>
                </label>

                <label className="post-desc">
                    <p>Enter Post Description</p>
                    <input type="text" name="desc"/>
                </label>

                <label className="post-tag">
                    <p>Search and Select Tags</p>
                    <Select
                    options={optionList}
                    placeholder="Select Tag"
                    value={Tags}
                    onChange={handletags}
                />  
                {
                    Tags&&<div className="Btn" onClick={()=>setTags(null)}>x</div>  
                }
                </label>

                <label className="post-newtag">
                    <p>Enter New Tags</p>
                    <input type="text" name="newtag" placeholder="Enter New Tag"/>
                </label>

                <label className="post-team">
                    <p>Search and select your team from dropdown below</p>
                    <input type="text" name="team" placeholder="Search for your teams"/>
                </label>

                <button>
                    Create Post
                </button>

            </form>

        </div>    
    )
}

export default Createpost;