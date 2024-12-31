import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tarun Kumar </span>
            from <span className="purple"> Haryana, India.</span>
            <br />
            I am currently a student of B.Tech CSE at Shree Guru Gobind Singh Tricentenary University.
            <br />
             I am pursuing B.Tech with a specialization in Apple.
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Errors are not in the art but in the artificers!"{" "}
          </p>
          <footer className="blockquote-footer">Isaac Newton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;