import React, { useState } from 'react'
import { Row, Col, Slider } from 'antd';
import {Link, withRouter } from "react-router-dom";
import MovieDetails from '../../components/movieDetails/index.js';
import './index.scss';

function Index() {
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    const movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c03a724241042cf3bbf3f05d61ad9b6e';
    const postBody = {
        // type: "hot",
        // limit: 10
    };


    if( isLoaded === false){
        setIsLoaded(true);
        fetch(movieUrl)
        .then(res => res.json())
        .then(movies => {
            setMovies(movies.results);
            // console.log(movies.results);
        },
        (error) => {
            setError(error);
            // console.log(error);
            }
        );
    }


    return (

            <Row gutter={24} className="">
                {movies.map(item =>
                
                <Col span={6} key={item.id}>
                <div  >
                    <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.poster_path} />

                        <p>{item.original_title}</p>
                        <p>
                        {/* overview: {item.overview} <br/> */}
                        {/* popularity: {item.popularity} <br/> */}
                        {item.release_date} <br/>
                        {item.vote_average} <br/>
                    </p>
                    <p>{error}</p>
                    <Link to={"/moviedetails?id=" +item.id }>See Details</Link>
                    

                </div>
                </Col>
                )}
            </Row>

    )
}

export default withRouter(Index)
