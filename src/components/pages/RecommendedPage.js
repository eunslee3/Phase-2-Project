import React from 'react'
import Header from '../Header'
import RecommendedContainer from '../recommendedAnimes/RecommendedContainer'
// import SearchRecommended from '../SearchRecommended'

function RecommendedPage({recommendedAnimes, renderRecommendedAnime}){
    console.log(recommendedAnimes)

    return (
        <div className="main-container">
            <Header renderRecommendedAnime={renderRecommendedAnime}/>
            {/* <SearchRecommended setSearchRecommend={setSearchRecommend}/> */}
            <RecommendedContainer recommendedAnimes={recommendedAnimes}/>
        </div>
    )
}

export default RecommendedPage