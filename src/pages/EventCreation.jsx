import { Grid, TextField, Button, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import plLocale from "date-fns/locale/pl";
import FriendsList from "../components/FriendsList";
import MailIcon from '@mui/icons-material/Mail';
import {addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import {db} from "../Firebase";
import {mainUserId} from "../MainUserId";

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

  const newMeetings = participants.push(mainUserId);
  const docRef = await addDoc(collection(db, 'meetings'), {
    title: title,
    description: desc,
    date: date,
    participants: participants,
    place: location,
    owner: mainUserId
  });
  const myId = docRef.id;
  console.log(myId);
  const userRef = doc(db, "users", mainUserId);
  const user = await getDoc(userRef);
  const userMeetings = user.data().meetings;
  userMeetings[myId] = "";
  console.log(userMeetings);
  await updateDoc(userRef, {
    meetings: userMeetings
  })
}

const EventCreation = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [eventDate, setEventDate] = useState(new Date());
  const [eventLocation, setEventLocation] = useState('');
  const [participants, setParticipants] = useState([]);


  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Paper sx={style}>
            <Typography>Invite friends</Typography>
            <FriendsList buttonAction={(friend) => {
                if (!participants.includes(friend))
                  setParticipants([...participants, friend])
              }}
              buttonIcon={<MailIcon />}
            />
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
              label="Event time"
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
                      onClick={() => saveEvent(eventTitle, eventDescription, eventDate, eventLocation, participants)}
                  >
                    Create Event
                    <EventAvailableIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Grid>
              </Grid>
            <Grid item xs={12} sx={{ marginTop: '60px' }}>
              { !!participants.length && <Typography>Invited friends: {participants.join(", ")}</Typography> }
            </Grid>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </div>
  );
}

export default EventCreation;
