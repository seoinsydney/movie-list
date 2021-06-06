import React, { useState } from 'react'
// import { Button, Card, Container, Row, Col } from 'react-bootstrap';
// import { Row, Col, Slider } from 'antd';
import {Link, withRouter } from "react-router-dom";
// import MovieDetails from '../../components/movieDetails/index.js';
import './index.scss';

import Search from '../../components/searchBar/index.js'
// import { SearchOutlined } from '@ant-design/icons';

import { Divider, Rate  } from 'antd';

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
                <Search /> 

                <Divider orientation="left" plain><h2>Popular movie list</h2></Divider>
            
                {movies.map(item =>
                <Link to={"/moviedetails?id=" +item.id }>
                <div className="movieCard" key={item.id}>
                    <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.poster_path} />
                    <section>
                        <p>{item.original_title}</p>
                        <p>{error}</p>
                    </section>
                </div>
                </Link>
                )}
            </div>

    )
}

export default withRouter(Index)
