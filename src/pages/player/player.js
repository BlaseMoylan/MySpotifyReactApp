import React, { useEffect, useState } from 'react'
import "./player.css"
import { useLocation } from 'react-router-dom'
import APIKit from '../../spotify';
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

    
    
    async function getAllFavoriteTracks() {
        let allFavoriteTracks = [];
        let nextUrl = "https://api.spotify.com/v1/me/tracks";
    
        while (nextUrl) {
        const response = await APIKit.get(nextUrl);
        
        if (response.status === 200) {
            allFavoriteTracks.push(...response.data.items);
            nextUrl = response.data.next;
        } else {
            console.log("Error:", response.status);
            return [];
        }
        }
    
        return allFavoriteTracks;
    }
        
    useEffect(() => {
        // something is slowing down the process for the favsongs
        if(location.state?.id == null){
        async function fetchData() {
        try {
            const favoriteTracks = await getAllFavoriteTracks();
            setTracks(favoriteTracks);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        }
    
        fetchData();
    }
    
    // this may cause an issue
    }, []);

/**
   * Fetches the playlist tracks when the component mounts or when location state changes.
   */
  

useEffect(() => {
    // need to make it so that it get all tracks not just the first 100
            if(location.state?.id!=null){
                
                apiClient
                    .get("playlists/"+location.state?.id+"/tracks")
                    .then(res=>{
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
                <Widgets artistID={currentTrack?.album?.artists[0]?.id}/>
            </div>
            <div className='right-player-body'>
                <SongCard album={currentTrack?.album}/>
                <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
            </div>
        </div>
    )
}