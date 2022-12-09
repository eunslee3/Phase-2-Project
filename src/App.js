import './index.css';
import React, {useState, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'


// different pages:
import Home from './components/pages/Home'
import AnimePage from './components/pages/AnimePage'
import RecommendedPage from './components/pages/RecommendedPage'
import Subscription from './components/pages/Subscription';
import AnimeDescription from './components/pages/AnimeDescription'
import MyList from './components/mylist/MyList'
import SearchResults from './components/pages/SearchResults'
import MangaPage from './components/pages/MangaPage'
import MangaDescription from './components/pages/MangaDescription'

// import { Login } from "./Login"
// import { Register } from "./Register"

const animesApi = "https://api.jikan.moe/v4/anime"
const recommendedAnimesApi = "https://api.jikan.moe/v4/recommendations/anime"
const mangaApi = "https://api.jikan.moe/v4/manga"

function App() {
  const [animeList, setAnimeList] = useState([])
  const [recommendedAnimes, setRecommendedAnimes] = useState([])
  const [mangas, setMangas] = useState([])
  const [search, setSearch] = useState("")
  // const [currentForm, setCurrentForm] = useState('login')

  const filteredAnimeCard = animeList.filter((anime) => 
      anime.title.toLowerCase().includes(search.toLowerCase()))

    const filteredMangaCard = mangas.filter((manga) => 
      manga.title.toLowerCase().includes(search.toLowerCase()))


  function renderRecommendedAnime() {
    fetch(recommendedAnimesApi)
    .then(r => r.json())
    .then(data => setRecommendedAnimes(data.data))
  }

  function renderMangas() {
    fetch(mangaApi)
    .then(r => r.json())
    .then(data => setMangas(data.data))
  }

  useEffect(() => {
      fetch(animesApi)
      .then(r => r.json())
      .then(data => {
        setAnimeList(data.data)
      })
    }, [])

    return (
      <div>
        {/* <Login />
        {
          currentForm === "login" ? <Login /> : <Register />
        } */}
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/animes">
            <AnimePage  setSearch={setSearch} renderRecommendedAnime={renderRecommendedAnime} animeList={animeList}/>
          </Route>

          <Route path="/recommended">
            <RecommendedPage renderRecommendedAnime={renderRecommendedAnime} recommendedAnimes={recommendedAnimes}/>
          </Route>

          <Route path="/subscription">
            <Subscription />
          </Route>

          <Route path="/description/:id">
            <AnimeDescription />
          </Route>

          <Route path="/manga/description/:id">
            <MangaDescription />
          </Route>

          <Route path="/mylist">
            <MyList />
          </Route>

          <Route path="/searchresults">
            <SearchResults filteredMangaCard={filteredMangaCard} filteredAnimeCard={filteredAnimeCard} recommendedAnimes={recommendedAnimes} mangas={mangas} animeList={animeList}/>
          </Route>

          <Route path="/mangas">
            <MangaPage mangas={mangas} renderMangas={renderMangas}/>
          </Route>

        </Switch>
      </div>
    );
  }

export default App;