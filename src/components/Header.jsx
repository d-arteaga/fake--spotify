import logo from "../assets/icon2.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <Navbar data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ marginRight: "15px" }}
            />
            ONGAKU
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="mx-2">
              Search
            </Nav.Link>
            <Nav.Link href="#pricing" className="mx-2">
              Liked Songs
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
