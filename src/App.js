
import './styles/App.css';
import Song from "./components/Song.js";
import Player from "./components/Player.js"
import musics from "./util.js"
import React, {useState} from "react"
import Library from "./components/Library";



function App() {
  
  const [songs, setSongs] = useState(musics());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className = "app" >
      <Song  currentSong = {currentSong} />
      <Player 
      isPlaying = {isPlaying} 
      currentSong = {currentSong} 
      setIsPlaying = {setIsPlaying} />
      
      <Library songs = {songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
