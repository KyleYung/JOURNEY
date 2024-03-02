import React from 'react';
import { Button } from './Button';
import './HomeHero.css';
import '../App.css';

function HomeHero() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>Journey into the Unknown</h1>
            <p>Take the Leap</p>
            <div className='hero-btn'>
                <Button className="btn" buttonStyle="btn--outline" buttonSize="bt--large">Get Started</Button>
            </div>
        </div>
    )
}

export default HomeHero;