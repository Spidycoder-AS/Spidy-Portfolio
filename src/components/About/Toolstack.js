import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNetlify,
  SiOpenai,
  SiGithub,
  SiLinux,
  SiTelegram,
} from "react-icons/si";
import { FaWindows, FaDiscord } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTelegram />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDiscord />
      </Col>
    </Row>
  );
}

export default Toolstack;
