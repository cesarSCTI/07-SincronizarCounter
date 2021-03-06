import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import logo from '../../../src/logo-guzmar-sport.png'
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';



const NavBar = () =>{
    return(
        <Navbar  expand="lg" style={{padding: '10px',backgroundColor:'#ececec', boxShadow:'0px 0px 10px #cecece'}}>
            <Navbar.Brand href="/">
                <img src={logo} alt="logo" hight="60px" width="60px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="justify-content-md-center margenleft"
                navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/category/primavera">Primavera</Nav.Link>
                    <Nav.Link href="/category/verano">Verano</Nav.Link>
                    <Nav.Link href="/category/otoño">Otoño</Nav.Link>
                    <Nav.Link href="/category/invierno">Invierno</Nav.Link>
                    <Nav.Link href="/cart" className='margenleft'>
                        <CartWidget />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;