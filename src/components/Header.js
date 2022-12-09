import React from "react";
import NavBar from './navigationBar/NavBar'
import { Link } from 'react-router-dom'


function Header({renderRecommendedAnime, animeList, setSearch, renderMangas}) {
  return (
    <header className="header">
      <Link to="/" className="nav-bar-title">
      AnimeFlix
      </Link>
      <NavBar renderMangas={renderMangas} setSearch={setSearch} animeList={animeList} renderRecommendedAnime={renderRecommendedAnime}/>
    </header>
  );
}

export default Header;