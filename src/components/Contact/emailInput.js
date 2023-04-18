import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./../../style/Contact.css";

export default function EmailInput() {
  function validateEmail(email) {
    const re = /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const [email, setEmail] = useState("");
  const handleFormChange = (event) => {
    setEmail(event.target.value);
    validateEmail(email);
  };

  if (!validateEmail(email)) {
    return (
      <TextField
        error
        className="input-field"
        id="outlined-basic email-input"
        label="Invalid Email"
        variant="outlined"
        size="small"
        value={email}
        onChange={handleFormChange}
      />
    );
  }

  return (
    <TextField
      id="outlined-basic email-input"
      className="input-field"
      label="Email"
      variant="outlined"
      size="small"
      value={email}
      onChange={handleFormChange}
    />
  );
}
