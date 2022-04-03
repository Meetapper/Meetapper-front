import React, {useEffect, useState} from "react"
import {doc, getDoc} from "firebase/firestore";
import {db} from "../Firebase";

async function getUser(userId) {
    const docRef = doc(db, "users", userId);
    return await getDoc(docRef);
}

const Friend = ({friend}) => {
    const [user, setUser] = useState();
    useEffect(() => {
        (async () => {
            setUser(await getUser('hBTU6aa6BrKS33uuPypD'));
        })()
    }, [])
    const retrievedUser = user?.data();
    console.log(retrievedUser);

    return (<div>
        {retrievedUser?.name}
        </div>);
}

export default Friend;