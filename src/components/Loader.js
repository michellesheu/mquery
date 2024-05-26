import React, { useState, useEffect } from 'react';
import LoadingSection from './LoadingSection';
import { Navigate } from 'react-router-dom';
/*Determines whether to return the loader screen*/

function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // Post Axios request 
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
    }, []);

    if (isLoading) {
        return <LoadingSection />;
    }

    return (
        <Navigate to='/results-page' />
    );
}

export default Loader;