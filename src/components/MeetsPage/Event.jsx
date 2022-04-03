import * as React from 'react';
import {Card, CardContent, CardHeader, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HelpIcon from '@mui/icons-material/Help';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import {Link} from "react-router-dom";

export function doestAttendToIcon(doesAttent) {
    switch (doesAttent) {
        case "yes": return <CheckCircleIcon sx={{ color: "#2e7d32"}}/>
        case "no": return <RemoveCircleIcon sx={{ color: "#d23a07"}}/>
        case "maybe": return <HelpIcon sx={{ color: "#ffcc00"}}/>
        default: return <PanoramaFishEyeIcon sx={{ color: "gray"}}/>
    }
}

export function doestAttendToIconLarge(doesAttent) {
    switch (doesAttent) {
        case "yes": return <CheckCircleIcon fontSize="large" sx={{ color: "#2e7d32"}}/>
        case "no": return <RemoveCircleIcon fontSize="large" sx={{ color: "#d23a07"}}/>
        case "maybe": return <HelpIcon fontSize="large" sx={{ color: "#ffcc00"}}/>
        default: return <PanoramaFishEyeIcon fontSize="large" sx={{ color: "gray"}}/>
    }
}

const Event = ({event, doesAttend}) => {


    const {id, title, place, date, description, owner } = event

    return (
        <Link to={`/meeting/${id}`} style={{ textDecoration: "none" }} state={event}>
            <Card elevation={0}>
                <CardHeader
                    title={title}
                    // subheader={date.toLocaleString()}
                    action={
                        <IconButton aria-label="settings">
                            {doestAttendToIconLarge(doesAttend)}
                        </IconButton>
                    }
                />
                <CardContent sx={{ marginTop: "-30px" }}>
                    <Typography variant="body2" color="text.secondary">
                        {date.toLocaleString()} | {place}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Event;
