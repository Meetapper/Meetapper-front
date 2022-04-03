import React, {useEffect, useState} from "react";
import FriendsList from "../components/FriendsList";
import MailIcon from '@mui/icons-material/Mail';
import { Grid, TextField, Button } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../Firebase";
import Friend from "../components/Friend";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

async function searchUser(userName) {
    console.log(userName);
    const q = query(collection(db, "users"), where("name", "==", userName));
    const retrievedUsers = [];
    await getDocs(q).then(usr => {
        console.log(usr);
        usr.forEach(result => {
            retrievedUsers.push(result.data());
        })
    })
    return retrievedUsers;
}


const Friends = () => {
    const [search, setSearch] = useState('');
    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        (async () => {
            setSearchRes(await searchUser(search));
        })()
    }, [search]);

    return (
        <Grid container direction="column">
            <Grid item>
                <TextField 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="search for users"
                    fullWidth
                    InputProps={{
                        endAdornment:
                        <Button
                            onClick={() => setSearch('')}
                        >
                            <CancelIcon />
                        </Button>
                    }}
                />
            </Grid>
            <Grid item sx={{ height: "20px" }}></Grid>
            <Grid item>
                {!search.length 
                ? 
                    <FriendsList userActionButton={
                        <Button
                            onClick={() => null} // send event invite here
                        >
                            <PersonRemoveIcon />
                        </Button>
                    }/>
                :
                    searchRes?.map(friend => <Friend key={friend} friend={friend} actionButton={
                        <Button
                            onClick={() => null} // send event invite here
                        >
                            <MailIcon />
                        </Button>
                    }/>)// search response users here
                }
            </Grid>
        </Grid>
        );
}

export default Friends;