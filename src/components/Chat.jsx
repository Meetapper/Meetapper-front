import { Paper, TextField, Box, Button } from "@mui/material";
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from "./ChatMessage";

const mockMessages = [
    {
        message: "metr 90 prawie, siemanko",
        owner: false
    },
    {
        message: "xddddd",
        owner: true
    },
];

const Chat = () => {
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        setChatMessages([ ...chatMessages, {
            message: message,
            owner: true
        } ]);
        setMessage('');
    }
    const [chatMessages, setChatMessages] = useState(mockMessages);

    return (
        <Paper sx={{ height: "580px", marginTop: "15px" }} elevation={3}>
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Box flexGrow={2} sx={{padding: "10px"}}>
                    {chatMessages.map(message => <ChatMessage message={message} />)}
                </Box>
                <Box display="flex" justifyContent="center" alignContent="center">
                    <Box flexGrow={2}>
                        <TextField
                            variant="outlined"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            fullWidth
                            InputProps={{
                                endAdornment: <Button
                                onClick={() => sendMessage()}
                            >
                                <SendIcon />
                            </Button>
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}

export default Chat;
