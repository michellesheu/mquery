import React, { Component, useEffect } from 'react'
import axios from "axios";
import '../App.css'
import './Form.css'
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

import Typewriter from "typewriter-effect";

/*import Map from '../Map';*/

const baseURL = "http://127.0.0.1:5000";

const config = {
    headers: { Authorization: process.env.REACT_APP_ACCESS_TOKEN }//need to put env variable inside of netlify
}
console.log(process.env.REACT_APP_ACCESS_TOKEN)

export default function Form({ response, setResponse }) {
    const [description, setDescription] = React.useState("");
    //const [genre, setGenre] = React.useState("");
    //const genres = ["All Genres", "Adventure", "Fighting", "RPG", "Town and City", "Horror", "Building", "FPS", "Military", 
    //              "Naval", "Sports", "Comedy", "Sci-Fi"]
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        //Genre: ${genre}
        console.log(`
      Description: ${description}
    `);
        const userData = {
            //"instances": [
            //    { "prompt": `Generate a catchy title for the game Roblox based on the following description and genre: Genre: ${genre} Description: ${description}.` }
            //]
            "prompt": `${description}.`
        }

        console.log(data);
        /* axios
            .post(
                baseURL,
                userData
            )
            .then((response) => {
                setResponse(response);
                //navigate('/results-page', { state: { genreState: `${genre}` } }); //genrestate to be sent to results
                navigate('/results-page', { state: { "nothing": "nothing" } }); //genrestate to be sent to results
            }); */
        //setResponse([{ "name": "John Smith", "address": "123 easy st", "phone": "408-233-3333" }])
        setResponse([{ "name": "John Smith", "address": "123 easy st", "phone": "408-233-3333" }])
        navigate('/results-page', { state: { "temp": "temptemp " } })
    };

    return (
        <div className='form-container' id="particles-js">

            <form onSubmit={handleSubmit}>
                {/* <div className='typing-text'>
                    <Typewriter
                    // options={{
                    //   strings: ['Tell Us About\nYour Game'],
                    //   autoStart: true,
                    // }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Tell Us About<br>Your Game</br>')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .stop()
                            .start();
                    }}
                    />
                </div> */}

                {/* <label>
                    Genre
                    <select
                        name="genre"
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                        required>
                        {genres.map(genre => (
                            <option key={genre}>{genre}</option>
                        ))}
                    </select>
                </label> */}


                <label>Query Naturally</label>
                <div className='input-group'>
                    <Button
                        onClick={handleSubmit}>
                        <img src="https://www.svgrepo.com/show/7109/search.svg"></img>
                    </Button>
                    <input
                        name="description"
                        type="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required />
                </div>


            </form>
        </div>
    );
}
