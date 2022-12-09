import React, {useState} from 'react'
import MangaCard from './MangaCard'


function MangaContainer({mangas}) {
    const [mangaPgClicked, setMangaPgClicked] = useState(false)

    const renderAnimeCard = mangas?.map((manga) => {
        const authors = manga.authors.map((author) => {
            return author.name
        })
        
        return (
            <MangaCard 
                key={manga.mal_id}
                title={manga.title}
                volumes={manga.volumes}
                chapters={manga.chapters}
                author={authors}
                image={manga.images.webp.large_image_url}
                status={manga.status}
                score={manga.score}
                synopsis={manga.synopsis}
                id={manga.mal_id}
            />
        )
    })

    return (
        <div>
            <h2 id="anime-card-category">Mangas</h2>
            <div className="anime-container">
                {renderAnimeCard}
            </div>
        </div>
    )
}

export default MangaContainer