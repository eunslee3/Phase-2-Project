import React,{useState} from 'react'
import Header from '../Header'
import RecommendedContainer from '../recommendedAnimes/RecommendedContainer'
import SearchRecommended from '../SearchRecommended'

function RecommendedPage({recommendedAnimes, renderRecommendedAnime}){
    const [searchRecommend, setSearchRecommend] = useState("")

      const recommendFliter = recommendedAnimes.filter((anime) => 
      anime.title.toLowerCase().includes(searchRecommend.toLowerCase()))
    return (
        <div className="main-container">
            <Header renderRecommendedAnime={renderRecommendedAnime}/>
            <SearchRecommended setSearchRecommend={setSearchRecommend}/>
            <RecommendedContainer recommendedAnimes={recommendFliter}/>
        </div>
    )
}

export default RecommendedPage