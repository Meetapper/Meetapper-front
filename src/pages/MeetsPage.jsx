import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Accordion, AccordionDetails, AccordionSummary, Divider, Grid, TextField} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Event from "../components/MeetsPage/Event";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const eventMock = {
    id: "1",
    title: "Git impra u Adama",
    place: "Domek letniskowy Maćka",
    date: new Date("2021-01-01T12:00:00-04:00"),
    description: "To co zwykle",
    owner: "Maćko z Bogdańca",
}


const MeetsPage = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            {/*<Box sx={{ bgcolor: 'background.paper' }}>*/}
            {/*    <TextField />*/}
            {/*<Accordion elevation={0}>*/}
            {/*    <AccordionSummary expandIcon={<ExpandMoreIcon />}>*/}
            {/*        <Typography>Advanced filters</Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
            {/*            malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="Active"/>
                <Tab label="Archived"/>
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Event event={eventMock} doesAttend={"yes"}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                            <Event event={eventMock} doesAttend={"no"}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                            <Event event={eventMock} doesAttend={"maybe"}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={12}>
                            <Event event={eventMock} doesAttend={"lkjlkj"}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Event event={eventMock}/>
                </TabPanel>
            </SwipeableViews>
            {/*</Box>*/}
        </>
    );
}

export default MeetsPage;
