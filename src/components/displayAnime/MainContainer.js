import React, {useState} from 'react'
import AnimeContainer from "./AnimeContainer"
import TopRatedContainer from './TopRatedContainer'
import RecommendedAnimes from './RecommendedAnimes'
import PopUpDescription from '../animeDescription/PopUpModal'

function MainContainer({animeList, recommendedAnimesApi, setRecommendedAnimes, recommendedAnimes}) {

    return (
        <div className="main-container">
            <RecommendedAnimes 
                recommendedAnimes={recommendedAnimes} 
                animeList={animeList}
                setImgClicked={setImgClicked}
                imgClicked={imgClicked}
            />
            <TopRatedContainer animeList={animeList}/>
            <AnimeContainer animeList={animeList}/>

        </div>
    )
}

export default MainContainer