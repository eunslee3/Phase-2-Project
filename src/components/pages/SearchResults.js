import React, {useState} from 'react'
import Header from '../Header'
import SearchContainer from '../search/SearchContainer'
import RecommendedContainer from '../recommendedAnimes/RecommendedContainer'

function SearchResults({filteredMangaCard, filteredAnimeCard, animeList, mangas, recommendedAnimes}) {
    const [tgl, setTgl] = useState(false)
    return (
        <div className='main-container'>
            <Header />
            <div className="tgl-container">
                <label className="tgl-label">{tgl ? "Animes" : "Mangas"}</label>
                <label class="switch">
                    <input onChange={() => {setTgl(!tgl)}} type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>
            <SearchContainer tgl={tgl} filteredMangaCard={filteredMangaCard} filteredAnimeCard={filteredAnimeCard} animeList={animeList} mangas={mangas} recommendedAnimes={recommendedAnimes}/>
        </div>
    )
}

export default SearchResults