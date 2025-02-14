import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../index.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Rankings() {
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
      <Stack gap={4}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          <strong>Current Rankings</strong>
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <DropdownButton
            // as="button"
            style={{
              display: "flex",
              justfiyContent: "center",
            }}
            key="down-centered"
            id="dropdown-button-drop-down-centered"
            drop="down-centered"
            variant="secondary"
            title="Worldwide Rankings"
          >
            <Dropdown.Item eventKey="1">Top Artists</Dropdown.Item>
            <Dropdown.Item eventKey="2">Top Songs</Dropdown.Item>
            <Dropdown.Item eventKey="3">Top Albums</Dropdown.Item>
          </DropdownButton>
        </div>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Top Artists in the World
        </h2>
        <ListGroup as="ol" numbered data-bs-theme="dark">
          {songs.map((artist) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div
                className="ms-2 me-auto"
                style={{ backgroundColor: "#212529" }}
              >
                <div style={{ backgroundColor: "#212529" }}>
                  <b style={{ backgroundColor: "#212529" }}>
                    {artist.artist}
                    &nbsp;&nbsp;|&nbsp; Top Song:
                  </b>{" "}
                  "{artist.topSong}"
                </div>
                Monthly Listeners: {artist.listeners.toLocaleString()}
              </div>
              {/* <Badge bg="success" pill>
                ^
              </Badge> */}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <br />
      </Stack>
    </>
  );
}
