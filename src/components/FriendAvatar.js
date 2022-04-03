import React, {useEffect, useState} from 'react'
import {Avatar, Badge} from "@mui/material";
import {doestAttendToIcon} from "./MeetsPage/Event";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../Firebase";

async function getUser(userId) {
    const docRef = doc(db, "users", userId);
    return await getDoc(docRef);
}

export var stringToColour = function(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

const FriendAvatar = ({name, doesAttend}) => {

    const [user, setUser] = useState("undefined");

    useEffect(() => {
        (async () => {
            getUser(name).then((u) => {
                setUser(u.data().name);
            })
        })()
    }, [])

    return(
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                doestAttendToIcon(doesAttend)
            }
        >
            <Avatar sx={{ bgcolor: stringToColour("h" + user)}} alt={user.toUpperCase()} src="/static/images/avatar/2.jpg" />
        </Badge>
    )
}

export default FriendAvatar;
