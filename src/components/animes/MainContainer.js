import React from 'react'
import AnimeContainer from "./AnimeContainer"
import TopRatedContainer from '../topRatedAnime/TopRatedContainer'

function MainContainer({animeList, recommendedAnimesApi, setRecommendedAnimes, recommendedAnimes}) {

    return (
        <div className="main-container">
            {/* <RecommendedAnimes 
                recommendedAnimes={recommendedAnimes} 
                animeList={animeList}
            /> */}
            <AnimeContainer animeList={animeList}/>
            <TopRatedContainer animeList={animeList}/>

        </div>
    )
}

export default MainContainer