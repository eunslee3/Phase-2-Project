import './index.css';
import React, {useState, useEffect} from 'react'
import HeroImage from './components/displayAnime/HeroImage'
import MainContainer from './components/displayAnime/MainContainer'

import Header from './components/Header'
import Search from './components/Search'
import AnimeForm from './components/displayAnime/AnimeForm'

//import NavBar from './components/navigationBar/NavBar'
import About from './components/pages/About'
import RecommendedAnimes222 from './components/pages/RecommendedAnimes222'
import Home from './components/pages/Home'
import RecommendedAnimes from './components/displayAnime/RecommendedAnimes';




const animesApi = "https://api.jikan.moe/v4/anime"
const recommendedAnimesApi = "https://api.jikan.moe/v4/recommendations/anime"

async function App() {
  const [animeList, setAnimeList] = useState([])
  const [recommendedAnimes, setRecommendedAnimes] = useState([])
  const [popUp, setPopUp] = useState(false)

  const [search, setSearch] = useState("")

  const filteredAnimeCard = animeList.filter((anime) => 
    anime.title.toLowerCase().includes(search.toLowerCase()))
  
  console.log(popUp)
  console.log(animeList)

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
      case "/RecommendedAnimes222":
        Component = RecommendedAnimes222
      case "/about":
        Component = About
        break
  }

  return (
    <div>
      <Header />
      <Search setSearch={setSearch}/>
      <HeroImage popUp={popUp} setPopUp={setPopUp}/>
      <AnimeForm />
      <MainContainer animeList={filteredAnimeCard}
      setRecommendedAnimes={setRecommendedAnimes} 
      recommendedAnimes={recommendedAnimes} /> 
      <Component />
    </div>
  );
}

export default App;