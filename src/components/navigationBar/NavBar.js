import React from 'react';

function NavBar() {
    return (

        <nav className="nav">
            <a href="/" className="site-title">Anime Bar</a>
            <ul>
                <li className="active">
                    <a href="Top">Top</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>

        <div className="nav-bar">
        </div>

    )
}

export default NavBar