import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with technology at the age of 14 when I started
              coding, and my journey has been all about learning and growing! 🚀
              <br />
              <br />I have experience with
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, React.js, Tailwind CSS, and Next.js
                </b>
              </i>
              , and I’m passionate about building
              <i>
                <b className="purple">
                  {" "}
                  innovative web technologies and products.
                </b>
              </i>
              <br />
              <br />
              Beyond development, I have a strong interest in
              <b className="purple">
                {" "}
                Blockchain, Cybersecurity, Penetration Testing, Vulnerability
                Analysis,
              </b>
              and <b className="purple"> Digital Forensics.</b>
              I love exploring the intersection of security and technology to
              build safer, more robust systems.
              <br />
              <br />
              I’m always eager to
              <i>
                <b className="purple"> learn, improve, and push my limits</b>
              </i>
              in web development and cybersecurity. The journey never stops!
              🔥🔍
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Spidycoder-AS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/notsp1dy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.gg/pDZPKud"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/iftikhar.hssn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
