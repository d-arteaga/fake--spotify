import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Header from "../Header";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import pfp from "../../assets/pfp.png";

export default function Profile({ userName, setUserName, likedSongs = [] }) {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

  const user = {
    profilePicture: pfp,
    followers: 1200,
    following: 150,
  };

  return (
    <>
      <Header userName={userName} /> {/* Pass the name to the Header */}
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
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  style={{
                    backgroundColor: "#212529",
                    color: "white",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                />
                <Button
                  variant="outline-light"
                  size="sm"
                  className="ms-2"
                  onClick={() => setIsEditing(false)}
                >
                  Save
                </Button>
              </div>
            ) : (
              <div>
                <h1>{userName}</h1>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Name
                </Button>
              </div>
            )}
            <p>
              <strong>{user.followers.toLocaleString()}</strong> Followers •{" "}
              <strong>{user.following}</strong> Following
            </p>
          </Col>
        </Row>
        <hr style={{ backgroundColor: "gray" }} />
        <h2>Your Playlists</h2>
        <ListGroup as="ol" data-bs-theme="dark">
          <ListGroup.Item
            as={Link} // Make the item clickable
            to="/LikedSongs" // Navigate to the Liked.jsx page
            className="d-flex justify-content-between align-items-start"
            style={{
              backgroundColor: "#212529", // Match the background color from Search.jsx
              color: "white",
              textDecoration: "none",
              border: "1px solid gray", // Optional: Add a border for consistency
              borderRadius: "5px", // Optional: Add rounded corners
              padding: "10px", // Add padding for better spacing
            }}
          >
            <div
              className="ms-2 me-auto"
              style={{ backgroundColor: "transparent" }}
            >
              <b style={{ backgroundColor: "transparent" }}>Liked Songs</b>
            </div>
            <Badge bg="dark" pill>
              {likedSongs.length} Songs
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}
