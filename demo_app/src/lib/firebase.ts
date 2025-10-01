// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, increment, onSnapshot, query, QueryDocumentSnapshot, setDoc, updateDoc } from "firebase/firestore";
import type { Todo } from "./types";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBWe29kEXwqUrpDcFfActe1vrtgrfVp7VU",

    authDomain: "simpler-sveltefirebase-demo.firebaseapp.com",

    projectId: "simpler-sveltefirebase-demo",

    storageBucket: "simpler-sveltefirebase-demo.appspot.com",

    messagingSenderId: "1096851355580",

    appId: "1:1096851355580:web:a2374a415bd3ad25109db9"

};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase)

export async function setTodoItem(todo: Todo) {

    // make a docRef to the document we are about to create/update
    const docRef = doc(db, "todos", todo.id);
    await setDoc(
        docRef, // path for where to insert
        todo, // our object to insert/update
        { merge: true } // set options, merge = true, means update existing document if it exist, create it otherwise
    );
}

export async function deleteTodoItem(todo: Todo) {
    const docRef = doc(db, "todos", todo.id);
    await deleteDoc(docRef,);
}


export function onTodoChange(onChange: (changes: Todo[]) => void) {
    console.log("subscribing...");

    const unsub = onSnapshot(query(collection(db, "todos")), snap => {
        const todoItems: Todo[] = [];

        // .docChanges() contains only the changes, while .doc contains all the docs.
        // note that onSnapshots read everything on the first call, so could be expensive
        // see: https://medium.com/firebase-tips-tricks/how-to-drastically-reduce-the-number-of-reads-when-no-documents-are-changed-in-firestore-8760e2f25e9e
        snap.docChanges().forEach(change => {
            const data = change.doc.data();

            // document in db doesnt include a id field so we are going to include it
            data.id = change.doc.id;
            todoItems.push(data as Todo);
        })

        // call the callback to notify frontend that this batch of posts needs to be updated.
        onChange(todoItems);
    })

    return unsub;
}
