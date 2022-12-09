import React from 'react'
import MainMangaContainer from '../mangas/MainMangaContainer'
import Header from '../Header'


function MangaPage({setSearch, mangas, renderMangas, filteredAnimeCard}){

    return (
        <div>
            <Header setSearch={setSearch} renderMangas={renderMangas}/>
            <MainMangaContainer renderMangas={renderMangas} mangas={mangas} filteredAnimeCard={filteredAnimeCard}/>
        </div>
    )
}

export default MangaPage