import React, { useEffect, useState } from 'react'
import Description from '../animeDescription/Description'
import { useParams } from 'react-router-dom'
import Header from '../Header'

function AnimeDescription() {
    const [info, setInfo] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${id}`)
        .then(r => r.json())
        .then(data => setInfo(data.data))
        .catch((error) => {console.log(error)})
    }, [id])

    // async function renderAnime() {
    //     await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    //     .then(r => r.json())
    //     .then(data => setInfo(data.data))
    //     .catch((error) => {setInfo(error)})
    // }

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
                { dataFetched() ? <div>Not Available...</div> : <Description 
                    title={info?.title} 
                    image={info?.images.webp.large_image_url}
                    score={info.score}
                    status={info.status}
                    episodes={info.episodes}
                    genres={info.genres}
                    year={info.year}
                    type={info.type}
                    synopsis={info.synopsis}
                    rating={info.rating}
                    id={info.mal_id} />}
            </div>
        </div>
    )
}

export default AnimeDescription