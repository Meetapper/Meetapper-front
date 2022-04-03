import React, {useEffect, useState} from "react"
import {doc, getDoc} from "firebase/firestore";
import {db} from "../Firebase";
import { Card, Grid } from "@mui/material";

async function getUser(userId) {
    const docRef = doc(db, "users", userId);
    return await getDoc(docRef);
}

const Friend = ({
    friend,
    actionButton
}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            setUser(await getUser('hBTU6aa6BrKS33uuPypD'));
        })()
    }, []);

    const retrievedUser = user?.data();

    return (
        <Card sx={{ background: "white", p: 2 }}>
            <Grid container alignItems="center"
  justifyContent="space-between">
                <Grid item>
                    {retrievedUser?.name}
                </Grid>
                <Grid item>
                    {actionButton}
                </Grid>
            </Grid>
        </Card>);
}

export default Friend;