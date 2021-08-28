import React from 'react';
import LibrarySong from "./LibrarySong"


const Library = ({songs, setCurrentSong} ) => {
  return(
    <div className = {"library"} >
      <h2>Library</h2>
      { songs.map(s => <LibrarySong setCurrentSong={setCurrentSong} song ={s} />) } 
    </div>
    )
}

export default Library;