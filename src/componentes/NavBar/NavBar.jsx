import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({children}) {
  return (
    <Navbar className="navbar navbar-expand-sm navbar-custom" expand="lg">
    <Container fluid>
      <Navbar.Brand>
        <NavLink className="link-item-custom" to="/" relative="path">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="Logo"
            className="logo"
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="links-custom">
          <NavLink className="link-item-custom" to="/" relative="path">
            Inicio
          </NavLink>
          <NavLink className="link-item-custom" to="/Catalogo">
            Catálogo
          </NavLink>
          <NavLink
            className="link-item-custom"
            to="/Catalogo/women's clothing"
          >
            Prendas Femenina
          </NavLink>
          <NavLink
            className="link-item-custom"
            to="/Catalogo/men's clothing"
          >
            Prendas Masculina
          </NavLink>
          <NavLink className="link-item-custom" to="/Catalogo/electronics">
            Electrónica
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      {children}
    </Container>
  </Navbar>
  )
}
