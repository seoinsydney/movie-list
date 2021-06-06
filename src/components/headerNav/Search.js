import React, { useState } from 'react'






const Search = (query) => {
    const [movies, setMovies] = useState([]);

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

    return (
        <div>
            <p>this is input</p>
            <input 
            onChange={(query)=> {Search(query)}}
            />
        </div>
    )
}

export default Search
