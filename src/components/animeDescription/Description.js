import React from 'react'

function Description({image, title, score, status, episodes, genres, year, synopsis, rating, id}) {

    return (
        <div className="description">
            <div className="description-info">
                <img src={image}></img>
                <h1>{title}</h1>
                <h2 id="score">Score: {score}</h2>
                <h3 id="rating">Rated: {rating}</h3>
            </div>
            <div className="description-info-2">
                <div>
                    <p><strong>Genres:</strong> {genres[0].name}, {genres[1].name}</p>
                    <p><strong>Episodes:</strong> {episodes}</p>
                    <p><strong>Year: </strong>{year}</p>
                    <p><strong>Status: </strong>{status}</p>
                </div>
                <div>
                    <h3>Synopsis:</h3>
                    <p>{synopsis}</p>
                </div>
                <div className="desc-btn">
                    <button className="button">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Description