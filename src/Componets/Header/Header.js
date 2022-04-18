import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='Headers'>

            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Samira Hadid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item
                                    as={Link} to="testimonials">Testimonials</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="contact">Contact</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </div>
    );
};

export default Header;