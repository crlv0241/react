import React from 'react';
import LibrarySong from "./LibrarySong"


const Library = ({songs} ) => {
  return(
    <div className = {"library"} >
      <h2>Library</h2>
      { songs.map(s => <LibrarySong song ={s} />) } 
    </div>
    )
}

export default Library;