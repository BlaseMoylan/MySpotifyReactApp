import React from "react";
import "./audioplayer.css"
import ProgressCircle from "./progressCircle";

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
            <div className="player-rightbody">
                <p className="song-title">
                    {currentTrack?.name}
                </p>
                <p className="song-artist">
                    {artists?.join(" | ")}
                </p>
                <div className="player-right-bottom">
                    <div className="song-duration">
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