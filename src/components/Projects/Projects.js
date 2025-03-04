import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import CarMarket from "../../Assets/Projects/CarMarket.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarMarket}
              isBlog={false}
              title="Second-Hand Car Market 🚗"
              description={
                <>
                  Since February 2024, I’ve been developing a second-hand car
                  market website using HTML, CSS, and JavaScript. Currently,
                  admins can upload cars, but I’m working on adding storage so
                  listings stay visible and sync across users. Be a tester by
                  logging in using Id and Pass - admin/admin123.
                  <br />
                  <br />
                  🔐 <strong>Upcoming Upgrades:</strong>
                  <br />➤ <strong>Storage Integration:</strong> Keep listings
                  accessible to all users.
                  <br />➤ <strong>Enhanced Security:</strong> Strengthening
                  login protection.
                  <br />➤ <strong>Real-Time Sync:</strong> Ensure updated car
                  listings for everyone.
                  <br />
                  <br />
                  This project is still evolving, and I’m dedicated to making it
                  a secure, user-friendly marketplace. Stay tuned! 🚀
                </>
              }
              ghLink="https://github.com/Spidycoder-AS"
              demoLink="https://car-market-spidycoder.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
