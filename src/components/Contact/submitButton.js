import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../../style/theme";
import { Alert } from "@mui/material";

export default function BasicButtons() {
  return (
    <ThemeProvider theme={inputTheme}>
      <Button
        variant="contained"
        id="submit-button"
        className="primary"
        onClick={ () =>{
          alert("Thanks for getting in touch!");
        }}
      >
        Submit
      </Button>
    </ThemeProvider>
  );
}
