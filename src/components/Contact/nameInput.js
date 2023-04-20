import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../../style/theme";

export default function NameInput({ setNameIsValid }) {
  function validateName(name) {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(String(name));
  }

  const [name, setName] = useState("");
  const handleFormChange = (event) => {
    setName(event.target.value);
    setNameIsValid(validateName(name));
  };

  if (!validateName(name)) {
    return (
      <ThemeProvider theme={inputTheme}>
        <TextField
          error
          fullWidth
          margin="normal"
          id="outlined-basic name-input"
          className="input-field"
          label="Invalid Name"
          variant="outlined"
          size="small"
          value={name}
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
        id="outlined-basic name-input "
        className="input-field"
        label="Name"
        variant="outlined"
        size="small"
        value={name}
        onChange={handleFormChange}
      />
    </ThemeProvider>
  );
}
