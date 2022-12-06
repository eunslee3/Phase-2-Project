import React from 'react'

function HeroImage({setGetStarted, getStarted}) {
    return (
        <section className="hero-image">
            <div className="overlay">
                <h1 id="hero-title">AnimeFlix</h1>
                <button>Get Started</button>
            </div>
        </section>
    )
}

export default HeroImage