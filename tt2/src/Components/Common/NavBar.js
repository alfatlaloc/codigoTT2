import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><NavLink  className="navLink" to="/">2020-B030</NavLink></Navbar.Brand>
        <Nav className="me-auto">
          <NavLink  className="navLink" to="/">Home</NavLink>
          <NavLink  className="navLink" to="/">Datos Historicos</NavLink>
          <NavLink  className="navLink" to="/">Sugerencia</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
