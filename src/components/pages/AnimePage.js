import React from 'react'
import MainContainer from '../animes/MainContainer'
import Header from '../Header'

function AnimePage({animeList, renderRecommendedAnime}){
    return (
        <div>
            <Header renderRecommendedAnime={renderRecommendedAnime}/>
            <MainContainer animeList={animeList}/>
        </div>
    )
}

export default AnimePage