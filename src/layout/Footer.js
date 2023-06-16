import React from "react";
import { Row, Col } from "react-bootstrap";

import github from "./../assets/img/icons/inverted_Github.png";
import linkedin from "./../assets/img/icons/inverted_LinkedIn.png";
import instagram from "./../assets/img/logos/Instagram_Glyph_White.png";
import invertedEmail from "./../assets/img/icons/inverted_email.png";

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
            href="mailto:caoimhejyoti@gmail.com"
            target="blank"
            className="footer-img"
          >
            <img src={invertedEmail} alt="Instagram logo" />
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
      </Row>
      <Row className="justify-content-flex-start">
        <Col>© CaoimheJyoti</Col>
      </Row>
    </div>
  );
}
