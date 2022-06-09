import React, { useState } from 'react'
import {Link, withRouter } from "react-router-dom";
import './index.scss';
import Search from '../../components/searchBar/index.js'
import Star from '../../images/star-icon.png';
import { Container, Row, Col } from 'react-bootstrap';

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
        },
        (error) => {
            setError(error);
            }
        );
    }

    return (
        <>
            <Search /> 
            <div className="homeMovieContainer">
                <Container >
                    <Row>
                        <Col className="mobile">
                            <h2>Popular Movies List</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="desktop">
                            <h2>Popular <br/> Movies <br/> List</h2>
                        </Col>
                        {movies.map(item =>
                        <Col xsm={6} sm={6} md={4} lg={2} key={item.id}>
                            <Link to={"/moviedetails?id=" +item.id } >
                                <div className="movieImage" >
                                    <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.poster_path} alt="movie image" />
                                    <section>
                                        <figure>
                                            <img src={Star} alt="star icon"/>
                                            <p>{item.vote_average}</p>
                                        </figure>
                                        <p>{item.original_title}</p>
                                        <p>{error}</p>
                                    </section>
                                </div>
                            </Link>
                        </Col>
                )}
                  </Row>
                </Container>
            </div>
        </>
    )
}

export default withRouter(Index)
