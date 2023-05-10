import React from "react";
import NavbarAppview from "./NavbarAppview";
import BottombarAppview from "./BottombarAppview";
import PostSection from "./PostSection";
import TeamRecommendations from "./TeamRecommendations";
import "./HomeUnauthenticatedAppview.css"

function HomeUnauthenticatedAppview(){
    return(
        <div>
            <NavbarAppview/>

            <div className="team-reccomendation-section">
                <TeamRecommendations/>
            </div>


            <div className="post-section-container">
                <PostSection/>
            </div>
            <BottombarAppview/>
        </div>
    )
}

export default HomeUnauthenticatedAppview;