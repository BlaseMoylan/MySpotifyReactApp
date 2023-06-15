import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css"
import { BsSpotify } from "react-icons/bs"
import { IconContext } from 'react-icons'
export default function Login(){
    return (
    <div className="login-page">
        <div className="title"><IconContext.Provider value={{size: "60px", className:"logo"}}>{<BsSpotify/>}<p className='titleName'><i>Blazing Music</i></p></IconContext.Provider></div>
        
        <a href={loginEndpoint}><div className="login-btn">Log In</div></a>

    </div>
    );
}