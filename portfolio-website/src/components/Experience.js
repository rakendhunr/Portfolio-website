import React from "react";
import { Container } from "react-bootstrap";
import '../App.css';
import './Experience.css';

function Experience() {
  const experiences = [
  { year: "2022-2024", title: "Software Engineer", description: "Worked on .NET Core, Angular and React projects at the company Valorem Reply." },
  { year: "2021-2022", title: "Associate Consultant", description: "Started career at the company Valorem Reply, Kochi" },
 ];

  const education = [
  { 
    year: "2025-Present", 
    title: "Master’s in Computer Science", 
    description: "Currently pursuing Master’s degree at Rhineland-Palatinate University of Technology Kaiserslautern-Landau, specializing in Software Engineering and Intelligent Systems." 
  },
  { 
    year: "2017-2021", 
    title: "Bachelor of Technology in Computer Science and Engineering", 
    description: "Graduated from APJ Abdul Kalam Technological University, Palakkad, India with a final grade of 86.35% (EQF Level 6)." 
  },
  { 
    year: "2014-2016", 
    title: "Higher Secondary", 
    description: "Studied Biology Science at GMGHSS Thrissur, India and achieved a final grade of 95%." 
  },
  { 
    year: "2013-2014", 
    title: "Secondary School Leaving Certificate", 
    description: "Completed SSLC at Nirmala High School Kundukad, Thrissur, India with a final grade of 95%." 
  }
];
  return (
    <Container id="experience" className="my-5">
      <div className="app-headings ">Experience</div>
      <div className="roadmap">
      {experiences.map((exp, index) => (
        <div className="roadmap-item" key={index}>
          <div className="roadmap-dot"></div>
          <div className="roadmap-content projected-section">
            <div className="fs-4  fw-bold app-common-color ">{exp.year}</div>
            <div>{exp.title}</div>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="app-headings">Education</div>
      <div className="roadmap">
      {education.map((edu, index) => (
        <div className="roadmap-item " key={index}>
          <div className="roadmap-dot"></div>
          <div className="roadmap-content projected-section">
            <h4>{edu.year}</h4>
            <h5>{edu.title}</h5>
            <p>{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
    </Container>
  );
}

export default Experience;