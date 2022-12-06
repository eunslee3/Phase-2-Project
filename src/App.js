import './index.css';
import React, {useState, useEffect} from 'react'
import HeroImage from './components/displayAnime/HeroImage'
import MainContainer from './components/displayAnime/MainContainer'

const animesApi = "https://api.jikan.moe/v4/anime"
const recommendedAnimesApi = "https://api.jikan.moe/v4/recommendations/anime"

function App() {
  const [animeList, setAnimeList] = useState([])
  const [recommendedAnimes, setRecommendedAnimes] = useState([])
  const [getStarted, setGetStarted] = useState(false)

  // useEffect(() => {
  //   Promise.all([
  //     fetch(animesApi),
  //     fetch(recommendedAnimesApi),
  //   ])
  //   .then(([resAnimes, resRecommended]) => 
  //     Promise.all([resAnimes.json(), resRecommended.json()])
  //   )
  //   .then(([dataAnimes, dataRecommended]) => {
  //     setAnimeList(dataAnimes)
  //     setRecommendedAnimes(dataRecommended.data)
  //   })
  // }, [])

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

      // useEffect(() => {
      //   fetch(recommendedAnimesApi)
      //   .then(r => r.json())
      //   .then(data => setRecommendedAnimes(data))
      // }, [])

  return (
    <div>
      <HeroImage getStarted={getStarted} setGetStarted={setGetStarted}/>
      <MainContainer 
        setRecommendedAnimes={setRecommendedAnimes} 
        recommendedAnimes={recommendedAnimes} 
        animeList={animeList}
      /> 
    </div>
  );
}

export default App;
