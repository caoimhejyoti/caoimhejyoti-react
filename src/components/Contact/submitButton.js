import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import inputTheme from "./../../style/theme";
import {
  Button,
  Dialog,
  // DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function BasicButtons() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={inputTheme}>
      <Button
        variant="contained"
        id="submit-button"
        className="primary"
        onClick={handleClickOpen}
      >
        Submit
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialoge-title">
          Thanks for getting in touch!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            There is only one me so please give me a week to reply before
            sending another message.
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
    </ThemeProvider>
  );
}
