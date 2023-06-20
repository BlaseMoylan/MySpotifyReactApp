import React from "react";
import "./albumImage.css"

export default function AlbumImage({url}){

    return(
        <div className="albumImage container">
            <img src={url} alt="album image" className="albumImage-cover"/>
            <div className="albumImage-shadow">
                <img src={url} alt="shadow" className="albumImage-shadow"/>
            </div>
        </div>
    )
}