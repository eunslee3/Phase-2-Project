import './index.css';
import React, {useState, useEffect} from 'react'
import HeroImage from './components/displayAnime/HeroImage'
import MainContainer from './components/displayAnime/MainContainer'

import Header from './components/Header'
import Search from './components/Search'
import AnimeForm from './components/displayAnime/AnimeForm'
//import NavBar from './components/navigationBar/NavBar'
import About from './components/pages/About'
import Top from './components/pages/Top'
import Home from './components/pages/Home'



const animesApi = "https://api.jikan.moe/v4/anime"
const recommendedAnimesApi = "https://api.jikan.moe/v4/recommendations/anime"

function App() {
  const [animeList, setAnimeList] = useState([])
  const [recommendedAnimes, setRecommendedAnimes] = useState([])
  const [getStarted, setGetStarted] = useState(false)

  const [search, setSearch] = useState("")

  const filteredAnimeCard = animeList.filter((anime) => 
    anime.title.toLowerCase().includes(search.toLowerCase()))
    
// console.log(search)
// console.table(filteredAnimeCard)
  

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
  let Component
  switch (window.location.pathname) {
      case "/":
        Component = Home
      break
      case "/top":
        Component = Top
      case "/about":
        Component = About
        break
  }

  return (
    <div>
      <Header />
      <Search setSearch={setSearch}/>
      <HeroImage getStarted={getStarted} setGetStarted={setGetStarted}/>
      <AnimeForm />
      <MainContainer animeList={filteredAnimeCard}
      setRecommendedAnimes={setRecommendedAnimes} 
      recommendedAnimes={recommendedAnimes} /> 
      <Component />
    </div>
  );
}

export default App;