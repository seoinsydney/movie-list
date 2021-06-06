import React, { useState } from 'react'
import {Link, withRouter } from "react-router-dom";
import './index.scss';
import Search from '../../components/searchBar/index.js'



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
        <div className="movieContainer">
                <Search /> 

                <h2>Popular Movies List</h2>
            
                {movies.map(item =>
                <Link to={"/moviedetails?id=" +item.id } key={item.id}>
                <div className="movieCard" >
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
