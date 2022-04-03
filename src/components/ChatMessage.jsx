import React from "react"
import { Box, Typography } from "@mui/material";

const ChatMessage = ({
  message
}) => {
  const style = {
    backgroundColor: !!message.owner ? "#013243" : "#d3d3d3",
    color: !!message.owner && "white",
    borderRadius: "25px",
    maxWidth: "auto",
    paddingY: "7px",
    paddingX: "12px",
    marginTop: "2px"
  }

  return (
    <Box 
      direction="row"
      display="flex"
      justifyContent={`${message.owner ? "flex-end" : "flex-start" }`}
      alignItems="center"
      xs={12}
    >
      <Typography item flexGrow={0} flexShrink={1} sx={style}>
        {message.message}
      </Typography>
    </Box>
  );
}

export default ChatMessage;