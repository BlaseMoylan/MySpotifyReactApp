import React from "react";
import "./controls.css"
import {FaPause} from "react-icons/fa"
import { IconContext } from "react-icons";
import {IoPlaySkipBack,IoPlaySkipForward,IoPlay} from "react-icons/io5"
import { formToJSON } from "axios";

export default function Controls({isPlaying,setIsPlaying,handleNext,handlePrev}){
    return(
        <IconContext.Provider value={{size:"35px",color:"#f0f8ff"}}>
            <div className="controls-wraper container">
                <div className="action-btn" onClick={handlePrev}>
                    <IoPlaySkipBack />
                </div>
                <div className={isPlaying ? "play-pause-btn container active" : "play-pause-btn container"} onClick={()=>setIsPlaying(!isPlaying)}>
                    {isPlaying ?<FaPause/> :<IoPlay />}
                </div>
                <div className="action-btn container" onClick={handleNext}>
                    <IoPlaySkipForward />
                </div>

            </div>
        </IconContext.Provider>
    )
}