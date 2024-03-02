import React from 'react';
import CardItem from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Explore</h1>
            <div classNmame="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/amsterdam.jpg" text="Amsterdam, Netherlands" label="Best Deal" path="/sites"/>
                        <CardItem src="/images/sites_images/paris.jpg" text="Paris, France" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/seoul.jpg" text="Seoul, South Korea" label="Luxury" path="/sites"/>
                    </ul>

                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/tokyo.jpg" text="Tokyo, Japan" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/prague.jpg" text="Prague, Czech Republic" label="New" path="/sites"/>
                        <CardItem src="/images/sites_images/miami.jpg" text="Miami, Flordia" label="Luxury" path="/sites"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;