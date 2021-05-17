import React, { useState,useEffect } from 'react';
import Footer from './components/Footer';
//import Header from './components/Header';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import Search from './components/Search';



function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  

  useEffect(function getMovieRequest(search){
    const ApiUrl = `http://www.omdbapi.com/?s=${search}&apikey=f92a9355`;
      fetch(ApiUrl)
      .then(response => response.json())
      .then(jsonResponse => {
       setMovies(jsonResponse.Search);
    });
},[search]);



  return (
    <div className="App">
        <Navbar />
        <Search />
        <MovieList movies={movies}/>
        <Footer />
    </div>
  );
}

export default App;
