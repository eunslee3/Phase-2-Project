import React from 'react'
import AnimeCard from './AnimeCard'


function AnimeContainer({animeList}) {
    const renderAnimeCard = animeList?.map((anime) => {
        const genre = anime.genres.map((genre) => {
            return genre.name
        })
        
        return (
            <AnimeCard 
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
            <h2 id="anime-card-category">Anime</h2>
            {/* <div id="see-more">
                <h3>See More</h3>
            </div> */}
            <div className="anime-container">
                {renderAnimeCard}
            </div>
        </div>
    )
}

export default AnimeContainer