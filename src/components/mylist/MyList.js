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

    function updateAfterDelete(postid) {
        const filteredArray = myList.filter((anime) => {
            return (
                anime.id !== postid
            )
        })
        setMyList(filteredArray)
    }

    const renderMyList = myList.map((anime) => {
            return (
                <MyListCard 
                    key={anime.id}
                    postid={anime.id}
                    apiID={anime.apiID}
                    image={anime.image}
                    title={anime.title}
                    setMyList={setMyList}
                    myList={myList}
                    updateAfterDelete={updateAfterDelete}
                />
            )
    })

    return (
        <div className="my-list-container">
            <Header />
            <div className="my-card-list-container">
                <div className="label-container">
                    <h2 className="my-list-label">My List</h2>
                </div>
                {renderMyList}
            </div>
        </div>
    )
}

export default MyList