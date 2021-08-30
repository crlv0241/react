import React from 'react';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({isLibraryOpen, setIsLibraryOpen }) => {
  
  const toggleLibrary = () => {
    setIsLibraryOpen(!isLibraryOpen);
  }
  
  return(
      
        <nav className = "main-nav" >
          <p>  VmusiC </p>
          <button className =  {` ${isLibraryOpen? "activeLibrary": ""} `} onClick ={ toggleLibrary}>
            Library 
            <FontAwesomeIcon icon = {faMusic} />
          </button>
        </nav>
      
    )
}

export default Nav