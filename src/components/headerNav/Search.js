import React, { useState } from 'react'
import { Input, Button } from 'antd';
import SearchNew from './searchNew.js';






const Search = (query) => {
    const [movies, setMovies] = useState([]);
    //const SearchNew = <SearchNew/>

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=c03a724241042cf3bbf3f05d61ad9b6e`;
    if( query.target !== undefined && query !== undefined && query.target.value.length >= 3 ){
        console.log(query.target.value);
        fetch (url)
        .then(response => response.json())
        .then(data => {
            setMovies({
            movies: data.results
          })
        });
    }

    


    // const movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c03a724241042cf3bbf3f05d61ad9b6e';
    // const postBody = {
    //     // type: "hot",
    //     // limit: 10
    // };
    // const requestMetadata = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(postBody)
    // };



    // if( isLoaded === false){
    //     setIsLoaded(true);

    //     fetch(movieUrl, requestMetadata)
    //     .then(res => res.json())
    //     .then(movies => {
    //         setMovies(movies.results);
    //         console.log(movies.results);
    //     },
    //     (error) => {
    //         setError(error);
    //         console.log(error);
    //         }
    //     );
    // }



    return (
        <div>
            <p>this is input</p>
            <Input 
            onChange={(query)=> {Search(query)}}
            />
        </div>
    )
}

export default Search
