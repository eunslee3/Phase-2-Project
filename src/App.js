import './index.css';
import React, {useState, useEffect} from 'react'
import HeroImage from './components/HeroImage'
import MainContainer from './components/MainContainer'
import Header from './components/Header'

const animesApi = "https://api.jikan.moe/v4/anime"

function App() {
  const [animeList, setAnimeList] = useState([])
  const [getStarted, setGetStarted] = useState(false)

  useEffect(() => {
    fetch(animesApi)
    .then(r => r.json())
    .then(data => setAnimeList(data.data))
  }, [])

  console.log(animeList)

  return (
    <div>
      <Header />
      <HeroImage getStarted={getStarted} setGetStarted={setGetStarted}/>
      <MainContainer animeList={animeList}/> 
    </div>
  );
}

export default App;