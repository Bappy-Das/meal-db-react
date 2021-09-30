import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="me-4 text-decoration-none text-white fw-bold" to="/home">Home</Link>
                        <Link className="me-4 text-decoration-none text-white fw-bold" to="/courses">Courses</Link>
                        <Link className="me-4 text-decoration-none text-white fw-bold" to="/about">About</Link>

                        {/* <Nav.Link to="/feature">Features</Nav.Link>
                        <Nav.Link to="/price">Pricing</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;