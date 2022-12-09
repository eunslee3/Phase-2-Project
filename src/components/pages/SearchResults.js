import React from 'react'
import Header from '../Header'
import SearchContainer from '../search/SearchContainer'
import RecommendedContainer from '../recommendedAnimes/RecommendedContainer'

function SearchResults({filteredAnimeCard, animeList}) {
    return (
        <div className='main-container'>
            <Header />
            <SearchContainer filteredAnimeCard={filteredAnimeCard} animeList={animeList}/>
        </div>
    )
}

export default SearchResults