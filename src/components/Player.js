import React from 'react';
import {
  FontAwesomeIcon
} from'@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  currentSong, isPlaying, setIsPlaying, audioRef, songTime, songs, setCurrentSong 
}) => {


  //event handlers
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying)
    }
  }

  const formatTime = time => {
    if (time !== undefined)
      return Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
    else
      return "00:00"
  }

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value
  }

  const skipHandler = direction => {
    const songIndex = songs.findIndex(s => s.id === currentSong.id)
    if (direction === "skipForward") {
      setCurrentSong(songs[((songIndex + 1) % songs.length) ]) 
    }
  }

  return (
    <div className="player">
        <div className="time-control">
          <p>
      {formatTime(songTime.currentPlayTime)}
    </p>
          <input type="range"
      min={0}
      max={songTime.remainingTime || 0 }
      value={songTime.currentPlayTime}
      onChange={dragHandler}

      ></input>
          <p>
        {formatTime(songTime.remainingTime || 0)}
    </p>
    </div>
        <div className="play-controls">
          <FontAwesomeIcon  size="2x" icon={faAngleLeft} />
          <FontAwesomeIcon onClick={playHandler} size="2x" icon={ isPlaying? faPause: faPlay} />
          <FontAwesomeIcon  onClick={() => skipHandler("skipForward")}  size="2x" icon={faAngleRight} />
    </div>
  </div>
)
}

export default Player;