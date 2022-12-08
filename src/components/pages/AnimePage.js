import React, {useState} from 'react'
import MainContainer from '../animes/MainContainer'
import Header from '../Header'
import Search from '../Search'

function AnimePage({animeList, renderRecommendedAnime}){
    const [search, setSearch] = useState("")

    const filteredAnimeCard = animeList.filter((anime) => 
        anime.title.toLowerCase().includes(search.toLowerCase()))
    

    return (
        <div>
            <Header renderRecommendedAnime={renderRecommendedAnime}/>
            <Search setSearch = {setSearch}/>
            <MainContainer animeList={filteredAnimeCard} />

        </div>
    )
}

export default AnimePage