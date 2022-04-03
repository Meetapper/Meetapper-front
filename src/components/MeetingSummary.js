import React from "react";
import { Grid, Typography } from "@mui/material"
import PeopleIcon from '@mui/icons-material/People';

const title = "Biba u maćka";
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const location = "location";
    const date = "01.04.2022";
    const numOfPeople = "2/10";

const MeetingSummary = () => {
    
    return (
        <Grid container spacing={0.5}>
            <Grid item xs={12}>
                <Typography variant="h4">
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {description}
            </Grid>
            <Grid item xs={12}>
                {location}
            </Grid>
            <Grid container item xs={12} justifyContent="space-between">
                <Typography variant="h5">
                    {date}
                </Typography>
                <Typography variant="h5">
                    <Grid container justifyContent="center" spacing={1}>
                        <Grid item>
                            {numOfPeople}
                        </Grid>
                        <Grid item>
                            <PeopleIcon sx={{ fontSize: "30px" }}/>
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default MeetingSummary;