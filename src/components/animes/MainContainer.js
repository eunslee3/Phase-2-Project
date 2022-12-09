import React from 'react'
import AnimeContainer from "./AnimeContainer"


//import PopUpDescription from '../animeDescription/PopUpModal'
import TopRatedContainer from '../topRatedAnime/TopRatedContainer'


function MainContainer({animeList, recommendedAnimesApi, setRecommendedAnimes, recommendedAnimes}) {

    return (
        <div className="main-container">
            <TopRatedContainer animeList={animeList}/>
            <AnimeContainer animeList={animeList}/>
        </div>
    )
}

export default MainContainer