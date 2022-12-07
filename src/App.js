import './index.css';
import React, {useState, useEffect} from 'react'
import HeroImage from './components/displayAnime/HeroImage'
import MainContainer from './components/displayAnime/MainContainer'

import Header from './components/Header'
import Search from './components/Search'
import AnimeForm from './components/displayAnime/AnimeForm'


import About from './components/pages/About'
import RecommendedAnimes222 from './components/pages/RecommendedAnimes222'
import Home from './components/pages/Home'
import RecommendedAnimes from './components/displayAnime/RecommendedAnimes';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";




const animesApi = "https://api.jikan.moe/v4/anime"
const recommendedAnimesApi = "https://api.jikan.moe/v4/recommendations/anime"

function App() {
  const [animeList, setAnimeList] = useState([])
  const [recommendedAnimes, setRecommendedAnimes] = useState([])
  const [popUp, setPopUp] = useState(false)

  const [search, setSearch] = useState("")

  const filteredAnimeCard = animeList.filter((anime) => 
    anime.title.toLowerCase().includes(search.toLowerCase()))
  
  

function renderRecommendedAnime() {
  fetch(recommendedAnimesApi)
  .then(r => r.json())
  .then(data => setRecommendedAnimes(data.data))
}

 useEffect(() => {
    fetch(animesApi)
    .then(r => r.json())
    .then(data => {
      setAnimeList(data.data)
      renderRecommendedAnime()
    })
  }, [])

  // let component
  // switch (window.location.pathname) {
  //     case "/":
  //       component = Home
  //     break
  //     case "/RecommendedAnimes222":
  //       component = RecommendedAnimes222
  //     break
  //     case "/about":
  //       component = About
  //     break
  // }
  
  return (
    <div>
      <Header />
      <Search setSearch={setSearch}/>
      <HeroImage popUp={popUp} setPopUp={setPopUp}/>
      <AnimeForm />
      <MainContainer animeList={filteredAnimeCard}
      setRecommendedAnimes={setRecommendedAnimes} 
      recommendedAnimes={recommendedAnimes} /> 
     
    </div>
  );
}

export default App;