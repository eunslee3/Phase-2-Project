import React from 'react'
import SearchCard from './SearchCard'

function SearchContainer({animeList, filteredAnimeCard}) {
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

    return (
        <div>
            <h2 id="anime-card-category">Search Results:</h2>
            <div className="anime-container">
                {renderAnimeCard}
            </div>
        </div>
    )
}

export default SearchContainer