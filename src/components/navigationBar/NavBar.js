import React from 'react';
import { Link, NavLink} from 'react-router-dom'

function NavBar({renderRecommendedAnime}) {
    return (
        <nav className="nav">
            <Link onClick={() => renderRecommendedAnime()} href="/recommended">Recommended Animes</Link>
            <Link href="/mangas">Mangas</Link>
        </nav>
    )
}

export default NavBar