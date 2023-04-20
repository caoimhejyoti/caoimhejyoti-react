import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../../style/theme";

export default function MessageInput({ setMessageIsValid }) {
  const [message, setMessage] = useState("");
  const handleFormChange = (event) => {
    setMessage(event.target.value);
    setMessageIsValid(true);
  };

  {
    if (message.length > 400) {
      return (
        <ThemeProvider theme={inputTheme}>
          <TextField
            error
            fullWidth
            margin="normal"
            id="outlined-multiline-static"
            label="Exceed Max Length: 400"
            multiline
            rows={4}
            value={message}
            onChange={handleFormChange}
          />
        </ThemeProvider>
      );
    } else if (message.length === 0) {
      return (
        <ThemeProvider theme={inputTheme}>
          <TextField
            required
            fullWidth
            margin="normal"
            id="outlined-multiline-static"
            label="Please ender a message"
            multiline
            rows={4}
            value={message}
            onChange={handleFormChange}
          />
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider theme={inputTheme}>
        <TextField
          required
          margin="normal"
          fullWidth
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          onChange={handleFormChange}
          value={message}
        />
      </ThemeProvider>
    );
  }
}
