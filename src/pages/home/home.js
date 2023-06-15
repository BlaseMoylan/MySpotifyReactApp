import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import (BrowserRouter)
import Library from '../library/library'
import Player from '../player/player' 
import Trending from '../trending/trending'
import Feed from '../feed/feed'
import Favorites from '../favorites/favorites'
import './home.css'
import Sidebar from '../../components/sidebar'
import Login from '../auth/login'
export default function Home() {
    const [token,setToken]=useState("")
    useEffect(()=>{
        const hash = window.location.hash;
        const token= hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token",token);
        setToken(token)
    })
    return !token ? (<Login />):(
        <Router>
            <div className='main-body'>
                <Sidebar />
                <Routes>
                    <Route path="/library" element={<Library/>} />
                    <Route path="/player" element={<Player/>} />
                    <Route path="/feed" element={<Feed/>} />
                    <Route path="/favorites" element={<Favorites/>} />
                    <Route path="/trending" element={<Trending/>} />
                    
                </Routes>
            </div>
        </Router>
    )
}