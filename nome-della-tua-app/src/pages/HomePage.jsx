import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Post } from '../components/Post';
import './homepage.css';

const HomePage = ({ urlAPI }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState('');
  const [authors, setAuthors] = useState('');
  const [allCategories, setAllCategories] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);

  useEffect(() => {
    axios.get(`${urlAPI}categories`)
      .then(response => setAllCategories(response.data))
      .catch(error => console.log(error));

    axios.get(`${urlAPI}users`)
      .then(response => setAllAuthors(response.data))
      .catch(error => console.log(error));
  }, [urlAPI]);

  const getAllPosts = () => {
    setIsLoading(true);

    const categoriesParam = categories ? `&categories=${categories}` : '';
    const authorsParam = authors ? `&author=${authors}` : '';

    axios.get(`${urlAPI}posts?page=${currentPage}${categoriesParam}${authorsParam}`)
      .then(response => setPosts(response.data))
      .catch(error => {
        console.log(error);
        setErrMsg(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getAllPosts();
  }, [currentPage, categories, authors]);

  const handleSearch = () => {
    setCurrentPage(1);
    getAllPosts();
  };

  return (
    <Container>
      <h1 className='my-3'>Blog</h1>
      <div className='d-flex justify-content-center gap-5 filtro py-3 px-3 mb-2 '>
        
        <select className='rounded-2'
          id="categories"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="">Tutte le categorie</option>
          {allCategories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
       
        
        <select className='rounded-2'
          id="authors"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
        >
          <option value="">Tutti gli autori</option>
          {allAuthors.map(author => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>

      </div>

      {isLoading && (
        <div className='d-flex justify-content-center align-items-center my-3'>
          <Spinner animation='border'/>
        </div>
      )}
      {errMsg && <Alert variant='danger'>{errMsg}</Alert>}
      <Row className='row'>
        {posts.map((e, index) => (
          <Col className='col-12' key={index}>
            <Post e={e} />
          </Col>
        ))}
        {!isLoading && !posts.length && <h1>Non ci sono post</h1>}
      </Row>
    </Container>
  );
};

export default HomePage;
