import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
} from "react-icons/si";
import {
  DiMysql,
  //DiJira,
} from "react-icons/di";
import { FaFigma, FaBlender } from "react-icons/fa";  // Importing Figma and Blender icons

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Visual Studio Code Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* MySQL Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      {/* Figma Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>

      {/* Blender Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBlender />
      </Col>
    </Row>
  );
}

export default Toolstack;