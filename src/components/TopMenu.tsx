'use client';
import React from 'react';
import { Navbar, Container, Nav, NavbarBrand, Image } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

const TopMenu = () =>(
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <NavbarBrand>
      <Nav.Link href="#"><Image src="./wod-ko-hana-logo.png" alt="Ko Hana Logo" width="200px" /></Nav.Link>
    </NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
      <Nav>
        <Nav.Link href="#"><u>OUR JOURNEY</u></Nav.Link>
        <Nav.Link href="#">SHOP</Nav.Link>
        <Nav.Link href="#">CORPORATE GIFTING</Nav.Link>
        <Nav.Link href="#">VISIT</Nav.Link>
        <Nav.Link href="#">&apos;OHANA RUM CLUB</Nav.Link>
        <Nav.Link href="#">WHERE TO BUY</Nav.Link>
        <Nav.Link href="#">RECIPIES</Nav.Link>
        <Nav.Link href="#"><Cart /> 0</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    );

    export default TopMenu;