import React, { useState } from 'react'
import { withRouter, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Star from '../../images/star-icon.png';
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
        fetch(movieUrl)
        .then(res => res.json())
        .then(movieTemp => {
            setMovie(movieTemp);
        },
        (error) => {
            setError(error);
            }
        );
    }


    return (
        <Container className="movieDetails">
            <div className="movieDetails__overlay">
                <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path} alt="movie image"/>
            </div>
            <h1>Movie details</h1>

            <Container className="movieDetails__container">
            <Row>
                <Col xs={12} sm={12} md={4} lg={{ span: 4, offset: 2 }} >
                <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path} alt="movie image"/>
                </Col>
                <Col xs={12} sm={12} md={8} lg={4}>
                <h2>{movie.original_title}</h2>
                    <figure>
                        <img src={Star} alt="star icon"/>
                        <h3>{movie.vote_average}</h3>
                    </figure>
                    <h3>Overview: </h3>
                    <p>{movie.overview}</p>
                    <p>Released: {movie.release_date}</p>
                    <p>{error}</p>
                </Col>
            </Row>
            </Container>

        </Container>
    )
}

export default withRouter(Index)