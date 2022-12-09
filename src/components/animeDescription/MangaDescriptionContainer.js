import React from 'react'

function MangaDescriptionContainer({key, title, volumes, chapters, author, image, status, score, synopsis, id}) {

    function handleSaved() {
        fetch("http://localhost:4000/saved", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                image: image,
                title: title,
                score: score,
                status: status,
                chapters: chapters,
                volumes: volumes,
                author: author,
                synopsis: synopsis,
                apiID: id
        })
        })
    }

    return (
        <div className="description">
            <div className="description-info">
                <img src={image}></img>
                <h1>{title}</h1>
                <h2 id="score">AnimeFlix-Score: {score}</h2>
            </div>
            <div className="description-info-2">
                <div>
                    <p><strong>Volumes:</strong> {volumes}</p>
                    <p><strong>Chapters:</strong> {chapters}</p>
                    <p><strong>Status: </strong>{status}</p>
                </div>
                <div>
                    <h3>Synopsis:</h3>
                    <p>{synopsis}</p>
                </div>
                <div className="desc-btn">
                    <button onClick={handleSaved} className="button">Save</button>
                </div>
            </div>
        </div>
    )
}

export default MangaDescriptionContainer