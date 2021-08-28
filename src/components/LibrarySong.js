import React from "react";

const LibrarySong = ({song, setCurrentSong } ) => {
 
  return (
      <div onClick = {() => setCurrentSong(song)} className = "song-container">
        <img src = {song.picture} alt={song.song}></img>
        <div className="song-description" >
          <h3>{song.song}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    )
}

export default LibrarySong;