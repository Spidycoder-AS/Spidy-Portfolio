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
            <span className="blue-text">Iftikhar Hussain </span>
            from <span className="blue-text"> Sibsagar, Assam, India.</span>
            <br />
            <br />
            🚀{" "}
            <b className="purple">
              Tech Enthusiast | Cybersecurity Geek | Web Developer
            </b>{" "}
            <br />
            <br />
            <ImPointRight /> I thrive at the intersection of{" "}
            <b className="purple">
              cybersecurity, web development, and cutting-edge technology
            </b>
            . <br />
            Whether it's{" "}
            <b className="purple">
              securing systems, building web products, or exploring new tech
              trends
            </b>
            , I’m always up for the challenge! <br />
            <br />
            <ImPointRight /> Currently, I’m leveling up my skills with a{" "}
            <b className="purple">
              full-stack development course on Udemy
            </b>, <br />
            sharpening my expertise in{" "}
            <b className="purple">
              modern web frameworks and security analysis
            </b>
            . <br />
            <br />
            <ImPointRight /> When I’m not coding, I’m deep in the gaming world.
            Known as <b className="blue-text">Spidy 🎮</b>, I’m a{" "}
            <b className="purple">hardcore gamer</b>, <br />
            often found dominating in{" "}
            <b className="purple">GTA Online, Day-Z, PUBG, and CS:GO</b>. <br />
            <br />
            <ImPointRight /> Academically, I’m pursuing a{" "}
            <b className="purple">
              Bachelor’s in Commerce at Gargaon College
            </b>, <br />
            having completed my{" "}
            <b className="purple">
              higher secondary at Sibsagar Commerce College
            </b>{" "}
            and <b className="purple">schooling at Markaz Academy</b>. <br />
            <br />
            <ImPointRight />
            🔥 <b className="red-text">The mission?</b> Keep learning, keep
            growing, and keep pushing toward <b className="purple">success</b>
            —because the journey never stops! 🚀
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}
          <h2>"Quote"</h2>
          <p style={{ color: "rgb(155 126 172)" }}>
            “A river never seeks approval to carve its path—so why should you
            wait to shape your own?”{" "}
          </p>
          <footer className="blockquote-footer">Iftikhar Hussain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
