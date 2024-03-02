import React from 'react';
import '../../App.css';
import HomeHero from '../HomeHero';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HomeHero />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;