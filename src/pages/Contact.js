import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import NameInput from "./../components/Contact/NameInput";
import EmailInput from "./../components/Contact/emailInput";
import MessageInput from "./../components/Contact/messagelnput";
import SubmitButton from "./../components/Contact/submitButton";
import { Button } from "@mui/material";

export default function Contact() {
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const formIsValid = nameIsValid && emailIsValid && messageIsValid === true;

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
              <NameInput setNameIsValid={setNameIsValid} />
            </Col>
            <Col className="form-input">
              <EmailInput setEmailIsValid={setEmailIsValid} />
            </Col>
            <Col className="form-input">
              <MessageInput setMessageIsValid={setMessageIsValid} />
            </Col>
            <Col className="form-input">
              {formIsValid ? (
                <SubmitButton />
              ) : (
                <Button variant="contained" className="primary" disabled>
                  Submit
                </Button>
              )}
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
