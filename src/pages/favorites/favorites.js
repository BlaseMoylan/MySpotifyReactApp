import React from 'react'
import './favorites.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Favorites(){
    const navigate = useNavigate();
    // Idea*
        // make it so that when this tab is selected it will send you straight to the player
        
    // there are over 200 tracks being sent down think about how you want to display interact and play
    // maybe connect up to player
    // maybe display in here all of the albums that your favorite songs come from
    // maybe (if possible) have a link to them so you can play them just like all the other albums
    useEffect(()=>{
        navigate('/player', { state: { id: null } })
    },[])
    return(
        <div className='page-container'></div>
    )
}