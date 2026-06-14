import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import User from './model/user.js';

const firebaseConfig = {
  apiKey: "AIzaSyC4wdd-DxOnjJFm8tUmuosgl4Tr15OwPvc",
  authDomain: "lektion21.firebaseapp.com",
  projectId: "lektion21",
  storageBucket: "lektion21.firebasestorage.app",
  messagingSenderId: "43438410353",
  appId: "1:43438410353:web:a22144a9b6babdae18a9d0",
  measurementId: "G-6N65ZJSRMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const userConverter = {
    toFirestore:(user)=>{
        return {
            type: user.type, username: user.username
        }
    },
    fromFirestore: (snapshot, options)=>{
        const data = snapshot.data(options)
        return new User(data.username, data.type, snapshot.id)
    }
}

const usersCollection = collection(db, 'users').withConverter(userConverter)

export async function getUsers(){
    const snapshot = await getDocs(usersCollection)
    return snapshot.docs.map(doc => doc.data())
}

export async function createUser(username, type) {
  const user = new User(username, type)
  await addDoc(usersCollection, user)
}

export async function deleteUser(id) {
  const userRef = doc(db, 'users', id)
  await deleteDoc(userRef)
}
