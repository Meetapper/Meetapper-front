import { Paper, TextField, Box, Button } from "@mui/material";
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        setMessage('');
    }

    return (
        <Paper sx={{ height: "440px" }}>
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Box flexGrow={2}>
                    CHAT
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
