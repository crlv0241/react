import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying} ) => {
  
  //state
  const [songTime, setSongTime] = useState({
    currentPlayTime: 0,
    remainingTime:0
  })
  
  
  const audioRef = useRef(0);
  //event handlers
  const playHandler = () => {
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  }
  
  const timeHandler = e => {
    let currentPlayTime = e.target.currentTime;
    let remainingTime = e.target.duration - e.target.currentTime;
    setSongTime({...songTime, currentPlayTime, remainingTime})
  }
  
  const formatTime = time => {
    return (
      Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
      )
  }
  
  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value
  }
  return (
      <div className ="player">
        <div className = "time-control">
          <p>{formatTime(songTime.currentPlayTime) }</p>
          <input type="range"
          min = {0}
          max = {audioRef.current.duration}
          value = {songTime.currentPlayTime}
          onChange = {dragHandler} 
          
          ></input>
          <p>  
        {formatTime(songTime.remainingTime) }</p>
        </div>
        <div className = "play-controls">
          <FontAwesomeIcon size="2x" icon ={faAngleLeft} />
          <FontAwesomeIcon onClick={playHandler} size="2x" icon={ isPlaying? faPause : faPlay} />
          <FontAwesomeIcon size="2x" icon  = {faAngleRight} />
        </div>
        <audio
        onLoadedMetadata = {timeHandler} 
        onTimeUpdate = {timeHandler} 
        ref = {audioRef} src= {currentSong.audio}></audio>
      
      </div>
    )
} 

export default Player;