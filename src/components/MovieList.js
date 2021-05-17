import React from 'react'

const MovieList = (props) => {
    
    return (
       <div> 
           
            {props.movies.map((movie,index) => (
                <div>
                    <img src={movie.Poster} alt='movie'></img>
                    <h3>{movie.Title}</h3>
                    <p>Released: {movie.Year}</p>
                </div> 
            ))}
            
       </div> 
    )
}

export default MovieList
