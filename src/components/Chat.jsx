import { Paper, TextField, Box, Button } from "@mui/material";
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import ChatMessage from "./ChatMessage";
import {db} from "../Firebase";
import {useLocation} from "react-router-dom";
import {collection, doc, getDocs, onSnapshot} from "firebase/firestore"

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
    const eventId = useLocation().state.id;
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        setChatMessages([ ...chatMessages, {
            message: message,
            owner: true
        } ]);
        setMessage('');
    }
    const [chatMessages, setChatMessages] = useState(mockMessages);

    getDocs(collection(db, "meetings")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            //if(doc.data().id === eventId) {
            setChatMessages(doc.data().message);
            console.log("MESSAGES SET")
            //}
        });
    });

    // const unsubscribe = onSnapshot(doc(db, "meetings", eventId), (querySnapshot) => {
    //     let messages = [];
    //     querySnapshot.forEach((doc) => {
    //         if(doc.data().id === eventId)
    //             messages = doc.data().message;
    //     });
    //     setChatMessages(messages);
    //     console.log(messages);
    // });

    return (
        <Paper sx={{ height: "580px", marginTop: "15px" }} elevation={3}>
            <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
                <Box flexGrow={2} sx={{padding: "10px"}}>
                    {chatMessages.map((message, index) => <ChatMessage key={String.valueOf(index * 5)} message={message} />)}
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
