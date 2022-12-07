import React from 'react'
import Header from '../Header'
import RecommendedContainer from '../recommendedAnimes/RecommendedContainer'

function RecommendedPage({recommendedAnimes}){
    return (
        <div>
            <Header />
            <RecommendedContainer recommendedAnimes={recommendedAnimes}/>
        </div>
    )
}

export default RecommendedPage