import React from "react";
import MeetingSummary from "../components/MeetingSummary"
import Chat from "../components/Chat";
import {Grid} from "@mui/material";

const Meeting = () => {
    return (
        <Grid container>
            <Grid item>
                <MeetingSummary/>
            </Grid>
            <Grid item>
                <Chat/>
            </Grid>
        </Grid>
    );
}

export default Meeting;