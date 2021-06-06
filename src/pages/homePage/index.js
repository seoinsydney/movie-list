import React, { useState } from 'react'
// import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Row, Col, Slider } from 'antd';
import {Link, withRouter } from "react-router-dom";
import MovieDetails from '../../components/movieDetails/index.js';
import './index.scss';

import Search from './../../components/headerNav/searchNew.js'
import { SearchOutlined } from '@ant-design/icons';

function Index() {
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    const movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c03a724241042cf3bbf3f05d61ad9b6e';
    const postBody = {
        // type: "hot",
        // limit: 10
    };
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

    if( isLoaded === false){
        setIsLoaded(true);
        fetch(movieUrl, requestMetadata)
        .then(res => res.json())
        .then(movies => {
            setMovies(movies.results);
            console.log(movies.results);
        },
        (error) => {
            setError(error);
            console.log(error);
            }
        );
    }

    const getTrailers = (trailerUrl) => {
        if( isLoaded == false){
            setIsLoaded(true);
            fetch(trailerUrl, requestMetadata)
            .then(res => res.json())
            .then(movies => {
                setMovies(movies.results);
                console.log(movies.results);

            },
            (error) => {
                setError(error);
                console.log(error);
                }
            );
        }
    }

    

    return (
        <div className="movieContainer">
                <SearchOutlined />
                <Search /> 

            <div className="">
                {movies.map(item =>
                
                <div className="movieCard" key={item.id}>
                    <div  style={{ width: '18rem' }}>
                        <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.poster_path} />

                            <p>{item.original_title}</p>
                            <p>
                            overview: {item.overview} <br/>
                            popularity: {item.popularity} <br/>
                            {item.release_date} <br/>
                            {item.vote_average} <br/>
                            {item.vote_count} <br/>
                            {item.vote_count} <br/>
                        </p>
                        <p>{error}</p>
                        <Link to={"/moviedetails?id=" +item.id }>see details</Link>
                        

                    </div>
                </div>
                )}
            </div>
        </div>

    )
}

export default withRouter(Index)
