import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> Raza Hussain Akbari </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br /> I am a highly skilled Software Engineer with a passion for
            creating innovative solutions. I hold a Master's degree in Data
            Science, which has equipped me with a deep understanding of various
            technologies and methodologies.
            <br />
            Additionally, I am currently employed as a Software Engineer at
            <a
              className="purple"
              style={{ marginLeft: "10px" }}
              target="_blank"
              href="https://www.ivolve.io"
            >
              <span>iVolve Technologies.</span>
            </a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference in our daily life!"
          </p>
          <footer className="blockquote-footer">rhakbari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
