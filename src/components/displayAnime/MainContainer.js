import React from 'react'
import AnimeContainer from "./AnimeContainer"
import TopRatedContainer from './TopRatedContainer'
import RecommendedAnimes from './RecommendedAnimes'

function MainContainer({animeList, recommendedAnimesApi, setRecommendedAnimes, recommendedAnimes}) {
    return (
        <div className="main-container">
            <RecommendedAnimes 
                recommendedAnimes={recommendedAnimes} 
                animeList={animeList}
            />
            <TopRatedContainer animeList={animeList}/>
            <AnimeContainer animeList={animeList}/>
            {/* <TopRatedContainer animeList={animeList}/> */}
            {/* <RecommendedAnimes 
                recommendedAnimes={recommendedAnimes} 
            /> */}
        </div>
    )
}

export default MainContainer