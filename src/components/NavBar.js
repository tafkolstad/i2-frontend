import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand='lg' bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to='/'>I2 Frontend</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/'>Ansatte</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
