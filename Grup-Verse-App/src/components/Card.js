import React from "react";
import "./Card.css";

function Card({recommendation}){
    return(
        <div className="cards-container">
            <div className="card">
                <p className="name">{recommendation.name}</p>
                <div className="img-con">
                    <img src={`https://grupverse.com/${recommendation.profilepic}`}/>
                </div>
                <button className="join-btn">
                    join
                </button>
            </div>
        </div>
    )
}

export default Card;