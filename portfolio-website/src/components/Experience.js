import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import '../App.css';

function Experience() {
  const experiences = [
  { year: "2021", title: "Software Engineer", description: "Worked on .NET Core and Angular projects." },
  { year: "2023", title: "Master’s at RPTU", description: "Specializing in Software Engineering & Intelligent Systems." },
  { year: "2025", title: "Working Student", description: "Applied skills in simulation and risk management." },
];


  return (
    <Container id="experience" className="my-5">
      <div className="app-headings">Experience</div>
      <div className="roadmap">
      {experiences.map((exp, index) => (
        <div className="roadmap-item" key={index}>
          <div className="roadmap-dot"></div>
          <div className="roadmap-content">
            <h4>{exp.year}</h4>
            <h5>{exp.title}</h5>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>

    </Container>
  );
}

export default Experience;