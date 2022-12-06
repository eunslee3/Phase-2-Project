import './index.css';
import React, {useState, useEffect} from 'react'
import AnimeContainer from './components/AnimeContainer'

const animesApi = "https://api.jikan.moe/v4/anime"

function App() {
  const [animeList, setAnimeList] = useState([])

  useEffect(() => {
    fetch(animesApi)
    .then(r => r.json())
    .then(data => setAnimeList(data))
  }, [])

  console.log(animeList)

  return (
    <AnimeContainer />
  );
}

export default App;
