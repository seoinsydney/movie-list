import React, {useState } from 'react'
// import { Row, Col, Slider } from 'antd';
import { Link } from "react-router-dom";
import './index.scss';
import { Divider  } from 'antd';


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
        console.log(movieUrl);
        //setIsLoaded(true);
        fetch(movieUrl)
        .then(res => res.json())
        .then(moviesTemp => {
            setMovies(moviesTemp.results);
            console.log(moviesTemp.results);
        },
        (error) => {
            setError(error);
            console.log(error);
            }
        );
    }

    return (
        <>
            <div className="searchMovieContainer">
            <Divider orientation="left" plain><h2>Search Movies</h2></Divider>
                <input name="searchMovie" onChange={e => setQuery(e.target.value)} placeholder=" search movie.." />
                    {movies.map(item =>
                    <Link to={"/moviedetails?id=" +item.id }  key={item.id}>
                    <div className="movieCard">
                        <img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.poster_path} />
                        <section>
                            <p>{item.original_title}</p>
                            {/* overview: {item.overview} <br/> */}
                            {/* popularity: {item.popularity} <br/> */}
                            {/* {item.release_date} <br/> */}
                            {/* {item.vote_average} <br/> */}
                            <p>{error}</p>
                        </section>
                    </div>
                    </Link>
                    )}
            </div>
        </>
    );
}

export default SearchNew