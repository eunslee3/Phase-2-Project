import React from 'react'
import MainContainer from '../animes/MainContainer'
import Header from '../Header'

function AnimePage({setSearch, animeList, renderRecommendedAnime, filteredAnimeCard}){

    return (
        <div>
            <Header setSearch={setSearch} renderRecommendedAnime={renderRecommendedAnime}/>
            <MainContainer animeList={animeList} />
        </div>
    )
}

export default AnimePage