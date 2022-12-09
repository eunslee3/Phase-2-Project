import React from 'react'
import { Link } from 'react-router-dom'

const animesApi = "https://api.jikan.moe/v4/anime"

function MangaCard({title, image, status, score, id}) {


    return (
        <div className="anime-card">
            <Link to={`/description/${id}`}>
                <img key={id} className="anime-card-image" src={image} />
            </Link>     
            <h3 id="anime-card-title">{title}</h3>
        </div>
    )
}

export default MangaCard