import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './post.css';
export const Post = ({ e }) => {
  return (
    <Card className='my-2'>
      <Card.Body>
        <Card.Title>{e.title.rendered}</Card.Title>
        <Card.Text>
          <span dangerouslySetInnerHTML={{ __html: e.excerpt.rendered }} />
        </Card.Text>
       <Link to={`/post/${e.id}`}>
          <Button className='bottone'>Scopri di più</Button>
        </Link>
      </Card.Body>
      <Card.Footer className='cardf'>
         {e.date_gmt.slice(0, 10)}
      </Card.Footer>
    </Card>
  );
};
