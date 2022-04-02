import * as React from 'react';
import {Card, CardContent, CardHeader, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HelpIcon from '@mui/icons-material/Help';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

const Event = ({event, doesAttend}) => {

    const {id, title, place, date, description, owner } = event

    function doestAttendToIcon(doesAttent) {
        switch (doesAttent) {
            case "yes": return <CheckCircleIcon sx={{ color: "green"}}/>
            case "no": return <RemoveCircleIcon sx={{ color: "red"}}/>
            case "maybe": return <HelpIcon sx={{ color: "yellow"}}/>
            default: return <PanoramaFishEyeIcon sx={{ color: "gray"}}/>
        }
    }

    return (
        <Card elevation={0}>
            <CardHeader
                title={title}
                // subheader={date.toLocaleString()}
                action={
                    <IconButton aria-label="settings">
                        {doestAttendToIcon(doesAttend)}
                    </IconButton>
                }
            />
            <CardContent sx={{ marginTop: "-30px" }}>
                <Typography variant="body2" color="text.secondary">
                    {date.toLocaleString()} | {place}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Event;
