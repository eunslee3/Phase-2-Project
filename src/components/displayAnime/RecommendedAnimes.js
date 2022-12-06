import React from 'react'
import RecommendedAnimeCard from './RecommendedAnimeCard'

function RecommendedAnimes({animeList, recommendedAnimes}) {
    // useEffect(() => {
    //     fetch(recommendedAnimesApi)
    //     .then(r => r.json())
    //     .then(data => setRecommendedAnimes(data.data))
    //   }, [])

    console.log(recommendedAnimes)

    const renderAnimeCard = recommendedAnimes?.map((anime) => {
        return (
            <RecommendedAnimeCard 
                title={anime.title_english}
                backupTitle={anime.title}
                airing={anime.airing}
                episodes={anime.episodes}
                genres={""}
                type={""}
                image={anime.entry[0].images?.webp}
                status={anime.status}
                score={anime.score}
                id={anime.mal_id}
            />
        )
    })
    return (
        <div>
            <h2 id="anime-card-category">Recommended Animes</h2>
            <div className="recommended-container">
                {renderAnimeCard}
            </div>
        </div>
    )
}

export default RecommendedAnimes