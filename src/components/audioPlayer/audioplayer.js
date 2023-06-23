import React from "react";
import "./audioplayer.css"
import ProgressCircle from "./progressCircle";
import Controls from "./controls";
import WaveAnimation from "./waveAnimation";

export default function AudioPlayer({currentTrack}){
    const artists=[];
    currentTrack?.album?.artists?.forEach((artist) => {
        artists.push(artist?.name)
    });
    return(
        <div className="player-body container">
            <div className="player-leftbody">
                <ProgressCircle 
                percentage={75} 
                isPlaying={true} 
                image={currentTrack?.album?.images[0]?.url} 
                size={300} 
                color="rgba(240, 248, 255, 0.661)"   
                />         
            </div>
            <div className="player-rightbody container">
                <div className="player-head container">
                <p className="song-title">
                    {currentTrack?.name}
                </p>
                <p className="song-artist">
                    {artists?.join(" | ")}
                </p>
                </div>
                <div className="player-right-bottom container">
                    <div className="song-duration container">
                        <p className="duration">0.01</p>
                        <WaveAnimation />
                        <p className="duration">0.30</p>
                    </div>
                    <div>
                        <Controls 
                            // isPlaying={isPlaying}
                            // setIsPlaying={setIsPlaying}
                            // handleNext={handleNext}
                            // handlePrev={handlePrev}
                            // total={total}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}