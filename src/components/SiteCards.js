import React from 'react';
import CardItem from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Choose Your Next Adventure!</h1>
            <div classNmame="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/los_angeles.jpg" text="Los Angeles, California" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/instanbul.jpg" text="Instanbul, Turkey" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/bangkok.jpg" text="Bangkok, Thailand" label="Luxury" path="/sites"/>
                    </ul>

                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/rio.jpg" text="Rio de Janeiro, Brazil" label="Luxury" path="/sites"/>
                        <CardItem src="/images/sites_images/seoul.jpg" text="Seoul, South Korea" label="Luxury" path="/sites"/>
                        <CardItem src="/images/sites_images/sydney.jpg" text="Sydney, Australia" label="Luxury" path="/sites"/>
                    </ul>

                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/shanghai.jpg" text="Shanghai, China" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/copenhagen.jpg" text="Copenhagen, Denmark" label="Luxury" path="/sites"/>
                        <CardItem src="/images/sites_images/stockholm.jpg" text="Stockholm, Sweden" label="Luxury" path="/sites"/>
                    </ul>

                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/amsterdam.jpg" text="Amsterdam, Netherlands" label="Luxury" path="/sites"/>
                        <CardItem src="/images/sites_images/barcelona.jpg" text="Barcelona, Spain" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/miami.jpg" text="Miami, Florida" label="Luxury" path="/sites"/>
                    </ul>
                </div>
            </div>

            <h1>Favorites</h1>
            <div classNmame="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/tokyo.jpg" text="Tokyo, Japan" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/paris.jpg" text="Paris, France" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/london.jpg" text="London, United Kingdom" label="Popular" path="/sites"/>
                    </ul>

                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/new_york.jpg" text="New York" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/rome.jpg" text="Rome, Italy" label="Popular" path="/sites"/>
                        <CardItem src="/images/sites_images/venice.jpg" text="Venice, Italy" label="Popular" path="/sites"/>
                    </ul>
                </div>
            </div>

            <h1>New Locations</h1>
            <div classNmame="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem src="/images/sites_images/reykjavik.jpg" text="Reykjavík, Iceland" label="New" path="/sites"/>
                        <CardItem src="/images/sites_images/prague.jpg" text="Prague, Czech Republic" label="New" path="/sites"/>
                        <CardItem src="/images/sites_images/chicago.jpg" text="Chicago, Illinois" label="New" path="/sites"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;