import React from 'react'
import { Link } from 'react-router-dom'

const animesApi = "https://api.jikan.moe/v4/anime"

function AnimeCard({backupTitle, title, airing, episodes, genres, type, image, status, score, id}) {
    const pickTitle = () => {
        if (title === null) {
            return backupTitle
        }
        else {
            return title
        }
    }

    return (
        <div className="anime-card">
            <Link to={`/description/${id}`}>
                <img alt="" key={id} className="anime-card-image" src={image.large_image_url} />
            </Link>
            <h3 id="anime-card-title">{pickTitle()}</h3>
        </div>
    )
}

export default AnimeCard