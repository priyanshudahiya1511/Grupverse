import React, { useState } from "react";
import "./Bottombarappview.css"
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";
import {FaPlusSquare} from "react-icons/fa";
import {AiOutlineBarChart} from "react-icons/ai";
import {FaRegComments} from "react-icons/fa";

function BottombarAppview(){

    const [bottomClick,setBottomClick] = useState();

    return(
        <div>
            <div className="bottom-bar">
                <Link to="#" onClick={() => setBottomClick("search")}
                className={`navlink ${bottomClick === "search" && "active"}`}>
                   <FaSearch size={35} className="bottom-icon"/>
                </Link>

                <Link to="#" onClick={() => setBottomClick("heart")}
                className={`navlink ${bottomClick === "heart" && "active"}`}>
                   <AiOutlineHeart size={35} className="bottom-icon"/>
                </Link>

                <Link to="#" className="navlink">
                   <FaPlusSquare size={35} className="plus-icon"/>
                </Link>

                <Link to="#" onClick={() => setBottomClick("barchart")}
                 className={`navlink ${bottomClick === "barchart" && "active"}`}>
                   <AiOutlineBarChart size={35} className="bottom-icon"/>
                </Link>

                <Link to="#" onClick={() => setBottomClick("comments")}
                className={`navlink ${bottomClick === "comments" && "active"}`}>
                   <FaRegComments size={35} className="bottom-icon"/>
                </Link>
            </div>
        </div>
    )
}

export default BottombarAppview;