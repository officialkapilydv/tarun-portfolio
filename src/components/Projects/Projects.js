import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import text from "../../Assets/Projects/text.png";
//import EPMS from "../../Assets/Projects/EPMS.png";
//import baoim from "../../Assets/Projects/baoim.png";
//import jugnu from "../../Assets/Projects/jugnu.png";
//import chatify from "../../Assets/Projects/chatify.png";
//import amazon from "../../Assets/Projects/amazon.jpeg";
//import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="TextTweak"
              description="TextTweak is a web application designed to manipulate text entered by users. Built with JavaScript and ReactJS, this app provides a variety of text manipulation features, making it a handy tool for users who need to tweak their text content."
              ghLink="false"
              demoLink="http://localhost:3000/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
