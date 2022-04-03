import { Grid, TextField, Button, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import plLocale from "date-fns/locale/pl";
import FriendsList from "../components/FriendsList";
import MailIcon from '@mui/icons-material/Mail';
import {doc, setDoc} from "firebase/firestore"
import {db} from "../Firebase";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

async function saveEvent(title, desc, date, location, participants) {
  await setDoc(doc(db, "meetings"), {
    title: title,
    description: desc,
    date: date,
    participants: participants,
    place: location
  });
}

const EventCreation = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [eventDate, setEventDate] = useState(new Date());
  const [eventLocation, setEventLocation] = useState('');
  const [invited, setInvited] = useState([]);
  const participants = [];
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Paper sx={style}>
            <Typography>Invite friends</Typography>
            <FriendsList userActionButton={
              <Button
                onClick={() => null} // send event invite here
              >
                <MailIcon />
              </Button>
            }/>
          </Paper>
        </Modal>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <TextField 
              label="Event title"
              multiline
              value={eventTitle}
              onChange={e => setEventTitle(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Event description"
              multiline
              value={eventDescription}
              onChange={e => setEventDescription(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <DateTimePicker
              label="Date&Time picker"
              value={eventDate}
              onChange={(newDate) => setEventDate(newDate)}
              renderInput={(params) => <TextField fullWidth {...params} />}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                label="Event location"
                multiline
                value={eventLocation}
                onChange={e => setEventLocation(e.target.value)}
                fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyItems="center" justifySelf="center" justifyContent="center">
              <Grid item xs={6} >
                <Button 
                  variant="outlined"
                  onClick={() => setOpenModal(true)}
                >
                  Invite friends 
                  <GroupAddIcon sx={{ marginLeft: "10px" }} />
                </Button>
              </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyItems="center" justifySelf="center" justifyContent="center">
                <Grid item xs={6} >
                  <Button
                      variant="outlined"
                      onClick={() => saveEvent(eventTitle, eventDescription, eventDate, eventLocation)}
                  >
                    Create Event
                    <GroupAddIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Grid>
              </Grid>
            <Grid item xs={12} sx={{ marginTop: '60px' }}>
              { invited.size && <Typography>Invited friends:</Typography> }
            </Grid>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </div>
  );
}

export default EventCreation;