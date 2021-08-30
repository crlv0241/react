import React from 'react';
import LibrarySong from "./LibrarySong"


const Library = ({songs, setCurrentSong, audioRef, setIsPlaying, isPlaying, setSongs, isLibraryOpen} ) => {
  return(
    <div className = { `library ${isLibraryOpen?"active-library" : ""} `}>
      <h2>Library</h2>
      { songs.map(s => <LibrarySong setCurrentSong={setCurrentSong} song ={s} audioRef= {audioRef}  setIsPlaying = {setIsPlaying} isPlaying={isPlaying} songs ={songs} setSongs={setSongs} />) } 
    </div>
    )
}

export default Library;