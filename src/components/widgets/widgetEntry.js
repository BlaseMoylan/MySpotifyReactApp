import React from "react";
import "./widgetEntry.css"

export default function WidgetEntry({title, subtitle, image}){
    return(
        <div className="entry-body container">
            <img src={image} alt={title} className="entry-image"/>
            <div className="entry-right-body container">
                <p className="entry-title">{title}</p>
                <p className="entry-subtitle">{subtitle}</p>
            </div>

        </div>
    )
}