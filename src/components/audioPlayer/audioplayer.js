// import React, {useState,useRef, useEffect} from "react";
// import "./audioplayer.css"
// import ProgressCircle from "./progressCircle";
// import Controls from "./controls";
// import WaveAnimation from "./waveAnimation";

// export default function AudioPlayer({currentTrack , currentIndex, setCurrentIndex, total}){
    
//     const [isPlaying,setIsPlaying]=useState(false);
//     const [trackProgress,setTrackProgress]=useState(0)
//     var audioSrc = total[currentIndex]?.track?.preview_url
//     const audioRef= useRef(new Audio(total[0]?.track?.preview_url))
//     const intervalRef=useRef();
//     const isReady=useRef(false)
//     const {duration}=audioRef.current;
//     const currentPercentage= duration?(trackProgress/duration)*100:0


//     const startTimer=()=>{
//         clearInterval(intervalRef.current)
//         intervalRef.current=setInterval(()=>{
//             if(audioRef.current.ended){
//                 handleNext();
//             }
//             else{
//                 setTrackProgress(audioRef.current.currentTime)
//             }

//         },[1000])
//     }

//     useEffect(()=>{
//         // throwing error The play() request was interrupted by a call to pause(). https://goo.gl/LdLk22 trying to fix it!
//         if(isPlaying&& audioRef.current){
//             audioRef.current=new Audio(audioSrc)
//             audioRef.current.play()
//             startTimer()
            
            
//         }
//         else{
//             clearInterval(intervalRef.current)
//             audioRef.current.pause()
//         }
//     },[isPlaying])

//     useEffect(()=>{
//         var playPromise=audioRef.current.play()
//         if(playPromise!== undefined){
//             playPromise.then(_ =>{
//                 audioRef.current.pause()
//             })
//             .catch(error => {
//                 console.log("Auto-play was prevented")
//                 // Show paused UI.
//               });
//         }
//         audioRef.current.pause()
//         audioRef.current=new Audio(audioSrc)
//         setTrackProgress(audioRef.current.currentTime)
//         if(isReady.current){

//             audioRef.current.play()
//             setIsPlaying(true)
//             startTimer();
//         }
//         else{
//             isReady.current=true
//         }
//     },[currentIndex])

//     useEffect(()=>{
//         return()=>{
//             audioRef.current.pause();
//             clearInterval(intervalRef.current)
//         }
//     },[])

//     const handleNext=()=>{
//         if(currentIndex<total.length-1){
//             setCurrentIndex(currentIndex+1)
//         }
//         else{
//             setCurrentIndex(0)
//         }
//     }
//     const handlePrev =()=>{
//         if(currentIndex-1<0){
//             setCurrentIndex(total.length-1)
//         }
//         else{
//             currentIndex(currentIndex-1)
//         }
        
//     }

//     const addZero=(n)=>{
//         return n>9?""+n:"0"+n;
//     }

//     const artists=[];
//     currentTrack?.album?.artists?.forEach((artist) => {
//         artists.push(artist?.name)
//     });
//     return(
//         <div className="player-body container">
//             <div className="player-leftbody">
//                 <ProgressCircle 
//                 percentage={currentPercentage} 
//                 isPlaying={true} 
//                 image={currentTrack?.album?.images[0]?.url} 
//                 size={300} 
//                 color="rgba(240, 248, 255, 0.661)"   
//                 />         
//             </div>
//             <div className="player-rightbody container">
//                 <div className="player-head container">
//                 <p className="song-title">
//                     {currentTrack?.name}
//                 </p>
//                 <p className="song-artist">
//                     {artists?.join(" | ")}
//                 </p>
//                 </div>
//                 <div className="player-right-bottom container">
//                     <div className="song-duration container">
//                         <p className="duration">0.{addZero(Math.round(trackProgress))}</p>
//                         <WaveAnimation isPlaying={false}/>
//                         <p className="duration">0.30</p>
//                     </div>
//                     <div>
//                         <Controls 
//                             isPlaying={isPlaying}
//                             setIsPlaying={setIsPlaying}
//                             handleNext={handleNext}
//                             handlePrev={handlePrev}
//                             total={total}
//                             />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, { useState, useRef, useEffect } from "react";
import "./audioplayer.css";
import ProgressCircle from "./progressCircle";
import Controls from "./controls";
import WaveAnimation from "./waveAnimation";

export default function AudioPlayer({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioSrc = total[currentIndex]?.track?.preview_url;
  const audioRef = useRef(new Audio(total[0]?.track?.preview_url));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const currentPercentage = duration
    ? (trackProgress / duration) * 100
    : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    if (isReady.current) {
      audioRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
      });
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(total.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const addZero = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  const artists = [];
  currentTrack?.album?.artists?.forEach((artist) => {
    artists.push(artist?.name);
  });

  return (
    <div className="player-body container">
      <div className="player-leftbody">
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          color="rgba(240, 248, 255, 0.661)"
        />
      </div>
      <div className="player-rightbody container">
        <div className="player-head container">
          <p className="song-title">{currentTrack?.name}</p>
          <p className="song-artist">{artists?.join(" | ")}</p>
        </div>
        <div className="player-right-bottom container">
          <div className="song-duration container">
            <p className="duration">0.{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0.30</p>
          </div>
          <div>
            <Controls
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              handleNext={handleNext}
              handlePrev={handlePrev}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}