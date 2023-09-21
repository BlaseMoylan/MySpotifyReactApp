import React from 'react'
import './favorites.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Favorites(){
    const navigate = useNavigate();
    // need to make the connection faster
    useEffect(()=>{
        navigate('/player', { state: { id: null } })
    },[])
    return(
        <div className='page-container'></div>
    )
}