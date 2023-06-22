import React from "react";
import "./audioplayer.css"
import ProgressCircle from "./progressCircle";

export default function AudioPlayer({currentTrack}){
    return(
        <div className="player-body container">
            <div className="player-leftbody">
                <ProgressCircle 
                percentage={75} 
                isPlaying={true} 
                // image={currentTrack?.images[0]?.url} 
                size={300} 
                color="rgba(240, 248, 255, 0.661)"   
                />         
            </div>
            <div className="player-rightbody"></div>
        </div>
    )
}