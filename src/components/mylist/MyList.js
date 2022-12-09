import React, {useEffect, useState} from 'react'
import Header from '../Header'
import MyListCard from './MyListCard'

function MyList() {
    const [myList, setMyList] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/saved")
        .then(r => r.json())
        .then(myanimes => setMyList(myanimes))
    }, [])

    const renderMyList = myList.map((anime) => {
        return (
            <MyListCard 
                postid={anime.id}
                apiID={anime.apiID}
                image={anime.image}
                episodes={anime.episodes}
                genres={anime.genres}
                rating={anime.rating}
                score={anime.score}
                title={anime.title}
                setMyList={setMyList}
                myList={myList}
            />
        )
    })

    return (
        <div className="my-list-container">
            <Header />
            <div className="my-card-list-container">
                {renderMyList}
            </div>
        </div>
    )
}

export default MyList