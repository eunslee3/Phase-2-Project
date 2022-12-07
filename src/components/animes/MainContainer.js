import React from 'react'
import AnimeContainer from "./AnimeContainer"
<<<<<<< HEAD:src/components/displayAnime/MainContainer.js
import TopRatedContainer from './TopRatedContainer'
import RecommendedAnimes from './RecommendedAnimes'
//import PopUpDescription from '../animeDescription/PopUpModal'
=======
import TopRatedContainer from '../topRatedAnime/TopRatedContainer'
>>>>>>> main:src/components/animes/MainContainer.js

function MainContainer({animeList, recommendedAnimesApi, setRecommendedAnimes, recommendedAnimes}) {

    return (
        <div className="main-container">
            {/* <RecommendedAnimes 
                recommendedAnimes={recommendedAnimes} 
                animeList={animeList}
<<<<<<< HEAD:src/components/displayAnime/MainContainer.js
                // setImgClicked={setImgClicked}
                // imgClicked={imgClicked}
            />
            <TopRatedContainer animeList={animeList}/>
=======
            /> */}
>>>>>>> main:src/components/animes/MainContainer.js
            <AnimeContainer animeList={animeList}/>
            <TopRatedContainer animeList={animeList}/>

        </div>
    )
}

export default MainContainer