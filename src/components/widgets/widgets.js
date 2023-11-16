import React, { useEffect, useState } from "react";
import "./widgets.css"
import apiClient from "../../spotify";
import WidgetCard from "./widgetCard";

export default function Widgets({artistID}){
    const [similar,setSimilar]=useState([])
    const [featured,setFeatured]=useState([])
    const [newRelease,setNewRelease]=useState([])
   

    useEffect(()=>{
        // working to make these selectable and playable albums/way to see related artists and their albums which can then be played
        // Fetch related artists
        if(artistID){
            apiClient
            .get(`/artists/${artistID}/related-artists`)
            .then((res)=>{
                const a=res.data?.artists?.slice(0,3)
                setSimilar(a)
            })
            .catch(err=>console.log(err))

            // Fetch featured playlists
            apiClient
            .get(`/browse/featured-playlists`)
            .then((res)=>{
                const a=res.data?.playlists?.items?.slice(0,3)
                setFeatured(a)
            })
            .catch(err=>console.log(err))

            // Fetch new releases
            apiClient
            .get(`/browse/new-releases`)
            .then((res)=>{
                const a=res.data?.albums?.items?.slice(0,3)
                setNewRelease(a)
            })
            .catch(err=>console.log(err))
        }

    },[artistID])
    return (
        <div className="widget-body container">
            <WidgetCard title="Similar Artists" similar={similar}/>
            <WidgetCard title="Made For You" featured={featured}/>
            <WidgetCard title="New Releases" newRelease={newRelease}/>

        </div>
    )
}