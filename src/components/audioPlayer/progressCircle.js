import React from "react";
import "./progressCircle.css"

// research how to do a linear progress bar!!!!!!!!!!!
const Circle=({color,percentage,size,strokeWidth})=>{
    const radius = size/2-10;
    const circ=((2*Math.PI*radius)-20)
    const strokePct = ((100-Math.round(percentage))*circ)/100;
    return (
    <circle 
        r={radius}
        cx="50%"
        cy="50%"
        fill="transparent"
        stroke={strokePct !==circ ? color:""}
        strokeWidth={strokeWidth}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
        strokeLinecap="round"
    ></circle>
    )
}

export default function ProgressCircle({percentage,isPlaying,image,size,color}){

    return (
        <div className="progress-circle container">
            <svg width={size} height={size}>
                <g>
                    <Circle strokeWidth={"0.4rem"} color="rgba(240, 248, 255, 0.661)" size={size}/>
                    <Circle strokeWidth={"0.6rem"} color={color} percentage={percentage} size={size}/>
                </g>
                <defs>
                    <clipPath id="myCircle">
                        <circle cx="50%" cy="50%" r={(size/2)-25} fill="#ffffff"/>
                    </clipPath>
                    <clipPath id="myInnerCircle">
                        <circle cx="50%" cy="50%" r={(size/2)-100} fill="#ffffff"/>
                    </clipPath>
                </defs>
                <image className={isPlaying?"active":""} x={0} y={0} width={2*((size/2))} height={2*((size/2))} href={image} clipPath="url(#myCircle)"/>
                {/* <image className={isPlaying?"active":""} x={100} y={100} width={2*((size/2)-100)}  href={image} clipPath="url(#myInnerCircle)"/> */}

            </svg>

        </div>
    )
}