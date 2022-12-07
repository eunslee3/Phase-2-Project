import React from 'react'
import HeroImage from "./HeroImage"
import HomepageDesc from '../homepage/HomepageDesc'

function Home({animeList}) {
    return (
        <div>
            <HeroImage />
            <HomepageDesc />
        </div>
    )
}

export default Home