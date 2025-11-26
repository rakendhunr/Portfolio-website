import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../App.css';
import './Project.css';
import { Carousel } from "react-bootstrap";
function Projects() {
  const projects = [
    { name: "Microsoft Cloud Accelerator Program", description: "I contributed to a program empowering startups to build and scale cloud-based solutions with Microsoft technologies by developing features across multiple portals using Angular, React, and .NET Core. My work included building backend APIs and database interactions with Entity Framework Core and MS SQL Server, while modernizing legacy SQL logic into maintainable C#. I integrated Azure services such as Functions, Service Bus, and Blob Storage to streamline automation, notifications, and data handling. To ensure long-term reliability, I upgraded projects to .NET 8, enforced compliance and security governance for third-party packages, and implemented unit and integration tests. Alongside development, I provided production support and collaborated with operations teams to quickly resolve partner-facing issues, ensuring performance, scalability, and trust." },
    { name: "Microsoft FastTrack Development & Operations Program", description: "I contributed to the Microsoft FastTrack Development & Operations Program, which helps enterprises migrate to Microsoft cloud solutions and streamline operational efficiency through internal portals and workflow applications. My work included enhancing the MigHub (Migration Support Portal) by fixing accessibility issues to improve usability and ensure compliance with accessibility standards. I also developed UI features for the Migration Operational Portal (MOP), specifically the Mail Migration page, using React to optimize workflow efficiency and user experience. These contributions combined frontend improvements with backend reliability, leveraging React and .NET Core to deliver scalable, user‑friendly solutions that support enterprise cloud adoption." },
  ,{name:"Certification Portal",description:"I worked on the Certification Portal, an internal application designed to streamline the management and tracking of employee certifications. My contributions included building features that allowed managers to assign certifications and employees to monitor their progress, significantly improving workflow efficiency. I implemented both frontend functionality and backend logic using React and C#, ensuring smooth interaction and reliable data handling. Additionally, I supported testing, debugging, and integration efforts to deliver a maintainable and high‑quality application that enhanced organizational productivity."}
  ];

  return (
    <Container id="projects" className="my-5">
      <div className="app-headings">Projects</div>
      <Row>
        <Carousel variant="light">
          {projects.map((proj, index) => (
            <Carousel.Item key={index}>
             
              <Card
                className="text-center p-3 mb-3 mt-3 card-custom-styles"
                bg="dark"
                text="light"
              >
                <Card.Body>
                   <Container className="carosel-contents">
                  <Card.Title>{proj.name}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>
                   </Container>
                </Card.Body>
              </Card>
             
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}

export default Projects;