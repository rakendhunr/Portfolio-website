import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Projects() {
  const projects = [
    { name: "Epidemic Simulation", description: "Modeling disease spread using Markov Chains." },
    { name: "Reliability Dashboard", description: "Visualizing system reliability with block diagrams." },
  ];

  return (
    <Container id="projects" className="my-5">
      <h2 className="mb-4">Projects</h2>
      <Row>
        {projects.map((proj, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{proj.name}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;