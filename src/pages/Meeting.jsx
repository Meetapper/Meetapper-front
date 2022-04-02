import React from "react";
import MeetingSummary from "../components/MeetingSummary"
import Chat from "../components/Chat";
import { Box} from "@mui/material";

const Meeting = () => {
    return (
        <Box display="flex" sx={{ flexDirection: "column" }}>
            <Box>
                <MeetingSummary/>
            </Box>
            <Box flexGrow={2}>
                <Chat/>
            </Box>
        </Box>
    );
}

export default Meeting;