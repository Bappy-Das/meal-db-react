import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'
// import { Button, Input } from 'react-bootstrap';

const Footer = () => {

    return (
        <div>
            <Row className="p-3 bg-dark text-white align-items-center justify-content-center">
                <Col className="mt-3 ms-5">
                    <p>Copyright &copy; 2021 All rights reserved | This template is made By Bappy Das</p>
                </Col>
                <Col className="ms-auto">
                    {/* <NavLink>
                        <Link to="/terms">Terms</Link>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/compliances">Compliances</Link>
                    </NavLink> */}
                    <nav >
                        <a className="ms-4 text-decoration-none text-white" href="">Terms</a>
                        <a className="ms-4 text-decoration-none text-white" href="">Privacy</a>
                        <a className="ms-4 text-decoration-none text-white" href="">Compliances</a>
                    </nav>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;