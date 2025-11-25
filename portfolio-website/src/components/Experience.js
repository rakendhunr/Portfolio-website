import React from "react";
import { Container, ListGroup } from "react-bootstrap";

function Experience() {
  return (
    <Container id="experience" className="my-5">
      <h2>Experience</h2>
      <ListGroup>
        <ListGroup.Item>
          Software Engineer at XYZ Corp — Focused on simulation and reliability analysis.
        </ListGroup.Item>
        <ListGroup.Item>
          Intern at ABC Automotive — Worked on embedded systems testing.
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Experience;