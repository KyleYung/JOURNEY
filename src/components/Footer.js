import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-header">Sign Up for Our Newsletter!</p>
                <form>
                    <input className="footer-input" type="email" name="email" placeholder="Your Email"></input>
                    <Button buttonStyle="btn--outline">Subscribe</Button>
                </form>
            </section>

        <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                <h2>About Us</h2>
                    <Link to="/signup">How It Works</Link>
                    <Link to="/signup">Sustainability</Link>
                    <Link to="/signup">Press Center</Link>
                    <Link to="/signup">Investor Relations</Link>
                    <Link to="/signup">Careers</Link>
                </div>

                <div class='footer-link-items'>
                    <h2>Discover</h2>
                    <Link to="/signup">Loyalty Program</Link>
                    <Link to="/signup">Seasonal and Holiday Deals</Link>
                    <Link to="/signup">Travel Articles</Link>
                    <Link to="/signup">Business Uses</Link>
                    <Link to="/signup">Become an Affiliate</Link>
                </div>

                <div class='footer-link-items'>
                    <h2>Terms and Settings</h2>
                    <Link to="/signup">Privacy and Cookies</Link>
                    <Link to="/signup">Terms of Condition</Link>
                    <Link to="/signup">Dispute Resolution</Link>
                    <Link to="/signup">Don't Sell My Info</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Support</h2>
                    <Link to="/signup">COVID-19 FAQs</Link>
                    <Link to="/signup">Manage your trips</Link>
                    <Link to="/signup">Attractios Help Center</Link>
                    <Link to="/signup">Safety Resource Center</Link>
                </div>
            </div>
        
      </div>

            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">JOURNEY</Link>
                    </div>

                    <small className="web-rights">JOURNEY © 2023</small>

                    <div className="social-icons">
                        <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link"><i className="fab fa-facebook-f"/></Link>
                        <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link"><i className="fab fa-instagram"/></Link>
                        <Link to="/" target="_blank" aria-label="Twitter" className="social-icon-link"><i className="fab fa-twitter"/></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;