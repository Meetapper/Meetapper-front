import React, {useEffect, useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Divider, Grid} from "@mui/material";
import Event from "../components/MeetsPage/Event";
import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import {db} from "../Firebase";
import {mainUserId} from "../MainUserId";

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

async function getMeetsStatuses(myId) {
    const docRef = doc(db, "users", myId);
    return await getDoc(docRef);
}

function getMeets(meetsIds) {
    const arr = [];
    Object.keys(meetsIds).forEach((id) => {
        const docRef = doc(db, "meetings", id);
        getDoc(docRef).then((val) => {
            arr.push(
                {
                    event: {...val.data(), date: new Date(val.data().date.seconds * 1000)},
                    doesAttend: meetsIds[id],
                    id: id
                }
            )
        })
    })
    return arr;
}

const MeetsPage = () => {
    const [meets, setMeets] = useState([]);

    useEffect(() => {
        getMeetsStatuses(mainUserId).then(async (tmp) => {
            const arr = getMeets(tmp.data().meetings);
            await new Promise(r => setTimeout(r, 150));
            setMeets(arr);
        })
    }, [])

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
                        {meets.sort((a, b) => a.event.date.getTime() - b.event.date.getTime())
                            .filter((a) => a.event.date.getTime() >= new Date().getTime() )
                            .map((meet, i) => {
                            return (
                                <>
                                    <Grid item xs={12}>
                                        <Event event={meet.event} doesAttend={meet.doesAttend} id={meet.id} index={i}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider/>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container>
                        {meets.sort((a, b) => b.event.date.getTime() - a.event.date.getTime())
                            .filter((a) => a.event.date.getTime() < new Date().getTime() )
                            .map((meet, i) => {
                                return (
                                    <>
                                        <Grid item xs={12}>
                                            <Event event={meet.event} doesAttend={meet.doesAttend} id={meet.id} index={i} isDisabled={true}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider/>
                                        </Grid>
                                    </>
                                )
                            })}
                    </Grid>
                </TabPanel>
            </SwipeableViews>
            {/*</Box>*/}
        </div>
    );
}

export default MeetsPage;
