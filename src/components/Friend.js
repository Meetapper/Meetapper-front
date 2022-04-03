import React, {useEffect, useState} from "react"
import {doc, getDoc} from "firebase/firestore";
import {db} from "../Firebase";
import {Card, Grid, Button, Avatar} from "@mui/material";
import {stringToColour} from "./FriendAvatar";
import Typography from "@mui/material/Typography";

async function getUser(userId) {
    const docRef = doc(db, "users", userId);
    return await getDoc(docRef);
}


const Friend = ({
                    friend,
                    action,
                    icon
                }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            setUser(await getUser(friend));
        })()
    }, []);

    const retrievedUser = user?.data();

    return (
        <Card sx={{background: "white", p: 2, marginBottom: "7px"}}>
            <Grid container alignItems="center"
                  justifyContent="space-between">
                <Grid item>
                    <Avatar sx={{bgcolor: stringToColour("h" + retrievedUser?.name)}} alt={retrievedUser?.name.toUpperCase() + "h"}
                            src="/static/images/avatar/2.jpg"/>
                </Grid>
                <Grid item>
                    <Typography sx={{marginLeft: "-75px"}}>
                        {retrievedUser?.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => action(friend)}
                    >
                        {icon}
                    </Button>
                </Grid>
            </Grid>
        </Card>);
}

export default Friend;
