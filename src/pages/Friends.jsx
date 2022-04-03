import React, { useState } from "react";
import FriendsList from "../components/FriendsList";

import { Grid, TextField, Button } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';

const Friends = () => {
    const [search, setSearch] = useState('');

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
                    <FriendsList />
                :
                    [] // search response users here
                }
            </Grid>
        </Grid>
        );
}

export default Friends;