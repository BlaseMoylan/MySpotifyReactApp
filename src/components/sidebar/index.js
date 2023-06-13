import React from 'react'
import './sidebar.css'
import SidebarButton from './sidebarButton'
export default function Sidebar(){
    return(
        <div className='sidebar-container'>
            <img src='https://i.pinimg.com/originals/c8/eb/25/c8eb256d440f54a163c7662c21137fb4.jpg' 
            className='profile-img' 
            alt='profile'
            />
            <div>
                <SidebarButton title="" to="" icon=""/>
                <SidebarButton/>
                <SidebarButton/>
                <SidebarButton/>
                <SidebarButton/>
            </div>
            <SidebarButton/>
        </div>
    )
}