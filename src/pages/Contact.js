import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import NameInput from "./../components/Contact/NameInput";
import EmailInput from "./../components/Contact/emailInput";
import MessageInput from "./../components/Contact/messagelnput";
import SubmitButton from "./../components/Contact/submitButton";
import { Button } from "@mui/material";

import linkedinBlue from "./../assets/img/logos/In-Blue-128-┬«.png";

export default function Contact() {
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const formIsValid = nameIsValid && emailIsValid && messageIsValid === true;

  return (
    <div>
      <h1 className="myh1">Get in touch!</h1>
      <p>
        I am currently open to work and eager to talk about opportunities with
        you.
        <br></br>
        If you would like to get in touch with me, please contact me via
        LinkedIn.
      </p>
      <Container className="fluid">
        <Row className=" justify-content-center">
          <Col>
            <a
              href="https://www.linkedin.com/in/caoimhe-young-84b58b61/"
              target="blank"
              className="btn-img"
            >
              <img src={linkedinBlue} alt="Linkedin logo" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );

  // return (
  //   <div>
  //     <h1 className="myh1">Get in touch!</h1>
  //     <p>
  //       I am always happy to chat, answer any questions, debate the best
  //       doughnut filling (jam, always jam). <br></br>So go ahead and get in
  //       touch!
  //     </p>
  //     <Container className="fluid">
  //       <Row className=" justify-content-center">
  //         <Form className="">
  //           <Col className="form-input">
  //             <NameInput setNameIsValid={setNameIsValid} />
  //           </Col>
  //           <Col className="form-input">
  //             <EmailInput setEmailIsValid={setEmailIsValid} />
  //           </Col>
  //           <Col className="form-input">
  //             <MessageInput setMessageIsValid={setMessageIsValid} />
  //           </Col>
  //           <Col className="form-input">
  //             {formIsValid ? (
  //               <SubmitButton />
  //             ) : (
  //               <Button variant="contained" className="primary" disabled>
  //                 Submit
  //               </Button>
  //             )}
  //           </Col>
  //         </Form>
  //       </Row>
  //     </Container>
  //   </div>
  // );
}
