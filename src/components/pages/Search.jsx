import Header from "../Header";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Search({ songs, likedSongs, setLikedSongs, userName }) {
  const [query, setQuery] = useState(""); // Search query

  // Function to add or remove a song from the liked songs playlist
  const toggleLikedSong = (song) => {
    if (likedSongs.some((likedSong) => likedSong.id === song.id)) {
      // Remove the song if it's already in the liked songs
      const updatedLikedSongs = likedSongs.filter(
        (likedSong) => likedSong.id !== song.id
      );
      setLikedSongs(updatedLikedSongs);
    } else {
      // Add the song if it's not in the liked songs
      const updatedLikedSongs = [...likedSongs, song];
      setLikedSongs(updatedLikedSongs);
    }
  };

  // Filter songs based on the search query
  const filteredSongs = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header userName={userName} /> {/* Pass userName to Header */}
      <Container>
        <Container>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What do you want to listen to?"
              className="me-3"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form>
        </Container>
        <br />
        <ListGroup data-bs-theme="dark">
          <ListGroup.Item>
            <h2 style={{ backgroundColor: "transparent", color: "white" }}>
              Top Results
            </h2>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup as="ol" data-bs-theme="dark">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => {
              const isLiked = likedSongs.some(
                (likedSong) => likedSong.id === song.id
              );

              return (
                <ListGroup.Item
                  key={song.id} // Use the unique song ID as the key
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
                  <div
                    className="d-flex align-items-center"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Button
                      variant="outline-light"
                      size="sm"
                      className="ms-3"
                      style={{
                        backgroundColor: isLiked ? "#FF7F7F" : "#72a4d4",
                        color: "black",
                        border: "none",
                      }}
                      onClick={() => toggleLikedSong(song)}
                    >
                      {isLiked ? "−" : "+"}
                    </Button>
                  </div>
                </ListGroup.Item>
              );
            })
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
