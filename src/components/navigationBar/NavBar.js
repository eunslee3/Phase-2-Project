import React from 'react';

function NavBar() {
    const path = window.location.pathname
    return (
        <nav className="nav">
            <a href="/" className="site-title">Anime Bar</a>
            <ul>
                <li className="active">
                    <a href="Top">RecommendedAnimes</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar