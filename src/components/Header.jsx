import logo from "../assets/icon2.png";
import pfp from "../assets/pfp.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header({ userName }) {
  return (
    <>
      <Navbar data-bs-theme="dark" style={{ backgroundColor: "black" }}>
        <Container style={{ backgroundColor: "black" }}>
          <Navbar.Brand as={Link} to="/" style={{ backgroundColor: "black" }}>
            <img
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="Ongaku Music logo"
              style={{ marginRight: "15px", backgroundColor: "black" }}
            />
            ONGAKU
          </Navbar.Brand>
          <Nav className="me-auto" style={{ backgroundColor: "black" }}>
            <Nav.Link as={Link} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Search" className="mx-2">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/LikedSongs" className="mx-2">
              Liked Songs
            </Nav.Link>
          </Nav>

          <Navbar.Collapse
            className="justify-content-end"
            style={{ backgroundColor: "black" }}
          >
            <Navbar.Text style={{ backgroundColor: "black" }}>
              Signed in as:{" "}
              <Link
                to="/Profile"
                style={{
                  backgroundColor: "black",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {userName}
              </Link>
            </Navbar.Text>
            <Link to="/Profile" style={{ backgroundColor: "black" }}>
              <img
                src={pfp}
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="Profile picture"
                style={{ marginLeft: "15px", backgroundColor: "black" }}
              />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
