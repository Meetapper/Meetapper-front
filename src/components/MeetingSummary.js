import React, {useState} from "react";
import { Button, ButtonGroup, Grid, Typography} from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import HelpIcon from '@mui/icons-material/Help';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {AvatarGroup} from "@mui/lab";
import FriendAvatar from "./FriendAvatar";
import {useLocation} from "react-router-dom";

// const title = "Biba u maćka";
// const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// const location = "location";
// const date = "01.04.2022";
// const numOfPeople = "2/10";

const MeetingSummary = () => {
    const [declare, setDeclare] = useState(0)
    const { title, place: location, description, date } = useLocation().state.event;
    const eventId = useLocation().state.id;

    function setAttend(val) {
        setDeclare(val);

        //TODO call to send your declaration
    }
console.log(eventId);
    return (
        <Grid container spacing={0.5}   alignItems="center" justify="center">
            <Grid container item xs={12}>
                <Grid item xs={8}>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                </Grid>

                <Grid container item xs={12} justifyContent="space-between">
                    <Typography variant="h6">
                        {date.toLocaleString()} | {location}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={4}   alignItems="center"
                  justify="center">
                <ButtonGroup variant="outlined" size="small">
                    <Button sx={declare === 0 || declare === 1 ? {color: "red"} : ""} onClick={() => setAttend(1)}>
                        {declare === 1 ? <RemoveCircleIcon/> : <RemoveIcon/> }
                    </Button>
                    <Button sx={declare === 0 || declare === 2 ? {color: "orange"} : ""} onClick={() => setAttend(2)}>
                        {declare === 2 ? <HelpIcon/> : <QuestionMarkIcon/> }
                    </Button>
                    <Button sx={declare === 0 || declare === 3 ? {color: "green"} : ""} onClick={() => setAttend(3)}>
                        {declare === 3 ? <CheckCircleIcon/> : <CheckIcon/> }
                    </Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={8}>
                <AvatarGroup max={6}>
                    <FriendAvatar name={"HS"} doesAttend={"yes"}/>
                    <FriendAvatar name={"HS"} doesAttend={"yes"}/>
                    <FriendAvatar name={"HS"} doesAttend={"yes"}/>
                    <FriendAvatar name={"HS"} doesAttend={"yes"}/>
                    <FriendAvatar name={"HS"} doesAttend={"maybe"}/>
                    <FriendAvatar name={"HS"} doesAttend={"maybe"}/>
                    <FriendAvatar name={"HS"} doesAttend={"maybe"}/>
                    <FriendAvatar name={"HS"} doesAttend={"no"}/>
                </AvatarGroup>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                {description}
            </Grid>
        </Grid>
    );
}

export default MeetingSummary;
