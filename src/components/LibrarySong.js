import React from "react";

const LibrarySong = ({song, setCurrentSong, audioRef, setIsPlaying, isPlaying, setSongs, songs} ) => {
 
  const selectSong = () => {
    setCurrentSong(song)
    
    //active song on the Library
    //updates the state songs
  
    const updatedSongSelection = songs.map(s => {
      if(s.id === song.id){
        return {...s, active:true} 
      } else {
        return {...s, active:false}
      }
    })
    
    setSongs(updatedSongSelection);
    
    const playPromise = audioRef.current.play()
        playPromise.then( () => {
        audioRef.current.play();
        setIsPlaying(true)
      })
  }
 
  return (
      <div onClick = {selectSong} className ={`song-container ${song.active? "selected" : ""} `}  >
        <img src = {song.picture} alt={song.song}></img>
        <div className="song-description" >
          <h3>{song.song}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    )
}

export default LibrarySong;