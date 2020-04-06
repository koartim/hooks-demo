import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SWMovies = () => {

    const [num, setNum] = useState(1);
    const [movie, setMovie] = useState("");

    useEffect(() => {
        const getData = async () => {
            const rsp = await axios.get(`https://swapi.co/api/films/${num}/`)
            setMovie(rsp.data)
            console.log(rsp.data);            
        }
        getData();
    }, [num])

    return (
        <div>
            <h1>Pick a Movie</h1>
            <h3>{movie.title}</h3>
            <p>{movie.opening_crawl}</p>
            <select value={num} onChange={e => setNum(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
        </div>
    )
}
export default SWMovies;