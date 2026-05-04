import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation(){
    return (
        <NavBar expand="lg" className="navbar bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <LinkContainer to="/">
                    <NavBar.Brand>
                        <img src='/src/assets/logo.png' width="100" height="75" />
                    </NavBar.Brand>
                </LinkContainer>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/gallery">
                        <Nav.Link>Gallery</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/equipment">
                        <Nav.Link>Equipment</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/recommendations">
                        <Nav.Link>Recommendations</Nav.Link>
                    </LinkContainer>
                </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
}

export default Navigation;