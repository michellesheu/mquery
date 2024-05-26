import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import HeroSection from '../HeroSection'
// import Footer from '../Footer';
import ParticleBackground from '../ParticleBackground';

function Home() {
    console.log("Made it to home!");   
 
    return (
        <>
            <HeroSection />
            <ParticleBackground />
         </>
    );
}

export default Home;