import './index.css';
import React, {useState, useEffect} from 'react'
import HeroImage from './components/HeroImage'
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import Search from './components/Search'
import AnimeForm from './components/AnimeForm'


const animesApi = "https://api.jikan.moe/v4/anime"

function App() {
  const [animeList, setAnimeList] = useState([])
  const [getStarted, setGetStarted] = useState(false)
  const [search, setSearch] = useState("")

  const filteredAnimeCard = animeList.filter((anime) => 
    anime.title.toLowerCase().includes(search.toLowerCase()))
    
// console.log(search)
// console.table(filteredAnimeCard)
  

  useEffect(() => {
    fetch(animesApi)
    .then(r => r.json())
    .then(data => setAnimeList(data.data))
  }, [])

  

  return (
    <div>
      <Header />
      <Search setSearch={setSearch}/>
      <HeroImage getStarted={getStarted} setGetStarted={setGetStarted}/>
      <AnimeForm />
      <MainContainer animeList={filteredAnimeCard}/> 
    </div>
  );
}

export default App;