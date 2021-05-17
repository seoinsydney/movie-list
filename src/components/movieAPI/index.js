import React, { useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function Index(props) {
    const [error, setError] = useState("error");
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

    if( isLoaded == false){
        fetch(movieUrl, requestMetadata)
        .then(res => res.json())
        .then(movies => {
            setMovies(movies.results);
            console.log(movies.results);
            setIsLoaded(true);
        },
        (error) => {
            setError(error);
            console.log(error);
            }
        );
    }

    return (
        <Container>
            <Row>
                {movies.map(item =>
                <Col key={item.id}>
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'+ item.poster_path} />
                    <Card.Body>
                        <Card.Title>{item.original_title}</Card.Title>
                        <p>
                        overview: {item.overview}
                        popularity: {item.popularity}
                        {item.release_date}
                        {item.vote_average}
                        {item.vote_count}
                        {item.vote_count}
                    </p>
                    </Card.Body>
                </Card>
                </Col>
                )}
            </Row>
        </Container>
    )
}

export default Index
