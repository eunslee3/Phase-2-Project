import React from 'react';
import { Link } from 'react-router-dom'
import Search from '../search/Search'



function NavBar({renderRecommendedAnime, animeList, setSearch, renderMangas}) {

    return (
        <nav className="nav">
            <Link id="specific-item" className="nav-items" to="/animes">Animes</Link>
            <Link className="nav-items" onClick={renderRecommendedAnime} to="/recommended">Recommendations</Link>
            <Link id="specific-item" onClick={renderMangas} className="nav-items" to="/mangas">Mangas</Link>
            <Link className="nav-items" to="/subscription">Subscription</Link>
            <Link className="nav-items" to="/mylist">My List</Link>
            <Search setSearch={setSearch}/>
        </nav>
    )
}

export default NavBar