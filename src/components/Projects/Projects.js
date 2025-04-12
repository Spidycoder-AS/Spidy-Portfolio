import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CarMarket from "../../Assets/Projects/CarMarket.png";
import FreeOnlineTools from "../../Assets/Projects/FreeOnlineTools.png";
import GoldenTimeCounter from "../../Assets/Projects/GoldenTimeCounter.png";

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
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={FreeOnlineTools}
              isBlog={false}
              title={
                <span style={{ fontWeight: "bold" }}>
                  100+ Free Online Tools 🔍
                </span>
              }
              description={
                <>
                  100+ Free Online Tools, your go-to platform for productivity,
                  development, security, and more! No downloads, no
                  sign-ups—just instant access to powerful tools.
                  <br /> 🚀 **What’s Inside?** <br />➤ **Developer Tools:** Code
                  formatters, minifiers, and more. <br />➤ **Math &
                  Calculators:** Solve equations, conversions, and calculations.{" "}
                  <br />➤ **Unit Converters:** Convert currency, measurements,
                  and time. <br />➤ **Security & Encryption:** Hash generators,
                  password tools, and more. <br />➤ **Social Media Tools:** Link
                  shorteners, post schedulers, and analytics. <br />
                  New tools are constantly being added to make your life easier.
                  Stay tuned for updates! 🚀
                </>
              }
              demoLink="https://100freeonlinetools.vercel.app/"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={GoldenTimeCounter}
              isBlog={false}
              title={
                <span style={{ fontWeight: "bold" }}>
                  Golden Time Counter 💑
                </span>
              }
              description={
                <>
                  Celebrate your love story with this romantic time counter made
                  for all lovebirds! 🕊️ Just enter your relationship’s start
                  date and time, and watch the magic unfold— see exactly how
                  long you’ve been together in years, months, days, hours,
                  minutes, and seconds. 💖
                  <br /> <br />
                  💘 <strong>For Every Couple:</strong> Whether you’re dating,
                  engaged, or married!
                  <br />
                  📆 <strong>Customizable:</strong> Set your unique starting
                  moment.
                  <br />
                  ❤️ <strong>Live Counter:</strong> Real-time tracking of your
                  love journey.
                  <br />
                  🌈 <strong>Romantic Design:</strong> Heart animation and
                  elegant styling.
                  <br />
                  📱 <strong>Fully Responsive:</strong> Works smoothly on all
                  devices.
                  <br />✨ Keep celebrating your moments together—forever.
                </>
              }
              ghLink="https://github.com/Spidycoder-AS/RelationshipCounterInfinity"
              demoLink="https://helloearlybird.netlify.app/"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={CarMarket}
              isBlog={false}
              title={
                <span style={{ fontWeight: "bold" }}>
                  Second-Hand Car Market 🚗
                </span>
              }
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
