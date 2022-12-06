import React from 'react'
import AnimeContainer from "./AnimeContainer"

function MainContainer({animeList}) {
    return (
        <div className="main-container">
            <AnimeContainer animeList={animeList}/>
        </div>
    )
}

export default MainContainer