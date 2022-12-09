import React from 'react'
import { Link } from 'react-router-dom'

function MyListCard({image, postid, apiID, title, setMyList, myList, updateAfterDelete}) {

    function deleteCard() {
        fetch(`http://localhost:4000/saved/${postid}`, {
            method: 'DELETE'
        })
        updateAfterDelete(postid)
    }

    return (
        <div className="my-list">
            <div className="my-card-list">
                <div className="list-card">
                    <Link to={`/description/${apiID}`}>
                        <img alt="" key={postid} className="anime-card-image" src={image} />
                    </Link>
                    <h3 id="my-card-title">{title}</h3>
                    <button onClick={() => deleteCard()} className="my-list-button">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default MyListCard