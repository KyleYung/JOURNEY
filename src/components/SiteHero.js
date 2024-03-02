import React from 'react';
import './SiteHero.css';
import '../App.css';

function SiteHero() {
    return (
        <div className="site-hero-container">
            <img className="site-hero-banner"src="/images/sitetest2.jpg" alt="Site Banner"/>
            <div className="site-hero-left">
                <div className="site-hero-gallery">
                    <div className="gallery-col">
                        <img src="/images/sites_images/miami.jpg" className="gallery-col-small-img"></img>
                        <img src="/images/sites_images/reykjavik.jpg" className="gallery-col-small-img"></img>
                        <img src="/images/sites_images/copenhagen.jpg" className="gallery-col-small-img"></img>
                    </div>

                    <div className="gallery-col">
                        <img src="/images/sites_images/tokyo.jpg" className="gallery-col-med-img"></img>
                        <img src="/images/sites_images/seoul.jpg" className="gallery-col-med-img"></img>
                    </div>

                    <div className="gallery-col">
                        <img src="/images/sites_images/los_angeles.jpg" className="gallery-col-small-img"></img>
                        <img src="/images/sites_images/venice.jpg" className="gallery-col-small-img"></img>
                        <img src="/images/sites_images/rio.jpg" className="gallery-col-small-img"></img>
                    </div>
                </div>
            </div>

            <div className="site-hero-right">
                <div site-hero-text>
                    <h1>Sites</h1>
                    <p>A Vast World Awaits!</p>
                </div>
            </div>
        </div>
    )
}

export default SiteHero;