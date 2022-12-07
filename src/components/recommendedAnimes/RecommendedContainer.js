import React, {useState} from 'react'
import RecommendedAnimes from './RecommendedAnimes'

function RecommendedContainer({animeList, recommendedAnimes}) {

    return (
        <div className="main-container">
            <RecommendedAnimes 
                recommendedAnimes={recommendedAnimes} 
                animeList={animeList}
            />

        </div>
    )
}

export default RecommendedContainer