import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Rankings from "./Rankings";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeSection() {
  const [topAlbums, setTopAlbums] = useState([]); // State to store album data
  const API_KEY = import.meta.env.VITE_LASTFM_API_KEY; // Access the Last.fm API key from .env

  // Fetch top albums of all time
  useEffect(() => {
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rap&api_key=${API_KEY}&format=json`
      )
      .then((response) => {
        const albums = response.data.albums.album.slice(0, 9); // Limit to 12 albums (4 rows, 3 per row)
        const albumsWithCovers = albums.map((album) => ({
          title: album.name,
          artist: album.artist.name,
          cover: album.image[3]["#text"], // Use the largest image available
        }));
        setTopAlbums(albumsWithCovers); // Update state with album data and covers
      })
      .catch((error) => {
        console.error("Error fetching top albums:", error);
      });
  }, []);

  // Helper function to group albums into rows of 3
  const groupAlbumsIntoRows = (albums, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < albums.length; i += itemsPerRow) {
      rows.push(albums.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const albumRows = groupAlbumsIntoRows(topAlbums, 3); // Group albums into rows of 3

  return (
    <>
      <Container
        fluid
        data-bs-theme="light"
        className="container-entry"
        style={{ backgroundColor: "black" }}
      >
        <Row style={{ backgroundColor: "#161616" }}>
          <Col>
            <Stack gap={4} style={{ backgroundColor: "#161616" }}>
              <div>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  <strong>Welcome to ONGAKU!</strong>
                </h1>
              </div>
              <Gallery />
              {/* Top Albums Section */}
              <div>
                <h2 style={{ color: "white", marginTop: "20px" }}>
                  Top Albums of All Time
                </h2>
                <br />
                <div>
                  {albumRows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      {row.map((album, albumIndex) => (
                        <div key={albumIndex} style={{ textAlign: "center" }}>
                          {album.cover ? (
                            <img
                              src={album.cover} // Album cover URL
                              alt={album.title}
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "10px",
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "10px",
                                backgroundColor: "gray",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                              }}
                            >
                              No Cover
                            </div>
                          )}
                          <p style={{ color: "white", marginTop: "5px" }}>
                            {album.title || "Unknown Title"}
                          </p>
                          <p style={{ color: "gray", fontSize: "12px" }}>
                            {album.artist || "Unknown Artist"}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Stack>
          </Col>
          <Col>
            <Rankings />
          </Col>
        </Row>
      </Container>
    </>
  );
}
