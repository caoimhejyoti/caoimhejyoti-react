import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function NameInput() {
  function validateName(name) {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(String(name));
  }

  const [name, setName] = useState("");
  const handleFormChange = (event) => {
    setName(event.target.value);
    validateName(name);
  };

  if (!validateName(name)) {
    return (
      <TextField
        error
        className="input-field is-roboto"
        id="outlined-basic name-input"
        label="Invalid Name"
        variant="outlined"
        size="small"
        value={name}
        onChange={handleFormChange}
      />
    );
  }

  return (
    <TextField
      id="outlined-basic name-input is-roboto"
      className="input-field"
      label="Name"
      variant="outlined"
      size="small"
      value={name}
      onChange={handleFormChange}
    />
  );
}
