import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MyNavBar.css';
function MyNavBar() {
  return (
    <Navbar expand="lg" className=" mynavbar ">
      <Container>
        <Navbar.Brand href="#home">Garden Hub Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Posts</Nav.Link>
            <Nav.Link href="/users">Authors</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;