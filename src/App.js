
import './styles/App.css';
import Song from "./components/Song.js";
import Player from "./components/Player.js"
import musics from "./util.js"
import React, {useState, useRef} from "react"
import Library from "./components/Library";
import Nav from './components/Nav'

function App() {
  const audioRef = useRef(0);
  const [songs, setSongs] = useState(musics());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const [songTime, setSongTime] = useState({
    currentPlayTime: 0,
    remainingTime:0
  })

  const timeHandler = e => {
    let currentPlayTime = e.target.currentTime;
    let remainingTime = e.target.duration ;
    setSongTime({...songTime, currentPlayTime, remainingTime})
  }

  return (
    <div className = "app" >
      <Nav isLibraryOpen = {isLibraryOpen} setIsLibraryOpen = {setIsLibraryOpen} />
      <Song  currentSong = {currentSong} />
      <Player 
      isPlaying = {isPlaying} 
      currentSong = {currentSong} 
      setIsPlaying = {setIsPlaying} 
      audioRef = {audioRef} 
      songTime = {songTime}
      songs = {songs} 
      setCurrentSong = {setCurrentSong} 
      />
      
      <Library 
      songs = {songs} 
      setCurrentSong={setCurrentSong} 
      audioRef = {audioRef} 
      isPlaying = {isPlaying} 
      setIsPlaying = {setIsPlaying} 
      setSongs = {setSongs} 
      isLibraryOpen = {isLibraryOpen}/>
      
      <audio
        onLoadedMetadata = {timeHandler} 
        onTimeUpdate = {timeHandler} 
        ref = {audioRef} src= {currentSong.audio}></audio>
    </div>
  );
}

export default App;
