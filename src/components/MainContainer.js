import React from 'react'
import AnimeContainer from "./AnimeContainer"
import TopRatedContainer from './TopRatedContainer'

function MainContainer({animeList}) {
    return (
        <div className="main-container">
            <AnimeContainer animeList={animeList}/>
            <TopRatedContainer animeList={animeList}/>
        </div>
    )
}

export default MainContainer