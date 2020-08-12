import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import '../styles/global.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="sm" style={{ backgroundColor: '#74B8B9' }}>
          <Navbar.Brand href="/" style={{ color: "rgba(255, 255, 255, 0.8)" }}>Daiana Staudt</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <b><Nav.Link href="#contato" style={{ color: "rgba(255, 255, 255, 0.8)" }}>Contato</Nav.Link></b>
              <b><Nav.Link href="#sobre" className="color-green">Sobre</Nav.Link></b>
              <b><Nav.Link href="#blog" style={{ color: "rgba(255, 255, 255, 0.8)" }}>Blog</Nav.Link></b>
              <b><Nav.Link href="#eventos" style={{ color: "rgba(255, 255, 255, 0.8)" }}>Eventos</Nav.Link></b>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}