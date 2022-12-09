import React from 'react'
import SearchCard from './SearchCard'
import SearchMangaCard from './SearchMangaCard'

function SearchContainer({manga, animeList, filteredAnimeCard, filteredMangaCard}) {
    const renderAnimeCard = filteredAnimeCard?.map((anime) => {
        const genre = anime.genres.map((genre) => {
            return genre.name
        })
        
        return (
            <SearchCard 
                key={anime.mal_id}
                title={anime.title_english}
                backupTitle={anime.title}
                airing={anime.airing}
                episodes={anime.episodes}
                genres={genre.name}
                type={genre.type}
                image={anime.images.webp}
                status={anime.status}
                score={anime.score}
                id={anime.mal_id}
            />
        )
    })

    const renderMangaCard = filteredMangaCard?.map((manga) => {
        return (
            <SearchMangaCard 
                key={manga.mal_id}
                title={manga.title}
                image={manga.images.webp.large_image_url}
                status={manga.status}
                score={manga.score}
                synopsis={manga.synopsis}
                id={manga.mal_id}
            />
        )
    })

    return (
        <div>
            <h2 id="anime-card-category">Search Results:</h2>
            <div className="anime-container">
                {renderAnimeCard}
                {renderMangaCard}
            </div>
        </div>
    )
}

export default SearchContainer