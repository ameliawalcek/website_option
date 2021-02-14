import React from 'react'
import '../../App.css'
import Cards from '../Cards/Cards'
import HeroSection from '../HeroSection/HeroSection'
import Footer from '../Footer/Footer'
import Tools from '../Tools/Tools'
import Bio from '../Bio/Bio'

function Home() {
    return (
        <>
            <HeroSection />
            <Bio />
            <Cards />
            <Tools />
            <Footer />
        </>
    )
}

export default Home