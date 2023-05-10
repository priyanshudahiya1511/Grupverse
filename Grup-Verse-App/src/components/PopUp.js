import React from "react";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import "./cssFolder/popup.css";
import { Link } from "react-router-dom";

function PopUp(){
    return(
        <div>
        <Popup trigger=
            {<div className="btn"><p>+</p></div>}
            modal nested>
            {
                 <div className="PO">
                 <Link to="/createpost" style={{textDecoration:'none'}}>
                    <div className="post">
                       <img src="https://recurpost.com/wp-content/uploads/2020/05/01recurpost-gif-1.gif" />
                       <p className="popup-text">Create</p>
                       <p className="popup-text post-text">Post</p>
                    </div>
                 </Link>

                 <Link to="/createteam" style={{textDecoration:'none'}}>
                    <div className="team">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RdLw1YMnF8tDEYygOocupj2wqmZR_K32qw&usqp=CAU"/>
                       <p className="popup-text">Create</p>
                       <p className="popup-text team-text">Team</p>
                    </div>
                 </Link>
                 </div>  
            }
        </Popup>

        
    </div>
    )
}

export default PopUp;