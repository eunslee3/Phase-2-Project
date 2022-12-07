import React from 'react'

function PopUpModal({image, title, review, genres}) {
    return (
        <div className="pop-up-container">
            <div className="pop-up-description">
                <img></img>
                <h1>{title}</h1>
                <p>{review}</p>
                <p>{genres}</p>
                <button className="exit-modal-btn">X</button>
            </div>
        </div>
    )
}

export default PopUpModal