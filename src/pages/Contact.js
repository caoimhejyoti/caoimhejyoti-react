import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./../style/Contact.css";
import NameInput from "./../components/Contact/NameInput";
import EmailInput from "./../components/Contact/emailInput";
import MessageInput from "./../components/Contact/messagelnput";
import SubmitButton from "./../components/Contact/submitButton";

export default function Contact() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { input, value } = e.target;

  //   // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in

  //   if (input === "firstName") {
  //     return setFirstName(value);
  //   } else if (input === "lastName") {
  //     return setLastName(value);
  //   } else if (input === "email") {
  //     return setEmail(value);
  //   } else {
  //     return setMessage(value);
  //   }
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // Alert the user their first and last name, clear the inputs
  //   alert(
  //     `Thank you ${firstName} ${lastName} for getting in touch. I will respond as soon as I have a fresh cup of coffee!`
  //   );
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <div>
      <h1 className="myh1">Get in touch!</h1>
      <p>
        I am always happy to chat, answer any questions, debate the best
        doughnut filling is (jam, always jam). <br></br>So go ahead and get in
        touch!
      </p>
      <Container className="fluid">
        <Row className=" justify-content-center">
          <Form className="">
            <Col className="form-input">
              {/* <NameInput /> */}
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
          {/* <div className="">
              <input
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </div>
            <div className=" ">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="Email Address"
                className="form-control"
              />
            </div>
            <div className=" ">
              <input
                // aria-rowspan={5}
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Message"
                className="form-control"
              />
            </div> */}
          {/* <div className="form-button">
            <div className="col-md-12 d-flex justify-content-center">
              <button
                className="card-button"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          </div> */}
        </Row>
      </Container>
    </div>
  );
}
