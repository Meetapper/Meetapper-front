import React, { useState, useEffect } from "react";
import {doc, getDoc} from "firebase/firestore"
import {db} from "../Firebase";
import Friend from "./Friend";

async function getUser(userId) {
  const docRef = doc(db, "users", userId);
  return await getDoc(docRef);
}

const FriendsList = () => {
  const [user, setUser] = useState();

  useEffect(() => {
      (async () => {
          setUser(await getUser('hBTU6aa6BrKS33uuPypD'));
      })()
  }, [])
  const friendIds = user?.data().friends;

  if(!friendIds?.length)
    return null;
    
  return (
    <div>
      {friendIds?.map(friend => <Friend key={friend} friend={friend}/>)}
    </div>
  );
}

export default FriendsList;