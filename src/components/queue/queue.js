import React from 'react';
import "./queue.css"

export default function Queue({tracks, setCurrentIndex}){
    return <div className='queue-container container'>
        <div className='queue container'>
            <p className='upNext'>upNext</p>
            <div className='queue-list'>
                    {tracks?.map((trac, index)=>(
                        <div className='queue-item container' onClick={()=>setCurrentIndex(index)}>
                            <p className='trackName'>{trac?.track?.name}</p>
                            <p className='time'>1:30</p>
                        </div>
                    ))}
            </div>
        </div>
    </div>
}
