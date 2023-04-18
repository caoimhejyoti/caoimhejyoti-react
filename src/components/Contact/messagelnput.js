import React, {useState} from "react";
import { TextField } from "@mui/material";
import "./../../style/Contact.css";

export default function MessageInput(){
  const [message, setMessage] = useState("");
  const handleFormChange = (event) => {
    setMessage(event.target.value);
  };

  if (message.length> 400) {
    return (
      <TextField
            error
            fullWidth
            id="outlined-multiline-static" 
            label='Exceed Max Length: 400'
            multiline
            rows={4}
            value={message}
            onChange={handleFormChange}
            />
    )
  }else if (message.length === 0) {
    return (
      <TextField
            error
            fullWidth
            id="outlined-multiline-static" 
            label='Please ender a message'
            multiline
            rows={4}
            value={message}
            onChange={handleFormChange}
            />
    )
  }

  return (
    <TextField
    fullWidth
    id="outlined-multiline-static" 
    label='Message'
    multiline
    rows={4}
    value={message}
    onChange={handleFormChange}
    />
)
}