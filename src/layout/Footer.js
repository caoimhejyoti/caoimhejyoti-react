import React from "react";
import { Row, Col } from "react-bootstrap";

import github from "./../assets/img/logos/GitHub-Mark-Light-120px-plus.png";
import linkedin from "./../assets/img/logos/In-White-128-┬«@2x.png";
import instagram from "./../assets/img/logos/Instagram_Glyph_White.png";

export default function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col>
          <a
            href="https://github.com/caoimhejyoti"
            target="blank"
            className="footer-img"
          >
            <img src={github} alt="Github logo" />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.linkedin.com/in/caoimhe-young/"
            target="blank"
            className="footer-img"
          >
            <img src={linkedin} alt="Linkedin logo" />
          </a>
        </Col>
        <Col>
          <a
            href="https://www.instagram.com/iamlcam/"
            target="blank"
            className="footer-img"
          >
            <img src={instagram} alt="Instagram logo" />
          </a>
        </Col>
      </Row>
      <Row className="justify-content-flex-start">
        <Col>© CaoimheJyoti</Col>
      </Row>
    </div>
  );
}
