import React, {useEffect, useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, Grid } from "@mui/material";
import Event from "../components/MeetsPage/Event";
import {collection, doc, getDoc, query, where} from "firebase/firestore";
import {db} from "../Firebase";


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

const mainUserId = "hBTU6aa6BrKS33uuPypD"

async function getMeetsStatuses(myId) {
    const docRef = doc(db, "users", myId);
    return await getDoc(docRef);
}

async function getMeets(meetsIds) {
    const docRef = doc (db, "meetings");
    return getDoc(docRef, where("id", "in", meetsIds));
}

const MeetsPage = () => {
    const [meetsToStatuses, setMeetsToStatuses] = useState();
    useEffect(() => {
        (async () => {
            setMeetsToStatuses(await getMeetsStatuses(mainUserId));
        })()
    }, [])
    console.log(meetsToStatuses);
    const meets = meetsToStatuses?.data().meetings;
    console.log(meets);
    // meets.foreach(it => console.log(it))

    // const meetsIds = Array.from(Object.keys(meets));
    // Object.keys(meets).forEach((key) => {
    //     console.log(key)
    // })
    // console.log(meetsIds);
    // const [meetings, setMeetings] = useState();
    // useEffect(() => {
    //     (async () => {
    //         setMeetings(await getMeets(meetsIds));
    //     })()
    // }, [])
    // const meetsData = meetings?.data().meetings;
    // console.log(meetsData);
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
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
        </div>
    );
}

export default MeetsPage;
