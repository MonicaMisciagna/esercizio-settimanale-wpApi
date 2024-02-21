import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './MyNavBar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className=" fixed-bottom mynavbar">
      <Container>
        <Navbar.Brand href="#home">Garden Hub</Navbar.Brand>

       
      </Container>
    </Navbar>
  );
}

export default BasicExample;