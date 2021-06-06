import React from 'react';
import Footer from './components/Footer';
import Header from './components/headerNav/index.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from './components/movieDetails/index.js';
import MovieList from './pages/homePage/index.js';
import MyList from './components/myList/index.js';

function App() {

  return (
    <>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/moviedetails" component={MovieDetails} />
            <Route exact path="/mylist" component={MyList} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>

  );
}

export default App;
