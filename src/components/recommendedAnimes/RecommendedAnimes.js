import React, {useState} from 'react'
import RecommendedAnimeCard from '../recommendedAnimes/RecommendedAnimeCard'

function RecommendedAnimes({recommendedAnimes}) {
    const [recClicked, setRecClicked] = useState(false)
    const [showRec, setShowRec] = useState({})
    const renderAnimeCard = recommendedAnimes?.map((anime) => {
        console.log(anime)
        return (
            <RecommendedAnimeCard
                id={anime.entry[0].mal_id}
                title={anime.entry[0].title}
                date={anime.date}
                image={anime.entry[0].images?.webp}
                content={anime.content}
                setRecClicked={setRecClicked}
                recClicked={recClicked}
                setShowRec={setShowRec}
                showRec={showRec}
            />
        )
    })

    //Maybe create a useState, set its setter function to the selected anime's values, and then pass it down to ShowRecDesc and destructure it in there

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