import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Quote Machine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#subs">About Quotes</Nav.Link>
             <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/quotes">Generate Quotes</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;