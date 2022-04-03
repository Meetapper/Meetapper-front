import React, {useEffect, useState} from "react";
import {db} from "../Firebase";
import Friend from "../components/Friend";
import {doc, getDoc} from "firebase/firestore"

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
    console.log(friendIds);
    if(!friendIds?.length)
        return "";
    return (<div>{friendIds?.map(friend => <Friend key={friend} friend={friend}/>)}</div>);
}

export default FriendsList;