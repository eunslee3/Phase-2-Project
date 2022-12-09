import React, { useEffect, useState } from 'react'
import MangaDescriptionContainer from '../animeDescription/MangaDescriptionContainer'
import { useParams } from 'react-router-dom'
import Header from '../Header'

function AnimeDescription() {
    const [info, setInfo] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/manga/${id}`)
        .then(r => r.json())
        .then(data => setInfo(data.data))
        .catch((error) => {console.log(error)})
    }, [id])

    const dataFetched = () => {
        if(info === null) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <div>
            <Header />
            <div className="description-container">
                { dataFetched() ? <div>Not Available...</div> : <MangaDescriptionContainer 
                    key={info.mal_id}
                    title={info.title}
                    type={info.type}
                    volumes={info.volumes}
                    chapters={info.chapters}
                    author={info.authors}
                    image={info.images.webp.large_image_url}
                    status={info.status}
                    score={info.score}
                    synopsis={info.synopsis}
                    id={info.mal_id}
                    />
                }
            </div>
        </div>
    )
}

export default AnimeDescription