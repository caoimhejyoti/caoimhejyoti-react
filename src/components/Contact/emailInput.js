import React, { useState } from "react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../../style/theme";

export default function EmailInput({ setEmailIsValid }) {
  function validateEmail(email) {
    const re = /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const [email, setEmail] = useState("");
  const handleFormChange = (event) => {
    setEmail(event.target.value);
    setEmailIsValid(validateEmail(email));
  };

  if (!validateEmail(email)) {
    return (
      <ThemeProvider theme={inputTheme}>
        <TextField
          error
          fullWidth
          margin="normal"
          id="outlined-basic email-input"
          className="input-field"
          label="Invalid Email"
          variant="outlined"
          size="small"
          value={email}
          onChange={handleFormChange}
        />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={inputTheme}>
      <TextField
        required
        fullWidth
        margin="normal"
        id="outlined-basic email-input"
        className="input-field"
        label="Email"
        variant="outlined"
        size="small"
        value={email}
        onChange={handleFormChange}
      />
    </ThemeProvider>
  );
}
