import React, {useEffect, useState} from "react"
import {doc, getDoc} from "firebase/firestore";
import {db} from "../Firebase";
import { Card, Grid, Button } from "@mui/material";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {useLocation} from "react-router-dom"
import MailIcon from '@mui/icons-material/Mail';

async function getUser(userId) {
    const docRef = doc(db, "users", userId);
    return await getDoc(docRef);
}

const Friend = ({friend}) => {
    const [user, setUser] = useState();
    const { pathname } = useLocation();
console.log(pathname);
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
                    <Button
                        onClick={() => null}
                    >
                        { pathname.includes("create-event") 
                        ?  <MailIcon />
                        : <PersonRemoveIcon />}
                    </Button>
                </Grid>
            </Grid>
        </Card>);
}

export default Friend;