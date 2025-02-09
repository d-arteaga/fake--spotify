import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeSection() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/artists")
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Container fluid data-bs-theme="light">
        <Row>
          <Col>
            <Stack gap={5}>
              {" "}
              <div>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  <i>Welcome to Ongaku!</i>
                </h1>
              </div>
              <Gallery />
            </Stack>
          </Col>
          <Col>
            <Stack gap={5}>
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                <i>Current Rankings</i>
              </h1>
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                Top Artists in the World
              </h2>
              <ListGroup as="ol" numbered data-bs-theme="dark">
                {songs.map((artist) => (
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {artist.artist} &nbsp;|&nbsp; Top Song: "
                        {artist.topSong}""
                      </div>
                      Monthly Listeners: {artist.listeners.toLocaleString()}
                    </div>
                    <Badge bg="primary" pill>
                      {artist.ranking}
                    </Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}
