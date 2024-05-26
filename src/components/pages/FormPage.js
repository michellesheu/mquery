import React from 'react';
import '../../App.css';
import Form from '../Form';
import ParticleBackground from '../ParticleBackground';

function FormPage({response, setResponse}) {
    console.log("Made it to form!");
    return (
        <>
            <Form response={response} setResponse={setResponse}/>
            <ParticleBackground />
        </>
    );
}

export default FormPage;