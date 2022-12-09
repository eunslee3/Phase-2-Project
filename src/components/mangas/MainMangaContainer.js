import React from 'react'


//import PopUpDescription from '../animeDescription/PopUpModal'
import MangaContainer from './MangaContainer'


function MainMangaContainer({mangas, renderMangas, setRecommendedAnimes, recommendedAnimes}) {

    return (
        <div className="main-container">
            <MangaContainer mangas={mangas} />
        </div>
    )
}

export default MainMangaContainer