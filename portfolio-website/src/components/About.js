import React from "react";
import { Container } from "react-bootstrap";
import '../App.css';

function About() {
  return (
    <Container id="about" className="section">
      <h2>About Me</h2>
      <p>
        I'm a software engineer passionate about simulation, risk management, and
        building reliable systems. I thrive on connecting theory to practice and
        creating impactful solutions.
      </p>
    </Container>
  );
}

export default About;