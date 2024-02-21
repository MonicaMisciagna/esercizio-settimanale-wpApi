import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Card, CardText, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = ({ urlAPI }) => {
  
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

 
  const getPostData = () => {

    setIsLoading(true);
  axios.get(`${urlAPI}posts/${id}`)
      .then(response => setPost(response.data)) 
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
      .finally(() => setIsLoading(false)); 
  };


  useEffect(getPostData, []);

  return (
    <Container className='my-3'>
     {isLoading && <Spinner animation='border' />}
      {error && <Alert variant='danger'>{error}</Alert>}
      
     
      {!isLoading && !error && (
        <div>
          <h2>{post.title?.rendered}</h2> 
          <p dangerouslySetInnerHTML={{ __html: post.content?.rendered }}></p> 
        </div>
      )}
    </Container>
  );
};

export default Details;
