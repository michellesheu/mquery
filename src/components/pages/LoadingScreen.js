import React from 'react';
import '../../App.css';
import Loader from '../Loader';



function LoadingScreen() {
    console.log("Made it to load!");
    return (
        <Loader />
    );
}

export default LoadingScreen;