import Header from "../Header";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

export default function Liked({ likedSongs, userName }) {
  const [query, setQuery] = useState(""); // Search query

  // Filter liked songs based on the search query
  const filteredSongs = likedSongs.filter(
    (song) =>
      song.name.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header userName={userName} /> {/* Pass userName to Header */}
      <Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search your liked songs"
            className="me-3"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form>
        <br />
        <ListGroup data-bs-theme="dark">
          <ListGroup.Item>
            <h2 style={{ backgroundColor: "transparent", color: "white" }}>
              Liked Songs
            </h2>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup as="ol" data-bs-theme="dark">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <ListGroup.Item
                key={song.id}
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
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              style={{ backgroundColor: "#212529", color: "gray" }}
            >
              No results found
            </ListGroup.Item>
          )}
        </ListGroup>
      </Container>
      <br />
    </>
  );
}
