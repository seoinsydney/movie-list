import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieAPI from './components/movieAPI/index';

function App() {



  return (
    <div className="App">
        <Header />
        <MovieAPI />
        <Footer />
    </div>
  );
}

export default App;
