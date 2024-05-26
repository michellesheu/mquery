import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<video src='/Home page back.mp4' autoPlay loop muted />*/}
            <h1>MQuery</h1>
            <h2>Query Naturally</h2>

            <p>Natural language query for targeting customers</p>

            <div className="hero-btns">
                <Button
                    link="/form-page"
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('animal creation')}>
                    Start Now
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
