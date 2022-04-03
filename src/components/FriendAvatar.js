import React from 'react'
import {Avatar, Badge} from "@mui/material";
import {doestAttendToIcon} from "./MeetsPage/Event";

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
    return(
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                doestAttendToIcon(doesAttend)
            }
        >
            <Avatar sx={{ bgcolor: stringToColour(name)}} alt={name.toUpperCase()} src="/static/images/avatar/2.jpg" />
        </Badge>
    )
}

export default FriendAvatar;
