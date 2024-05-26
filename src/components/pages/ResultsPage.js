import React from 'react'
import '../../App.css'
import ParticleBackground from '../ParticleBackground';
import ResultSection from '../ResultSection';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Toothless from '../Toothless';
import './ResultsPage.css';
import { useLocation } from "react-router";
import Table from '../Table';
//import Pandahead from '../Pandahead';
//import KermitDarth from '../KermitDarth';
//import Rick from '../Rick';
//import Steve from '../../Steve';
//import Cattank from '../../Cattank';
//import Ucat from '../../Ucat';
//import Goose from '../../Goose';


export default function ResultsPage({ response, setResponse }) {
    const { state } = useLocation(); //refers the the link
    console.log("made it to results")
    console.log(state.genreState)

    let model;
    /* switch (state.genreState) {
        case 'Sci-Fi'://nope
            model = <Ucat />
            break;
        case 'Comedy':
            model = <Pandahead />
            break;
        case 'Horror'://nope
            model = <KermitDarth />
            break;
        case 'Adventure':
            model = <Rick />
            break;
        case 'Building':
            model = <Steve />
            break;
        case 'Military':
            model = <Goose />
            break;
        default:
            model = <Toothless />
    } */
    return (
        // <h1 className='results'>RESULTS</h1>
        <>
            <ParticleBackground />
            <div className='results-container'>
                <ResultSection className='results-section' response={response} setResponse={setResponse} />

            </div>

        </>
    );
}

