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
import Rankings from "./Rankings";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeSection() {
  return (
    <>
      <Container
        fluid
        data-bs-theme="light"
        s
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
