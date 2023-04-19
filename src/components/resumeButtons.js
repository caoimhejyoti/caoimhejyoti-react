import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "../style/theme";

export default function BasicButtons() {
  return (
    <ThemeProvider theme={inputTheme}>
      <Button
        variant="contained"
        id="submit-button"
        sx={{ width: "25vw" }}
        className="primary m-2 resume-button"
        href="https://github.com/caoimhejyoti/caoimhejyoti-react/raw/main/src/assets/downloads/resume_test5.pdf"
        target="blank"
      >
        Download
      </Button>
    </ThemeProvider>
  );
}
