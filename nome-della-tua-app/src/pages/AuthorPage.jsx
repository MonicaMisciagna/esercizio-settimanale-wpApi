import React, { useState, useEffect } from 'react';
import { Container,Card, Row, Col, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const AuthorPage = ({ urlAPI }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`${urlAPI}users`)
      .then(response => setUsers(response.data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [urlAPI]);

  return (
    <Container>
      <h2 className='my-3'>Gli autori</h2>

      {isLoading && (
        <div className='d-flex justify-content-center align-items-center my-3'>
          <Spinner animation='border' />
        </div>
      )}

      {error && <Alert variant='danger'>{error}</Alert>}

      {!isLoading && !error && (
        <Row>
          {users.map(user => (
            <Col key={user.id} className='mb-3'>
              <Card>
                <Card.Body>
                  <Card.Img className='my-2' variant="top" src={user.avatar_urls[48]} />
                  <Card.Title>{user.name}</Card.Title>
               
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default AuthorPage;
