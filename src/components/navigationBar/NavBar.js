import React from 'react';
import { Link, NavLink} from 'react-router-dom'



function NavBar({renderRecommendedAnime}) {
    return (
        <nav className="nav">
            <Link onClick={() => renderRecommendedAnime()} to="/recommended">Recommended Animes</Link>
            <Link to="/mangas">Mangas</Link>

        </nav>
    )
}
console.log(NavBar)
export default NavBar