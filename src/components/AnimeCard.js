import React from 'react'

function AnimeCard({title, airing, episodes, genres, type, image, status, score}) {
    return (
        <div className="anime-card">
            <img className="anime-card-image" src={image.large_image_url} />
            <h3 id="anime-card-title">{title}</h3>
        </div>
    )
}

export default AnimeCard