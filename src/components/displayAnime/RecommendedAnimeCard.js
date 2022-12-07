import React, {useState} from 'react'
import PopUpModal from '../animeDescription/PopUpModal'

function RecommendedAnimeCard({backupTitle, title, airing, episodes, genres, type, image, status, score, id, imgClicked, setImgClicked, review}) {
    const pickTitle = () => {
        if (title === null) {
            return backupTitle
        }
        else {
            return title
        }
    }
    return (
        <div onClick={() => setImgClicked(!imgClicked)} className="anime-card">
            <img id={id} className="anime-card-image" src={image.large_image_url} />
            <h3 id="anime-card-title">{pickTitle()}</h3>
        </div>
    )
}

export default RecommendedAnimeCard