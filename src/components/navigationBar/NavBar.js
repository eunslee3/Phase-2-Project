import React from 'react';
import { Link, NavLink} from 'react-router-dom'



function NavBar({renderRecommendedAnime}) {

    
    return (
        <nav className="nav">
            <Link to="/animes">Animes</Link>
            <Link onClick={() => renderRecommendedAnime()} to="/recommended">Recommended Animes</Link>
            <Link to="/mangas">Mangas</Link>
            <Link to="/subscription">Subscription</Link>

            

           

        </nav>
    )
}

export default NavBar