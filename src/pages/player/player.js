import React, { useEffect, useState } from 'react'
import "./player.css"
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify'
import SongCard from '../../components/songCard/songCard'
import Queue from '../../components/queue/queue'
import AudioPlayer from '../../components/audioPlayer/audioplayer'
import Widgets from '../../components/widgets/widgets'

/**
 * Player component displays the audio player, song card, and queue.
 */

export default function Player(){
    const location = useLocation()
    const [tracks,setTracks]=useState([])
    const [currentTrack,setCurrentTrack]=useState({})
    const [currentIndex,setCurrentIndex]=useState(0)

/**
   * Fetches the playlist tracks when the component mounts or when location state changes.
   */

    useEffect(()=>{
        if(location.state){
            apiClient
                .get("playlists/"+location.state?.id+"/tracks")
                .then(res=>{
                    console.log("here")
                    console.log(res.data.items)
                    setTracks(res.data.items);
                    setCurrentTrack(res.data.items[0].track)
                })
        }
    },[location.state])

/**
   * Updates the current track when currentIndex or tracks change.
   */

    useEffect(()=>{
        setCurrentTrack(tracks[currentIndex]?.track);
    },[currentIndex, tracks])
    return(
        <div className='container' >
            <div className='left-player-body'>
                <AudioPlayer 
                    currentTrack={currentTrack} 
                    currentIndex={currentIndex} 
                    total={tracks}
                    setCurrentIndex={setCurrentIndex} 
                />
                <Widgets artistID={currentTrack?.album}/>
            </div>
            <div className='right-player-body'>
                <SongCard album={currentTrack?.album}/>
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
            </div>
        </div>
    )
}