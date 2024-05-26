import React from "react";
import "../../App.css";
import { useParams } from "react-router-dom";
import { Button } from '../Button';
import { AnimalFact } from "../AnimalFact.js";


const content = {
    eu: {
        title: "polar bear",
        video: '/Polarbear-start.mp4',
        className: 'polar-bear',
        animal: 'polar_bear'
    },
    na: {
        title: "red wolf",
        video: '/Redwolf-start.mp4',
        className: 'red-wolf',
        animal: 'red_wolf'
    },
    as: {
        title: "snow leopard",
        video: '/Snowleo-start.mp4',
        className: 'snow-leo',
        animal: 'snow_leopard'
    },
    sa: {
        title: "The South America Page is Still Being Built!",
        video: '/Home page back.mp4',
        className: 'not-built',
        animal: 'polar_bear'
    },
    af: {
        title: "The Africa Page is Still Being Built!",
        video: '/Home page back.mp4',
        className: 'not-built',
        animal: 'polar_bear'
    },
    oc: {
        title: "The Oceania Page is Still Being Built!",
        video: '/Home page back.mp4',
        className: 'not-built',
        animal: 'polar_bear'
    },
};

export default function ToDo() {


    const params = useParams();
    return (
        <div className='to-do-container'>
            <video src={content[params.location].video} autoPlay loop muted />
            <div className={content[params.location].className}>
                <h1> {content[params.location].title}</h1>

                <AnimalFact animalName={content[params.location].animal}> </AnimalFact>

                <div className='to-do-list'>

                </div>
            </div>

        </div>

    );
}
