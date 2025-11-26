import React from "react";
import { Container, Row, Col, Card ,ProgressBar} from "react-bootstrap";
import './Skills.css';
import { FaReact, FaAngular, FaMicrosoft, FaCloud, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaDatabase, FaCode } from "react-icons/fa";


function Skills() {
  const skills = [
    { name: "React", level: 85, icon: <FaReact color="#61DBFB" size={24} /> },
    { name: "Angular", level: 85, icon: <FaAngular color="#DD0031" size={24} /> },
    { name: ".Net Core", level: 85, icon: <FaMicrosoft color="#512BD4" size={24} /> },
    { name: "Azure", level: 65, icon: <FaCloud color="#0078D4" size={24} /> },
    { name: "C#", level: 85, icon: <FaCode color="#239120" size={24} /> },
    { name: "HTML/CSS", level: 85, icon: <FaHtml5 color="#E34F26" size={24} /> },
    { name: "JavaScript", level: 75, icon: <FaJs color="#F7DF1E" size={24} /> },
    { name: "TypeScript", level: 65, icon: <FaCode color="#3178C6" size={24} /> },
    { name: "SQL", level: 75, icon: <FaDatabase color="#4479A1" size={24} /> },
    { name: "Git", level: 65, icon: <FaGitAlt color="#F05032" size={24} /> },
    { name: "Python", level: 40, icon: <FaPython color="#3776AB" size={24} /> },
  ];

  // Split skills into two halves
  const mid = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, mid);
  const rightSkills = skills.slice(mid);

  return (
    <Container id="skills" className="my-5">
      <h2 className="mb-4">Skills</h2>
      <Row>
          <Col md={6} >
          <Card className="mb-2 text-center p-3">
        {leftSkills.map((skill) => (
          <>
            <div className="d-flex mt-1 pt-1 pr-1 mb-1 align-items-center">
              {skill.icon}
              <h4 className="text-start skill-name">{skill.name}</h4>
            </div>

            <ProgressBar now={skill.level} label={`${skill.level}%`} striped variant="#087ea4"
              className="mt-1" />
          </>
        ))}
         </Card>
         </Col>
         <Col md={6} >
         <Card className="mb-2 text-center p-3">
        {rightSkills.map((skill) => (
            <>
              <div className="d-flex mt-1 pt-1 pr-1 mb-1 align-items-center">
              {skill.icon}
              <h4 className="text-start skill-name">{skill.name}</h4>
            </div>
              <ProgressBar now={skill.level} label={`${skill.level}%`} striped variant="info" 
                  className="mt-1"/>
            </>
        ))}
          </Card>
         </Col>
      </Row>
    </Container>
  );
}

export default Skills;