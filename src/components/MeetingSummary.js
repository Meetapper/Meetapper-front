import React from "react";
import {Grid} from "@mui/material"

const MeetingSummary = () => {
    const title = "tytuł";
    const description = "description";
    const location = "location";
    const date = "date";
    const numOfPeople = "2/10";
    return (
        <Grid container spacing={0.5}>
            <Grid item xs={12}>
                {title}
            </Grid>
            <Grid item xs={12}>
                {description}
            </Grid>
            <Grid item xs={12}>
                {location}
            </Grid>
            <Grid item xs={12}>
                {date}
            </Grid>
            <Grid item xs={12}>
                {numOfPeople}
            </Grid>
        </Grid>
    );
}

export default MeetingSummary;