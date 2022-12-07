import React from 'react'

function TopRatedCard({backupTitle, title, airing, episodes, genres, type, image, status, score, id}) {
    const pickTitle = () => {
        if (title === null) {
            return backupTitle
        }
        else {
            return title
        }
    }
    return (
        <div className="top-rated-card">
            <img id={id} className="top-rated-card-image" src={image.large_image_url} />
            <h3 id="anime-card-title">{pickTitle()}</h3>
        </div>
    )
}

export default TopRatedCard