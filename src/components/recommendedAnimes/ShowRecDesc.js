import React from 'react'

function ShowRecDesc({recClicked, setRecClicked, title, date, image, content, showRec}) {

    // const {title, date, image, content} = showRec

    return (
        <div className="pop-up-description">
            <div className="description-info">
                <img src={image.large_image_url}></img>
                <h1>{title}</h1>
                <h2 id="score">Date: {date}</h2>
            </div>
            <div className="description-info-2">
                <p>{content}</p>
            </div>
            <button className="button" onClick={() => setRecClicked(!recClicked)}>X</button>
        </div>
    )
}

export default ShowRecDesc