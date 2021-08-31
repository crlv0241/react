import {v4 as uuidv4} from 'uuid';

export const musics = () => {
  return (
      [
        {
          id: uuidv4(), 
          song: "Grateful", 
          artist: "NEFFEX", 
          picture: "../util/Grateful/cover.jpg",
          audio: "../util/Grateful/NEFFEX - Grateful.flac", 
          active: true
        }, 
        {
          id:uuidv4(), 
          song: "Leaves", 
          artist: "Ben & Ben", 
          picture: "../util/Leaves/cover.jpg",
          audio: "../util/Leaves/Ben&Ben - Leaves.flac", 
          active:false
        }
      ]
    )
}

export const playSong = (audioRef, setIsPlaying) => {
  const playPromise = audioRef.current.play()
        playPromise.then(() => {
        audioRef.current.play();
        setIsPlaying(true)
      })
}