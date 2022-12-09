import React from 'react'
import ShowRecDesc from './ShowRecDesc'

function RecommendedAnimeCard({title, image, content, date, id, recClicked, setRecClicked, showRec, setShowRec}) {
    
    return (
        <div className={recClicked ? "rec-card" : "anime-card"}>
            <img onClick={() => setRecClicked(!recClicked) && ShowRecDesc({title, image, content, date, id})} alt="" key={id} className="anime-card-image" src={image.large_image_url} />
            <h3 id="anime-card-title">{title}</h3>
            {recClicked ? 
                <ShowRecDesc 
                    setRecClicked={setRecClicked} 
                    recClicked={recClicked}
                    title={title}
                    date={date}
                    image={image}
                    content={content}
                    showRec={showRec}
                /> 
                : 
                null
            }
        </div>
    )
}

export default RecommendedAnimeCard