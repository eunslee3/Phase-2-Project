import React from 'react'
import Header from '../Header'
import RecommendedContainer from '../recommendedAnimes/RecommendedContainer'

function RecommendedPage({recommendedAnimes, renderRecommendedAnime}){
    return (
        <div className="main-container">
            <Header renderRecommendedAnime={renderRecommendedAnime}/>
            <RecommendedContainer recommendedAnimes={recommendedAnimes}/>
        </div>
    )
}

export default RecommendedPage