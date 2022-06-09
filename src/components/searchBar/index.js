import React, {useState } from 'react'
import { Link } from "react-router-dom";
import './index.scss';
import Star from '../../images/star-icon.png';
import { Container, Row, Col } from 'react-bootstrap';

function SearchNew({type }) {
    const [query, setQuery] = useState('');
    const [oldQuery, setOldQuery] = useState('');
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const movieUrl = 'https://api.themoviedb.org/3/search/movie?api_key=c03a724241042cf3bbf3f05d61ad9b6e&query='+query;
    
    if(oldQuery != query && query.length >= 3)
    {
        setOldQuery(query);
        fetch(movieUrl)
        .then(res => res.json())
        .then(moviesTemp => {
            setMovies(moviesTemp.results);
        },
        (error) => {
            setError(error);
            }
        );
    }

    return (
        <div className="searchMovieContainer">
            <h2>Search Movies</h2>
            <input name="searchMovie" onChange={e => setQuery(e.target.value)} placeholder=" search movie.." />
            <Container className="movieCard">
                <Row>
                    {movies.map(item =>
                        <Col xsm={6} sm={6} md={4} lg={2} key={item.id}>
                            <Link to={"/moviedetails?id=" +item.id } >
                                <div className="movieImage" >
                                    <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.poster_path} />
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
    );
}

export default SearchNew