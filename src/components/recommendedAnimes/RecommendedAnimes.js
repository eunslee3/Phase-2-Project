import React from 'react'
import RecommendedAnimeCard from '../recommendedAnimes/RecommendedAnimeCard'
function RecommendedAnimes({recommendedAnimes}) {
    const renderAnimeCard = recommendedAnimes?.map((anime) => {
        return (
            <RecommendedAnimeCard
                title={anime.entry[0].title}
                date={anime.date}
                image={anime.entry[0].images?.webp}
                content={anime.content}
            />
        )
    })
    return (
        <div>
            <h2 id="anime-card-category">Recommended Animes</h2>
            <div className="anime-container">
                {renderAnimeCard}
            </div>
        </div>
    )
}
export default RecommendedAnimes