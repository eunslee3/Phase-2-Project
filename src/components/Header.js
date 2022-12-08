import React from "react";
import NavBar from './navigationBar/NavBar'
import { Link} from 'react-router-dom'


function Header({renderRecommendedAnime}) {
  return (
    <header className="header">
      <Link to="/" className="nav-bar-title">
      AnimeFlix
      </Link>
      <NavBar renderRecommendedAnime={renderRecommendedAnime}/>
    
    </header>
  );
}

export default Header;