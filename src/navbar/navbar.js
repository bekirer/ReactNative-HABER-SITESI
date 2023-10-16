import React from "react";

import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

function TwoRowNavbar() {
    return (<>
            <Navbar style={{background:'#005D99'}}>
                <Container>
                    <Navbar.Brand href="#home" style={{color:'white'}}><b><span style={{color:'aqua'}}>TRT</span>WORLD</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title={<span className="text-white">News</span>} id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">EYE ON DISCRIMINATION</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                FORUM
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">JUST 2 DEGREES</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                RESEARCH CENTRE
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey={2} href="#memes">
                                live
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/bekir.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">TÜRKİYE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">VIDEO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">OPINION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">CLIMATE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">BUSINESS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">SCIENCE & TECH</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">ARTS & CULTURE</a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">INVESTIGATIVE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">MORE</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default TwoRowNavbar;