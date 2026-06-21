import { db } from "../spm4_2/firebase.js";

import { collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";

console.log("hej")
const snapshot = await getDocs(collection(db, 'Personer'))
snapshot.forEach(e => console.log(e.id + ' - ' + JSON.stringify(e.data())))

await addDoc(collection(db, 'Personer'), {
    navn: 'Albin',
    race: 'Albaneser',
    alder: 10
})

await deleteDoc(col)


