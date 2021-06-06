import React, {useState } from 'react'
// import queryString from 'query-string'
import { withRouter, useLocation } from "react-router-dom";
import { Input, Row, Col, Divider, Rate } from 'antd';
import './index.scss';
import { StarOutlined } from '@ant-design/icons';

function Index() {
    const search = useLocation().search;
    const movieId = new URLSearchParams(search).get('id');
    const [query, setQuery] = useState('');
    const [oldQuery, setOldQuery] = useState('');
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState({});


    const movieUrl = 'https://api.themoviedb.org/3/movie/'+movieId+'?api_key=c03a724241042cf3bbf3f05d61ad9b6e';


    if(!isLoaded)
    {
        setIsLoaded(true);
        console.log(movieUrl);
        //setIsLoaded(true);
        fetch(movieUrl)
        .then(res => res.json())
        .then(movieTemp => {
            setMovie(movieTemp);
            console.log(movieTemp);
        },
        (error) => {
            setError(error);
            console.log(error);
            }
        );
    }


    return (
        <div className="movieDetails">
            <div className="movieDetails__overlay">
                <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path} />
            </div>
            <h1>Movie details</h1>
            <Row gutter={24} justify="center" align="top">
                <Col span={6}>
                    <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ movie.poster_path} />
                </Col>
                <Col span={8}>

                    <h2>{movie.original_title}</h2>
                    <figure>
                        <StarOutlined twoToneColor="#eb2f96" style={{ fontSize: '30px', color: 'yellow', }} />
                        <h3>{movie.vote_average}</h3>
                    </figure>
                    <h3>overview: </h3>
                    <p>{movie.overview}</p>
                    <p>Released: {movie.release_date}</p>
                    <p>{error}</p>
                </Col>
            </Row>

        </div>
    )
}

export default withRouter(Index)