import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  const skills = ["React", "Java", "Python", "Simulation Models", "Risk Analysis"];

  return (
    <Container id="skills" className="my-5">
      <h2 className="mb-4">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} key={index} className="mb-3">
            <Card className="text-center">
              <Card.Body>{skill}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;