import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import NameInput from "./../components/Contact/NameInput";
import EmailInput from "./../components/Contact/emailInput";
import MessageInput from "./../components/Contact/messagelnput";
import SubmitButton from "./../components/Contact/submitButton";

export default function Contact() {
  return (
    <div>
      <h1 className="myh1">Get in touch!</h1>
      <p>
        I am always happy to chat, answer any questions, debate the best
        doughnut filling (jam, always jam). <br></br>So go ahead and get in
        touch!
      </p>
      <Container className="fluid">
        <Row className=" justify-content-center">
          <Form className="">
            <Col className="form-input">
              <NameInput />
            </Col>
            <Col className="form-input">
              <EmailInput />
            </Col>
            <Col className="form-input">
              <MessageInput />
            </Col>
            <Col className="form-input">
              <SubmitButton />
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
