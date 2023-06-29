import React from 'react';
import "./queue.css"
// need to pass in isPlaying inorder to show which song is currently playing in the queue
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
// import React from 'react';
// import "./queue.css"

// export default function Queue({tracks, currentTrackIndex, setCurrentIndex}) {
//     return (
//         <div className='queue-container container'>
//             <div className='queue container'>
//                 <p className='upNext'>upNext</p>
//                 <div className='queue-list'>
//                     {tracks?.map((track, index) => (
//                         <div
//                             className={`queue-item container ${currentTrackIndex === index ? 'active' : ''}`}
//                             onClick={() => setCurrentIndex(index)}
//                             key={index}
//                         >
//                             <p className='trackName'>{track?.track?.name}</p>
//                             <p className='time'>1:30</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }