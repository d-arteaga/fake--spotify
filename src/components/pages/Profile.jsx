import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";
import pfp from "../../assets/pfp.png";

export default function Profile() {
  const user = {
    name: "Wumbo Jumbo",
    profilePicture: pfp,
    followers: 1200,
    following: 150,
    playlists: [
      { name: "Chill Vibes", songs: 25 },
      { name: "Workout Hits", songs: 40 },
      { name: "Throwback Classics", songs: 30 },
    ],
  };

  return (
    <>
      <Header />
      <Container className="mt-4" style={{ color: "white" }}>
        <Row className="align-items-center">
          <Col xs={3}>
            <img
              src={user.profilePicture}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />
          </Col>
          <Col>
            <h1>{user.name}</h1>
            <p>
              <strong>{user.followers.toLocaleString()}</strong> Followers •{" "}
              <strong>{user.following}</strong> Following
            </p>
            <Button variant="outline-light">Edit Profile</Button>
          </Col>
        </Row>
        <hr style={{ backgroundColor: "gray" }} />
        <h2>Your Playlists</h2>
        <ListGroup variant="flush" data-bs-theme="dark">
          {user.playlists.map((playlist, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#212529", color: "white" }}
            >
              <span>{playlist.name}</span>
              <Badge bg="success" pill>
                {playlist.songs} Songs
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}
