import React from 'react';
import '../../App.css';
import SiteCards from '../SiteCards';
import Footer from '../Footer';
import SiteHero from '../SiteHero'

export default function Sites() {
    return (
        <>
            <SiteHero />
            <SiteCards />
            <Footer />
        </>
    )
}