// I want to move this componet or split it up into different parts so that it instead displays on trending and feed


import React from "react";
import "./widgetCard.css"
import WidgetEntry from "./widgetEntry";

export default function WidgetCard({title,similar,featured,newRelease}){
    return(
    <div className="w-card-body">
        <p className="widget-title">{title}</p>
        {
            // I also want to make each of the different recommended playlist clickable and playable
                // this is what I want to be working on next
                // I might want to actually get similar playlist instead of artists (I have nothing set up for artists)
                    // thus when you click on it the playlist will play right away
            similar?similar.map(artist=>(
                <WidgetEntry 
                    title={artist?.name} 
                    subtitle={artist?.followers?.total + " Followers"} 
                    image={artist?.images[2]?.url}
                />
            )):featured?featured.map(playlist=>(
                <WidgetEntry 
                    title={playlist?.name} 
                    subtitle={playlist?.tracks?.total + " Songs"} 
                    image={playlist?.images[0]?.url}
                />
            )):newRelease?newRelease.map(album=>(
                <WidgetEntry 
                    title={album?.name} 
                    subtitle={album?.artists[0]?.name} 
                    image={album?.images[2]?.url}
                />
            )): null
            // add in play effect later make it so that you can actualy play the playlist 
        }
    </div>
    )
}