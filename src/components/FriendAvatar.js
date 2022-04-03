import React from 'react'
import {Avatar, Badge} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import HelpIcon from "@mui/icons-material/Help";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import {doestAttendToIcon} from "./MeetsPage/Event";

const FriendAvatar = ({name, doesAttend}) => {
    return(
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                doestAttendToIcon(doesAttend)
            }
        >
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </Badge>
    )
}

export default FriendAvatar;
