import Header from "../Header";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Search() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/songs")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Header />

      <Container>
        <Container>
          {" "}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What do you want to listen to?"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Container>
        <br />

        <ListGroup data-bs-theme="dark">
          <ListGroup.Item>
            <h2>Top Result</h2>
            {/* {songs[0].name} */}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup as="ol" data-bs-theme="dark">
          {songs.map((song) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div
                className="ms-2 me-auto"
                style={{ backgroundColor: "#212529" }}
              >
                <div style={{ backgroundColor: "#212529" }}>
                  <b style={{ backgroundColor: "#212529" }}>{song.name}</b>{" "}
                </div>
                {song.artist}
              </div>
              <Badge bg="success" pill>
                {song.name}
              </Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      <br />
    </>
  );
}
