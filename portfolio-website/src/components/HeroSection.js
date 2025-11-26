import React from "react";
import { Container, Button } from "react-bootstrap";
import './HeroSection.css';
import { Col,Row } from "react-bootstrap";
import profilePic from '../assets/images/profile-picture.jpg';
import '../App.css';
function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <Container className="text-center">
         <Row className="align-items-center">

        <Col md={6} className="text-center text-md-start">

        <div className="hero-title">Hello, I'm Rakendhu</div>
        <p className="hero-subtitle">
          Full-Stack Software Engineer | Masters Student 
        </p>
        <Button variant="outline-info" href="#projects" className="hero-button">
          View My Work
        </Button>
        </Col>
         <Col md={6} className="text-center">
            <img 
              src={profilePic} 
              alt="Rakendhu Profile" 
              className="hero-image"
            />
          </Col>
          </Row>
      </Container>
    </div>
  );
}

export default HeroSection;