import * as React from 'react';
import {Card, CardContent, CardHeader, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from "react-router-dom";

export function doestAttendToIcon(doesAttent) {
    switch (doesAttent) {
        case "yes": return <CheckCircleIcon sx={{ color: "#2e7d32"}}/>
        case "no": return <RemoveCircleIcon sx={{ color: "#d23a07"}}/>
        case "maybe": return <HelpIcon sx={{ color: "#ffcc00"}}/>
        default: return <InfoIcon sx={{ color: "gray"}}/>
    }
}

export function doestAttendToIconLarge(doesAttent) {
    switch (doesAttent) {
        case "yes": return <CheckCircleIcon fontSize="large" sx={{ color: "#2e7d32"}}/>
        case "no": return <RemoveCircleIcon fontSize="large" sx={{ color: "#d23a07"}}/>
        case "maybe": return <HelpIcon fontSize="large" sx={{ color: "#ffcc00"}}/>
        default: return <InfoIcon fontSize="large" sx={{ color: "gray"}}/>
    }
}

const Event = ({event, doesAttend, index, id, isDisabled = false}) => {


    const {title, place, date, description, owner } = event

    return (
        <Link to={`/meeting/${index}`} style={{ textDecoration: "none" }} state={{event: event, id: id}}>
            <Card elevation={0} sx={isDisabled ? {backgroundColor: "#e3e0e8", color: "#a3a0a8"} : {subColor: "red"}}>
                <CardHeader
                    title={title}
                    subheader={date.getDay() === new Date().getDay() && !isDisabled ? <Typography sx={{color: "red"}}>TODAY!</Typography> : ""}
                    action={
                        <IconButton aria-label="settings">
                            {doestAttendToIconLarge(doesAttend)}
                        </IconButton>
                    }
                />
                <CardContent sx={{ marginTop: "-30px" }}>
                    <Typography variant="body2">
                        {date.toLocaleString()} | {place}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Event;
