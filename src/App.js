import './index.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'

// different pages:
import Home from './components/pages/Home'
import AnimePage from './components/pages/AnimePage'
import RecommendedPage from './components/pages/RecommendedPage'

const animesApi = "https://api.jikan.moe/v4/anime"
const recommendedAnimesApi = "https://api.jikan.moe/v4/recommendations/anime"


function App() {
  const [animeList, setAnimeList] = useState([])
  const [recommendedAnimes, setRecommendedAnimes] = useState([])
  const [search, setSearch] = useState("")

  const filteredAnimeCard = animeList.filter((anime) => 
    anime.title.toLowerCase().includes(search.toLowerCase()))
  
  function renderRecommendedAnime() {
    fetch(recommendedAnimesApi)
    .then(r => r.json())
    .then(data => setRecommendedAnimes(data.data))
  }

  console.log(recommendedAnimes)

  useEffect(() => {
      fetch(animesApi)
      .then(r => r.json())
      .then(data => {
        setAnimeList(data.data)
      })
    }, [])

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/animes">
            <AnimePage  renderRecommendedAnime={renderRecommendedAnime} animeList={animeList}/>
          </Route>
          <Route path="/recommended">
            <RecommendedPage recommendedAnimes={recommendedAnimes}/>
          </Route>
        </Switch>
      </div>
    );
  }

export default App;