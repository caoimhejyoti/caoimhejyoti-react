import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { input, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in

    if (input === "firstName") {
      return setFirstName(value);
    } else if (input === "lastName") {
      return setLastName(value);
    } else if (input === "email") {
      return setEmail(value);
    } else {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(
      `Thank you ${firstName} ${lastName} for getting in touch. I will respond as soon as I have a fresh cup of coffee!`
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1 className="myh1">Get in touch!</h1>
      <p>I am always happy to chat, answer any questions, debate what the best doughnut filling is (jam, always jam). So go ahead and get in touch!</p>
      <div className="container d-flex justify-content-center">
        <div className="row g-3">
          <div className="row g-3 ">
            <input
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="row g-3 ">
            <input
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="row g-3 ">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Email Address"
              className="form-control"
            />
          </div>
          <div className="row g-3 ">
            <input
              // aria-rowspan={5}
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
              className="form-control"
            />
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
