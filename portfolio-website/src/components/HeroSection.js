import React from "react";
import { Container, Button } from "react-bootstrap";
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <Container className="text-center">
        <h1 className="hero-title">Hello, I'm Rakendhu 👋</h1>
        <p className="hero-subtitle">
          Full-Stack Software Engineer | Simulation & Reliability Enthusiast
        </p>
        <Button variant="outline-dark" href="#projects" className="hero-button">
          View My Work
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;