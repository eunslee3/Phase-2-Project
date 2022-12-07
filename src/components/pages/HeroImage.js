import React from 'react'
import { Link, NavLink} from 'react-router-dom'

function HeroImage({setGetStarted, getStarted}) {
    return (
        <section className="hero-image">
            <div className="overlay">
                <h1 id="hero-title">AnimeFlix</h1>
                <Link className="button" to="/animes">Get Started</Link>
            </div>
        </section>
    )
}

export default HeroImage