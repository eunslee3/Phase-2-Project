import React from 'react'
import TopRatedCard from '../topRatedAnime/TopRatedCard'

function TopRatedContainer({animeList}) {
    const renderAnimeCard = animeList?.map((anime) => {
        const genre = anime.genres.map((genre) => {
            return genre.name
        })
        if(anime.score >= 8.0) {
            return (
                <TopRatedCard 
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
        }
        else {
            return null
        }
    })
    return (
        <div>
            <h2 id="anime-card-category">Top-Rated Anime</h2>
            {/* <div id="see-more">
                <h3>See More</h3>
            </div> */}
            <div className="top-rated-container">
                {renderAnimeCard}
            </div>
        </div>
    )
}

export default TopRatedContainer