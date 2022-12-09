import React from 'react'
import { Link } from 'react-router-dom'

function SearchCard({title, image, status, score, id}) {

    return (
        <div className="anime-card">
            <Link to={`/description/${id}`}>
                <img alt="" key={id} className="anime-card-image" src={image} />
            </Link>
            <h3 id="anime-card-title">{title}</h3>
        </div>
    )
}

export default SearchCard