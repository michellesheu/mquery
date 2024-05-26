import React from 'react';
import '../App.css';
import './ResultSection.css'
import { Button } from './Button';
import Table from './Table';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function ResultSection({ response, setResponse }) {
    //get request
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/results-page', { state: { "temp": "temptemp " } })
    };
    return (
        <div className='result-container'>
            <p>Relevant Customers:</p>
            <Table mockData={response} />

            {/* <h1>{response.data.predictions[0].content}</h1> */}
            <div className='button-container'>
                <Button className='btn' link="/form-page">Back</Button>
            </div>
        </div>

    );
}

export default ResultSection;