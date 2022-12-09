import React, {useState} from 'react'
import Header from '../Header'
import SearchContainer from '../search/SearchContainer'
import RecommendedContainer from '../recommendedAnimes/RecommendedContainer'

function SearchResults({filteredMangaCard, filteredAnimeCard, animeList, mangas, recommendedAnimes}) {
    return (
        <div className='main-container'>
            <Header />
            <input type="checkbox"></input>
            <SearchContainer filteredMangaCard={filteredMangaCard} filteredAnimeCard={filteredAnimeCard} animeList={animeList} mangas={mangas} recommendedAnimes={recommendedAnimes}/>
        </div>
    )
}

export default SearchResults