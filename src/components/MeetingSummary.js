import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Grid, Typography} from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import HelpIcon from '@mui/icons-material/Help';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {AvatarGroup} from "@mui/lab";
import FriendAvatar from "./FriendAvatar";
import {useLocation} from "react-router-dom";
import {db} from "../Firebase";
import {doc, getDoc, updateDoc} from "firebase/firestore";
import {mainUserId} from "../MainUserId";

const MeetingSummary = () => {
    const [declare, setDeclare] = useState("")
    const { title, place: location, description, date, participants } = useLocation().state.event;
    const participants2 = participants.filter((p) => p !== mainUserId)
    const eventId = useLocation().state.id;

    const [attendsState, setAttendsState] = useState([...Array(participants2.length)].fill("maybe"));

    async function setAttend(val) {
        setDeclare(val);
        const userRef = doc(db, "users", mainUserId);
        const user = await getDoc(userRef);

        let newValue = val;

        const newMeetingsStatus = user.data().meetings;
        newMeetingsStatus[eventId] = newValue;
        await updateDoc(userRef, {
            meetings: newMeetingsStatus
        })
    }

    async function getUser(userId) {
        const userRef = doc(db, "users", userId);
        const user = await getDoc(userRef);
        return user.data();
    }


    getUser(mainUserId).then(value => {
        setDeclare(value.meetings[eventId]);
    })


    useEffect(() => {
        participants2.forEach((p, index) => {
            getUser(p).then((tmp) => {
                const clone = [...attendsState]
                clone[index] = tmp.meetings[eventId];
                setAttendsState([...clone])
            })
        })
    }, [])

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
                    <Button sx={declare === "" || declare === "no" ? {color: "#d23a07"} : ""} onClick={() => setAttend("no")}>
                        {declare === "no" ? <RemoveCircleIcon/> : <RemoveIcon/> }
                    </Button>
                    <Button sx={declare === "" || declare === "maybe" ? {color: "#ffcc00"} : ""} onClick={() => setAttend("maybe")}>
                        {declare === "maybe" ? <HelpIcon/> : <QuestionMarkIcon/> }
                    </Button>
                    <Button sx={declare === "" || declare === "yes" ? {color: "#2e7d32"} : ""} onClick={() => setAttend("yes")}>
                        {declare === "yes" ? <CheckCircleIcon/> : <CheckIcon/> }
                    </Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={8}>
                <AvatarGroup max={6}>
                    {participants2.map((p, index) => {
                        return <FriendAvatar name={p} doesAttend={attendsState[index]}/>
                    })}
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
