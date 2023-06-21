import React from "react";
import "./audioplayer.css"

export default function AudioPlayer(){
    return(
        <div className="player-body">
            <div className="player-leftbody">
                <ProgressCircle percentage={75} isPlaying={true} image={} size={300} color=""   />         
            </div>
            <div className="player-rightbody"></div>
        </div>
    )
}