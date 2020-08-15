import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="sm"
          style={{ backgroundColor: "#74B8B9" }}
        >
          <Navbar.Brand href="/" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Daiana Staudt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: "rgba(255, 255, 255, 0.8)" }}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#contato" className="color-white">
                Contato
              </Nav.Link>
              <Nav.Link href="#sobre" className="color-white" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Sobre
              </Nav.Link>
              <Nav.Link href="#blog" className="color-white" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                  Blog
              </Nav.Link>
              <Nav.Link href="#eventos" className="color-white" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Eventos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
