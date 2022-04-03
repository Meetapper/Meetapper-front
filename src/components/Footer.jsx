import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import {Paper} from "@mui/material";
import { Link } from "react-router-dom";


const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {/*<BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to="/meets" />*/}
                <BottomNavigationAction label="Friends" icon={<PeopleIcon />} component={Link} to="/friends" />
                <BottomNavigationAction label="Create" icon={<AddCircleIcon fontSize={"large"}/>} component={Link} to="/create-event" />
                <BottomNavigationAction label="Meets" icon={<EventNoteIcon />} component={Link} to="/meets" />
                {/*<BottomNavigationAction label="Alerts" icon={<NotificationsIcon />} component={Link} to="/meets" />*/}
            </BottomNavigation>
        </Paper>
    );
}

export default Footer
