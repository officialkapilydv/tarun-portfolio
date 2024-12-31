import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
 // SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
// Importing Figma icon (custom or use placeholder)
import { FaFigma } from "react-icons/fa";
// Importing Blender logo (using a placeholder or custom image)
import { FaBlender } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C Language Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      {/* JavaScript Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      {/* React Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* PHP Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>

      {/* Python Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* Git Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      {/* Figma Icon (Placeholder, replace with custom icon if needed) */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>

      {/* Blender Icon (Placeholder, replace with custom icon if needed) */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBlender />
      </Col>
    </Row>
  );
}

export default Techstack;