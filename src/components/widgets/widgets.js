import React, { useEffect, useState } from "react";
import "./widgets.css"
import apiClient from "../../spotify";
import WidgetCard from "./widgetCard";

export default function Widgets({artistID}){
    const [similar,setSimilar]=useState([])
    const [featured,setFeatured]=useState([])
    const [newRelease,setNewRelease]=useState([])
    const id=artistID?.artists[0]?.id

    useEffect(()=>{
        // Fetch related artists
        apiClient.get(`/artists/${id}/related-artists`)
        .then((res)=>{
            const a=res.data?.artists?.slice(0,3)
            setSimilar(a)
        })
        .catch(err=>console.log(err))

        // Fetch featured playlists
        apiClient.get(`/browse/featured-playlists`)
        .then((res)=>{
            const a=res.data?.playlist?.items?.slice(0,3)
            setFeatured(a)
        })
        .catch(err=>console.log(err))

        // Fetch new releases
        apiClient.get(`/browse/new-release`)
        .then((res)=>{
            const a=res.data?.albums?.items?.slice(0,3)
            setNewRelease(a)
        })
        .catch(err=>console.log(err))

    },[id])
    return (
        <div className="widget-body container">
            <WidgetCard title="Similar Artists" similar={similar}/>
            <WidgetCard title="Made For You" similar={featured}/>
            <WidgetCard title="New Releases" similar={newRelease}/>

        </div>
    )
}