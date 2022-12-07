import React, {useState} from 'react'

function RecommendedAnimeCard({title, image, content, date}) {

    return (
        <div className="anime-card">
            <img className="anime-card-image" src={image.large_image_url} />
            <h3 id="anime-card-title">{title}</h3>
        </div>
    )
}

export default RecommendedAnimeCard