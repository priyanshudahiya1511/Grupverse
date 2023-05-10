import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import Card from "./Card";
import { useEffect } from "react";

function TeamRecommendations(){

    const [loading,setLoading] = useState(false);

    const [recommendations, setRecommendations] = useState([]);

    async function fetchdata(){
        setLoading(true)
        try{
            const res = await fetch('https://grupverse.com/statistics/getteambyranks?from=0&to=100');
            const data = await res.json();
            setRecommendations(data);
            console.log(recommendations)
        }
        catch{
            console.log("problem in fetching data")
        }
        setLoading(false)
    }

    useEffect(()=> {
        fetchdata();
    },[]);

    return(
        <div>
            {
                loading ? (<Spinner/>)    :
                
                (<div style={{display:"flex", overflowX:"auto", marginTop:"-250px"}}>
                    {recommendations.map((recommendation) =>{
                    return <Card key={recommendation.id} recommendation={recommendation}/>
                    })}
                </div>)

            }
        </div>
    )
}

export default TeamRecommendations;