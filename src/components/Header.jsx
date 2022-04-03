import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import {useLocation} from "react-router-dom";

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Header = (props) => {
    const {children} = props;

    const {pathname} = useLocation()

    function pathToName(pathname) {
        switch (pathname) {
            case "/meets": return "Events"
            case "/create-event": return "Create Event"
            default: return "Meetapper"
        }
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar sx={{padding: "4px"}}>
                    <Toolbar>
                        <Typography variant="h4" align="center" sx={{flexGrow: 1, textAlign: 'center'}}>
                            {pathToName(pathname)}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {children}
        </React.Fragment>
    );
}

export default Header;
