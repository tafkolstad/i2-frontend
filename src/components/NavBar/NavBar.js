import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>I2 Frontend</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/'>Ansatte</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
