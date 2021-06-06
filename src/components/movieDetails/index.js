import React, { useState } from 'react'
import { withRouter, useLocation } from "react-router-dom";
import './index.scss';

function Index() {
    const search = useLocation().search;
    const movieId = new URLSearchParams(search).get('id');
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState({});


    const movieUrl = 'https://api.themoviedb.org/3/movie/'+movieId+'?api_key=c03a724241042cf3bbf3f05d61ad9b6e';


    if(!isLoaded)
    {
        setIsLoaded(true);
        // console.log(movieUrl);
        //setIsLoaded(true);
        fetch(movieUrl)
        .then(res => res.json())
        .then(movieTemp => {
            setMovie(movieTemp);
            // console.log(movieTemp);
        },
        (error) => {
            setError(error);
            // console.log(error);
            }
        );
    }


    return (
        <div className="movieDetails">
            <div className="movieDetails__overlay">
                <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path} />
            </div>
            <h1>Movie details</h1>
            <div justify="center" align="top">
                <div>
                    <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path} />
                </div>
                <div>

                    <h2>{movie.original_title}</h2>
                    <figure>
                        <p>star icon</p>
                        <h3>{movie.vote_average}</h3>
                    </figure>
                    <h3>overview: </h3>
                    <p>{movie.overview}</p>
                    <p>Released: {movie.release_date}</p>
                    <p>{error}</p>
                </div>
            </div>

        </div>
    )
}

export default withRouter(Index)